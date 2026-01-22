---
title: Optimization 
type: docs
prev: connection
next: powerlines/dataasset/
---

This is an editor-only optimization that generates a static mesh in a specified folder to improve runtime performance.  
{{< callout type="info" >}}
If your cables remain *static* and do not update when you modify the spline, you likely have a merged static mesh active. Remove it first to regain editability.
{{< /callout >}}

### Why bake to a static mesh?  
Procedurally generated cables have runtime costs. Baking them into a static mesh addresses several performance concerns:
1. **Reduced Overhead**: Each procedural mesh component has its own runtime cost. A single static mesh is far more efficient. 
2. **Faster Load Times**: Generating complex cables for a large level can cause noticeable delays when the game starts.
3. **Streaming Compatibility**: In world-partitioned levels, each time a cell loads, procedural cables must rebuild, potentially causing hitches during fast travel or exploration. A static mesh loads instantly. 

To mitigate this, we can bake all cables into a static mesh.  

### Reference

| Feature | Description | Details / Notes |
| :--- | :--- | :--- |
| **Create Static Cables** | Bakes procedural cables into a static mesh, saves it, and reruns the construction script. | Primary tool for performance optimization. |
| **Remove Reference** | Clears the reference to the merged static mesh from the actor and refreshes it. | Use this if you duplicated an actor that already had a baked mesh, to break the reference. |
| **Remove Static Cables** | **Permanently deletes** the baked static mesh asset from disk | **Destructive action** – cannot be undone via **Edit > Undo**. Use with caution.  |
| **Path Name** | A configurable variable to set the default save folder for baked static meshes. | Default location: `/Game/Meshes/`. Example: `/Game/Meshes/Cables/`. |
| **Merged Cable Mesh** | A private, read-only variable holding a reference to the generated static mesh. | Allows inspection via double-click; note that the mesh may appear with an unusual rotation. |




{{< callout type="important" >}}
There is a known issue with the merged mesh system and the editor's level save process.

If you bake a merged mesh (creating a static mesh asset referenced by the powerline actor) and later decide to remove it using **`Remove Static Cables`**, an editor crash or closure before saving the level can cause a problem. Upon reopening the unsaved level, you may encounter an error stating the powerline actor contains an invalid reference. This occurs because:

1.  The physically baked static mesh asset was deleted from disk.
2.  The unsaved level still contains a powerline actor with a reference pointing to the now-deleted asset.

**Advice:** Always save your level immediately after **baking** or **removing** a merged static mesh to prevent this reference corruption.
{{< /callout >}}

This is an editor-only optimization that generates a static mesh to improve runtime performance.

{{< callout type="info" >}}
If your cables remain static and do not update when you modify the spline, you likely have a merged static mesh active. Remove it first to regain editability.
{{< /callout >}}

### Why Bake to a Static Mesh?
Procedurally generated cables have runtime costs. Baking them into a static mesh addresses several performance concerns:
1.  **Reduced Overhead:** Each procedural mesh component has its own runtime cost. A single static mesh is far more efficient.
2.  **Faster Load Times:** Generating complex cables for a large level can cause noticeable delays when the game starts.
3.  **Streaming Compatibility:** In world-partitioned levels, each time a cell loads, procedural cables must rebuild, potentially causing hitches during fast travel or exploration. A static mesh loads instantly.

### Reference

| Feature | Description | Details / Notes |
| :--- | :--- | :--- |
| **Create Static Cables** | Bakes all procedural cables into a single static mesh asset, saves it, and refreshes the actor. | Primary tool for performance optimization. |
| **Remove Reference** | Clears the reference to the merged static mesh from the actor and refreshes it. | Use this if you duplicated an actor that already had a baked mesh, to break the reference. |
| **Remove Static Cables** | **Permanently deletes** the baked static mesh asset from disk and refreshes the actor, restoring procedural cables. | **Destructive action** – cannot be undone via **Edit > Undo**. Use with caution. |
| **Path Name** | Configures the default save folder for baked static meshes. | Default: `/Game/Meshes/`. You can change this (e.g., to `/Game/Meshes/Cables/`). |
| **Merged Cable Mesh** | (Read-only) A reference to the generated static mesh asset. | You can double-click to inspect it. Note: The mesh may appear rotated due to the baking process. |