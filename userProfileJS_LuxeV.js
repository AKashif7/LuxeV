const sectionTitles = ["Personal details", "Contact information", "Home search preferences"];
const section1Questions = ["your FIRST NAME", "your SURNAME", "your DATE OF BIRTH (dd/mm/yyyy)"];
const section2Questions = ["your HOME ADDRESS", "your PHONE NUMBER", "your EMAIL"];
const section3Questions = ["a desired HOUSE PRICE", "a desired HOUSE LOCATION", "the desired NUMBER OF BEDROOMS", "if ELECTRIC CAR CHARGING is required for your home: (yes/no)"];
let section1Answers = ["", "", ""];
let section2Answers = ["", "", ""];
let section3Answers = ["", "", "", ""];
let progressValue = 0;
let currentSection = 0;
let profileEditingMode = false;


function answerQuestions(){
    // This is the main function that when called upon, initiates the running of the userProfile JavaScript.
    currentSection += 1;
    if (progressValue == 10 && profileEditingMode == false){
        /*In this If statement, when the 'profileProgress' is complete and 'Profile edit mode' is not active.
        It results in all question sections to be shown on the webpage together, and hides the 'Next section' button.
        This is basically the final user profile page.*/
        alert("The profile has been completed!")
        document.getElementById("section1").style.display = "inline";
        document.getElementById("section2").style.display = "inline";
        document.getElementById("section3").style.display = "inline";
        document.getElementById("nextSection").style.display = "none";
        // This hides the 'nextSection' button when the page displayes all 3 completed sections.
        console.log("The profile has been completed!")
    }
    else if (currentSection == 4){
        /*In this Else if statement, when the 'currentSection' = 4, all sections are displayed on screen.
        This presents all sections to the screen, but with the unanswered questions that need to be filled, 
        without hidding the 'nextSection' button unlike the above if statement*/
        console.log("All sections have been gone through, displaying all sections")
        document.getElementById("section1").style.display = "inline";
        document.getElementById("section2").style.display = "inline";
        document.getElementById("section3").style.display = "inline";
        // Setting 'profileEditingMode' to false, results in 'Profile editing mode' being turned off once the user returns to the page displaying all sections.
        profileEditingMode = false;
        document.getElementById("nextSection").innerText = "Fill in unanswered questions";
        currentSection = 0;
        console.log("The variable 'currentSection', has been set to 0; it will increment to 1 when nextSection is opened")
    }
    else{
        /*This Else statement, results in the user being able to answer section questions,
        and it reveals only a sections of questions based upon the question being answered*/
        document.getElementById("completeProfileButton").style.display = "none";
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

        // This makes the 'nextSection' button reappear on screen when the page is not displaying all 3 sections.
        document.getElementById("nextSection").style.display = "inline";

        for (k = 0; k < sectionQuestions.length; k++){
            /* Based upon the switch case, This for loop iterates through the relavent sections of questions and corresponding answer arrays,
            to see if the section's questions have been answered. If questions need answering a relevant prompt is presented, based on if 'Profile editing mode' is active.*/
            console.log("Searching question (" + (k + 1) + ") in section (" + (currentSection) + ")");

            if (sectionAnswers[k] == "" || sectionAnswers[k] == null || profileEditingMode == true){
                /* This If statement checks to see if a question has been left blank or the user profile answers are being edited.
                based upon the profile being edited or not, a correspoding promt is displayed to the user*/
                console.log("question(" + (k + 1) + ") [index (" + k + ")], is unanswered!")
                let userInput = "";
                if (profileEditingMode == true){
                    userInput = prompt("----->>>>> PROFILE EDITING MODE IS ACTIVE <<<<<-----\n\n" + sectionTitles[currentSection - 1] + " | Section: " + currentSection + " / " + sectionTitles.length + " | Question: " + (k + 1) + " / " 
                            + sectionQuestions.length + "\n\nPlease enter " + sectionQuestions[k] + ":\n\nIn 'PROFILE EDITING MODE', blank or skipped questions retain thier previous value!\n(ok = submit answer, cancel = skip question)");
                }
                else{
                    userInput = prompt(sectionTitles[currentSection - 1] + " | Section: " + currentSection + " / " + sectionTitles.length + " | Question: " + (k + 1) + " / " 
                            + sectionQuestions.length + "\n\nPlease enter " + sectionQuestions[k] + ":\n\n(ok = submit answer, cancel = skip question)");
                }
                checkUserInput(userInput, sectionQuestions[k]);
            }
            else{
                console.log("question (" + (k + 1) + "), has been ANSWERED!")
            }
            
        }
    }
}

function toggleOnIgnoreIfAnswered(){
    /* This funciton is called when the 'editAnswers' button is pressed, which results in 'profileEditingMode' being set to true.
    This allows for questions that have been answered to be re-answered, allowing for answer editing.*/
    profileEditingMode = true;
    currentSection = 0;
    alert("PROFILE EDITING MODE has been activated!");
    console.log("PROFILE EDITING MODE has been activated!");
    answerQuestions();
}

