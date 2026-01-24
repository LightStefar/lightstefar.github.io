---
title: Data Asset
type: docs
weight: 3
prev: getting-started
next: changelog

resources:
- src: "WindContrast/Contrast_1.png"
  params:
    caption: "Contrast 0" 
- src: "WindContrast/Contrast_2.png"
  params:
    caption: "Contrast 1" 
- src: "WindContrast/Contrast_3.png"
  params:
    caption: "Contrast 3" 
- src: "WindContrast/Contrast_4.png"
  params:
    caption: "Contrast 10" 

- src: "WindIntensity/Intensity_1.png"
  params:
    caption: "Intensity 0" 
- src: "WindIntensity/Intensity_2.png"
  params:
    caption: "Intensity 0.5" 
- src: "WindIntensity/Intensity_3.png"
  params:
    caption: "Intensity 1" 

- src: "WindSharpness/Sharp_1.png"
  params:
    caption: "Sharpness 0" 
- src: "WindSharpness/Sharp_2.png"
  params:
    caption: "Sharpness 0.5" 
- src: "WindSharpness/Sharp_3.png"
  params:
    caption: "Sharpness 1" 

- src: "CableSides/Sides_1.png"
  params:
    caption: "Sides 3" 
- src: "CableSides/Sides_2.png"
  params:
    caption: "Sides 4" 
- src: "CableSides/Sides_3.png"
  params:
    caption: "Sides 6" 
- src: "CableSides/Sides_4.png"
  params:
    caption: "Sides 10" 
- src: "CableSides/Sides_5.png"
  params:
    caption: "Sides 16"
  
- src: "CableSpacing/Spacing_1.png"
  params:
    caption: "Spacing 10" 
- src: "CableSpacing/Spacing_2.png"
  params:
    caption: "Spacing 40" 
- src: "CableSpacing/Spacing_3.png"
  params:
    caption: "Spacing 80" 
- src: "CableSpacing/Spacing_4.png"
  params:
    caption: "Spacing 160" 

---

The Powerline Data Asset serves as a centralized configuration container that stores static properties for powerline systems. By separating this data from the actor itself, it enables efficient management, rapid prototyping, and easy sharing of settings across multiple powerline instances in your project. The asset is organized into two sections: 
1. Powerline  
2. Cable (containing cable-specific properties).

## Powerline Reference

Below is a complete list of all powerline related properties.

### Poles

The Pole Array defines the library of static meshes which are used as support meshes. Includes weighted probability that controls how often each mesh is selected during generation.

{{< figure src="PoleArray.png"  alt="Array of poles" >}}

The powerline actor uses a random stream to select meshes based on these weights, weight value in range of `0-100` that determines its likelihood of being chosen. A value of 0 completely excludes the mesh from selection. 
<br>You can add any number of mesh entries.

---

### Sockets

Static mesh sockets serve as the primary connection points for cable generation. Cables are automatically created between matching sockets on consecutive poles within the powerline system.

{{< figure src="Sockets.png" alt="Visualization of pole sockets as cable attachment points" >}}

To add a custom socket to a static mesh for cable generation, follow these steps:

{{% steps %}}

#### Add Socket

Navigate to the Socket Manager tab within the Static Mesh Editor and click the **+** button to create a new socket.
{{< figure src="SocketAdd.png" alt="Interface for adding a new socket" >}}

#### Configure Socket Name

Rename the socket from its default name to something descriptive and consistent, such as `Cable_01` or `Cable1`.  
{{< callout type="important" >}}
Cable generation matches sockets based on their **exact name** across different poles. Consistent naming is essential for proper connections.
{{< /callout >}}

#### Set Socket Transform

Position and orient the socket using the viewport manipulator or by entering precise values in the Details panel.  
{{< figure src="SocketTransform.png" alt="Socket transformation controls" >}}

{{% /steps %}}

---

### Powerline Properties

| Variable | Default | Description |
|:--|:--|:--|
| **Mesh Type** | Static Mesh | **Static Mesh:** Places a standard static mesh at each spline point.<br>**Spline Mesh:** Deforms the mesh at a spline point using start and end tangents. Usefull for cable holders or similar setups.|
| **Spline Mesh Axis** | X | **Spline Mesh only.** Defines which local mesh axis aligns with the spline direction. |
| **Base Pole Yaw** | 0° | Optional global rotation applied to all poles around the vertical (Z) axis. Useful for correcting imported meshes that are not oriented to the desired world alignment. |
| **Pole Max Draw Distance** | 350000 | Maximum render distance for pole meshes. Set to `0` for infinite draw distance. |
| **Pole Collision Profile** | BlockAll | Physics collision profile assigned to pole meshes. |
| **Generate Overlaps** | false | Enables overlap events for pole meshes when set to `true`. |
| **Cast Shadows** | true | Controls whether poles **and** cables cast dynamic shadows. |

