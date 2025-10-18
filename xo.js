var current_player = "X";

function reset_game(){
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("d").value = "";
    document.getElementById("e").value = "";
    document.getElementById("f").value = "";
    document.getElementById("g").value = "";
    document.getElementById("h").value = "";
    document.getElementById("i").value = "";
    document.getElementById("winner").value = "";
    document.getElementById("current").value = "Player-X";
}

function press(n){
    if (document.getElementById(n).value == ""){
        document.getElementById(n).value = current_player;

        if (current_player == "X"){
            current_player = "O";
        }else{
            current_player = "X";
        }
        document.getElementById("current").value = "Player-" + current_player;
    }
}
    
    
