
/*
document.addEventListener('DOMContentLoaded', function(event) {   
//functions and variables in here.
})
*/
//dom manipulation

function shipsFactory (length, location) {
    let hits = 0
    let sunk = false
    let coordinatesOfShip = location

    function hit () {
        hits += 1
       return hits
    }
    
    function isSunk () {
       if (length > hits) {
            sunk = false
            return sunk
        } else if (length <= hits) {
            sunk = true
            return sunk
        }
    }
    return {
        length,
        coordinatesOfShip,
        get hits() {
            return hits;
        },
        get sunk() {
            return sunk;
        },
        hit,
        isSunk
        
    };
}


/*how to use
console.log(shipTest)
console.log(shipTest.hit())
console.log(shipTest.isSunk())
*/

// gameboard factory
function gameboardFactory(shipArray) {
    const board = [];
    let allShipsSunk = 0
    // ship (length), coordinates (array), hits (numerical), 
    
    for (let row = 0; row < 10; row++) {
        const currentRow = [];
        for (let col = 0; col < 10; col++) {
            currentRow.push({
                ship: null,
                coordinates: [row, col],
                attacked: false,
                missed: false
            });
        }
        //console.log(currentRow)
        board.push(currentRow);
    }
    //place ships at coordinates
    function placeShipsAtCoordinates () {
        board.forEach(tenTile => {
            tenTile.forEach(tile => {
                shipArray.forEach(ship => {
                    ship.coordinatesOfShip.forEach(coordinate => {
                        if (tile.coordinates[0] === coordinate[0] &&  tile.coordinates[1] === coordinate[1]) {
                            tile.ship = ship
                        } 
                    })
                })

            })            
          });
        return board
    }
    //recieve attack takes coordinates if ship hit then true, if not them false
    function recieveAttack (attackCoordinates) {
        board.forEach(tenTile => {
            tenTile.forEach(tile => {
                if (tile.coordinates[0] == attackCoordinates[0] && tile.coordinates[1] == attackCoordinates[1]) {
                    if (tile.ship != null) {
                        tile.attacked = true
                        tile.missed = false
                        tile.ship.hit();        // ← also fix this (see below)
                        tile.ship.isSunk();
                        allShipsSunk += 1

                    } else if (tile.ship == null) {
                        tile.attacked = false
                        tile.missed = true
                    }
                }

                })
            }) 
            return board           
    }
    function allShipsSunkFunction () {
        if (allShipsSunk === 20) {
            return true
        } else {
            return false
        }
    }
    return {
        board,
        placeShipsAtCoordinates,
        recieveAttack,
        allShipsSunkFunction
    };
};





function playerFactory(playerName, gameBoard) {
    return {
        name: playerName,
        gameBoard
    };
}




//console.log("test Board:", testBoard.board)
// computer tiles
export { shipsFactory, gameboardFactory, playerFactory };
/*for testing
module.exports = {
    shipsFactory,
    gameboardFactory,
    playerFactory
};
*/
