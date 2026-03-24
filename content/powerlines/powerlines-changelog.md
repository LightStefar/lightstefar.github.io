---
title: Changelog
type: docs
weight: 10
prev: /powerlines
---

## Version 1.3

### **Added**
* Blueprint API.
* Cable generation modes, allowing cable creation with dynamic, user-defined virtual sockets per actor.
* Cable material selection modes and manual cable materials list for each cable. Works with both virtual and regular sockets.
* Optional `Enable Wind` variable in data asset.
* `RunOnConstruction` boolean variable to allow skipping powerline construction during the Construction Script.

**Content Examples**
* Trim example textures, materials, and cable clip data asset with usage example of atlas texture feature.
* Example actor with atlas feature and virtual sockets to `Overview` level.

### **Changed**
* Sockets in pole mesh must now have a `Cable` tag to generate cables. This allows custom sockets to be added to pole meshes for specific purposes.
* Renamed `Material Selection Type` to `Pole Preset Selection`.
* Cleaned up Lit material.

### **Fixed**
* Fixed issue with zero-length tracing.
* Fixed `Mobility` variable category.
* Fixed scaled text height not scaling to pole mesh properly.

### **Removed**
* Deprecated cable UV parameters and materials; moved to cable material data.

---

## Version 1.23

### **Added**
*   Customizable trace channel in the tracing struct.

### **Fixed**
*   Fixed an issue where the Target Copy Actor variable could copy points from itself, preventing point editing.

---

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


