---
title: Actor
type: docs
weight: 2
prev: powerlines/dataasset/
next: connection
---

Powerline actor root component is spline component, which allows to build complex powerlines in a matter of seconds. Actor is entirely written is C++, so the performance doesn't degrade with additional spline points and gives a smooth interaction in editor. 
By moving some variables to data asset, adds ability to quickly change the preset and decreases amount of variables in actor itself. 
Select the required data asset and you good to go. 

If cables stay in same position and you want to modify spline, most likely you have a merged static mesh active. Remove it first. 
About small bug with unreal create/remove, save system and error.




Variable | Default | Description 
:--|:--|:--
**Refresh** | false | Refresh button simple triggers the construction script and sets itself to false. Allows to safely update without need to move or change variables to change the result. Useful when dealing with connections. 
**Data asset** | Powerline Default | The main source of pole meshes and static variables, which aren't often changed. 
**Stream** | Auto-generated |  Stream or seed is the main driving force of random in the whole actor, every random variable depends on stream. 
**Closed loop** | false | Spline component variable which makes spline as closed loop. Requires at least 3 point to work. 


## Tracing

Optional line trace from spline points, allows to align points to surface with optional offset. 

Variable | Default | Description 
:--|:--|:--
**Type** | None | None: Disables alignment of spline points.<br> Trace: Line trace from spline point location on Z axis, align if hit is blocking. <br> Trace Debug: Same as trace, but adds debug visualization.  
**Distance Up Down** | 250,500 | Maximum distace of line trace. X value is up, Y is down. 
**Offset** | 0 | Offsets spline point in direction of hit normal by specified units. 

## Poles 

Allows to add a bit of randomness to pole meshes. Scale works on both, static and spline meshes. 

{{< callout type="info" >}}
Rotation **doesn't** work with spline meshes. 
{{< /callout >}}

Variable | Default | Description 
:--|:--|:--
**Rotation Yaw Min Max** | 0,0 | Adds random rotation of pole mesh on **Yaw** Axis.
**Rotation Pitch Min Max** | 0,0 | Adds random rotation of pole mesh on **Pitch** Axis.
**Rotation Roll Min Max** | 0,0 | Adds random rotation of pole mesh on **Roll** Axis.
**Scale Min Max** | 1,1 | Randomly scales the pole by specified range, clamped to avoid errors. 

## Cables

The main part of a plugin, generates cables from different models (types). 

| Cable Type | Description | Common Applications |
|------------|-------------|---------------------|
| **Parabolic** | An approximation that assumes a uniform load horizontally, resulting in a parabolic curve. Simple for calculations but less accurate for highly elastic or long cables. | Preliminary design, catenary calculations where sag/span ratio is small, teaching models. |
| **Catenary Tension (Taut)** | The true shape of a cable under its own weight, modeled by the hyperbolic cosine function. "Tension" here implies a relatively high tension-to-weight ratio with minimal sag. | Overhead transmission lines, messenger wires, where high tension and accuracy are critical. |
| **Catenary Slack** | The true catenary shape with significant sag due to lower tension or a high weight-to-tension ratio. Governed by the same physics as the taut catenary but with a more pronounced curve. | Mooring lines, towing cables, suspended decorations, low-tension applications. |

## Advanced 

Advanced section with helper and debug variables. 

Target Copy Actor variable allows to copy spline points from a different actor which root component is **spline component**. Can be useful in combination with road network, where you don't want to align spline points manually, and just copy points from road spline component. Can be used with any actor. 

Target Copy Offset 


Show cable points is a debug view of procedural mesh points. 

{{< callout type="warning" >}}
  Debug view can slow down editor responsivness, use with caution. 
{{< /callout >}}

Powerline actor in plugin's folder is a simple blueprint wrapper of a native C++ powerline.
You can extend from powerline native class to create a own class with required defaults. 

### Inherit from native powerline

{{% steps %}}

#### Blueprint class

Right-click in content browser and select blueprint class 
{{< figure src="InheritActor_01.png"  alt="Select blueprint class" >}}

#### Native powerline actor 

Type powerline in a search bar and select a powerline as shown on the picture below. Press *select* button and type a new name for powerline actor.
{{< figure src="InheritActor_02.png"  alt="Select powerline class" >}}

#### Set default values 

Customize newly created class as you wish.

{{% /steps %}}