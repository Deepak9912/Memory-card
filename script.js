const tilesContainer = document.querySelector('.tiles');
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPicklIST = [...colors, ...colors]; // spread operator
const titleCount = colorsPicklIST.length

// Game state
let revealedCount = 0; //num of tiles user got guessed correct
let activeTile = null; //tile, user just clicked on
let awaitingEndOfMove = false //wait for incorrect tiles to move back

//building tiles
function buildTiles(color){
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false");

    //to display color when clicked
    element.addEventListener('click', function(){
        const revealed = element.getAttribute("data-revealed");

        if(awaitingEndOfMove || revealed === 'true' || element === activeTile){
            return;
        }

        element.style.backgroundColor = color;

        if(!activeTile){
            activeTile = element;
            return;
        }

        const colotToMatch = activeTile.getAttribute("data-color");
        if(colotToMatch === color){
            activeTile.setAttribute("data-revealed", "true");
            element.setAttribute("data-revealed", "true");

            awaitingEndOfMove = false;
            activeTile = null;
            revealedCount = +2;

            if (revealedCount === titleCount){
                alert("Congrats! you won.")
            }
        }

        awaitingEndOfMove = true;

        setTimeout(function(){
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor = null;

            awaitingEndOfMove = false;
            activeTile = null;
        }, 1000);
        
    });

    return element;
}

// Building tiles in dom
for(let i = 0; i < titleCount; i++){
    const randomColor = Math.floor(Math.random() * colorsPicklIST.length);
    const color = colorsPicklIST[randomColor];
    const tile = buildTiles(color);

    colorsPicklIST.splice(randomColor, 1);

    tilesContainer.appendChild(tile);
    
}
