---
title: Connections
type: docs
prev: powerlines/actor/
next: optimization
---

Connection allows to create a network of connected powerlines or connect cables to any actor with sockets or bones.  

Duplicate hack. 

### How to connect. 
<!-- {{< figure src="NavidateData01.png" alt="Navigate from content browser" >}} -->
{{% steps %}}

#### Add New Entry 

Add new entry in connection array and set type to `Powerline`. 


{{< callout >}}
You can quickly add new entry, but right-clicking array entry and pressing *duplicate*. It shortens time to create a huge network.
{{< /callout >}}

#### Select Actor

Select target actor from scene outliner or pick actor in viewport. 

#### Pole Indexes

Set source and target index of spline points. X is a source, Y is a target pole. 

{{< callout type="info" >}}
If you don't know the spline point index, you can set `Show text type` to Scaled value. It designed specifically for this.
{{< /callout >}}

#### Optional
Change cable connection type from manual to probability. 

{{% /steps %}}




### Connection parameters 

#### Show Text Type
Editor-only variable which vizualizes spline point or pole number. 
1. **None:** Disables debug text helper.
2. **Scaled:** Scale the size of text to pole Z height and rotates as pole.
3. **Static:** Static size of text(100 units) and removes spline and pole rotations.
   
   
| Variable | Default | Description |
|:--|:--|:--|
| **Show Text Type** | None | **None:** Disables debug text helper.<br>**Scaled:** Scale the size of text to pole Z height and rotates as pole.<br>**Static:** Static size of text(100 units) and removes spline and pole rotations|