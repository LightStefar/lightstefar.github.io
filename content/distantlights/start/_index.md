---
title: Getting Started
type: docs
weight: 1
prev: distantlights
next: distantlights/general
---

A quick guide to get started with the Powerlines plugin.

## Installing the Plugin

{{% steps %}}

####  Download
Download the plugin from the **Fab** tab in the Epic Games Launcher.

#### Install
Click **Install to engine** and select your installed Unreal Engine version.

#### Open Plugins Window
Open your project, go to **Edit → Plugins**, and find the Distant Lights plugin window.

{{< callout type="info" >}}
Type `lights` in search bar.
{{< /callout >}}

#### Enable the Plugin
Enable the plugin by checking its box as shown below.
![Enable plugin](/distantlights/Lights_EnablePlugin.png)
{{% /steps %}}

## Quickstart

{{% steps %}}

#### Navigate to the Plugin Folder
Open the Content Browser and navigate to the Powerlines plugin folder.
![Navigate to plugin](Lights_PluginFolder.png)
{{< callout type="info" >}}
If the plugin folder is not visible, ensure **Show Plugin Content** is enabled. Click the **Settings** button in the top-right corner of the Content Browser and check this option.
![Show plugin folder](/images/PluginContent.png)
{{< /callout >}}

#### Add Distant Lights Actor

Navifate to **Place Actors** tab, select `Lights` category, find `Distant Lights` actor and drag the actor from there into level.

![Drag drop from place actors](Lights_Drag.webp)

#### Add Distant Point Light 

Select Distant Point Light or Spot Light from the same category in **Place Actors** tab and drag drog the actor inside distant lights box.
Optionally, modufy default paramaters of light.

![Place distant light in level](Lights_Place.webp)


#### Check Result

Change the camera position and increase distance to distant lights to ensure everything is working. 

{{< video src="Lights_Check.mp4" muted="true" autoplay="true" loop="true" >}}

Or you can simply press visibility icon of `Distant Lights` manager in **Outliner** tab.

{{< callout >}}
If something gone wrong, you can always press `Refresh` checkbox in Distant Lights manager to regenerate distant lights.
{{< /callout >}}

{{% /steps %}}