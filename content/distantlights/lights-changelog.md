---
title: Changelog
type: docs
weight: 10
prev: /distantlights
---

## Version 1.1

**Added**
* Specular scale for mesh and sprite lights.

**Fixed**
* Fixed incorrect distance calculation for spot light fade mask.
* Various small non-critical fixes.

**Changed**
* Shortened the distance at which mesh lights and flares collapse vertices, improved performance a bit.
* Switched from Blinn-Phong to approximate GGX specular: cheaper and more native-looking.
* Specular highlights are enabled by default.
* Default Specular value is now 1 and clamped to 1 (matching Unreal).
  
---

## Version 1.02

**Added**
* Added a parameter to control fog intensity for all distant lights in the manager.
* Added Blueprint functions for runtime fog control.
![New fog functions](Light_FogFunc.png)

---

## Version 1.0

* Initial realese. 


