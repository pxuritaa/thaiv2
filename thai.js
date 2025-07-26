var index = 0;
var rows = [];
var score = 3;
document.getElementById("replay").style.visibility = "hidden";

function check_answer(n) {
    let buttonClick = "normal" + n;
    var ans = document.getElementById(buttonClick).value;
    var correctAns = rows[index][5];
 
    if (ans == correctAns){
        document.getElementById(buttonClick).style.backgroundColor = "green";
        document.getElementById("soundGood").play();
    }else {
        document.getElementById(buttonClick).style.backgroundColor = "red";
        score = score - 1;
        document.getElementById("soundBad").play();
        
    }
    if (score == 2) {
        document.getElementById("heart3").style.visibility = "hidden";
    }else if (score == 1){
        document.getElementById("heart3").style.visibility = "hidden";
        document.getElementById("heart2").style.visibility = "hidden";
    }else{
        document.getElementById("heart3").style.visibility = "hidden";
        document.getElementById("heart2").style.visibility = "hidden";
        document.getElementById("heart1").style.visibility = "hidden";
        document.getElementById("replay").style.visibility = "visible";

    }

}

function next_question() {
    const normal1 = document.getElementById("normal1");
    const normal2 = document.getElementById("normal2");
    const normal3 = document.getElementById("normal3");
    const normal4 = document.getElementById("normal4");
    document.getElementById("normal").style.backgroundColor = "white";
    document.getElementById("normal1").style.backgroundColor = "white";
    document.getElementById("normal2").style.backgroundColor = "white";
    document.getElementById("normal3").style.backgroundColor = "white";
    document.getElementById("normal4").style.backgroundColor = "white";
   
    index = index + 1;
    document.getElementById("normal").value = rows[index][0];
    document.getElementById("normal1").value = rows[index][1];
    document.getElementById("normal2").value = rows[index][2];
    document.getElementById("normal3").value = rows[index][3];
    document.getElementById("normal4").value = rows[index][4];
    
    updateScreen();
}

function readFile(){
    const csvurl = "101words.csv";
    
    fetch(csvurl)
    .then((response)=> response.text())
    .then((text)=> {
        rows = text.split("\n").map((row)=> row.split(","));
    })
    .catch ((error)=> console.error("Error fetching CSV file;",error));
}

function updateScreen() {

    document.getElementById("normal").value = rows[index][0];
}

function replay(){

    score = 3;
    document.getElementById("heart3").style.visibility = "visible";
    document.getElementById("heart2").style.visibility = "visible";
    document.getElementById("heart1").style.visibility = "visible";
    document.getElementById("replay").style.visibility = "hidden";
    next_question();
}
