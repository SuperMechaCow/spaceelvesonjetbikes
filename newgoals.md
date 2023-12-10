<!--
      ::::::::   ::::::::  :::::::::  ::::::::::          ::::::::   ::::::::  ::::    :::  ::::::::  :::::::::: ::::::::: :::::::::::
    :+:    :+: :+:    :+: :+:    :+: :+:                :+:    :+: :+:    :+: :+:+:   :+: :+:    :+: :+:        :+:    :+:    :+:
   +:+        +:+    +:+ +:+    +:+ +:+                +:+        +:+    +:+ :+:+:+  +:+ +:+        +:+        +:+    +:+    +:+
  +#+        +#+    +:+ +#++:++#:  +#++:++#           +#+        +#+    +:+ +#+ +:+ +#+ +#+        +#++:++#   +#++:++#+     +#+
 +#+        +#+    +#+ +#+    +#+ +#+                +#+        +#+    +#+ +#+  +#+#+# +#+        +#+        +#+           +#+
#+#    #+# #+#    #+# #+#    #+# #+#                #+#    #+# #+#    #+# #+#   #+#+# #+#    #+# #+#        #+#           #+#
########   ########  ###    ### ##########          ########   ########  ###    ####  ########  ########## ###           ###
-->
Space elves believe nothing is random:
    Minimal RNG in the mechanics. Main play mode can be reliably speedran.
Dark elves believe everything is random:
    The mechanics should be so fun that players will make their
    own games in completely randomly generated maps and scenarios.

<!--
      :::::::::   ::::::::          :::::::::: ::::::::::: :::::::::   :::::::: :::::::::::
     :+:    :+: :+:    :+:         :+:            :+:     :+:    :+: :+:    :+:    :+:
    +:+    +:+ +:+    +:+         +:+            +:+     +:+    +:+ +:+           +:+
   +#+    +:+ +#+    +:+         :#::+::#       +#+     +#++:++#:  +#++:++#++    +#+
  +#+    +#+ +#+    +#+         +#+            +#+     +#+    +#+        +#+    +#+
 #+#    #+# #+#    #+#         #+#            #+#     #+#    #+# #+#    #+#    #+#
#########   ########          ###        ########### ###    ###  ########     ###
-->

- Finalizing control inputs (Bot extends Player, has controller, makes AI. Character only takes input)
    - Keyboard, Mouse, TOuch, Gampead classes
    - Fix Touch radius and add buttons
- HUD elements to interface.js in Interface class, belonging to Players
- Cubes and Tubes
    - Cubes made from cubes and Tubes from cylinders
    - Cubes cannot move and do not collide if they do
    - Tubes can move and collide with other Tubes and collide with Cubes
    - Tubes can predictive collide and current collide
- Physics to new module
- Complete speed physics (acceleration, top speed, actual speed, friction/weight, bounce)
- AABB Collision for 3d (and polyblocks as well)?
- Blocks and polyblocks with a top and side texture, and transparency if behind

- Tilemaps
- Make a pathing grid on map load that determines if any blocks are in each grid square
- Tilemap to collision blocks
- use A* pathing with grid

- Fix X/Y npc movement
- Only draw in camera
- Camera Zoom/Pan/Shake
- Foot Physics

- block heights
- hitboxes (graphics can be bigger than collision area)
    -- hitbox and graphic should just both be blocks attached to the x.y position of the character
    -- if blocks have parents, and another collider hits the hitbox, send the damage to the hitbox parent
- animators