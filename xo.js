var current_player = "X";
var game_over = false;

function reset_game() {
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
    current_player = "X";
    game_over = false;
}

function press(n) {
    document.getElementById("soundGood").play();
    if (game_over == false){
        if (document.getElementById(n).value == "") {
            document.getElementById(n).value = current_player;

            if (checkWinner()) {
                document.getElementById("winner").value = "Winner: " + current_player;
                game_over = true;
               
                return;
            }

            if (current_player == "X") {
                current_player = "O";
            } else {
                current_player = "X";
            }

            document.getElementById("current").value = "Player-" + current_player;
        }
    }
}

function checkWinner() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let d = document.getElementById("d").value;
    let e = document.getElementById("e").value;
    let f = document.getElementById("f").value;
    let g = document.getElementById("g").value;
    let h = document.getElementById("h").value;
    let i = document.getElementById("i").value;

    if (a != "" && b != "" && c != "" && d != "" && e != "" && f != "" && g != "" && h != "" && i != ""){
        draw();
    }

    // Rows
    if (a == b && b == c && a != "") return true;
    if (d == e && e == f && d != "") return true;
    if (g == h && h == i && g != "") return true;

    // Columns
    if (a == d && d == g && a != "") return true;
    if (b == e && e == h && b != "") return true;
    if (c == f && f == i && c != "") return true;

    // Diagonals
    if (a == e && e == i && a != "") return true;
    if (c == e && e == g && c != "") return true;

    // no winner
    return false;
}

function draw(){
    document.getElementById("winner").value = "Draw";
}