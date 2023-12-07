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
    No RNG in the mechanics. Main play mode can be reliably speedran.
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
- draw polyblocks with jetbike
- FIX NPC vs PLAYER COLLISION PHYSICS! (is this fixed?)
- get viewport of player and don't draw anything outside of it
- hitboxes (graphics can be bigger than collision area)
    -- hitbox and graphic should just both be blocks attached to the x.y position of the character
    -- if blocks have parents, and another collider hits the hitbox, send the damage to the hitbox parent
- depth / z height affects render order
- particle block / dispenser block
- animators
- leaves/debris
	-- better physics
    -- Better early-game coverage
- shadows under blocks
- attach blocks to targets
- touch controls
- fix resonating

<!--
      :::::::::   ::::::::          ::::    ::: :::::::::: :::    ::: :::::::::::
     :+:    :+: :+:    :+:         :+:+:   :+: :+:        :+:    :+:     :+:
    +:+    +:+ +:+    +:+         :+:+:+  +:+ +:+         +:+  +:+      +:+
   +#+    +:+ +#+    +:+         +#+ +:+ +#+ +#++:++#     +#++:+       +#+
  +#+    +#+ +#+    +#+         +#+  +#+#+# +#+         +#+  +#+      +#+
 #+#    #+# #+#    #+#         #+#   #+#+# #+#        #+#    #+#     #+#
#########   ########          ###    #### ########## ###    ###     ###
-->
- camera scaling (zoom in / out)
- consider locking back onto jetbike and zoom out as you get higher
- clean up and unify blocks
- Enemy is just character with an "AI" controller
- All healthbars handled by player HUD
- objects have 'bouyancy' to return to hover position instead of inverse gravity
- map context. 3d = x/y/z, 2d = x/y+z
- AI difficulty
- up/down graphics
- sounds at a distance
- shouldn't EVERYTHING be blocks? and players jsut have extra stuff?
- braking causes updraft nearby by leaving a block that only blows debris upwards
- threat system
- rear engines should push things away
- obstacle avoidance (after weapons)
- raytrace a sword
- raytrace a curve https://www.geeksforgeeks.org/draw-circle-without-floating-point-arithmetic/

<!--
      ::::::::::: :::::::::  ::::::::::     :::      ::::::::
         :+:     :+:    :+: :+:          :+: :+:   :+:    :+:
        +:+     +:+    +:+ +:+         +:+   +:+  +:+
       +#+     +#+    +:+ +#++:++#   +#++:++#++: +#++:++#++
      +#+     +#+    +#+ +#+        +#+     +#+        +#+
     #+#     #+#    #+# #+#        #+#     #+# #+#    #+#
########### #########  ########## ###     ###  ########
-->
- click to place target block and command to attack
- All menus should be blocks you must drive into in a small map
- flying in formation (if within 100: in formation. seek proximity to someone in formation)
- sonic boom effects (breaking the sound barrier / max speed)
- airborn tricks al a waverace64
- local lighting
- threat personalities
- behaviors (target heal pad when low, etc.)
- map/bg parralax (ascending/descending/speeding levels)

<!--
      ::::    :::  :::::::: ::::::::::: :::::::::: ::::::::
     :+:+:   :+: :+:    :+:    :+:     :+:       :+:    :+:
    :+:+:+  +:+ +:+    +:+    +:+     +:+       +:+
   +#+ +:+ +#+ +#+    +:+    +#+     +#++:++#  +#++:++#++
  +#+  +#+#+# +#+    +#+    +#+     +#+              +#+
 #+#   #+#+# #+#    #+#    #+#     #+#       #+#    #+#
###    ####  ########     ###     ########## ########
-->
<!-- - moving block (can be used for camera controller)
    - linear or jetbike physics
    - can progress through camera blocks like goals
    - hitting camera block goals can change the speed of the moving block -->

<!-- // AI
// Slow down overall speed if many obstructions in region
// Scan for objects that get closer
// Brake and Strafe away from obstacles while chasing
// Boost or shoot if you can draw a straight line with no collision -->