---
title: World Trails
toc: false
---

{{< space 2 >}}

{{< video src="Trails_Loop.mp4" muted="true" autoplay="true" loop="true" >}}

{{< space 2 >}}

{{< prod-button link="https://fab.com/s/d579845d48d7" >}}


World Trails is an Unreal Engine plugin that builds, draws, and manages dynamic trails. Its world subsystem makes it easy to manage and push data directly in Blueprint. Trails Manager handles drawing, origin actor tracking, and lifecycle of trails. For rendering, the plugin draws texture brushes as quads directly to a render target, supporting both Translucent and Additive blend modes.

### [🎬Overview](https://youtu.be/0vlpggMgaRc)   |   [🕹️Demo](https://drive.google.com/file/d/103Jcys1TQoJL2cdEPnTps9RvvRYqitH3/view?usp=sharing)  |   [💡Example Project](https://drive.google.com/file/d/1V4-8aY4TmqR3OSNjDvolZsKPiGRFq4qs/view?usp=sharing) 

### Key Features


- **Optimized Drawing:** C++ batched elements for efficient render target drawing.
- **Standard Methods Avoidance:** Bypasses expensive calls like `DrawMaterialToRenderTarget()` and canvas `DrawTexture()`.
- **Scalability:** Trail count doesn't hurt performance—unlike standard methods.
- **High Performance:** Written entirely in C++.
- **Configurable Fade Animation:** User-defined fade duration.
- **Customizable Brushes:** Use your own texture brushes for custom trail visuals.
- **Network Replicated:** Trail Manager and Trail Component replicate out of the box.
- **Blueprint API:** Friendly for developers who prefer Blueprints.
- **Comprehensive Documentation:** Detailed guides and API references.
- **Low Storage Footprint:** Incredibly small plugin size.
  

--- 

{{< cards >}}
  {{< card link="start" title="Getting Started" icon="academic-cap" subtitle="Guide" >}}
  {{< card link="trails-changelog" title="Change Log" icon="document-text" subtitle="Log" >}}
{{< /cards >}}

