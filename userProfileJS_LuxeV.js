let numberOfQuestions = 10
let progressValue = 0;
let allAnswered = true;

function answerQuestions(){
    /* This function scans all the span elements (user answers to questions), to see if they are empty, signifying no answer was provided.
    If this is the case, the function 'questionPromt' is called upon.*/

    /* 'allAnswered' here, resets allAnswered to true when the button is pressed again;
    All questions are marked as answered, before question are serched to see if they have been answered.*/
    allAnswered = true;

    for (let i = 0; i < numberOfQuestions; i++){
        console.log("For loop iteration: " + i);
        if (document.getElementById("answer" + (i+1)).innerText == "" || document.getElementById("answer" + (i+1)).classList.contains("unanswered")){
            console.log(" The span tag with id = answer" + (i+1) + " ,is unanswered! Here is it's contents (" + document.getElementById("answer" + (i+1)).innerText + ")");
            // 'allAnswered' here, is set to false; showing all questions have NOT been answered.
            allAnswered = false;
            questionPromt(i+1);
        }
        else {
            console.log("The span tag with id = answer" + (i+1) + " ,is ANSWERED, or does not exist! Here is it's contents (" + document.getElementById("answer" + (i+1)).innerText + ")");
        }
    }
    profileComplete();
}

function questionPromt(questionNum){
    /* This function when called upon, presents a promt to the user for unanswered quesitons, which is determined by this functions input 'question'.
    'question' is a number representing the question number for the user profile that is unanswered.*/
    let userInput = null;
    switch(questionNum){
        case 1:
            // promt for question 1.
            userInput = prompt("Personal details | question 1/3 \n\n Please enter your FIRST NAME:");
            break;
        case 2:
            // promt for question 2.
            userInput = prompt("Personal details | question 2/3 \n\n Please enter your SURNAME:");
            break;
        case 3:
            // promt for question 3.
            userInput = prompt("Personal details | question 3/3 \n\n Please enter your DATE OF BIRTH:");
            break;
        case 4:
            // promt for question 4.
            userInput = prompt("Contact information | step 1/3 \n\n Please enter your HOME ADDRESS:");
            break;
        case 5:
            // promt for question 5.
            userInput = prompt("Contact information | step 2/3 \n\n Please enter your PHONE NUMBER:");
            break;
        case 6:
            // promt for question 6.
            userInput = prompt("Contact information | step 3/3 \n\n Please enter your EMAIL:");
            break;
        case 7:
            // promt for question 7.
            userInput = prompt("Home search preferences | step 1/4 \n\n Please enter a desired HOUSE PRICE:");
            break;
        case 8:
            // promt for question 8.
            userInput = prompt("Home search preferences | step 2/4 \n\n Please enter a desired HOUSE LOCATION:");
            break;
        case 9:
            // promt for question 9.
            userInput = prompt("Home search preferences | step 3/4 \n\n Please enter the desired NUMBER OF BEDROOMS:");
            break;
        case 10:
            // promt for question 10.
            userInput = prompt("Home search preferences | step 4/4 \n\n Please enter if ELECTRIC CAR CHARGING is required for your home: (yes/no)");
            break;
    }
    questionAnswered(userInput, questionNum);
}

function questionAnswered (userInput, questionNum){
    /* This function runs after the 'questionPrompt' function, and checks the promt's input box for whether a user input was provided or not.
    If there is an input, the corresponding question answered is updated, and the profile completion progress bar's value is incremented/increased.*/
    console.log("The userInput was (" + userInput + "), for question number (" + questionNum + ")");
    if (userInput != "" && userInput != null){
        // Here the answer is updated with the user input, and is removed from the 'unanswered' class if it is a part of it.
        document.getElementById("answer" + (questionNum)).classList.remove("unanswered");
        document.getElementById("answer" + (questionNum)).innerHTML = userInput;

        // The progress bar's value and the questions answered counter below it, is updated to reflect answered question.
        progressValue += 1;
        document.getElementById("profileProgressBar").value = progressValue;
        document.getElementById("questionCounter").innerHTML = progressValue + " / " + numberOfQuestions;
        console.log("The user input for question number (" + questionNum + "), was updated successfully!");
    }
    else{
        // Unanswered questions are marked with 'Not answered', and are added to the 'unanswered' class that has its own style seperate from answered questions.
        document.getElementById("answer" + (questionNum)).innerHTML = "Not answered!";
        document.getElementById("answer" + (questionNum)).classList.add("unanswered");
        console.log("The user did not provide an input/answer.");
    }
}

function profileComplete(){
    // This function checks if all the questions have been answered.
    if (allAnswered == true){
        alert("All the questions have been answered!");
    }
}