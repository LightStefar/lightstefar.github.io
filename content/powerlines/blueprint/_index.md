---
title: Blueprint API
type: docs
weight: 4
prev: powerlines/dataasset/
next: powerlines-changelog

resources:
  - src: "Variables/PipeVariables_1.png"
    params:
      caption: "General" 
  - src: "Variables/PipeVariables_2.png"
    params:
      caption: "Support and Junction" 
---

## Functions and variables

Below is a complete list of available parameters and functions. If you find that this list is missing something, feel free to reach out.

![All Blueprint functions](PowerlineFunctions.png)

![All Blueprint variables](PowerlineVars.png)

The `GetSocketTransformAtIndex()` node can be very useful after powerline construction for adding custom meshes or lights to poles. Virtual sockets can also be retrieved by setting the name to an index value, e.g. 0, 1, 2.

---

By default, powerline actors construct themselves during the `Construction Script` phase. However, this behavior can be customized through two primary methods, depending on your specific needs:


## Enhanced Construction Script

If you need procedural logic but want to maintain editor-time visibility, you can override the Construction Script while preserving core functionality.

{{% steps %}}

### Add a Call to the Parent Function

Navigate to your actor's Construction Script graph, right-click the `ConstructionScript` event node, and select **Add Call to Parent Function**.
![Add call to parent function](/images/CallToParent.png)

### Edit Pre-Construction 

Insert your procedural logic before the parent function call. The example below demonstrates spline points manipulation.

![Override construction script](PowerlineOverride.png)

{{% /steps %}}

---

## Custom Event

This approach provides maximum control over construction timing and is ideal for procedural levels where build order matters.

{{% steps %}}

### Disable the Construction Script

In your custom actor's Details panel, set the `Run on Construction` boolean property to `false`. Note that this variable can only be changed in the Class Defaults.

![Disable construction script](DisableConstruction.png)

### Use a Custom Event

Modify spline points or set any required variables before calling the `ConstructPowerline()` function, as shown in the example below.

![Run on BeginPlay](ExampleBeginPlay.png)

{{< callout type="info" >}}
The example above uses a `DelayUntilNextTick` node due to Unreal's event order. Without this delay, the connection fails to generate because the connected actor hasn't yet executed its own `ConstructPowerline()` function, leaving no data available to build the connection. In the Construction Script, everything works as expected.
{{< /callout >}}

{{% /steps %}}









