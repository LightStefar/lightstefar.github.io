---
title: Actor
type: docs
weight: 2
prev: powerlines/dataasset/
next: connection

resources:
  - src: "Copy/Copy_Offset_1.png"
    params:
      caption: "Y = -500" 
  - src: "Copy/Copy_Offset_2.png"
    params:
      caption: "Y = 0" 
  - src: "Copy/Copy_Offset_3.png"
    params:
      caption: "Y = 500" 

  - src: "CopyLoop/Copy_Loop_Offset_1.png"
    params:
      caption: "Y = -250" 
  - src: "CopyLoop/Copy_Loop_Offset_2.png"
    params:
      caption: "Y = 0" 
  - src: "CopyLoop/Copy_Loop_Offset_3.png"
    params:
      caption: "Y = 250" 

  - src: "Gravity/Gravity_Local.png"
    params:
      caption: "Local" 
  - src: "Gravity/Gravity_World.png"
    params:
      caption: "World"     
---

{{< figure src="Powerline_Build.webp" alt="Building powerline " >}} 

The Powerline Actor uses a **Spline Component** as its root, allowing you to build complex powerline networks in seconds. The actor is written entirely in C++, ensuring high performance that does not degrade with additional spline points and providing smooth interaction in the editor.

Key design choices improve workflow:
*   **Data-Driven Setup:** Variables that are not used frequently and meshes are stored in a **Data Asset**. This allows quick presets changes and keeps the actor's property list clean.
*   **Performance-First:** The C++ core ensures real-time updates remain fast, even with detailed cables and many connections.

Simply select the required data asset, and you are ready to build.

#### Powerline Variables

| Variable | Default | Description |
|:--|:--|:--|
| **Refresh** | false | Triggers the construction script and resets itself to `false`. Use this to safely update the actor (e.g., after modifying connections) without needing to change another variable. |
| **Data Asset** | Powerline Default | The primary Data Asset containing pole meshes, materials, and other static configuration. |
| **Stream** | Auto-generated | The random seed that drives all procedural randomness (pole variation, cable gravity, etc.) within the actor. |
| **Closed Loop** | false | **Spline Component property.** When enabled, connects the last spline point to the first, forming a continuous loop. Requires at least 3 points. |

## Tracing

An optional line trace system for automatically aligning spline points to a surface.

| Variable | Default | Description |
|:--|:--|:--|
| **Type** | None | **None:** Disables surface alignment.<br> **Trace:** Performs a line trace from each spline point (along the Z-axis) and aligns to the first blocking hit.<br> **Trace Debug:** Same as Trace, but draws debug lines for visualization. |
| **Distance Up Down** | (250, 500) | The maximum trace distance in units. **X** = upward direction, **Y** = downward direction. |
| **Offset** | 0 | Offsets the aligned spline point along the hit surface's normal by this distance. |

## Poles

Adds procedural randomness to pole meshes. **Scale** affects both static and spline meshes.

{{< callout type="info" >}}
**Note:** The **Rotation** parameters do **not** affect spline meshes, only static meshes.
{{< /callout >}}

| Variable | Default | Description |
|:--|:--|:--|
| **Rotation Yaw Min Max** | (0, 0) | Applies a random **Yaw** rotation (around Z) to each pole within the specified range. |
| **Rotation Pitch Min Max** | (0, 0) | Applies a random **Pitch** rotation (around Y) to each pole within the specified range. |
| **Rotation Roll Min Max** | (0, 0) | Applies a random **Roll** rotation (around X) to each pole within the specified range. |
| **Scale Min Max** | (1, 1) | Randomly scales each pole mesh within the specified range (clamped to prevent errors). |

## Cables

The plugin's core feature generates realistic cables using different physical simulation modes.

#### Cable Type
Selects the mathematical model used to calculate the cable's curve.

1.  **Parabolic:** An approximation that assumes the cable load is *uniformly distributed along the horizontal span* between poles. This is the **fastest** calculation method and is fine-tuned for the plugin's default data asset.
2.  **Catenary Tension:** Calculates a curve based on the cable's internal tension force. This offers more precise physical control than the Parabolic mode.
3.  **Catenary Slack:** Calculates a curve based on the physical *length* (slack) of the cable being greater than the straight-line distance between poles. Ideal for simulating ropes or long, drooping powerlines.

#### World Gravity
Toggle between local and world gravity. 
1. **Local:** Uses the *Actor* Z axis. The cable sag direction rotates with the actor.
2. **World:** Uses the *World* Z axis, independent of the actor's rotation.
{{< callout type="info" >}}
**Note:** The magnitude of gravity for both modes is scaled by `Global Gravity Z ` variable in `World Settings`.
{{< /callout >}}

{{< slider folder="Gravity" >}}

#### Cable Parameters

| Variable | Default | Description |
|:--|:--|:--|
| **Cable Gravity Scale** | 1.0 | Scales the influence of gravity on the cable's sag. Set to 0 to disable gravity effects.<br>**Note:** Does not affect the **Catenary Slack** type. |
| **Cable Wind Scale** | 1.0 | A global multiplier for wind intensity. Only affects cable materials that have wind displacement enabled. |
| **Cable Gravity Min Max** | (0.75, 1.25) | Randomizes the **Cable Gravity Scale** per individual cable within this range. X = minimum, Y = maximum. |
| **Cable Slack Min Max** | (3.0, 3.5) | **Catenary Slack type only** <br> Randomizes the amount of slack (extra length) for each cable. X = minimum, Y = maximum. |
| **Cable Tension** | 300 | **Catenary Tension type only** <br> The tension force applied to the cable. |
| **Cable Mass Per Unit** | 0.1 | **Catenary Tension type only** <br> The mass per unit length of the cable. |

## Advanced

This section contains helper utilities and debug variables.

#### Target Copy Actor
Allows you to copy spline points from any other actor whose root component is a **Spline Component** (e.g., a road spline). This is useful for automatically aligning powerlines with existing networks without manual point placement. If the target actor's spline is a closed loop, this property is also copied.

#### Target Copy Offset
A vector offset applied to all points copied from the **Target Copy Actor**.
Below are visual examples of applying an offset.

{{< slider folder="Copy" >}}

{{< slider folder="CopyLoop" >}}

#### Show Cable Points
Enables a debug visualization of the cable points.
{{< callout type="warning" >}}
This debug view can significantly impact editor performance. Use it cautiously.
{{< /callout >}}

{{< figure src="DebugPoints.png" alt="Cable points debug view" >}}

## Custom Powerline Actor

The Powerline Actor included in the plugin is a simple Blueprint wrapper around the native C++ class. You can create your own custom actor by extending this native class to set your preferred default values.

To create a custom powerline actor, follow these steps:

{{% steps %}}

#### Create a Blueprint Class
Right-click in the **Content Browser** and select **Blueprint Class**.
{{< figure src="InheritActor_01.png" alt="Select blueprint class" >}}

#### Choose the Native Powerline Class
In the **Pick Parent Class** window, type "powerline" in the search bar. Select the **Powerline** class as shown below, then click **Select**. Enter a name for your new custom actor.
{{< figure src="InheritActor_02.png" alt="Select powerline class" >}}

#### Configure Default Values
Open your new Blueprint and customize its properties (like cable settings, materials, or spline defaults) to fit your project's needs.

{{% /steps %}}







