---
title: Changelog
type: docs
weight: 10
prev: /pipes
---

## Version 1.1

### **Added**
* Added boolean variable `RunOnConstruction` to allow skipping pipe building during the Construction script.
* Created a Blueprint API that can be used at runtime (particularly in BeginPlay) instead of relying on the Construction script.
* Added custom LODs to corner meshes that are used with the spline mesh component.

  
### **Changed**
* Exposed `ConstructPipes()` and `ResetSpline()` functions to Blueprint.
* Exposed many private variables to Blueprint.
* Added support for selecting or overriding the fitted corner mesh in cases where multiple pipe corner meshes share the same angle. Selection can be made either from the manual corner data list or determined by mesh weights.
* Renamed `BendCornerMeshSelection` to `CornerMeshSelection`.
* Renamed `ManualBendData` to `ManualCornerData`.

---

## Version 1.0

* Initial realese. 