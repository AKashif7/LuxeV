let answeredArray = ["O"]

function answerQuestions(){
    for (let i=0; i<2; i++){
        alert(i+1);
        if (document.getElementById("answer" + (i+1)).innerText == ""){
            alert("working!");
            alert(document.getElementById("answer" + (i+1)).innerText)
            questionPromt(i+1)
        }
    }
}

function questionPromt(question){
    let userInput = null;
    switch(question){
        case 1:
            userInput = prompt("Personal details | step 1/3 \n\n Please enter your first name:");
            break;
        case 2:
            userInput = prompt("Personal details | step 2/3 \n\n Please enter your surname:");
            break;
    }
}