const sectionTitles = ["Personal details", "Contact information", "Home search preferences"];
const section1Questions = ["your FIRST NAME", "your SURNAME", "your DATE OF BIRTH"];
const section2Questions = ["your HOME ADDRESS", "your PHONE NUMBER", "your EMAIL"];
const section3Questions = ["a desired HOUSE PRICE", "a desired HOUSE LOCATION", "the desired NUMBER OF BEDROOMS", "if ELECTRIC CAR CHARGING is required for your home: (yes/no)"];
let section1Answers = [];
let section2Answers = [];
let section3Answers = [];
let progressValue = 0;
let currentSection = 1; 


// NOTE TO SELF - I need to adjust this funciton so it runs for each seperate section, when a button is pressed.
// NOTE TO SELF - complete function as required.
function answerQuestions(){
    for (i = 0; i < sectionTitles.length; i++){
        switch(i + 1){
            case 1:
                console.log("Searching section (" + (i + 1) + ")");
                sectionQuestions = section1Questions;
                sectionAnswers = section1Answers;

                for (k = 0; k < sectionQuestions.length; k++){
                    console.log("Searching question (" + (k + 1) + ") in section (" + (i + 1) + ")");

                    // NOTE TO SELF - Do I need to adjust this to work properly with the array!?!?!?!
                    if (sectionAnswers[k] == "" || sectionAnswers[k] == null){
                        console.log("question(" + (k + 1) + ") [index (" + k + ")], is unanswered!")
                        userInput = prompt(sectionQuestions[k]);
                        checkUserInput(userInput, sectionQuestions[k]);
                    }
                    else{
                        console.log("question (" + k + "), has been ANSWERED!")
                    }
                }
                break;
            case 2:
                break;
            case 3:
                break;
        }
    }
}

function checkUserInput(userInput, sectionQuestion){
    console.log("Checking the user input (" + userInput + "), for question (" + sectionQuestion + ")")
    if (userInput != "" && userInput != null){

        // This switch is used to determine the current Section being answered.
        switch(currentSection){

            // Case 1 - is for Section 1
            case 1:
                console.log("validation for section (" + currentSection + ")")
                // This switch is used to determine the question being answered within Section 1 and the appropriate input validation for the question (if required).
                switch(sectionQuestion){
                    case section1Questions[0]:
                        break;
                    case section1Questions[1]:
                        break;
                    case section1Questions[2]:
                        break;       
                }
            break;
            
            // Case 2 - is for Section 2
            case 2:
                // This switch is used to determine the question being answered within Section 2 and the appropriate input validation for the question (if required).
                switch(sectionQuestion){
                    case section2Questions[0]:
                        break;
                    case section2Questions[1]:
                        break;
                    case section2Questions[2]:
                        break;       
                }
            break;

            // Case 3 - is for Section 3
            case 3:
                // This switch is used to determine the question being answered within Section 3 and the appropriate input validation for the question (if required).
                switch(sectionQuestion){
                    case section3Questions[0]:
                        break;
                    case section3Questions[1]:
                        break;
                    case section3Questions[2]:
                        break;
                    case section3Questions[3]:
                        break; 
                }
            break;
        }
    }
    else{
        console.log("The userInput (" + userInput + "), for question (" + sectionQuestion + ") is EMPTY!!!");
    }
}



function handleSection1(){
    document.getElementsByClassName("section1").style.display = "inline";
}