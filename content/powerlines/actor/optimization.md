---
title: Optimization
type: docs
prev: connection
next: powerlines/dataasset/
---

This is an editor-only optimization that generates a static mesh in a specified folder to improve performance at runtime.  

### Why bake to a static mesh?  
1. Each procedural mesh component has its own runtime overhead.  
2. Generating cables for a large level can cause delays at begin play.  
3. In world-partitioned levels, every time a cell containing a powerline actor is loaded, the procedural mesh and cables need to be rebuild, potentially causing performance hitches in fast-paced games.  

To mitigate this, we can bake all cables into a static mesh.  

### Reference
- **Create Static Cables**: An action that builds a static mesh, saves it to a specified folder, and adds a new static mesh component with the created asset.  
- **Remove Static Cables**: Deletes the baked static mesh from disk and reruns the construction script.  
- **Path Name**: A configurable variable to set the default folder for static meshes (default: `/Game/Meshes/`). Example: `/Game/Meshes/Cables/`.  
- **Merged Cable Mesh**: A private, read-only variable referencing the baked/merged static mesh. Double-clicking it allows mesh inspection, though the static mesh may appear oddly rotated.


| Feature | Description | Details / Notes |
| :--- | :--- | :--- |
| **Create Static Cables** | Bakes procedural cables into a static mesh, saves it, and reruns the construction script. | Used for performance optimization in the editor. |
| **Remove Static Cables** | Deletes the baked static mesh from disk and reruns the construction script. | Restores the original procedural mesh state. |
| **Path Name** | A configurable variable to set the default save folder for baked static meshes. | Default location: `/Game/Meshes/`. Example: `/Game/Meshes/Cables/`. |
| **Merged Cable Mesh** | A private, read-only variable holding a reference to the generated static mesh. | Allows inspection via double-click; note that the mesh may appear with an unusual rotation. |