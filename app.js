let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");

reset.addEventListener('click', ()=> resetGame())


let oTurn = true;
let gameOver = false;



const winpatt = [
    [0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
    [6,7,8],
];

 // Select the container div with class "game"
 const gameContainer = document.querySelector(".game");

 const resetGame = () => {
    oTurn = true
    gameOver = false
    xMoves.length = 0
    oMoves.length = 0
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.innerText = ''
    })
}

function createGameBoard() {
    for (let i = 0; i < 9; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.dataset.index = i;
        gameContainer.appendChild(box);
    }
}

// Call the function to create the game board
createGameBoard();



const xMoves = []
const oMoves = []

const isWinner = (player, moves) => {
    if(moves.length < 3) return
    winpatt.forEach((pattern)=> {
        let match = true
        pattern.forEach((index)=> {
            if (!moves.includes(index)) match = false
        })
        if(match) {
            window.alert(player + ' won!') 
            gameOver = true
        }
       
    }) 
}


const selectBox = (box) => {
    if(gameOver || box.innerText) return
    const index = box.dataset.index
    if(oTurn) {
        box.innerText = 'O'
        oMoves.push(Number(index))
        isWinner('O', oMoves)
    }
    else {
        box.innerText = 'X'
        xMoves.push(Number(index))
        isWinner('X', xMoves) 
    }
    oTurn = !oTurn
}


gameContainer.addEventListener('click', (e)=> {
    const clickedBox = e.target
    selectBox(clickedBox)
})

