---
title: Connections
type: docs
prev: powerlines/actor/
next: optimization
---

Connection allows you to create a network of connected powerlines or connect cables to any actor that has sockets or bones.

### Connection Guide

{{% steps %}}

#### Add a New Entry
Add a new entry to the connection array and set its **Type** to `Powerline`.

{{< figure src="/powerlines/actor/Connection_Entry.png" alt="Create new entry" >}}
{{< callout >}}
**Tip**: You can quickly add a new entry by left-clicking an arrow icon next to an existing entry and pressing **Duplicate**. This saves time when creating a large network.
{{< figure src="/powerlines/actor/Connection_Duplicate.png" alt="Duplicate hack" >}}
{{< /callout >}}

#### Select an Actor
Select the target actor from the **Scene Outliner** or by clicking it in the viewport.

#### Set Pole Indexes
Define the source and target spline points using the **Pole Indexes** property. **X** is the source pole index, and **Y** is the target pole index.

{{< callout type="info" >}}
If you are unsure of a spline point's index, set the **Show Text Type** property to **Scaled**. This visualizes the index numbers on each pole.
{{< /callout >}}

{{< figure src="/powerlines/actor/Connection_01.webp" alt="Connect powerlines" >}}

#### Optional: Configure Cables
For **Powerline** type connections, you can change the **Cable Connection Type** from `All` to `Probability` to control cable density, or to `Manual` for precise control.

{{% /steps %}}

---

### Connection Properties

#### Show Text Type
An editor-only visualization that displays spline point or pole index numbers. 
{{< callout type="info" >}}
Text components are marked as editor-only and stripped from shipping builds irrespective of their level placement.
{{< /callout >}}
*   **None:** Disables the debug text.
*   **Scaled:** Text size scales with the pole's height and rotates with the pole.
*   **Static:** Text remains a fixed size (100 units) and does not rotate with the spline or pole.
---

#### Core Properties
| Variable | Default | Description |
|:--|:--|:--|
| **Type** | None | Defines the connection target.<br> • **None:** Disables this connection.<br> • **Powerline:** Connects to another powerline actor.<br> • **Actor:** Connects to any actor in the scene.|
| **Actor** | None | The target actor to connect to. |
| **Pole Indexes** | (0, 0) | Specifies which poles (spline points) to use for the connection. <br>**X** is the source index on *this* actor, **Y** is the target index on the connected actor.<br> **Note:** The Y index is ignored when **Type** is set to **Actor**.|

---

#### Cable Actor Connection Type 
*Actor Type Only*<br>
Chooses how to define connection points on the target actor.
*   **Points:** Uses the **Actor Connected Points** array.
*   **Bones:** Uses the **Actor Connected Bones** array (ideal for actors with many sockets).
  

| Variable | Description |
|:--|:--|
| **Actor Connected Points** | **Points type only**<br> An array specifying connection points. Each entry defines a pair: **X** (source index on this actor) and **Y** (target point index on the connected actor). |
| **Actor Connected Bones** | **Bones type only**<br> An array specifying connection bones/sockets. Each entry defines a pair: **X** (source index on this actor) and a target **Bone Name** on the connected actor. |

---

#### Cable Connection Type 
*Powerline Type Only*<br>
Controls how cables are generated between connected powerline poles.
*   **All:** Creates a cable for every possible connection between poles.
*   **Random:** Creates cables randomly based on a probability weight.
*   **Manual:** Lets you explicitly specify which connections to create.

| Variable | Default | Description |
|:--|:--|:--|
| **Cable Probability** | 50 | **Random type only** <br> The probability weight (0-100) for creating a cable between a pair of poles. |
| **Cable Connected Points** | Empty | **Manual type only** <br> An array where you explicitly list the pole index pairs (X=source, Y=target) to connect with cables.<br> **Note:** Switching from **All** or **Random** will auto-populate this array with the corresponding indexes. |