function checkUserInput(userInput, question){
    /* This function when called, sanitises and validates the users input of a prompt. 
    It converts inputs to lower case where applicable, and checks the input for certain characteristics to make it a valid input.*/
    console.log("Checking the user input (" + userInput + "), for question (" + question + ")")
    
    let questionNum = 0;
    let valid = false;

        switch(currentSection){
            // This switch is used to determine the current Section of questions being answered.

            case 1:
                // Case 1 - is for Section 1
                console.log("validation for section (" + currentSection + ")")
                switch(question){
                    // This switch is used to determine the question being answered within Section 1 and the appropriate input validation for the question (if required).

                    case section1Questions[0]:
                        // Validation for Question 1 of Section 1.
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
                        // Validation for Question 2 of Section 1.
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
                        // Validation for Question 3 of Section 1.
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
            
            
            case 2:
                // Case 2 - is for Section 2
                console.log("validation for section (" + currentSection + ")")
                switch(question){
                    // This switch is used to determine the question being answered within Section 2 and the appropriate input validation for the question (if required).

                    case section2Questions[0]:
                        // Validation for Question 1 of Section 2.
                        console.log("validation for question (1), section (" + currentSection + ")");
                        questionNum = 1
                        if (userInput != "" && userInput != null){
                                userInput = userInput.toLowerCase();
                                valid = true;
                        }
                        break;

                    case section2Questions[1]:
                        // Validation for Question 2 of Section 2.
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
                        // Validation for Question 3 of Section 2.
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

            case 3:
                // Case 3 - is for Section 3
                console.log("validation for section (" + currentSection + ")")
                switch(question){
                    // This switch is used to determine the question being answered within Section 3 and the appropriate input validation for the question (if required).

                    case section3Questions[0]:
                        // Validation for Question 1 of Section 3.
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
                        // Validation for Question 2 of Section 3.
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
                        // Validation for Question 3 of Section 3.
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
                        // Validation for Question 4 of Section 3.
                        console.log("validation for question (4), section (" + currentSection + ")");
                        questionNum = 4
                        if (userInput != "" && userInput != null){
                            userInput = userInput.toLowerCase();
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
            // This if statement results in a console log if a user input does not pass validation.
            console.log("The userInput (" + userInput + "), for question (" + question + ") Failed validation!!!");
        }
    updateAnswer(questionNum, userInput, valid);
}

function updateAnswer(questionNum, userInput, valid){
    /* This funciton is called after a userInput passes through the funciton 'checkUserInput'. This function updates the current question's corresponding answer array, 
    with the array being updated with the userInput if it is valid, and the profile progress being increased if a question was unanswered. 
    If a question is not valid, it is marked as 'unanswered'.*/
    console.log("updating question answers")
    let sectionAnswers = "";
    switch(currentSection){
        // This switch determines the current questions section.
        case 1:
            // Case 1 - is for questions section 1
            sectionQuestions = section1Questions;
            htmlQuestionNum = questionNum;
            sectionAnswers = section1Answers;
            break;
        case 2:
            // Case 2 - is for questions section 2
            sectionQuestions = section2Questions;
            htmlQuestionNum = questionNum + section1Questions.length;
            sectionAnswers = section2Answers;
            break;
        case 3:
            // Case 3 - is for questions section 3
            sectionQuestions = section3Questions;
            htmlQuestionNum = questionNum + section1Questions.length + section2Questions.length;
            sectionAnswers = section3Answers;
            break;
    }

    if(document.getElementById("answer" + (htmlQuestionNum)).classList.contains("unanswered")){
        // This If statement writes to elements in the 'unanswered' class, writing 'Unanswered!' with a line break after.
        document.getElementById("answer" + (htmlQuestionNum)).innerHTML = "Unanswered!<br>";
    }

    if(valid == true){
        /* This If statement writes the user's input to the relevant array for the questions section, 
        as well as writes it to the corresponsing HTML element so it displays.*/
        sectionAnswers[questionNum - 1] = userInput;
        console.log("sectionAnswers (" + sectionAnswers + ")")

        if(document.getElementById("answer" + (htmlQuestionNum)).classList.contains("unanswered")){
            // This If statement increments the progress value, only if a quesiton being answered was previously unanswered.
            progressValue += 1;
            console.log("The progress bar was incremented by +1");
        }

        // Here the progress bar and progress value are updated.
        document.getElementById("profileProgressBar").value = progressValue;
        document.getElementById("profileProgressBar").innerHTML = progressValue;
        let numberOfQuestions = section1Questions.length + section2Questions.length + section3Questions.length;
        document.getElementById("questionCounter").innerHTML = progressValue + " / " + numberOfQuestions;

        // Here unanswerd questions are removed from class unanswered, and updated with their corresponding answer.
        document.getElementById("answer" + (htmlQuestionNum)).classList.remove("unanswered");
        document.getElementById("answer" + (htmlQuestionNum)).innerHTML = userInput + "<br>";
        console.log("The user input/answer for question number IN HTML FILE (" + htmlQuestionNum + "), was updated successfully!");
    }
    else if(profileEditingMode == true){
        // This Else if statement runs when no input is given or it's invalid, but 'Profile editing mode' is activated. resulting in the previous answer being unchanged.
        console.log("The user input/answer has been unchanged, due to NO VALID INPUT and 'Profile editing mode' being active!")
    }
    else{
        // This Else statement marks unanswered questions with the text 'Unanswered' and it adds the question's answer to the 'unanswered' class.
        document.getElementById("answer" + (htmlQuestionNum)).innerHTML = "Unanswered!<br>";
        document.getElementById("answer" + (htmlQuestionNum)).classList.add("unanswered");
        console.log("The answer for question number IN HTML FILE (" + htmlQuestionNum + "), was marked as UNANSWERED!")
    }
    // This re-displays the buttons at the bottom of the page if they were not already displayed.
    document.getElementById("bottomButtons").style.display = "inline";
}

function nextSection(){
    // This function is for the 'nextSection' button, which calls the next section of questions to be answered.
    if (currentSection < 4){
        answerQuestions();
    }
}