---

## Cable Reference

Below is a complete list of all cable properties.

### Materials

Cable materials are randomly selected and managed by the powerline actor stream. Each unique material creates an additional mesh section in the procedural cable mesh, resulting in an extra draw call. This feature is particularly useful for default powerlines to create randomized wind effects across cables. A single material can also be used without issue.
{{< figure src="CableMaterials.png" alt="Cable materials array" >}}

---

### Wind

Wind properties are designed specifically for use with a dedicated cable material and are stored in the vertex colors of the cable mesh.

| Channel | Description |
|:--|:--|
| **R (Red)** | Wind mask – calculated from contrast, sharpness, and intensity properties to define where wind deformation occurs. |
| **G (Green)** | Random time offset – a per-cable random value (0–1) added to the wind animation time to create variation. |
| **B (Blue)** | Random strength modifier – a per-cable random value (0–1) used to interpolate between minimum and maximum wind strength values. |

**Visualization of all vertex color channels:**  
{{< figure src="CableWind.png" alt="Wind vertex colors" >}}

**Random values in G and B channels:**  
{{< figure src="CableRandom.png" alt="Wind random vertex colors" >}}

---

#### Wind Mask Properties

1. **Wind Contrast** – Amplifies the wind effect by multiplying both strength and sharpness values. Provides additional control over wind definition.  
   {{< slider folder="WindContrast" >}}

2. **Wind Sharpness** – Controls the falloff gradient of the wind effect from cable endpoints toward the center. Higher values create a more abrupt transition.  
   {{< slider folder="WindSharpness" >}}

3. **Wind Intensity** – Global multiplier for the final wind effect. Combines the data asset intensity with the powerline actor's global wind intensity setting.  
   {{< slider folder="WindIntensity" >}}

---

### Cable Properties

#### Cable Sides

Controls the number of radial segments around each cable, directly affecting mesh smoothness, performance, and vertex count.

- **Minimum:** 3 sides (creates a triangular cable cross-section)
- **Maximum:** Clamped to 16 sides
- **Default:** 4 sides (produces a square cross-section that looks appropriate for default powerlines)

{{< callout type="info" >}}
  **Performance Impact:** Each additional side increases calculation time for cable generation and adds more vertices/triangles to render.
{{< /callout >}}


**Visual Comparison:**  
{{< slider folder="CableSides" >}}

---

#### Cable Spacing

Controls the segment length along the cable's path, affecting both geometric smoothness and UV mapping granularity.

- **Minimum:** 10 units (creates very dense, smooth cables)
- **Maximum:** 1000 units (creates very low-poly cables with large segments)
- **Impact:** Higher spacing values reduce triangle count but may create angular bends; lower values increase smoothness at performance cost.

**Visual Comparison:**  
{{< slider folder="CableSpacing" >}}

---

| Variable | Default | Description |
|:--|:--|:--|
| **Cable Radius** | 3.0 | Defines the thickness of the cable in Unreal units. |
| **Cable UV Mapping Type** | Relative | **Relative:** Maps UVs based on cable length using spacing value.<br>**Tile:** Allows independent control of texture tiling regardless of cable spacing. |
| **Cable Tile Size** | 40 | Controls the scale of texture tiling along the cable length, in Unreal units (only affects Tile mapping type). |
| **Cable Flip UV** | false | Swaps UV orientation between vertical (Y) and horizontal (X) axes. Default uses Y-axis (vertical) alignment, matching example textures. Useful for rotated source textures. |
| **Cable Max Draw Distance** | 200000 | Maximum rendering distance for cable meshes. Set to 0 for infinite draw distance. <br>**Note:** Works with both procedural and merged static mesh. |

---

## Custom Data Asset

Follow the steps below to create a custom data asset. 

{{% steps %}}

#### Content Browser

Navigate from the Content Browser to **Miscellaneous → Data Asset** as shown below:
{{< figure src="NavidateData01.png" alt="Navigate from content browser" >}}

#### Create New Asset

In the pop-up window, find and select the **Powerline Data Asset** class. Press the **Select** button, then enter a name for your custom data asset (for example: `DA_CustomPowerline`).
{{< figure src="CreateDataAsset.png" alt="Create new data asset" >}}

{{% /steps %}}