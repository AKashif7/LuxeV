const sectionTitles = ["Personal details", "Contact information", "Home search preferences"];
const section1Questions = ["your FIRST NAME", "your SURNAME", "your DATE OF BIRTH (dd/mm/yyyy)"];
const section2Questions = ["your HOME ADDRESS", "your PHONE NUMBER", "your EMAIL"];
const section3Questions = ["a desired HOUSE PRICE", "a desired HOUSE LOCATION", "the desired NUMBER OF BEDROOMS", "if ELECTRIC CAR CHARGING is required for your home: (yes/no)"];
let section1Answers = ["", "", ""];
let section2Answers = ["", "", ""];
let section3Answers = ["", "", "", ""];
let progressValue = 0;
let currentSection = 0;
let ignoreIfQuestionAnswerd = false;


function toggleOnIgnoreIfAnswered(){
    /* This funciton is called when the 'Edit answers' button is pressed, which results in 'ignoreIfQuestionAnswered' being set to true.
    This allows for questions that have been answered to be re-answered, allowing for answer editing.*/
    ignoreIfQuestionAnswerd = true;
}

// NOTE TO SELF - I need to adjust this funciton so it runs for each seperate section, when a button is pressed.
// NOTE TO SELF - complete function as required.
function answerQuestions(){
    currentSection += 1;
    if (progressValue == 10){
        alert("The profile has been completed!")
        console.log("The profile has been completed!")
    }
    else if (currentSection == 4){
        console.log("All sections have been gone through, displaying all sections")
        document.getElementById("section1").style.display = "inline";
        document.getElementById("section2").style.display = "inline";
        document.getElementById("section3").style.display = "inline";
        // Setting 'ignoreIfQuestionAnswered' to false, results in 'Editing mode' being turned off once the user returns to the page displaying all sections.
        ignoreIfQuestionAnswerd = false;
        // This hides the 'Next section' button when the page displayes all 3 sections.
        document.getElementById("Next Section").style.display = "none";
        currentSection = 0;
        console.log("The variable 'currentSection', has been set to 0; it will increment to 1 when next section is opened")
    }
    else{
        switch(currentSection){
            case 1:
                console.log("Searching section (" + (currentSection) + ")");
                document.getElementById("section1").style.display = "inline";
                document.getElementById("section2").style.display = "none";
                document.getElementById("section3").style.display = "none";
                sectionQuestions = section1Questions;
                sectionAnswers = section1Answers;
                break;
            case 2:
                console.log("Searching section (" + (currentSection) + ")");
                document.getElementById("section1").style.display = "none";
                document.getElementById("section2").style.display = "inline";
                document.getElementById("section3").style.display = "none";
                sectionQuestions = section2Questions;
                sectionAnswers = section2Answers;
                break;
            case 3:
                console.log("Searching section (" + (currentSection) + ")");
                document.getElementById("section1").style.display = "none";
                document.getElementById("section2").style.display = "none";
                document.getElementById("section3").style.display = "inline";
                sectionQuestions = section3Questions;
                sectionAnswers = section3Answers;
                break;
        }

        console.log(section1Answers + "\n" + section2Answers + "\n" + section3Answers)

        // This makes the 'Next section' button reappear on screen when the page is not displaying all 3 sections.
        document.getElementById("Next Section").style.display = "inline";

        for (k = 0; k < sectionQuestions.length; k++){
            // This for loop iterates through the relavent sectionsAnswers and sectionQuestion arrays.
            console.log("Searching question (" + (k + 1) + ") in section (" + (currentSection) + ")");

            // NOTE TO SELF - Do I need to adjust this to work properly with the array!?!?!?!
            if (sectionAnswers[k] == "" || sectionAnswers[k] == null){
                console.log("question(" + (k + 1) + ") [index (" + k + ")], is unanswered!")
                let userInput = prompt(sectionTitles[currentSection - 1] + " | Section: " + currentSection + " / " + sectionTitles.length + " | Question: " + (k + 1) + " / " 
                            + sectionQuestions.length + "\n\nPlease enter " + sectionQuestions[k] + ":\n\n(ok = submit answer, cancel = skip question)");
                checkUserInput(userInput, sectionQuestions[k]);
            }
            else{
                console.log("question (" + (k + 1) + "), has been ANSWERED!")
            }
            
        }
    }
}

