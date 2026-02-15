---
title: Changelog
type: docs
weight: 10
prev: /powerlines
---

<!-- ## Version 1.23

### **Fixed**
 *   Fixed target copy actor variable to copy points from itself.

### **Added**
* Customizable trace channel in traceing category.  -->

## Version 1.21

### **Changed**
 *   Changed plugin icon.

### **Fixed**
 *   Fixed material presets crash.  

---

## Version 1.2

### **Added**
*   Custom billboard icon (editor-only).
*   A default Data Asset for the native Powerline class.
*   A `Mobility` setting to the Data Asset, which applies to all meshes to meet Unreal Engine's requirement for a root component.
*   Material preset selection properties for pole meshes.

### **Changed**
*   Removed the `abstract` UCLASS specifier from the powerline class.
*   Removed the Blueprint Actor wrapper; Powerline functionality is now native-only.
*   Updated the overview level, replacing Blueprint-based powerline actors with native C++ instances.
*   Upgraded from simple material assignments to a **Material Preset** system. This allows switching between various visual styles directly from the Data Asset in seconds.

---

## Version 1.1

### **Added**
 *   Added ISM and HISM mesh types.
 *   Added mesh materials to pole meshes in the Data Asset for easy material swapping.
 *   Updated the overview map and added examples for the ISM type.

### **Changed**
 *   Changed default values for pole and cable max draw distance to 0 in the Data Asset.
 *   Updated fence and cable clips to use the ISM mesh type.
 *   Fixed the powerline category order for versions 5.6 and 5.7.

### **Fixed**
 *   Fixed an issue with text location in the scaled text type.

---

## Version 1.0

* Initial realese. 


