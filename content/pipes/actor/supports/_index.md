---
title: Supports
type: docs
weight: 3
prev: pipes/actor/
next: pipes/actor/connection

resources:
  - src: "SupportDistr/SuppDistr_1.png"
    params:
      caption: "Spacing with 160 units" 
  - src: "SupportDistr/SuppDistr_2.png"
    params:
      caption: "Loop with 0.25 and 0.75 range" 
---

Manages support mesh generation along the pipe. Supports can be spaced at fixed intervals, placed per loop mesh, or disabled. Includes roll control, surface tracing, and randomization options.

### Distribution methods 
Default: **Spacing**

- **None:** No supports generated.
- **Loop:** Places one support per loop mesh. Position controlled via  **Loop Support Position Min Max**.
- **Spacing:** Evenly distributes supports along the spline at fixed controllable intervals, automatically avoiding corners.

{{< slider folder="SupportDistr" >}}

### Support Variables

| Variable | Default | Description |
|:--|:--|:--|
| **Support Spacing** | 160.0 |Distance between supports in **Spacing** mode. <br> **Note:** Minimum value is clamped to **5.0**. |
| **Loop Support Position Min Max** | (0.25, 0.75) | Normalized (0–1) placement range along each loop mesh. <br> **X** = minimum, **Y** = maximum. |
| **Support Probability** | 100.0 |  Percentage chance (0–100%) of support placement at valid locations. |
| **Support Mesh Selection** | RandomOnce | Determines which static mesh asset will be selected. <br> • **RandomOnce**: A single mesh is chosen at random and used for all supports. <br> • **Random**: A mesh is randomly selected per support instance. <br> • **Manual**: Uses mesh specified by **Mesh Index**. |
| **Support Roll Angle** | 0.0 | Uniform roll rotation applied to all support meshes (degrees). |
| **Support Flip Yaw** | true | Randomly applies 180° yaw rotation for visual variety. |

---

### Support Trace Variables

| Variable | Default | Description |
|:--|:--|:--|
| **Support Trace Method** | None | Controls surface detection at support positions. <br> • **None**: No surface detection. <br> • **Trace**: Performs collision trace in support-facing direction. <br> • **Trace Debug**: Same as Trace, with visual debug output. |
| **Support Trace Scale** | 1.0 | Scale multiplier for trace extents. <br> **Note:** Minimum value is clamped to **0.05**. |
| **Support Trace Channel** | Visibility | Trace collision channel. |
| **Flip Trace Direction** | false | Reverses trace direction (default is downward, negative Z). |