function checkUserInput(userInput, question){
    console.log("Checking the user input (" + userInput + "), for question (" + question + ")")
    
    let questionNum = 0;
    let valid = false;

        // This switch is used to determine the current Section being answered.
        switch(currentSection){

            // Case 1 - is for Section 1
            case 1:
                console.log("validation for section (" + currentSection + ")")
                // This switch is used to determine the question being answered within Section 1 and the appropriate input validation for the question (if required).
                switch(question){
                    case section1Questions[0]:
                        console.log("validation for question (1), section (" + currentSection + ")");
                        questionNum = 1
                        if (userInput != "" && userInput != null){
                            if (!(userInput.includes("0")) && !(userInput.includes("1")) && !(userInput.includes("2")) && !(userInput.includes("3")) && !(userInput.includes("4")) 
                            && !(userInput.includes("5")) && !(userInput.includes("6")) && !(userInput.includes("7")) && !(userInput.includes("8")) && !(userInput.includes("9"))){
                                userInput = userInput.toLowerCase();
                                valid = true;
                            }
                            else{
                                alert("Firstname can't include numbers!");
                            }
                        }
                        break;
                    case section1Questions[1]:
                        console.log("validation for question (2), section (" + currentSection + ")");
                        questionNum = 2
                        if (userInput != "" && userInput != null){
                            if (!(userInput.includes("0")) && !(userInput.includes("1")) && !(userInput.includes("2")) && !(userInput.includes("3")) && !(userInput.includes("4")) 
                            && !(userInput.includes("5")) && !(userInput.includes("6")) && !(userInput.includes("7")) && !(userInput.includes("8")) && !(userInput.includes("9"))){
                                userInput = userInput.toLowerCase();
                                valid = true;
                            }
                            else{
                                alert("Surname can't include numbers!");
                            }
                        }
                        break;
                    case section1Questions[2]:
                        console.log("validation for question (3), section (" + currentSection + ")");
                        questionNum = 3
                        if (userInput != "" && userInput != null){
                            if (userInput.includes("/")){
                                userInput = userInput.toLowerCase();
                                valid = true;
                            }
                            else{
                                alert("Date Of Birth must include '/'");
                            }
                        }
                        break;       
                }
                break;
            
            // Case 2 - is for Section 2
            case 2:
                console.log("validation for section (" + currentSection + ")")
                // This switch is used to determine the question being answered within Section 2 and the appropriate input validation for the question (if required).
                switch(question){
                    case section2Questions[0]:
                        console.log("validation for question (1), section (" + currentSection + ")");
                        questionNum = 1
                        if (userInput != "" && userInput != null){
                                userInput = userInput.toLowerCase();
                                valid = true;
                        }
                        break;
                    case section2Questions[1]:
                        console.log("validation for question (2), section (" + currentSection + ")");
                        questionNum = 2
                        if (userInput != "" && userInput != null){
                            if ((userInput.includes("0")) || (userInput.includes("1")) || (userInput.includes("2")) || (userInput.includes("3")) || (userInput.includes("4")) 
                            || (userInput.includes("5")) || (userInput.includes("6")) || (userInput.includes("7")) || (userInput.includes("8")) || (userInput.includes("9"))){
                                userInput = userInput.toLowerCase();
                                valid = true;
                            }
                            else{
                                alert("Phone number must consist of numbers!")
                            }
                        }
                        break;
                    case section2Questions[2]:
                        console.log("validation for question (3), section (" + currentSection + ")");
                        questionNum = 3
                        if (userInput != "" && userInput != null){
                            if (userInput.includes("@")){
                                userInput = userInput.toLowerCase();
                                valid = true;
                            }
                            else{
                                alert("Email must include '@'!");
                            }
                        }
                        break;       
                }
                break;

            // Case 3 - is for Section 3
            case 3:
                // This switch is used to determine the question being answered within Section 3 and the appropriate input validation for the question (if required).
                switch(question){
                    case section3Questions[0]:
                        console.log("validation for question (1), section (" + currentSection + ")");
                        questionNum = 1
                        if (userInput != "" && userInput != null){
                            if ((userInput.includes("0")) || (userInput.includes("1")) || (userInput.includes("2")) || (userInput.includes("3")) || (userInput.includes("4")) 
                            || (userInput.includes("5")) || (userInput.includes("6")) || (userInput.includes("7")) || (userInput.includes("8")) || (userInput.includes("9"))){
                                userInput = userInput.toLowerCase();
                                valid = true;
                            }
                            else{
                                alert("Price must consist of numbers!")
                            }
                        }
                        break;
                    case section3Questions[1]:
                        console.log("validation for question (2), section (" + currentSection + ")");
                        questionNum = 2
                        if (userInput != "" && userInput != null){
                            if (!(userInput.includes("0")) && !(userInput.includes("1")) && !(userInput.includes("2")) && !(userInput.includes("3")) && !(userInput.includes("4")) 
                            && !(userInput.includes("5")) && !(userInput.includes("6")) && !(userInput.includes("7")) && !(userInput.includes("8")) && !(userInput.includes("9"))){
                                userInput = userInput.toLowerCase();
                                valid = true;
                            }
                            else{
                                alert("Location can't include numbers!");
                            }
                        }
                        break;
                    case section3Questions[2]:
                        console.log("validation for question (3), section (" + currentSection + ")");
                        questionNum = 3
                        if (userInput != "" && userInput != null){
                            if ((userInput.includes("0")) || (userInput.includes("1")) || (userInput.includes("2")) || (userInput.includes("3")) || (userInput.includes("4")) 
                            || (userInput.includes("5")) || (userInput.includes("6")) || (userInput.includes("7")) || (userInput.includes("8")) || (userInput.includes("9"))){
                                userInput = userInput.toLowerCase();
                                valid = true;
                            }
                            else{
                                alert("Number of Bedrooms must be a number!")
                            }
                        }
                        break;
                    case section3Questions[3]:
                        console.log("validation for question (4), section (" + currentSection + ")");
                        questionNum = 4
                        userInput = userInput.toLowerCase();
                        if (userInput != "" && userInput != null){
                            if ((userInput.includes("yes")) || (userInput.includes("no"))){
                                valid = true;
                            }
                            else{
                                alert("Electric car charging being required, is a 'yes' or 'no' question!")
                            }
                        }
                        break; 
                }
                break;
        }
        if (valid == false){
            console.log("The userInput (" + userInput + "), for question (" + question + ") Failed validation!!!");
        }
    updateAnswer(questionNum, userInput, valid);
}

