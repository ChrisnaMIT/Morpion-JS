 let board = [
     ['','',''],// 0 1 2  pour les col et les row
     ['','',''],// 0 1 2
     ['','','']// 0 1 2
 ];

let currentPlayer = "X";



// la function maeMove permet de jouer en mettant une 'X' ou 'O', il permet aussi a naviger dans le tableau pour jouer

function makeMove (row, col){
    if(board[row][col] === ''){
        board [row][col] = currentPlayer;

        displayBoard();

        //quand le joueur gagne il y a une alert
        if(checkWin (currentPlayer)) {
            alert(`Le joueur ${currentPlayer} à gagner !`)
            resetGame();
            return;
        }

        //si il y a égalite il y a une alert
        if (checkDraw()){
            alert('Match Nul');
            resetGame();
            return;
        }

        // le current player va jouer X et va verifier une égalité avec X, Si il voit que y a une égalite avec X alors il va passer a O si c'est une egalite avec O il reppasse a X
        // cela permet de faire changer le joueur qui joue : X ensuite O ensuite X ainsi de suite
        currentPlayer =(currentPlayer === 'X') ? 'O' : 'X';
    }
}




// cette function permet de savoir dans le board si une row 0,1 et 2  est egale au joueur donc le joueur a gagne
 // la function  permeet de voir toutes les possibilites de win

function checkWin(player){
    for(let row = 0; row < 3; row++) {
        if (board[row][0] === player && board[row][1] === player && board[row][2] === player){
            return true;
        }
    }
    //cette function permet de savoir dans le board si une col 0,1et 2 est egale au joueur
    for(let col = 0; col < 3; col++){
        if(board[0][col] === player && board[1][col] === player && board[2][col] === player){
            return true;
        }

    }
    // cette function permet de voir si le joueur a gagner en mettant les X ou O en diagonales
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player){
        return true
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player){
        return true
    }
    return false;
}

//cette function permet de voir si il y a une egalite
function checkDraw(){
    for(let row = 0; row < 3; row++){
        for(let col =0; col < 3; col++){
            if(board[row][col] === ''){ // cette elemet peremt de voir si si il y a une case vide il doit retourner false car la partie n'est pas terminer
                return false;
            }
        }
    }
    return true;
}



function displayBoard(){
    const boardContainer = document.querySelector(".board") // creation du board via le html
    boardContainer.innerHTML = ''; // board qui est initialiser a rien du coup est vide
    for(let row = 0; row < 3; row++){ // creation du boucle pour chaque colonne et ligne
        for(let col =0; col < 3; col++){
             const cell = document.createElement('div'); // pour chaque colonne et ligne on vient creer une div
             cell.classList.add("cell"); // qui aura la classe cell
             cell.textContent = board[row][col]

            cell.addEventListener('click', function(){
                makeMove(row, col); // creation de l'évenement click avec la function makeMove qui va permettre d'ajouter le X oou le O en fonction du player dans la case specifier
            });

             boardContainer.appendChild(cell) // permet d'ajouter la cellule dans le board
        }
    }
}


function resetGame(){
    board = [
        ['','',''],// 0 1 2  pour les col et les row
        ['','',''],// 0 1 2
        ['','','']// 0 1 2
    ];

    currentPlayer = 'X';
    displayBoard();
}

displayBoard();
