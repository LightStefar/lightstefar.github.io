---
title: Fast Powerlines 
toc: false
---

![Powerlines animation](Powerline_loop.webp)

{{< prod-button link="https://fab.com/s/245d9e48759f" >}}

Fast Powerlines is an Unreal Engine plugin that enables you to construct detailed powerline networks in minutes. Cables are dynamically generated at runtime using a Procedural Mesh Component, with a clean separation between data configuration and level placement for an efficient workflow.

**Key Features:**
*   **Intuitive Workflow:** A user-friendly interface with logical data separation for ease of use.
*   **High Performance:** Written entirely in C++ for optimal speed, both in the editor and at runtime.
*   **Production-Ready Content:** Includes high-quality starting assets and examples that demonstrate every feature.
*   **Comprehensive Documentation:** Extensive guides and references accompany the toolset.
*   **Built-in Optimization:** Features like static mesh baking help maintain performance in complex scenes.
*   **Network Connection System:** Create interconnected power grids by linking actors or connect cables to any actor with sockets or bones.
*   **Customizable Wind Effects:** Vertex color-based wind system with contrast, sharpness, and intensity controls for dynamic, believable cable movement.
*   **Editor Visualization Tools:** Debug views for cable points and pole indices to streamline the placement and connection process.
  

## Overview

The plugin's structure is divided into two core parts:
1.  **Data Asset:** Contains the static configuration—such as pole meshes, materials, and cable presets—allowing for easy reuse and swapping of visual styles.
2.  **Actor:** The placed entity in the level that uses the spline component to define the powerline's path and the data asset to determine its appearance and behavior.

This separation allows for efficient workflow: artists and designers can configure assets and presets in the Data Asset, while level builders can rapidly place and connect Powerline Actors using those shared settings. Together with the **Connection** system for networking and **Optimization** tools like mesh baking, they form a complete, performant solution for creating believable power infrastructure.

--- 

{{< cards >}}
  {{< card link="getting-started" title="Getting Started" icon="academic-cap" subtitle="Guide" >}}
  {{< card link="changelog" title="Change Log" icon="document-text" subtitle="Log" >}}
{{< /cards >}}

