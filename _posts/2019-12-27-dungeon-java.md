---
layout: post
title: Escape a Dungeon of Vampires!
categories: [Software Development]
tags: [Java]
---

I have recently started learning to code in Java, with the end-goal being getting acquainted with common Data Structures and Algorithms. While working on the really enriching [Helsinki MOOC](https://moocfi.github.io/courses/2013/programming-part-1/), I was able to create a Dungeon game from scratch. Although it's a really simple game, I do feel really accomplished as a Java beginner to have completed this and hence am documenting it :-)

Below is an example of what users will see when starting the program in a terminal as such:

```java
java -jar dungeon_game.jar
```

The game starts by asking users to set up the board length and width, the lifespan of the lamp they are carrying (i.e. the number of moves), the number of vampires in the game and whether the vampires can move.

![game_init](https://raw.githubusercontent.com/jolene-lim/personal_projects/master/java_apps/dungeon_game/dungeon_interface/game_init.PNG)

The game then prints number of moves left, the positions of the player and all vampires, as well as a graphical representation of them, with `@` representing the player and `v` representing a vampire.

![game_start](https://raw.githubusercontent.com/jolene-lim/personal_projects/master/java_apps/dungeon_game/dungeon_interface/game_start.PNG)

Players then move by entering a combination of WASD keys. If the player lands on a vampire, it will defeat the vampire with the lamp its carrying and the vampire will die.

![game_eat](https://raw.githubusercontent.com/jolene-lim/personal_projects/master/java_apps/dungeon_game/dungeon_interface/game_eat.PNG)
_5 vampires down, 5 to go!_

After the set number of moves, if there are still vampires left, the game prints "YOU LOSE". If a player is able to carefully count their steps and kill all the vampires, he wins!

![game_end](https://raw.githubusercontent.com/jolene-lim/personal_projects/master/java_apps/dungeon_game/dungeon_interface/game_end.PNG)

This was definitely a pretty simple game but it was harder to create than I initially thought!

**The relevant Github repo can be found [here](https://github.com/jolene-lim/personal_projects/tree/master/java_apps/dungeon_game)**
