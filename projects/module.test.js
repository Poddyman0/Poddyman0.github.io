const { shipsFactory,
    gameboardFactory,
    playerFactory } = require('./module');


describe('shipsFactory tests', () => {
    test('shipsFactory creates a ship correctly', () => {
        const ship = shipsFactory(2, [[0,0],[0,1]]);
        expect(ship.length).toBe(2);
        expect(ship.coordinatesOfShip).toEqual([[0,0],[0,1]]);
        expect(ship.hits).toBe(0);
        expect(ship.sunk).toBe(false);
    });
    test('shipsFactory hit function increases by one upon being called', () => {
        const ship = shipsFactory(2, [[0,0],[0,1]]);
        ship.hit()
        expect(ship.hits).toBe(1);
    });
    test('shipsFactory isSunk function returns true when length of ship equals hits', () => {
        const ship = shipsFactory(2, [[0,0],[0,1]]);
        ship.hit()
        ship.hit()
        ship.isSunk()
        expect(ship.hits).toBe(2);
        expect(ship.sunk).toBe(true);
    });
    test('shipsFactory isSunk function returns false when length of ship is greater than hits', () => {
        const ship = shipsFactory(2, [[0,0],[0,1]]);
        ship.hit()
        ship.isSunk()
        expect(ship.hits).toBe(1);
        expect(ship.sunk).toBe(false);
    });
    test('shipsFactory isSunk function returns false true length of ship is less than than hits', () => {
        const ship = shipsFactory(2, [[0,0],[0,1]]);
        ship.hit()
        ship.hit()
        ship.hit()
        ship.isSunk()
        expect(ship.hits).toBe(3);
        expect(ship.sunk).toBe(true);
    });
})
describe('gameboardFactory', () => {
    test('gameboard returns 10 columns and 10 rows with 100 tiles on the board', () => {
        const playerShip1 = shipsFactory (2, [[0,0],[0,1]]);
        const playerShip2 = shipsFactory (3, [[1,0],[1,1],[1,2]]);
        const playerShip3 = shipsFactory (2, [[2,2],[2, 3]]);
        const playerShip4 = shipsFactory (1, [[0, 3]]);
        const playerShip5 = shipsFactory (2, [[3,3],[3, 4]]);
        const playerShip6 = shipsFactory (1, [[4,3],[4, 4]]);
        const playerShip7 = shipsFactory (4, [[5,1],[5, 2],[5,3],[5,4]]);
        const playerShip8 = shipsFactory (1, [[6,6]]);
        const playerShip9 = shipsFactory (1, [[7,7]]);
        const playerShip10 = shipsFactory (3, [[8,0],[8, 1]]);

        const playerShips = [
            playerShip1, 
            playerShip2, 
            playerShip3, 
            playerShip4, 
            playerShip5, 
            playerShip6, 
            playerShip7, 
            playerShip8, 
            playerShip9, 
            playerShip10
        ]
        const gameboard = gameboardFactory(playerShips)
        expect(gameboard.board.length).toBe(10);
        expect(gameboard.board[0].length).toBe(10);
    })
    test('a gamboard tile has properties of ship, coordinates, attacked and missed', () => {
        const playerShip1 = shipsFactory (2, [[0,0],[0,1]]);
        const playerShip2 = shipsFactory (3, [[1,0],[1,1],[1,2]]);
        const playerShip3 = shipsFactory (2, [[2,2],[2, 3]]);
        const playerShip4 = shipsFactory (1, [[0, 3]]);
        const playerShip5 = shipsFactory (2, [[3,3],[3, 4]]);
        const playerShip6 = shipsFactory (1, [[4,3],[4, 4]]);
        const playerShip7 = shipsFactory (4, [[5,1],[5, 2],[5,3],[5,4]]);
        const playerShip8 = shipsFactory (1, [[6,6]]);
        const playerShip9 = shipsFactory (1, [[7,7]]);
        const playerShip10 = shipsFactory (3, [[8,0],[8, 1]]);

        const playerShips = [
            playerShip1, 
            playerShip2, 
            playerShip3, 
            playerShip4, 
            playerShip5, 
            playerShip6, 
            playerShip7, 
            playerShip8, 
            playerShip9, 
            playerShip10
        ]
        const gameboard = gameboardFactory(playerShips)
        expect(gameboard.board[0][0].ship).toBe(null);
        expect(gameboard.board[0][0].coordinates.length).toBe(2)
        expect(gameboard.board[0][0].coordinates[0]).toBe(0)
        expect(gameboard.board[0][0].coordinates[1]).toBe(0)
        expect(gameboard.board[0][0].attacked).toBe(false)
        expect(gameboard.board[0][0].missed).toBe(false)
    })
    test('gameboards placeShipsAtCoordinates function successfully places ships at given coordinates', () => {
        const playerShip1 = shipsFactory (2, [[0,0],[0,1]]);
        const playerShip2 = shipsFactory (3, [[1,0],[1,1],[1,2]]);
        const playerShip3 = shipsFactory (2, [[2,2],[2, 3]]);
        const playerShip4 = shipsFactory (1, [[0, 3]]);
        const playerShip5 = shipsFactory (2, [[3,3],[3, 4]]);
        const playerShip6 = shipsFactory (1, [[4,3],[4, 4]]);
        const playerShip7 = shipsFactory (4, [[5,1],[5, 2],[5,3],[5,4]]);
        const playerShip8 = shipsFactory (1, [[6,6]]);
        const playerShip9 = shipsFactory (1, [[7,7]]);
        const playerShip10 = shipsFactory (3, [[8,0],[8, 1]]);

        const playerShips = [
            playerShip1, 
            playerShip2, 
            playerShip3, 
            playerShip4, 
            playerShip5, 
            playerShip6, 
            playerShip7, 
            playerShip8, 
            playerShip9, 
            playerShip10
        ]
        const gameboard = gameboardFactory(playerShips)
        gameboard.placeShipsAtCoordinates ()
        console.log("one", gameboard.placeShipsAtCoordinates ())
        expect(gameboard.board[0][0].ship).not.toBe(null);
        expect(gameboard.board[0][0].ship.length).toBe(2);
        expect(gameboard.board[0][0].ship.coordinatesOfShip.length).toBe(2);
        expect(gameboard.board[0][0].ship.coordinatesOfShip[0]).toEqual([0, 0]);
        expect(gameboard.board[0][0].ship.hits).toBe(0);
        expect(gameboard.board[0][0].ship.sunk).toBe(false);
     
    })
    test('gameboards recieves attack function returns attacked true when hit, missed returns false, the ship hit increases by one and isSuck checks if hits equal length', () => {
        const playerShip1 = shipsFactory (2, [[0,0],[0,1]]);
        const playerShip2 = shipsFactory (3, [[1,0],[1,1],[1,2]]);
        const playerShip3 = shipsFactory (2, [[2,2],[2, 3]]);
        const playerShip4 = shipsFactory (1, [[0, 3]]);
        const playerShip5 = shipsFactory (2, [[3,3],[3, 4]]);
        const playerShip6 = shipsFactory (1, [[4,3],[4, 4]]);
        const playerShip7 = shipsFactory (4, [[5,1],[5, 2],[5,3],[5,4]]);
        const playerShip8 = shipsFactory (1, [[6,6]]);
        const playerShip9 = shipsFactory (1, [[7,7]]);
        const playerShip10 = shipsFactory (3, [[8,0],[8, 1]]);

        const playerShips = [
            playerShip1, 
            playerShip2, 
            playerShip3, 
            playerShip4, 
            playerShip5, 
            playerShip6, 
            playerShip7, 
            playerShip8, 
            playerShip9, 
            playerShip10
        ]
        const gameboard = gameboardFactory(playerShips)
        gameboard.placeShipsAtCoordinates();
        gameboard.recieveAttack ([0, 0])
        gameboard.recieveAttack ([0, 1])

        expect(gameboard.board[0][0].attacked).toBe(true);
        expect(gameboard.board[0][0].missed).toBe(false);
        expect(gameboard.board[0][0].ship.hits).toBe(2);
        expect(gameboard.board[0][0].ship.sunk).toBe(true);
        
    })
    test('gameboards recieves attack function returns attacked false tile does not have a ship whilst missed returns true', () => {
        const playerShip1 = shipsFactory (2, [[0,0],[0,1]]);
        const playerShip2 = shipsFactory (3, [[1,0],[1,1],[1,2]]);
        const playerShip3 = shipsFactory (2, [[2,2],[2, 3]]);
        const playerShip4 = shipsFactory (1, [[0, 3]]);
        const playerShip5 = shipsFactory (2, [[3,3],[3, 4]]);
        const playerShip6 = shipsFactory (1, [[4,3],[4, 4]]);
        const playerShip7 = shipsFactory (4, [[5,1],[5, 2],[5,3],[5,4]]);
        const playerShip8 = shipsFactory (1, [[6,6]]);
        const playerShip9 = shipsFactory (1, [[7,7]]);
        const playerShip10 = shipsFactory (3, [[8,0],[8, 1]]);

        const playerShips = [
            playerShip1, 
            playerShip2, 
            playerShip3, 
            playerShip4, 
            playerShip5, 
            playerShip6, 
            playerShip7, 
            playerShip8, 
            playerShip9, 
            playerShip10
        ]
        const gameboard = gameboardFactory(playerShips)
        gameboard.placeShipsAtCoordinates();
        gameboard.recieveAttack ([0, 4])
        expect(gameboard.board[0][4].attacked).toBe(false);
        expect(gameboard.board[0][4].missed).toBe(true);
        expect(gameboard.board[0][4].ship).toBe(null);
        
    })
    test('gameboards allShipSunkFunction returns true when all 20 of the ships tiles are sunk', () => {
        const playerShip1 = shipsFactory (2, [[0,0],[0,1]]);
        const playerShip2 = shipsFactory (3, [[1,0],[1,1],[1,2]]);
        const playerShip3 = shipsFactory (2, [[2,2],[2, 3]]);
        const playerShip4 = shipsFactory (1, [[0, 3]]);
        const playerShip5 = shipsFactory (2, [[3,3],[3, 4]]);
        const playerShip6 = shipsFactory (1, [[4,3],[4, 4]]);
        const playerShip7 = shipsFactory (4, [[5,1],[5, 2],[5,3],[5,4]]);
        const playerShip8 = shipsFactory (1, [[6,6]]);
        const playerShip9 = shipsFactory (1, [[7,7]]);
        const playerShip10 = shipsFactory (3, [[8,0],[8, 1]]);

        const playerShips = [
            playerShip1, 
            playerShip2, 
            playerShip3, 
            playerShip4, 
            playerShip5, 
            playerShip6, 
            playerShip7, 
            playerShip8, 
            playerShip9, 
            playerShip10
        ]
        const gameboard = gameboardFactory(playerShips)
        gameboard.placeShipsAtCoordinates();
        gameboard.recieveAttack ([0,0])
        gameboard.recieveAttack ([0,1])
        gameboard.recieveAttack ([1,0])
        gameboard.recieveAttack ([1,1])
        gameboard.recieveAttack ([1,2])
        gameboard.recieveAttack ([2,2])
        gameboard.recieveAttack ([2,3])
        gameboard.recieveAttack ([0,3])
        gameboard.recieveAttack ([3,3])
        gameboard.recieveAttack ([3,4])
        gameboard.recieveAttack ([4,3])
        gameboard.recieveAttack ([4,4])
        gameboard.recieveAttack ([5,1])
        gameboard.recieveAttack ([5,2])
        gameboard.recieveAttack ([5,3])
        gameboard.recieveAttack ([5,4])
        gameboard.recieveAttack ([6,6])
        gameboard.recieveAttack ([7,7])
        gameboard.recieveAttack ([8,0])
        gameboard.recieveAttack ([8,1])

        gameboard.allShipsSunkFunction()
        expect(gameboard.allShipsSunkFunction()).toBe(true);
        
    })
    test('gameboards allShipSunkFunction returns false when not all 20 of the ships tiles are sunk', () => {
        const playerShip1 = shipsFactory (2, [[0,0],[0,1]]);
        const playerShip2 = shipsFactory (3, [[1,0],[1,1],[1,2]]);
        const playerShip3 = shipsFactory (2, [[2,2],[2, 3]]);
        const playerShip4 = shipsFactory (1, [[0, 3]]);
        const playerShip5 = shipsFactory (2, [[3,3],[3, 4]]);
        const playerShip6 = shipsFactory (1, [[4,3],[4, 4]]);
        const playerShip7 = shipsFactory (4, [[5,1],[5, 2],[5,3],[5,4]]);
        const playerShip8 = shipsFactory (1, [[6,6]]);
        const playerShip9 = shipsFactory (1, [[7,7]]);
        const playerShip10 = shipsFactory (3, [[8,0],[8, 1]]);

        const playerShips = [
            playerShip1, 
            playerShip2, 
            playerShip3, 
            playerShip4, 
            playerShip5, 
            playerShip6, 
            playerShip7, 
            playerShip8, 
            playerShip9, 
            playerShip10
        ]
        const gameboard = gameboardFactory(playerShips)
        gameboard.placeShipsAtCoordinates();
        gameboard.recieveAttack ([0,0])
        gameboard.recieveAttack ([0,1])
        gameboard.recieveAttack ([1,0])
        gameboard.recieveAttack ([1,1])
        gameboard.recieveAttack ([1,2])
        gameboard.recieveAttack ([2,2])
        gameboard.recieveAttack ([2,3])
        gameboard.recieveAttack ([0,3])
        gameboard.recieveAttack ([3,3])
        gameboard.recieveAttack ([3,4])


        gameboard.allShipsSunkFunction()
        expect(gameboard.allShipsSunkFunction()).toBe(false);
        
    })
    describe('playerFactory', () => {
        test('returns player names and their gameboards', () => {
            const playerShip1 = shipsFactory (2, [[0,0],[0,1]]);
            const playerShip2 = shipsFactory (3, [[1,0],[1,1],[1,2]]);
            const playerShip3 = shipsFactory (2, [[2,2],[2, 3]]);
            const playerShip4 = shipsFactory (1, [[0, 3]]);
            const playerShip5 = shipsFactory (2, [[3,3],[3, 4]]);
            const playerShip6 = shipsFactory (1, [[4,3],[4, 4]]);
            const playerShip7 = shipsFactory (4, [[5,1],[5, 2],[5,3],[5,4]]);
            const playerShip8 = shipsFactory (1, [[6,6]]);
            const playerShip9 = shipsFactory (1, [[7,7]]);
            const playerShip10 = shipsFactory (3, [[8,0],[8, 1]]);
    
            const playerShips = [
                playerShip1, 
                playerShip2, 
                playerShip3, 
                playerShip4, 
                playerShip5, 
                playerShip6, 
                playerShip7, 
                playerShip8, 
                playerShip9, 
                playerShip10
            ]
            console.log(playerFactory("test name", playerShips))
            expect(playerFactory("test name", playerShips).name).toBe("test name");



        })
    })
})
