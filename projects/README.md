Battleship Game
Overview

For this project, I built a fully functional Battleship game using JavaScript, following a Test Driven Development (TDD) workflow. The goal of the project was to strengthen my understanding of unit testing, object-oriented design, modular application architecture, and DOM manipulation while creating a browser-based version of the classic Battleship game.

Throughout development, I focused on writing tests before implementing functionality, ensuring that each component behaved correctly before moving on to the next feature. The application was built using JavaScript modules, Jest for testing, and Babel to support ES Modules during testing.

Objectives

The primary objectives of this project were to:

Practice Test Driven Development using Jest.
Build reusable and testable JavaScript classes and modules.
Separate application logic from DOM manipulation.
Implement game state management and turn-based gameplay.
Create an interactive user interface that communicates with underlying game objects.
Develop a computer opponent capable of making valid random attacks.
Technologies Used
JavaScript (ES6 Modules)
Jest
Babel
HTML5
CSS3
Webpack
Development Approach

I approached the project using Test Driven Development. For every major feature, I first created failing unit tests, implemented the required functionality, and then refactored when necessary.

This process helped me break a large project into smaller, manageable tasks while maintaining confidence that new changes would not break existing functionality.

The application was designed around several core modules:

Ship
Gameboard
Player
Game Controller
DOM Controller

Each module was responsible for a specific part of the application, keeping the codebase organized and maintainable.

Ship Module

The Ship class represents an individual ship in the game.

Each ship stores:

Its length
Number of hits received
Sunk status
Features Implemented
hit()

The hit() method increases the number of successful hits recorded on the ship whenever an attack lands on one of its coordinates.

isSunk()

The isSunk() method determines whether the ship has been destroyed by comparing the number of hits received to the ship's length.

Testing

I created unit tests to verify:

Ships are initialized correctly.
Hits are recorded properly.
Ships report their sunk status accurately.
Ships remain afloat until their total hits equal their length.
Gameboard Module

The Gameboard class manages all ships and attacks for a player.

This module serves as the core game engine and handles most gameplay logic.

Features Implemented
Ship Placement

Ships can be placed at specific coordinates on the board.

The gameboard stores ship positions and prevents invalid placements.

Receiving Attacks

The receiveAttack() method:

Accepts coordinate inputs.
Determines whether a ship occupies the targeted location.
Calls the ship's hit() method when appropriate.
Records missed attacks separately.
Miss Tracking

All missed shots are stored and tracked to allow them to be displayed on the game board.

Fleet Status

The gameboard can determine whether all ships have been sunk, allowing the game to identify a winner.

Testing

I created tests to verify:

Ships are placed correctly.
Attacks successfully hit ships.
Missed attacks are recorded.
Duplicate attacks are handled appropriately.
Fleet destruction is reported accurately.
Player Module

The Player class represents either a human player or a computer-controlled opponent.

Each player owns an individual gameboard and interacts with an opposing gameboard during gameplay.

Features Implemented
Human Player

The human player attacks by selecting coordinates through the user interface.

Computer Player

The computer opponent generates random coordinates and performs attacks automatically.

The computer keeps track of previous attacks to ensure it never targets the same coordinate twice.

Testing

I created tests to verify:

Players are initialized correctly.
Players contain their own gameboards.
Computer attacks generate valid coordinates.
Computer players cannot repeat previous moves.
Game Controller

The Game Controller module manages the overall game flow.

Responsibilities
Creating players.
Starting a new game.
Managing turns.
Processing attacks.
Determining game-over conditions.
Switching between player and computer turns.

This module acts as the bridge between game logic and the user interface.

Turn Management

After a successful player attack:

The attack is processed.
The gameboard updates.
The interface re-renders.
Control passes to the computer.
The computer performs a valid attack.

The cycle continues until one fleet has been completely destroyed.

DOM Controller

To maintain separation of concerns, all DOM-related functionality was isolated within a dedicated module.

Responsibilities
Rendering gameboards.
Updating hit and miss markers.
Displaying game status messages.
Handling click events.
Refreshing the UI after every turn.

This separation allowed me to test application logic independently from the browser interface.

User Interface

The user interface displays two separate boards:

Player Board

Shows:

Ship locations
Hits received
Missed enemy attacks
Enemy Board

Shows:

Successful player attacks
Missed attacks
Hidden ship locations

Players attack by clicking cells on the enemy board.

After every attack, both boards are re-rendered to reflect the updated game state.

Game Flow
A new game initializes two players.
Ships are placed on both boards.
The player selects a target coordinate.
The enemy board receives the attack.
Results are displayed.
The computer performs a random valid attack.
Turns alternate until all ships belonging to one player are sunk.
The winner is announced and the game ends.
Testing Strategy

Testing was a major focus throughout development.

I used Jest to create unit tests for every public method exposed by the Ship, Gameboard, and Player modules.

Key areas covered include:

Ship functionality
Attack handling
Ship placement
Fleet destruction checks
Player creation
Computer move generation
Gameboard state management

By separating game logic from the DOM, I was able to test functionality without relying on browser rendering.

This resulted in a more maintainable and reliable codebase.

Challenges

One of the biggest challenges was designing the Gameboard module because it serves as the central component of the application.

Managing ship placement, attack resolution, hit detection, and win conditions required careful planning to keep responsibilities organized.

Another challenge was implementing the computer player. While the AI did not need advanced strategy, it still needed to generate random attacks while avoiding previously targeted coordinates.

Following the TDD workflow also required discipline. Writing tests before implementation initially slowed development, but ultimately made debugging easier and improved confidence in the final application.

Key Skills Demonstrated
Test Driven Development (TDD)
Unit Testing with Jest
Object-Oriented Programming
JavaScript Modules
ES6 Syntax
Event-Driven Programming
DOM Manipulation
State Management
Application Architecture
Problem Solving
Software Design Principles
Outcome

This project gave me valuable experience building a larger application with multiple interconnected modules while maintaining a strong testing workflow. By following TDD principles throughout development, I created a fully functional Battleship game that is modular, testable, and easy to maintain. The project strengthened my understanding of software architecture, testing practices, and managing complex application state in JavaScript.