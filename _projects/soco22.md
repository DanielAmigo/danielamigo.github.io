---
layout: page
title: "UAV Simulation for Object Detection and 3D Reconstruction Fusing 2D LiDAR and Camera"
description: "Authors: Daniel Amigo, Jesús García, José Manuel Molina, and Jorge Lizcano"
---

<!-- Add additional resources for video comparisons -->
<script type="text/javascript" src="../../assets/js/video_comparison.js"></script>
<link   rel="stylesheet"      href="../../assets/css/video_comparison.css">


## Abstract
Currently it is hard to develop UAV in civil environments, being simulation the best option to develop complex UAV missions with AI. To carry out useful AI training in simulation for real-world use, it is best to do it over a similar environment as the one a real UAV will work, with realistic objects in the scene of interest (buildings, vehicles, structures, etc.). This work aims to detect, reconstruct, and extract metadata from those objects. A UAV mission was developed, which automatically detects all objects in a given area using both simulated camera and 2D LiDAR, and then performs a detailed scan of each object. Later, a reconstruct process will create a 3D model for each one of those objects, along with a geo-referenced information layer that contains the object information. If applied on reality, this mission ease bringing real content to a digital twin, thus improving, and extending the simulation capabilities. Results show great potential even with the current budget specification sensors. Additional post-processing steps could reduce the resulting artefacts in the export of 3D objects. Code, dataset, and details are available on the project page: [https://danielamigo.github.io/projects/soco22/](https://danielamigo.github.io/projects/soco22/)

## Paper
[Preprint access](../../assets/pdf/proceedings/amigo_2022_uav_simulation_for_object_detection_and_3d_reconstruction_fusing_2d_lidar_and.pdf)

## Results comparison
Sculpture
<div class="video-compare-container">
  <video class="video" id="sculpture" loop playsinline autoPlay muted src="../../assets/video/Sculpture.mp4" onplay="resizeAndPlay(this)"></video>
  <canvas height=0 class="videoMerge" id="sculptureMerge"></canvas>
</div>
Building
<div class="video-compare-container">
  <video class="video" id="building" loop playsinline autoPlay muted src="../../assets/video/Building.mp4" onplay="resizeAndPlay(this)"></video>
  <canvas height=0 class="videoMerge" id="buildingMerge"></canvas>
</div>

## Citation
```
@inproceedings{amigo_uav_2022,
    address    = {Salamanca, Spain},
    title      = {UAV Simulation for Object Detection and 3D Reconstruction Fusing 2D LiDAR and Camera},
    language   = {en},
    booktitle  = {17th International Conference on Soft Computing Models in Industrial and Environmental Applications (SOCO 2022)},
    publisher  = {Springer International Publishing},
    author     = {Amigo, Daniel and García, Jesús and Molina, José Manuel and Lizcano, Jorge},
    month      = sep,
    year       = {2022},
    file       = {proceedings/amigo_2022_uav_simulation_for_object_detection_and_3d_reconstruction_fusing_2d_lidar_and.pdf},
    abbr       = {SOCO22},
    img        = {/assets/img/papers/soco22.png},
}
```