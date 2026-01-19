---
title: Data Asset
type: docs
weight: 3
prev: getting-started
next: changelog
---


Powerline data asset stores static data to offload some variables from actor and allows to rapidly change parameters of powerline actor. 

Data asset consists of 2 parts: Powerline and Cable.

## Custom data asset 

{{% steps %}}

#### Content browser

Navigate from content browser to Miscellanious->Data Asset as show below. 
{{< figure src="NavidateData01.png"  alt="Navigate from content browser" >}}

#### Create new asset 

Find and select powerline data asset in new window. Press **Select** button. Type a new name for custom data asset, for example: __DA_CustomPowerline__.
{{< figure src="CreateDataAsset.png"  alt="Navigate from content browser" >}}

{{% /steps %}}


## Powerline reference

#### Pole array

Each entry in array has a static mesh and mesh probability or weight. Probability is in range of **0-100**. 
{{< figure src="PoleArray.png"  alt="Array of poles" >}}

Mesh selection is based on mesh probability (weight) and controlled by powerline actor stream. Setting weigth to 0, disables static mesh from selection. You can add any number of meshes. 


### Sockets

Static mesh sockets are the main tool to generate cables. For each socket on pole, if the same socket name is present on next pole, cable will be generated. 
{{< figure src="Sockets.png"  alt="Pole's sockets" >}}

To add new custom socket for a custom static mesh follow the steps below: 

{{% steps %}}

#### Add socket

Navigate to a socket manager tab, and press the **+** button, as shown in the picture.
{{< figure src="SocketAdd.png"  alt="Add new socket" >}}

#### Socket name

Change the default socket name to a something that will be easy to repeat in different static meshes, for example: *Cable1* or *Cable_01*. 

{{< callout type="important" >}}
  It is important to not leave them as default, because cable generation is based on **socket's name**. 
{{< /callout >}}


#### Transform 

Position the newly created socket in viewport or if you know a cable position already, type in details window.
{{< figure src="SocketTransform.png"  alt="Socket transform" >}}

{{% /steps %}}

Variable | Default | Description 
:--|:--|:--
Mesh Type|Static mesh|Static mesh: Simple static at each spline point.<br>Spline mesh: Bends the mesh from spline point tangents. Can be usefull for cable-like powerlines. 
Spline Mesh Axis| X | Spline mesh **only** variable, controls the direction of spline mesh component.
Base Pole Yaw| 0 | Optional value, in degrees, which adds a default rotation of pole on **Yaw**. Can be useful, if an imported mesh isn't Y-aligned(default unreal orientation).
Pole Max Draw Distance | 350000 | Max draw distance of pole mesh, can be useful for optimization. Set to 0, to make an infiinite distance.  
Pole Collision Profile | BlockAll | Default collision profile name for pole meshes.
Cast Shadows | true | Set cast shadows flag on poles **and** cables.



## Cable reference

### Materials

### Wind

### Geometry 

#### UV's

### General
