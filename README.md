# Space Elves on Jetbikes
## For Speed. For Honor. Forever.
Far away in the galaxy, a race of elves from outer space roam the stars and planets, mounted on their lightning-fast jetbikes. Their eternal race is a beacon of values that us mere humans can barely comprehend, such as speed, and honor.

In the darkest shadows of the galaxy, those who have strayed from these mores lurk. The Dark Elves seek to defile that which is revered by the Space Elves, and use their gifts for their own short-term gains.

As a valiant knight of the Space Elves, you are to defeat these Dark Elves in the immortal battlefields of speed and honor.

### Scope

SEJB is a 2.5D Javascript game that avoids using additional modules not found in the typical web browser out of the box. The client of the game should be able to run entirely in a single web page. In the future, the server for multiplayer will require nodeJS, but will also avoid extraneous modules not found in nodeJS.

The purpose of this is to demonstrate the core principals of game design, allowing developers direct access to the nuts and bolts. If you are going to learn about game design, you should be looking at the algorithms that make it happen, instead of memorizing an engine API.

The game revolves around mounted racing and combat, but the engine can easily be retooled for many other types of games.

### Goals

- Physics with speed, force, gravity, friction, and weight.
- 3 dimensional space in a 2 dimensional context.
- Collision between rectangles/circles, and cyclinders and cubes.
- Nav Mesh generation and A* pathfinding.
- Full compatibility with Mouse/Keyboard, Touchscreen, and Gamepad.
- Multiplayer via websockets
- AI Training