# RA-Bootcamp

## Project 1 - Video Poker

### Motivation & Objectives

Create a video poker game using raw html, css and js.

### How to run

1. Using live server

- Install live server plugin in vscode
- Right click on index.html > run with live server

2. Using docker

- docker build -t video-poker .
- docker run -d -p 80:80 video-poker-test

#### Base Deliverables

- [x] Working Video Poker Game
- [x] Functions are to have JS doc strings

#### Comfortable Deliverables

- [x] Responsive design (working on both desktop browsers and mobile)
- [x] Modular functions
- [x] Design makes sense (consistent and flow)

#### More Comforable Deliverables

- [ ] Calculate probability of achieving closest hand when user swaps out card
- [ ] Implement 7 card draw instead of a 5 card draw

### Breakdown of tasks to complete Video Poker

A. Planning phase

1. Read and understand rules of Video poker, know the winning hands to determine win conditions
2. Wireframe design - behavior and layout

B. Coding phase

1. Create individual functions for checking each hand
   a. handSimp - from user hand (array of card obj), extract only card name and count instances of card name
   b. calculateHand - from handSimp, determine different win patterns - example 5 different cards - RF etc, 3 different cards - 2 pairs, 3 kind, 2 different cards - FH etc
2. Create frontend components (buttons, cards, displays)
3. Integrate and test flow of game (find bugs from here and fix)

C. Improvements

1. Add tests - Mocha? Jest?
2. Dockerize application? For deployment vs using github pages

#### A.2 Wireframe design

![wireframe design image](/assets/images/wireframe.png)
