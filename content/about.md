---
title: About
type: about
toc: false
width: full
---


Hello 👋 I’m a solo game and tools developer working in Unreal Engine. The tools and plugins I create come from my journey of learning the engine while building toward an open-world game.

Initially, I built these plugins in Blueprint. However, when I started using them in actual levels, I encountered responsiveness issues and longer loading times. This led me to shift focus from the open-world project itself to creating development tools that help other Unreal Engine developers build faster and more efficiently. Because these plugins contain a substantial amount of code, I rewrote them from Blueprint to C++ — a decision that also fit my comfort with coding in C++. The result is more performant, stable, and scalable tooling.


🎮 In my free time, I develop mobile-first games, with hopes to release them in the near future. A big part of this process has been trial-and-error optimization for mobile within Unreal Engine—ensuring projects run well on a wide range of devices, including budget Android phones.

{{< space 2 >}}

💬 If you encounter bugs, have suggestions for improvements or new features, or just need help, feel free to reach out at:  
[📩 Email](mailto:lightstefar@gmail.com)

---

### Frequently Asked Questions 📌

{{% details title="Why are the plugins written in C++ instead of Blueprint?" closed="true" %}}

*   **Performance:** Blueprint execution in Construction Script became a bottleneck, especially with heavy math and iterative logic.
*   **Editor Responsiveness:** With Blueprint, moving or adding spline points in the level caused noticeable editor lag. Disabling *“Run Construction Script on Drag”* was necessary just to maintain usability.
*   **Scalability:** Some operations either required C++ or a Blueprint function library to be feasible at all.
*   **Execution Overhead:** Each Blueprint node call adds overhead to the virtual machine. In loops with many operations, this could even hit Unreal Engine’s **Maximum Loop Iteration** limit.
*   **Math-Intensive Operations:** The plugins involve significant real-time calculation, which is far more efficient in native code.

{{% /details %}}




