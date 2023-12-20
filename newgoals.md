h1 - alligator
h2 - banner
h3 - small

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

- Randomly generate tilemap
- Draw Tilemaps
- target on minimap
- Collision rays (fast objects go through colliders)
- Sound distances
- Waves and Wind
- A* pathing
- Gamepad and touch screen buttons
- Keyboard, Mouse, Touch, Gamepad classes
- ?? Only draw in camera
- Shoot along z rotation in iso view
- Bots always shoot at z axis in every view (no hiding on top of blocks)
- Bot chasing / targets / paths
- Racing
- Complete speed physics (top speed, actual speed, weight)
- Graphics are block attached to character
- Give blocks friction for wall jumping rooftop drag
-- Are shadows blocks, too?
- Animators
- Emitters
- Melee Weapons
- Polyblock regions
- 3D Polyblocks
- Camera Zoom/Pan/Shake
- Draw xhair from anywhere
- Arc Aiming Cone

<!--
      :::::::::  :::    :::  ::::::::   ::::::::
     :+:    :+: :+:    :+: :+:    :+: :+:    :+:
    +:+    +:+ +:+    +:+ +:+        +:+
   +#++:++#+  +#+    +:+ :#:        +#++:++#++
  +#+    +#+ +#+    +#+ +#+   +#+#        +#+
 #+#    #+# #+#    #+# #+#    #+# #+#    #+#
#########   ########   ########   ########
-->

- bullets always collide on left of block?
-- fast moving objects penetrate deeper. need raycasting collision
- z height too high on ortho view when over tall block
- z block top vs player bottom bad when block z is raised
- ring height too low in iso view when on block
- missile cylinder shadow not aligning in iso view
- choppy gamepad aim


// weapons
- ballistic beats crystal beats plasma beats ballistic
- pistol and sniper beat sheild and grapple by outranging
- flamer and lance beat pistol and sniper by closing distance and burst damage
- shield and grapple beat flamer and lance by disabling when grappled and reflecting momentum