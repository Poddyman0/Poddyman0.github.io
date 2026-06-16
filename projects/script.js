import { shipsFactory, gameboardFactory, playerFactory } from './module.js';
let computerGameboard 


let playerShipsArray = []
let playerGameboard
document.addEventListener('DOMContentLoaded', function(event) {   


    renderPlayerBoardShipPlacement (playerShipsArray, playerGameboard, computerGameboard)

})



// comp
function renderComputerBoardShipPlacement (computerGameboard, playerGameboard) {
// random: coordinates

// can't place the different ships on the same tile.
/*

function getRandomAxis() {
    return Math.random() < 0.5 ? "horizontal" : "vertical";
}

function getRandomNumberLength1() {
    return Math.floor(Math.random() * 10);
}

function getRandomNumberLength2 () {
    return Math.floor(Math.random() * 9);
}
function getRandomNumberLength3() {
    return Math.floor(Math.random() * 8);
}
function getRandomNumberLength4() {
    return Math.floor(Math.random() * 7);
}

let coordinatesFilled = []




//
//length 1
let ship4Row = getRandomNumberLength1()
let ship4Col = getRandomNumberLength1()
let ship4AxisCoordinates0 = [ship4Row, ship4Col]
coordinatesFilled.push(ship4AxisCoordinates0)

let ship6Row = getRandomNumberLength1()
let ship6Col = getRandomNumberLength1()
let ship6AxisCoordinates0 = [ship6Row, ship6Col]
coordinatesFilled.push(ship6AxisCoordinates0)

let ship8Row = getRandomNumberLength1()
let ship8Col = getRandomNumberLength1()
let ship8AxisCoordinates0 = [ship8Row, ship8Col]
coordinatesFilled.push(ship8AxisCoordinates0)

let ship9Row = getRandomNumberLength1()
let ship9Col = getRandomNumberLength1()
let ship9AxisCoordinates0 = [ship9Row, ship9Col]
coordinatesFilled.push(ship9AxisCoordinates0)


//length 2
let ship1Row = getRandomNumberLength2()
let ship1Col = getRandomNumberLength2()
let ship1AxisCoordinates0 = [ship1Row, ship1Col]
let ship1Axis = getRandomAxis()
let ship1AxisCoordinates1 = []
if (ship1Axis == "horizontal") {
    ship1AxisCoordinates1 = []
    ship1AxisCoordinates1.push(ship1Row)
    ship1AxisCoordinates1.push(ship1Col + 1)

} else if (ship1Axis == "vertical") {
    ship1AxisCoordinates1 = []
    ship1AxisCoordinates1.push(ship1Row +1)
    ship1AxisCoordinates1.push(ship1Col)
}
coordinatesFilled.push(ship1AxisCoordinates0)
coordinatesFilled.push(ship1AxisCoordinates1)


let ship3Row = getRandomNumberLength2()
let ship3Col = getRandomNumberLength2()
let ship3Axis = getRandomAxis()
let ship3AxisCoordinates0 = [ship3Row, ship3Col]
let ship3AxisCoordinates1 = []
if (ship3Axis == "horizontal") {
    ship3AxisCoordinates1 = []
    ship3AxisCoordinates1.push(ship3Row)
    ship3AxisCoordinates1.push(ship3Col + 1)

} else if (ship3Axis == "vertical") {
    ship3AxisCoordinates1 = []
    ship3AxisCoordinates1.push(ship3Row +1)
    ship3AxisCoordinates1.push(ship3Col)
}
coordinatesFilled.push(ship3AxisCoordinates0)
coordinatesFilled.push(ship3AxisCoordinates1)


let ship5Row = getRandomNumberLength2()
let ship5Col = getRandomNumberLength2()
let ship5Axis = getRandomAxis()
let ship5AxisCoordinates0 = [ship5Row, ship5Col]
let ship5AxisCoordinates1 = []
if (ship5Axis == "horizontal") {
    ship5AxisCoordinates1 = []
    ship5AxisCoordinates1.push(ship5Row)
    ship5AxisCoordinates1.push(ship5Col + 1)

} else if (ship5Axis == "vertical") {
    ship5AxisCoordinates1 = []
    ship5AxisCoordinates1.push(ship5Row +1)
    ship5AxisCoordinates1.push(ship5Col)
}
coordinatesFilled.push(ship5AxisCoordinates0)
coordinatesFilled.push(ship5AxisCoordinates1)


//length 3
let ship2Row = getRandomNumberLength3()
let ship2Col = getRandomNumberLength3()
let ship2Axis = getRandomAxis()
let ship2AxisCoordinates0 = [ship2Row, ship2Col]
let ship2AxisCoordinates1 = []
let ship2AxisCoordinates2 = []

if (ship2Axis == "horizontal") {
    ship2AxisCoordinates1 = []
    ship2AxisCoordinates1.push(ship2Row)
    ship2AxisCoordinates1.push(ship2Col + 1)
    ship2AxisCoordinates2 =[]
    ship2AxisCoordinates2.push(ship2Row)
    ship2AxisCoordinates2.push(ship2Col + 2)

} else if (ship2Axis == "vertical") {
    ship2AxisCoordinates1 = []
    ship2AxisCoordinates1.push(ship2Row +1)
    ship2AxisCoordinates1.push(ship2Col)
    ship2AxisCoordinates2 =[]
    ship2AxisCoordinates2.push(ship2Row + 2)
    ship2AxisCoordinates2.push(ship2Col)
}
coordinatesFilled.push(ship2AxisCoordinates0)
coordinatesFilled.push(ship2AxisCoordinates1)
coordinatesFilled.push(ship2AxisCoordinates2)


let ship10Row = getRandomNumberLength3()
let ship10Col = getRandomNumberLength3()
let ship10Axis = getRandomAxis()
let ship10AxisCoordinates0 = [ship10Row, ship10Col]
let ship10AxisCoordinates1 = []
let ship10AxisCoordinates2 = []

if (ship10Axis == "horizontal") {
    ship10AxisCoordinates1 = []
    ship10AxisCoordinates1.push(ship10Row)
    ship10AxisCoordinates1.push(ship10Col + 1)
    ship10AxisCoordinates2 =[]
    ship10AxisCoordinates2.push(ship10Row)
    ship10AxisCoordinates2.push(ship10Col + 2)

} else if (ship10Axis == "vertical") {
    ship10AxisCoordinates1 = []
    ship10AxisCoordinates1.push(ship10Row +1)
    ship10AxisCoordinates1.push(ship10Col)
    ship10AxisCoordinates2 =[]
    ship10AxisCoordinates2.push(ship10Row + 2)
    ship10AxisCoordinates2.push(ship10Col)
}
coordinatesFilled.push(ship10AxisCoordinates0)
coordinatesFilled.push(ship10AxisCoordinates1)
coordinatesFilled.push(ship10AxisCoordinates2)


//length 4
let ship7Row = getRandomNumberLength4()
let ship7Col = getRandomNumberLength4()
let ship7Axis = getRandomAxis()
let ship7AxisCoordinates0 = [ship7Row, ship7Col]
let ship7AxisCoordinates1 = []
let ship7AxisCoordinates2 = []
let ship7AxisCoordinates3 = []

if (ship7Axis == "horizontal") {
    ship7AxisCoordinates1 = []
    ship7AxisCoordinates1.push(ship7Row)
    ship7AxisCoordinates1.push(ship7Col + 1)
    ship7AxisCoordinates2 =[]
    ship7AxisCoordinates2.push(ship7Row)
    ship7AxisCoordinates2.push(ship7Col + 2)
    ship7AxisCoordinates3 =[]
    ship7AxisCoordinates3.push(ship7Row)
    ship7AxisCoordinates3.push(ship7Col + 3)
} else if (ship7Axis == "vertical") {
    ship7AxisCoordinates1 = []
    ship7AxisCoordinates1.push(ship7Row +1)
    ship7AxisCoordinates1.push(ship7Col)
    ship7AxisCoordinates2 =[]
    ship7AxisCoordinates2.push(ship7Row + 2)
    ship7AxisCoordinates2.push(ship7Col)
    ship7AxisCoordinates3 =[]
    ship7AxisCoordinates3.push(ship7Row + 3)
    ship7AxisCoordinates3.push(ship7Col)
}
coordinatesFilled.push(ship7AxisCoordinates0)
coordinatesFilled.push(ship7AxisCoordinates1)
coordinatesFilled.push(ship7AxisCoordinates2)
coordinatesFilled.push(ship7AxisCoordinates3)
console.log("coordinatesFilled", coordinatesFilled)


    let compShip1 = shipsFactory (2, [ship1AxisCoordinates0,ship1AxisCoordinates1])
    let compShip2 = shipsFactory (3, [ship2AxisCoordinates0,ship2AxisCoordinates1, ship2AxisCoordinates2])
    let compShip3 = shipsFactory (2, [ship3AxisCoordinates0,ship3AxisCoordinates1])
    let compShip4 = shipsFactory (1, [ship4AxisCoordinates0])
    let compShip5 = shipsFactory (2, [ship5AxisCoordinates0,ship5AxisCoordinates1])
    let compShip6 = shipsFactory (1, [ship6AxisCoordinates0])
    let compShip7 = shipsFactory (4, [ship7AxisCoordinates0, ship7AxisCoordinates1, ship7AxisCoordinates2, ship7AxisCoordinates3])
    let compShip8 = shipsFactory (1, [ship8AxisCoordinates0])
    let compShip9 = shipsFactory (1, [ship9AxisCoordinates0])
    let compShip10 = shipsFactory (3, [ship10AxisCoordinates0 ,ship10AxisCoordinates1, ship10AxisCoordinates2])

    computerShipsArray.push(compShip1)
    computerShipsArray.push(compShip2)
    computerShipsArray.push(compShip3)
    computerShipsArray.push(compShip4)
    computerShipsArray.push(compShip5)
    computerShipsArray.push(compShip6)
    computerShipsArray.push(compShip7)
    computerShipsArray.push(compShip8)
    computerShipsArray.push(compShip9)
    computerShipsArray.push(compShip10)

    computerGameboard = gameboardFactory(computerShipsArray)
    computerGameboard.placeShipsAtCoordinates();
    let computerFactoryVar = playerFactory("computer", computerGameboard) 
    randerComputerBoard (computerGameboard, computerFactoryVar)
*/
//
const occupied = new Set();
function coordKey(row, col) {
    return `${row},${col}`;
}
function generateShip(length) {
    const axis = Math.random() < 0.5 ? "horizontal" : "vertical";

    let row;
    let col;

    // Make sure ship stays inside board

    if (axis === "horizontal") {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * (11 - length));
    } else {
        row = Math.floor(Math.random() * (11 - length));
        col = Math.floor(Math.random() * 10);
    }

    const coords = [];

    for (let i = 0; i < length; i++) {
        if (axis === "horizontal") {
            coords.push([row, col + i]);
        } else {
            coords.push([row + i, col]);
        }
    }

    return coords;
}
function hasOverlap(shipCoords) {
    return shipCoords.some(([row, col]) =>
        occupied.has(coordKey(row, col))
    );
}
function placeShip(length) {
    while (true) {
        const shipCoords = generateShip(length);

        if (!hasOverlap(shipCoords)) {

            // reserve coordinates
            shipCoords.forEach(([row, col]) => {
                occupied.add(coordKey(row, col));
            });

            return shipCoords;
        }
    }
}
const shipLengths = [
    1, 1, 1, 1,
    2, 2, 2,
    3, 3,
    4
];

