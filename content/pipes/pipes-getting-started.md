---
title: Getting Started
type: docs
weight: 1
prev: /pipes
next: /pipes/actor
---

A quick guide to get started with the Pipe Builder plugin.

## Installing the Plugin

{{% steps %}}

####  Download
Download the plugin from the **Fab** tab in the Epic Games Launcher.

#### Install
Click **Install to engine** and select your installed Unreal Engine version.

#### Open Plugins Window
Open your project, go to **Edit → Plugins**, and find the Fast Powerlines plugin window.

{{< callout type="info" >}}
Type `pipe builder` in search bar.
{{< /callout >}}

#### Enable the Plugin
Enable the plugin by checking its box as shown below.
{{< figure src="/pipes/EnablePlugin.png" alt="Enable plugin" >}}

{{% /steps %}}

## Quickstart

{{% steps %}}

#### Navigate to the Plugin Folder
Open the Content Browser and navigate to the Powerlines plugin folder.
{{< figure src="/pipes/Navigate.png" alt="Navigate to plugin" >}}

{{< callout type="info" >}}
If the plugin folder is not visible, ensure **Show Plugin Content** is enabled. Click the **Settings** button in the top-right corner of the Content Browser and check this option.
{{< figure src="/images/PluginContent.png" alt="Show plugin folder" >}}
{{< /callout >}}

#### Add a Powerline Actor to Your Level

Type `pipe` into the **Place Actors** search bar and drag the actor from there into level.
  {{< figure src="/pipes/Pipes_DragDrop.webp" alt="Drag drop from place actors" >}}

#### Edit the Spline

Add and move spline points to define the path of your powerline.

{{< callout >}}
It's best to turn on Grid snap in the editor and set it to `50` units.
{{< /callout >}}

#### Change Data Asset

Click the `Data` Asset dropdown button and select a different preset. 
{{< callout type="info" >}}
If data assets are not visible, ensure **Plugin Content** is enabled. Click the **Settings** button on the center-right side of the window and check this option.
{{< figure src="/pipes/Pipe_PluginContent.png" alt="Show plugin folder" >}}
{{< /callout >}}


{{% /steps %}}