---
linktitle: Component
title: Skeletal decals component
type: docs
weight: 2
prev: decals-getting-started
next: decals-changelog  

resources:
  - src: "MaterialParams/Material_1.png"
    params:
      caption: "Projected decals" 
  - src: "MaterialParams/Material_2.png"
    params:
      caption: "Sphere decals" 

  - src: "ShadingLayer/Shading_1.png"
    params:
      caption: "Shading material function" 
  - src: "ShadingLayer/Shading_2.png"
    params:
      caption: "Shading blend" 
---


The Skeletal Decals component is an actor component that can be added to any actor, either at runtime or in the editor. To function correctly, it requires a Skeletal Mesh Component and Dynamic Material Instances.
The component is set to auto-activate by default.

{{< callout type="info" >}}
If you have any questions regarding materials, require a different HLSL setup, have found bugs, or have suggestions for the Blueprint API, feel free to reach out at [📩 Email](mailto:lightstefar@gmail.com).
{{< /callout >}}

The following is a list of the component's available functions and variables.

![All blueprint functions](AllFunctions.png)

![All blueprint variables](AllVariables.png)

## Initialization

The `Initialize Components` function creates Dynamic Material Instances for every material (if they do not already exist) and sets up the render target lookup. The render target itself is a low-resolution texture; its final size is calculated as **X = Max Decals** and **Y = Active Skeletal Decal Mode**. 

{{< callout type="info" >}}
When the maximum decal count is reached, the system searches for an empty slot with opacity near 0. If no empty slot is found, it cycles back to the first entry and overwrites the oldest decal. Make sure to configure the required number of decals for your needs.
{{< /callout >}}

Some functions can only be used either before or after initialization is complete.

### Pre-Initialization Functions

| Function | Description |
|:--|:--|
| **Set Max Decals Count** | Sets the maximum number of decals allowed. This overcomes the default 256 decal limit but is still clamped to a maximum of 1024 decals. |
| **Set Frames Count** | **Projection mode only** <br> Sets the frame count for the Sub-UV atlas. |

### Post-Initialization Functions

| Function | Description |
|:--|:--|
| **Set Depth Mask Data** | Sets the depth mask values. **X** controls the offset (sharpness), and **Y** controls the intensity. |

---

## Material System

Under the hood, the Skeletal Decals Material Function is a modular system supporting both desktop and mobile renderers. The core HLSL logic handles render target lookups performing only the necessary mathematical operations.

To minimize samples per decal, the shader does not sample any additional packed textures (e.g., Metalness, Roughness, Specular). If you need to incorporate extra data, feel free to reach out—I can provide examples or help with custom HLSL.

Every decal, even if not visible, requires at least one texture lookup. Invisible decals are still processed by the system. Each mode has different processing requirements:

1.  **Projection Mode:** 5 texture lookups per decal, plus projection math and normal correction.
2.  **Sphere Mode:** 2 texture lookups per decal and 2 sphere masks.

An optimization is built-in: if a decal's opacity is zero or near-zero, the shader branches to skip 4 texture lookups (in Projection mode) or 1 texture lookup (in Sphere mode). The shader generally avoids branches and prefers cheap mathematical operations where possible, using branching only when it saves expensive texture lookups.

The material function is split into logical, modular building blocks. Several parameters are exposed in the material instance.

{{< slider folder="MaterialParams" >}}

---

## Decal Customization

The plugin supports customizable decal textures and offers multiple ways to achieve this.

**Material Instance Parameters** </br>
The simplest method is to tweak the built-in parameters in the character material instance, as shown below.
![Tweak material instance parameters](TweakInstance.png)

</br>

**Shading Function Override** </br>
You can tweak `MF_SkeletalDecals_Shading` or overwrite it completely. This shading function acts as a simple material layer that can dramatically change the appearance of decals. In most cases, this is the best place to build a custom look. However, changes affect all decals and both modes (projected and sphere).

{{< slider folder="ShadingLayer" >}}

---

### Projected Decals

The simplest way to change the appearance of projected decals is to replace the default Base Color and Normal atlas textures. You can also use single textures, but for variation it's **recommended**  to pack decal textures into a sprite sheet (e.g., 2x2, 3x3, 4x2 tiles, etc.).
![Change Base Color and Normals](AtlasTextures.png)

For the Skeletal Decals component to function correctly and pass the right data to the material, the `Sub UV Frames` parameter must be set to the correct number of atlas frames or tiles *(default is 2x2)*.
![Set Sub UV Frames in component](SetFramesCount.png)

