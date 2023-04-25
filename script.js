const tilesContainer = document.querySelector('.tiles');
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPicklIST = [...colors, ...colors];
const titleCount = colorsPicklIST.length

// Game state
let revealedCount = 0; //num of tiles user got guessed correct
let activeTile = null; //tile, user just clicked on
let awaitingEndOfMove = false //wait for incorrect tiles to move back

//building tiles
function buildTiles(color){
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-color", color)

    return element
}

// Building tiles in dom
for(let i = 0; i < titleCount; i++){
    const randomColor = Math.floor(Math.random() * colorsPicklIST.length);
    const color = colorsPicklIST[randomColor];
    const tile = buildTiles(color);

    colorsPicklIST.splice(randomColor, 1);

    tilesContainer.appendChild(tile);
    
}
