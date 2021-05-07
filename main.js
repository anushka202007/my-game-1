function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var correct = 0;


    if (question1 == "Sweden") {
        correct++;
}
    if (question2 == "Cu,Zn") {
        correct++;
}   
    if (question3 == "7.0") {
        correct++;
    }
    
    if (question4 == "The Nile") {
        correct++;
}   

     if (question5 == "H2SO4") {
    correct++;
}

     if (question6 == "Harry Potter, J. K. Rowling") { 
}

     if (question7 == "The Vatican") {
    correct++;
}   
     
     if (question8 == "Red Kangaroo") {
    correct++;
}   

     if (question9 == "Blue Ribbon Sports") {
    correct++;
} 

     if (question10 == "TAI Tzu Ying") {
    correct++;
}   
    var pictures = ["img/win1.gif", "img/meh.jpeg", "img/lose.gif"];
    var messages = ["Great job!", "That's just okay", "You really need to do better"];
    var score;

    if (correct == 0) {
        score = 2;
    }

    if (correct > 0 && correct < 10) {
        score = 1;
    }

    if (correct == 10) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
    }