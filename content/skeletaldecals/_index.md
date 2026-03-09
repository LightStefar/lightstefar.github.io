---
title: Skeletal Decals
toc: false
---


{{< space 2 >}}

{{< video src="Decals_Loop.mp4" muted="true" autoplay="true" loop="true" >}}

{{< space 2 >}}

{{< prod-button link="https://fab.com/s/245d9e48759f" >}}


Skeletal Decals is an Unreal Engine plugin that eliminates decal drifting on skeletal meshes by handling decal calculations within the material through custom HLSL, using a render target as an efficient lookup table.

### [🎬Overview](https://youtu.be/GQDh8RqxcFE)   |   [🕹️Demo](https://drive.google.com/file/d/1Gjylhs1XZ-bWuwsI2-zny7K1OHjNa3CX/view?usp=sharing)  |   [💡Example Project](https://drive.google.com/file/d/16JSzjxJ6YMrOe7e0eDijxtruN-3Qpi6c/view?usp=sharing) 

**Key Features:**

- **High Decal Count** – Configure the decal limit to match your project's performance budget.
- **No UV Requirements** – Works independently of UVs; no pre-baked channels needed.
- **Built-in Randomization** – Features random rotation, scaling, and atlas-based texture selection.
- **Modular Mesh Support** – Seamlessly handles characters with multiple skeletal mesh components.
- **Efficient HLSL** – Optimized shader code minimizes texture samples and calculations.
- **Integrated Animation** – Native animation system similar to Unreal's standard decal component.
- **Blueprint-Accessible** – User-friendly design for Blueprint-oriented developers.
- **C++ Performance** – Built in C++ for optimal runtime efficiency.
- **Full Documentation** – Comprehensive guides and references included.
- **Multiplayer Ready** – Visual effects replicate in multiplayer, with an example project showing implementation.



## Overview

The Skeletal Decal Component is an actor component that manages configuration and logic. It supports replication, save/load, and copy decals system, and operates in two distinct modes:
1. **Projected Mode:** Emulates standard decal projection within the shader with rotation control.
2. **Sphere Mode:** Uses two sphere masks for simple, high-performance impact effect or mask.

--- 

{{< cards >}}
  {{< card link="decals-getting-started" title="Getting Started" icon="academic-cap" subtitle="Guide" >}}
  {{< card link="decals-changelog" title="Change Log" icon="document-text" subtitle="Log" >}}
{{< /cards >}}