function updateAnswer(questionNum, userInput, valid){
    console.log("updating question answers")
    let sectionAnswers = "";
    switch(currentSection){
        case 1:
            sectionQuestions = section1Questions;
            sectionAnswers = section1Answers;
            break;
        case 2:
            sectionQuestions = section2Questions;
            questionNum += section1Questions.length;
            sectionAnswers = section2Answers;
            break;
        case 3:
            sectionQuestions = section3Questions;
            questionNum += section1Questions.length + section2Questions.length;
            sectionAnswers = section3Answers;
            break;
    }

    if(valid == true){
        sectionAnswers[questionNum - 1] = userInput;
        console.log("sectionAnswers (" + sectionAnswers + ")")

        document.getElementById("answer" + (questionNum)).classList.remove("unanswered");
        document.getElementById("answer" + (questionNum)).innerHTML = userInput + "<br>";
        
        progressValue += 1;
        document.getElementById("profileProgressBar").value = progressValue;
        let numberOfQuestions = section1Questions.length + section2Questions.length + section3Questions.length;
        document.getElementById("questionCounter").innerHTML = progressValue + " / " + numberOfQuestions;
        console.log("The user input/answer for question number (" + questionNum + "), was updated successfully!");
    }
    else{
        document.getElementById("answer" + (questionNum)).innerHTML = "Unanswered!<br>";
        document.getElementById("answer" + (questionNum)).classList.add("unanswered");
        console.log("The answer for question number (" + questionNum + "), was marked as UNANSWERED!")
    }
    document.getElementById("bottomButtons").style.display = "inline";
}

function nextSection(){
    if (currentSection < 4){
        answerQuestions();
    }
}