const computerShipsArray = [];

for (const length of shipLengths) {
    const coords = placeShip(length);

    const ship = shipsFactory(length, coords);

    computerShipsArray.push(ship);
}


computerGameboard = gameboardFactory(computerShipsArray)
computerGameboard.placeShipsAtCoordinates();
let computerFactoryVar = playerFactory("computer", computerGameboard) 
randerComputerBoard (computerGameboard, computerFactoryVar, playerGameboard)
//
}



// comp
function renderPlayerBoardShipPlacement (playerShipsArray, playerGameboard, computerGameboard) {
    let computerBoard = document.getElementById("computerBoard")
    computerBoard.style.display = "none"
    const playerShip1 = document.getElementById("playerShip1");
    playerShip1.setAttribute("draggable", true);
    playerShip1.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", playerShip1.id);
      });
    playerShip1.dataset.length = 2;
    playerShip1.dataset.orientation = "horizontal";
    playerShip1.style.width = "80px";
    playerShip1.style.height = "40px";

    document.getElementById("playerShip1ChangeAxis").addEventListener('click', () => {
        if (playerShip1.dataset.orientation === "horizontal") {
            playerShip1.dataset.orientation = "vertical"

            playerShip1.style.width = "40px";
            playerShip1.style.height = "80px";
        } else if (playerShip1.dataset.orientation === "vertical") {
            playerShip1.dataset.orientation = "horizontal"
            playerShip1.style.width = "80px";
            playerShip1.style.height = "40px";
        }
    });


    const playerShip2 = document.getElementById("playerShip2");
    playerShip2.setAttribute("draggable", true);
    playerShip2.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", playerShip2.id);
    });
    playerShip2.dataset.length = 3;
    playerShip2.dataset.orientation = "horizontal";
    playerShip2.style.width = "120px";
    playerShip2.style.height = "40px";
    document.getElementById("playerShip2ChangeAxis").addEventListener('click', () => {
        if (playerShip2.dataset.orientation === "horizontal") {
            playerShip2.dataset.orientation = "vertical"
            playerShip2.style.width = "40px";
            playerShip2.style.height = "120px";
        } else if (playerShip2.dataset.orientation === "vertical") {
            playerShip2.dataset.orientation = "horizontal"
            playerShip2.style.width = "120px";
            playerShip2.style.height = "40px";
        }
    });

    const playerShip3 = document.getElementById("playerShip3");
    playerShip3.setAttribute("draggable", true);
    playerShip3.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", playerShip3.id);
    });
    playerShip3.dataset.length = 2;
    playerShip3.dataset.orientation = "horizontal";
    playerShip3.style.width = "80px";
    playerShip3.style.height = "40px";
    document.getElementById("playerShip3ChangeAxis").addEventListener('click', () => {
        if (playerShip3.dataset.orientation === "horizontal") {
            playerShip3.dataset.orientation = "vertical"
            playerShip3.style.width = "40px";
            playerShip3.style.height = "80px";
        } else if (playerShip3.dataset.orientation === "vertical") {
            playerShip3.dataset.orientation = "horizontal"
            playerShip3.style.width = "80px";
            playerShip3.style.height = "40px";
        }
    });

    const playerShip4 = document.getElementById("playerShip4");
    playerShip4.setAttribute("draggable", true);
    playerShip4.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", playerShip4.id);
    });
    playerShip4.dataset.length = 1;
    playerShip4.dataset.orientation = "horizontal";
    playerShip4.style.width = "40px";
    playerShip4.style.height = "40px";
    document.getElementById("playerShip4ChangeAxis").addEventListener('click', () => {
        if (playerShip4.dataset.orientation === "horizontal") {
            playerShip4.dataset.orientation = "vertical"
            playerShip4.style.width = "40px";
            playerShip4.style.height = "40px";
        } else if (playerShip4.dataset.orientation === "vertical") {
            playerShip4.dataset.orientation = "horizontal"
            playerShip4.style.width = "40px";
            playerShip4.style.height = "40px";
        }
    });

    const playerShip5 = document.getElementById("playerShip5");
    playerShip5.setAttribute("draggable", true);
    playerShip5.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", playerShip5.id);
    });
    playerShip5.dataset.length = 2;
    playerShip5.dataset.orientation = "horizontal";
    playerShip5.style.width = "80px";
    playerShip5.style.height = "40px";
    document.getElementById("playerShip5ChangeAxis").addEventListener('click', () => {
        if (playerShip5.dataset.orientation === "horizontal") {
            playerShip5.dataset.orientation = "vertical"
            playerShip5.style.width = "40px";
            playerShip5.style.height = "80px";
        } else if (playerShip5.dataset.orientation === "vertical") {
            playerShip5.dataset.orientation = "horizontal"
            playerShip5.style.width = "80px";
            playerShip5.style.height = "40px";
        }
    });

    const playerShip6 = document.getElementById("playerShip6");
    playerShip6.setAttribute("draggable", true);
    playerShip6.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", playerShip6.id);
      });
      playerShip6.dataset.length = 1;
      playerShip6.dataset.orientation = "horizontal";
      playerShip6.style.width = "40px";
      playerShip6.style.height = "40px";
      document.getElementById("playerShip6ChangeAxis").addEventListener('click', () => {
          if (playerShip6.dataset.orientation === "horizontal") {
            playerShip6.dataset.orientation = "vertical"
            playerShip6.style.width = "40px";
            playerShip6.style.height = "40px";
          } else if (playerShip6.dataset.orientation === "vertical") {
            playerShip6.dataset.orientation = "horizontal"
            playerShip6.style.width = "40px";
            playerShip6.style.height = "40px";
          }
      });

    const playerShip7 = document.getElementById("playerShip7");
    playerShip7.setAttribute("draggable", true);
    playerShip7.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", playerShip7.id);
    });
    playerShip7.dataset.length = 4;
    playerShip7.dataset.orientation = "horizontal";
    playerShip7.style.width = "160px";
    playerShip7.style.height = "40px";
    document.getElementById("playerShip7ChangeAxis").addEventListener('click', () => {
        if (playerShip7.dataset.orientation === "horizontal") {
            playerShip7.dataset.orientation = "vertical"
            playerShip7.style.width = "40px";
            playerShip7.style.height = "160px";
        } else if (playerShip7.dataset.orientation === "vertical") {
            playerShip7.dataset.orientation = "horizontal"
            playerShip7.style.width = "160px";
            playerShip7.style.height = "40px";
        }
    });

    const playerShip8 = document.getElementById("playerShip8");
    playerShip8.setAttribute("draggable", true);
    playerShip8.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", playerShip8.id);
    });
    playerShip8.dataset.length = 1;
    playerShip8.dataset.orientation = "horizontal";
    playerShip8.style.width = "40px";
    playerShip8.style.height = "40px";
    document.getElementById("playerShip8ChangeAxis").addEventListener('click', () => {
        if (playerShip8.dataset.orientation === "horizontal") {
            playerShip8.dataset.orientation = "vertical"
            playerShip8.style.width = "40px";
            playerShip8.style.height = "40px";
        } else if (playerShip8.dataset.orientation === "vertical") {
            playerShip8.dataset.orientation = "horizontal"
            playerShip8.style.width = "40px";
            playerShip8.style.height = "40px";
        }
    });

    const playerShip9 = document.getElementById("playerShip9");
    playerShip9.setAttribute("draggable", true);
    playerShip9.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", playerShip9.id);
    });
    playerShip9.dataset.length = 1;
    playerShip9.dataset.orientation = "horizontal";
    playerShip9.style.width = "40px";
    playerShip9.style.height = "40px";
    document.getElementById("playerShip9ChangeAxis").addEventListener('click', () => {
        if (playerShip9.dataset.orientation === "horizontal") {
            playerShip9.dataset.orientation = "vertical"
            playerShip9.style.width = "40px";
            playerShip9.style.height = "40px";
        } else if (playerShip9.dataset.orientation === "vertical") {
            playerShip9.dataset.orientation = "horizontal"
            playerShip9.style.width = "40px";
            playerShip9.style.height = "40px";
        }
    });



    const playerShip10 = document.getElementById("playerShip10");
    playerShip10.setAttribute("draggable", true);
    playerShip10.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", playerShip10.id);
    });
    playerShip10.dataset.length = 3;
    playerShip10.dataset.orientation = "horizontal";
    playerShip10.style.width = "120px";
    playerShip10.style.height = "40px";
    document.getElementById("playerShip10ChangeAxis").addEventListener('click', () => {
        if (playerShip10.dataset.orientation === "horizontal") {
            playerShip10.dataset.orientation = "vertical"
            playerShip10.style.width = "40px";
            playerShip10.style.height = "120px";
        } else if (playerShip10.dataset.orientation === "vertical") {
            playerShip10.dataset.orientation = "horizontal"
            playerShip10.style.width = "120px";
            playerShip10.style.height = "40px";
        }
    });
 const boardArray = [];
    const board = document.getElementById('playerBoard');
    for (let row = 0; row < 10; row++) {
            const currentRow = [];
            for (let col = 0; col < 10; col++) {
                const tileDisplay = document.createElement('div');
                tileDisplay.className = 'cell';
                tileDisplay.dataset.row = row;
                tileDisplay.dataset.col = col;
                tileDisplay.addEventListener("dragover", (e) => {
                    e.preventDefault(); // without this, drop won't work
                });
                tileDisplay.addEventListener("drop", (e) => {
                    e.preventDefault();
                    const draggedId = e.dataTransfer.getData("text/plain");
                    const draggedElement = document.getElementById(draggedId);
                    const startRow = parseInt(tileDisplay.dataset.row);
                    const startCol = parseInt(tileDisplay.dataset.col);
                
                    const length = parseInt(draggedElement.dataset.length);
                    const orientation = draggedElement.dataset.orientation;


                    if (draggedElement.id === "playerShip1") {
                        if (orientation === "horizontal") {
                            console.log("orientation", orientation)
                            let cellsOccupied = [[startRow, startCol], [startRow, startCol + 1]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip1ChangeAxis").style.display = "none"
                        } else if (orientation === "vertical") {

                            let cellsOccupied = [[startRow, startCol], [startRow +1, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip1ChangeAxis").style.display = "none"


                        }
                    } else if (draggedElement.id === "playerShip2") {
                        if (orientation === "horizontal") {
                            let cellsOccupied = [[startRow, startCol], [startRow, startCol + 1], [startRow, startCol + 2]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip2ChangeAxis").style.display = "none"

                        } else if (orientation === "vertical") {
                            let cellsOccupied = [[startRow, startCol], [startRow +1, startCol], [startRow +2, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip2ChangeAxis").style.display = "none"

                        }
                    } else if (draggedElement.id === "playerShip3") {
                        if (orientation === "horizontal") {
                            let cellsOccupied = [[startRow, startCol], [startRow, startCol + 1]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip3ChangeAxis").style.display = "none"

                        } else if (orientation === "vertical") {
                            let cellsOccupied = [[startRow, startCol], [startRow +1, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            console.log("playerShipsArray", playerShipsArray)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip3ChangeAxis").style.display = "none"

                        }
                    } else if (draggedElement.id === "playerShip4") {
                        if (orientation === "horizontal") {
                            let cellsOccupied = [[startRow, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip4ChangeAxis").style.display = "none"

                        } else if (orientation === "vertical") {
                            let cellsOccupied = [[startRow, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip4ChangeAxis").style.display = "none"

                        }
                    } else if (draggedElement.id === "playerShip5") {
                        if (orientation === "horizontal") {
                            let cellsOccupied = [[startRow, startCol], [startRow, startCol + 1]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip5ChangeAxis").style.display = "none"

                        } else if (orientation === "vertical") {
                            let cellsOccupied = [[startRow, startCol], [startRow +1, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip5ChangeAxis").style.display = "none"

                        }
                    }else if (draggedElement.id === "playerShip6") {
                        if (orientation === "horizontal") {
                            let cellsOccupied = [[startRow, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip6ChangeAxis").style.display = "none"

                        } else if (orientation === "vertical") {
                            let cellsOccupied = [[startRow, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip6ChangeAxis").style.display = "none"

                        }
                    } else if (draggedElement.id === "playerShip7") {
                        if (orientation === "horizontal") {
                            let cellsOccupied = [[startRow, startCol], [startRow, startCol +1], [startRow, startCol+2], [startRow, startCol+3]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip7ChangeAxis").style.display = "none"

                        } else if (orientation === "vertical") {
                            let cellsOccupied = [[startRow, startCol], [startRow +1, startCol], [startRow+2, startCol], [startRow+3, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip7ChangeAxis").style.display = "none"

                        }
                    } else if (draggedElement.id === "playerShip8") {
                        if (orientation === "horizontal") {
                            let cellsOccupied = [[startRow, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip8ChangeAxis").style.display = "none"

                        } else if (orientation === "vertical") {
                            let cellsOccupied = [[startRow, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip8ChangeAxis").style.display = "none"

                        }
                    } else if (draggedElement.id === "playerShip9") {
                        if (orientation === "horizontal") {
                            let cellsOccupied = [[startRow, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip9ChangeAxis").style.display = "none"

                        } else if (orientation === "vertical") {
                            let cellsOccupied = [[startRow, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip9ChangeAxis").style.display = "none"

                        }
                    }else if (draggedElement.id === "playerShip10") {
                        if (orientation === "horizontal") {
                            let cellsOccupied = [[startRow, startCol], [startRow, startCol + 1], [startRow, startCol + 2]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip10ChangeAxis").style.display = "none"

                        } else if (orientation === "vertical") {
                            let cellsOccupied = [[startRow, startCol], [startRow +1, startCol], [startRow +2, startCol]]
                            const playerFactory = shipsFactory (draggedElement.dataset.length, cellsOccupied);
                            playerShipsArray.push(playerFactory)
                            draggedElement.style.display = "none";
                            document.getElementById("playerShip10ChangeAxis").style.display = "none"

                        }
                    }



                    if (playerShipsArray.length === 10 ) {
                        console.log("all ships")
                        playerGameboard = gameboardFactory(playerShipsArray)
                        playerGameboard.placeShipsAtCoordinates();
                        renderComputerBoardShipPlacement (computerGameboard, playerGameboard)

                        let playerFactoryVar = playerFactory("playerOne", playerGameboard) 
                        renderPlayerBoard (playerGameboard, playerFactoryVar, computerGameboard)

                    }



                    // rendering ships
                    
                    const occupiedCells = [];
                
                    for (let i = 0; i < length; i++) {
                        let row = startRow;
                        let col = startCol;
                
                        if (orientation === "horizontal") {
                            col += i;
                        } else {
                            row += i;
                        }
                
                        occupiedCells.push([row, col]);
                    }

                                            
                     
                    occupiedCells.forEach(([row, col]) => {
                        const targetCell = document.querySelector(
                            `.cell[data-row="${row}"][data-col="${col}"]`
                        );
                    
                        if (targetCell) {
                            // get ship color
                            const shipColor = window.getComputedStyle(draggedElement).backgroundColor;
                    
                            targetCell.style.backgroundColor = shipColor;

                        }
                    });







                })

                board.appendChild(tileDisplay)


            boardArray.push(currentRow);
        }
    }

}

//let playerGameboardPlaced;

function renderPlayerBoard (playerGameboard, playerFactoryVar, computerGameboard) {
    let computerBoard = document.getElementById("computerBoard")
    computerBoard.style.display = ""
    //playerGameboardPlaced = playerGameboard
    
        const board = document.getElementById('playerBoard');
        board.innerHTML = ""
        playerGameboard.board.forEach(tenTile => {
            tenTile.forEach(tile => {
                const tileDisplay = document.createElement('div');
                tileDisplay.className = 'cell';
                tileDisplay.id = `Player: [${tile.coordinates[0]}, ${tile.coordinates[1]}]`
                board.appendChild(tileDisplay)
                //
               // computerAttackPlayer(tileDisplay, tile, playerGameboard)
                   
            })
            //
        })
        computerAttackPlayer(playerGameboard, computerGameboard)


    
}


function randerComputerBoard (computerGameboard, computerFactoryVar, playerGameboard) {
    const board = document.getElementById('computerBoard');
    board.innerHTML = ""
    computerGameboard.board.forEach(tenTile => {
        tenTile.forEach(tile => {
            const tileDisplay = document.createElement('div');
            tileDisplay.className = 'cell';
            tileDisplay.id = `computer: [${tile.coordinates[0]}, ${tile.coordinates[1]}]`
            board.appendChild(tileDisplay)
            playerAttackComputer(tileDisplay, tile, computerGameboard, playerGameboard)

        })
    })

}

let computerShipsSunkCount = 0

function playerAttackComputer (tileDisplay, tile, computerGameboard, playerGameboard) {  
     
tileDisplay.addEventListener("click", function (e) {
    e.preventDefault()

     
        if (tile.ship != null ) {
            computerGameboard.recieveAttack (tile.coordinates)
            if (tile.attacked === true) {
                tileDisplay.style.backgroundColor = "red"
            } else if (tile.attacked === false) {
                tileDisplay.style.backgroundColor = "black"
            }
            if (tile.ship.sunk === true) {
                //working
                const computerShipsSunkDisplay = document.getElementById('computerShipsSunk')
                computerShipsSunkCount += 1
                computerShipsSunkDisplay.innerHTML = `${computerShipsSunkCount}`
            }
    
            let allShipsSunk = computerGameboard.allShipsSunkFunction ()
            if (allShipsSunk) {
                //working
                let verdictDisplay = document.getElementById('verdictComp')
                verdictDisplay.innerHTML = `Computer looses and player wins!`
            }
        } else if (tile.ship == null) {
            tileDisplay.style.backgroundColor = "black"
    
        }
        console.log("playerGameboard before attack:", playerGameboard);

        computerAttackPlayer(playerGameboard, computerGameboard)

})
}

let playerShipsSunkCount = 0

function computerAttackPlayer(playerGameboard, computerGameboard) {
    console.log("blrrr")

    const usedCoordinates = new Set();

    function getRandomCoordinate() {
        while (true) {
            const row = Math.floor(Math.random() * 10);
            const col = Math.floor(Math.random() * 10);
    
            const key = `${row},${col}`;
    
            if (!usedCoordinates.has(key)) {
                usedCoordinates.add(key);
                return [row, col];
            }
        }
    }
    console.log("playerGameboard", playerGameboard)
    let getRandomCoordinateToAttack = getRandomCoordinate()
    let displayCompAttackOnPlayer = document.getElementById(`Player: [${getRandomCoordinateToAttack[0]}, ${getRandomCoordinateToAttack[1]}]`)
    playerGameboard.board.forEach(tenTile => {
        tenTile.forEach(tile => {
            if (`${tile.coordinates}` === `${getRandomCoordinateToAttack}`) {
                console.log("tile", tile)
  //
                displayCompAttackOnPlayer.style.backgroundColor = "red"
//
                if (tile.ship !== null ) {
                    console.log("ship hit")
                    playerGameboard.recieveAttack (getRandomCoordinateToAttack)
                    if (tile.attacked === true) {

                    } else if (tile.attacked === false) {
                        console.log("miss")
                        displayCompAttackOnPlayer.style.backgroundColor = "blue"
                    }
                    if (tile.ship.sunk === true) {
                        //working
                        console.log("ship sunk")
                        const playerShipsSunkDisplay = document.getElementById('playerShipsSunk')
                        playerShipsSunkCount += 1
                        playerShipsSunkDisplay.innerHTML = `${playerShipsSunkCount}`
                    }
            
                    let allShipsSunk = playerGameboard.allShipsSunkFunction ()
                    if (allShipsSunk) {
                        console.log("all ships sunk")
                        //working
                        let verdictDisplay = document.getElementById('verdictPlayer')
                        verdictDisplay.innerHTML = `Player looses and computer wins!`
                    }
                } else if (tile.ship == null) {
                    console.log("ship miss!")
                    displayCompAttackOnPlayer.style.backgroundColor = "black"

                }
            }
        })
    })
    

    /*
    let playerShipsSunkCount = 0
     
    tileDisplay.addEventListener("click", function (e) {
        e.preventDefault()
        if (tile.ship != null ) {
            playerGameboard.recieveAttack (tile.coordinates)
            if (tile.attacked === true) {
                tileDisplay.style.backgroundColor = "red"
            } else if (tile.attacked === false) {
                tileDisplay.style.backgroundColor = "black"
            }
            if (tile.ship.sunk === true) {
                //working
                const playerShipsSunkDisplay = document.getElementById('playerShipsSunk')
                playerShipsSunkCount += 1
                playerShipsSunkDisplay.innerHTML = `${playerShipsSunkCount}`
            }
    
            let allShipsSunk = playerGameboard.allShipsSunkFunction ()
            if (allShipsSunk) {
                //working
                let verdictDisplay = document.getElementById('verdictPlayer')
                verdictDisplay.innerHTML = `${FactoryVar.name} looses and player wins!`
            }
        } else if (tile.ship == null) {
            tileDisplay.style.backgroundColor = "black"
    
        }
    })
    if (turn = true) {
        tileDisplay.click();
        turn = false
    }


    /*
    console.log("one turn")

            //console.log("tile", tile.coordinates)
            
            function getRandomCoordinate() {
                const row = Math.floor(Math.random() * 10); // 0–9
                const col = Math.floor(Math.random() * 10); // 0–9
                            
                                return [row, col];
            }
            let getRandomCoordinateToAttack = getRandomCoordinate()
            let displayCompAttackOnPlayer = document.getElementById(`Player: [${getRandomCoordinateToAttack[0]}, ${getRandomCoordinateToAttack[1]}]`)
            displayCompAttackOnPlayer.addEventListener('click', function (e) {
                e.preventDefault()
                console.log("an attack", getRandomCoordinateToAttack)
                playerGameboard.recieveAttack (getRandomCoordinateToAttack)
            })
            displayCompAttackOnPlayer.click();

            
            let playerGameboardPlacedAttacked = playerGameboardPlaced.recieveAttack (getRandomCoordinateToAttack)
            playerGameboardPlacedAttacked.forEach(tenTile => {
                tenTile.forEach(tile => {
                    if (tile.attacked === true) { 
                        console.log("an attack")
                        displayCompAttackOnPlayer.style.backgroundColor = "red"
                    } 
                })
            })
            */


                                    
}