{{< callout type="important" >}}
Currently, there is no easy way to sample additional atlas textures without writing custom `HLSL` code. If you need to use additional textures or modify the default Base Color/Normal layout, feel free to reach out — I'll guide you through it. [📩 Email](mailto:lightstefar@gmail.com)
{{< /callout >}}

---

### Sphere Decals

Sphere decals are simple spheres with tiling textures. They are more customizable and do not require HLSL knowledge to achieve a completely different look.

By default, sphere decals use 2 tiling textures for simplicity and good performance, but additional textures (e.g., Roughness, Metalness) can be added easily. To change the default tiling textures, navigate to your material instance and modify them as shown below.
![Change tiling textures](SphereTextures.png)

To add additional textures, open `MF_SkeletalDecals_Sphere` and add your custom textures. From there, you have two options: add new pins to `MF_SkeletalDecals_Shading`, or bypass that function entirely and create a custom material layer inside the material function, as shown below.
![Build custom material layer in Sphere mode](AdditionalTexturesSphere.png)

---

## Spawn Functions

![Spawn decal animation functions](SpawnDecalExplained.png)

**Spawn Decal**

Checks which primitive component was hit and verifies if it is initialized in the Skeletal Decals Component. 
<br> The function can be constructed using helper functions or implemented manually when specific data needs to be passed.
<br>
**Returns:** The actual index of the active decal, which may be newly added or recycled. Returns `-1` if the decal could not be spawned for any reason.

{{< callout type="info" >}}
**Note**: The Angle parameter is only valid in Projection mode and will be ignored in Sphere mode.
{{< /callout >}}

The following functions can be used to control spawn behavior:

| Function | Description |
|:--|:--|
| **Set Min Spawn Distance Scale** | Sets the minimum distance scale for a decal to spawn. Value is clamped to a range of `0-4`. |
| **Set Min Spawn Opacity** | Updates the minimum opacity threshold required for a new decal to spawn. |
| **Construct Spawn Data** | Helper function to construct decal data with randomized values. It calculates DelayTime, FadeTime, Size, and the sub-UV decal index based on Sub UV frames variable. |
| **Construct Spawn Data From Stream** | Same as the Construct Spawn Data function, but utilizes a specified random stream parameter. |

---

## Removal Functions

| Function | Description |
|:--|:--|
| **Remove All Decals** | Deletes all decals from the component. (Clear render target) |
| **Remove Decal at Index** | Sets a specific decal's opacity to 0, freeing its slot for a new decal.<br>**Returns:** Boolean indicating success.|

---

## Animation System

This component features a user-controlled animation system similar to Unreal's native decals. Animation is calculated during the `TickComponent` event and uses Delta Time. Performance can be fine-tuned for specific project needs by adjusting the `Tick Interval` parameter. 

{{< callout type="info" >}}
**Performance** <br>
`TickComponent` automatically disables itself once all animated decals have faded out and re-enables itself as soon as a new animated decal is spawned.
{{< /callout >}}

The system consists of a **Delay Time** and a **Fade Time**. Each decal stores its own animation parameters.
- **Delay Time:** The amount of time before the fade begins. This can be set to zero.
- **Fade Time:** The duration of the fade-out effect.

The `Enable Animation` boolean toggles the animation system on or off. When disabled, the system is frozen, and new decals are not added to the animation queue.

{{< callout >}}
To make a decal static or infinite (and still utilize the animation system), set both its `Fade Time` and `Delay Time` to 0. This ensures the decal is not processed or removed by the animation system.
{{< /callout >}}

### Pausing and Resuming Animation

You can use Unreal's standard `Set Active`, `Activate`, and `Deactivate` functions to pause or resume decal animation when the system is enabled.

![Activation functions](Activation.png)

---

## Data Query Functions

| Function | Description |
|:--|:--|
| **Get Active Decals Count** | Returns the number of currently active/visible decals. |
| **Get Decals Count** | Returns the total number of decals in use, including those with an opacity of 0 (invisible). |

---

## Save, Load, and Copy Systems

These functions allow you to save, load, or reconstruct all decals from a save game, or copy decal data from different actors.

- **For C++ Developers:** The `Decals` or `Decals Data` property is marked as `SaveGame`, allowing the component to be easily serialized using Unreal's built-in serialization.
- **For Blueprint Developers:**

![Get Set decals data function](SaveLoadDecals.png)

- **Get Decal Data:** Outputs all decal data, which can be saved in a save game slot.
- **Spawn Decals from Data:** Removes all existing decals, resets the component to its default state, and then spawns new decals from the provided data.


