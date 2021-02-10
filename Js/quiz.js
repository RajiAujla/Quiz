
var totalOfAnswer = 0; //variable to store total

function beginQuiz() {
    document.getElementById('beginScreen').style.display = 'none';
    document.getElementById('firstQuestionScreen').style.display = 'block';
}

function checkFirstQuestion() {

    var firstQuizQuestion = document.getElementById('firstQuizQuestion').value;
    if (isNaN(firstQuizQuestion) || firstQuizQuestion == '') {
        document.getElementById('result').innerHTML = '<p style="color: red;"> Please enter a number </p>';
    }
    else {
        firstQuizQuestion = parseInt(firstQuizQuestion);
        if (firstQuizQuestion == 10) {
            document.getElementById('result').innerHTML = '<p style="color: green;"> Your Answer is Correct </p>';
            totalOfAnswer += 1;  //add one in total on right answer
            document.getElementById('total').innerHTML = totalOfAnswer +" /5";
        } else {
            document.getElementById('result').innerHTML = '<p style="color: red;"> Your Answer is incorrect </p>';
            document.getElementById('total').innerHTML = totalOfAnswer +" /5";
        }
        //   Go to next question only when input is number only
        document.getElementById('firstQuestionScreen').style.display = 'none';
        document.getElementById('secondQuestionScreen').style.display = 'block';
    }
}

function checkSecondQuestion() {

    var secondQuizQuestion = document.getElementById('secondQuizQuestion').value;
    var secondQuizQuestion = secondQuizQuestion.toUpperCase();
    if (!isNaN(secondQuizQuestion) || secondQuizQuestion == '') {
        document.getElementById('result').innerHTML = '<p style="color: red;"> Please enter a Charachter </p>';
    }
    else {
        if (secondQuizQuestion == 'BLUE') {
            document.getElementById('result').innerHTML = '<p style="color: green;"> Your Answer is Correct </p>';
            totalOfAnswer += 1; //add one in total on right answer
            document.getElementById('total').innerHTML = totalOfAnswer +" /5";
        } else {
            document.getElementById('result').innerHTML = '<p style="color: red;"> Your Answer is incorrect </p>';
        }

        document.getElementById('secondQuestionScreen').style.display = 'none';
        document.getElementById('thirdQuestionScreen').style.display = 'block';
    }
}

function checkThirdQuestion() {

    var mangoColor =   document.getElementsByName('mangoColor');
    var answer;
 
    for(i =0; i < mangoColor.length; i++){
         if(mangoColor[i].checked){
             answer = mangoColor[i].value;
         }
    }

    if (answer == undefined) {
        document.getElementById('result').innerHTML = '<p style="color: red;"> Please select a option </p>';
    }
    else {
        if (answer == 'yellow') {
            document.getElementById('result').innerHTML = '<p style="color: green;"> Your Answer is Correct </p>';
            totalOfAnswer += 1; //add one in total on right answer
            document.getElementById('total').innerHTML = totalOfAnswer +" /5";
        } else {
            document.getElementById('result').innerHTML = '<p style="color: red;"> Your Answer is incorrect </p>';
        }

        document.getElementById('thirdQuestionScreen').style.display = 'none';
        document.getElementById('fourthQuestionScreen').style.display = 'block';
    }
}

function checkFourthQuestion() {

    var fourthQuizQuestion = document.getElementById('fourthQuizQuestion').value;
    var fourthQuizQuestion = fourthQuizQuestion.toUpperCase();
    if (!isNaN(fourthQuizQuestion) || fourthQuizQuestion == '') {
        document.getElementById('result').innerHTML = '<p style="color: red;"> Please enter a Charachter </p>';
    }
    else {
        if (fourthQuizQuestion == 'CHALK') {
            document.getElementById('result').innerHTML = '<p style="color: green;"> Your Answer is Correct </p>';
            totalOfAnswer += 1; //add one in total on right answer
            document.getElementById('total').innerHTML = totalOfAnswer +" /5";
        } else {
            document.getElementById('result').innerHTML = '<p style="color: red;"> Your Answer is incorrect </p>';
        }
        document.getElementById('fourthQuestionScreen').style.display = 'none';
        document.getElementById('fifthQuestionScreen').style.display = 'block';
    }
}

function checkFifthQuestion() {

    var fifthQuizQuestion = document.getElementById('fifthQuizQuestion').value;
    if (isNaN(fifthQuizQuestion) || fifthQuizQuestion == '') {
        document.getElementById('result').innerHTML = '<p style="color: red;"> Please enter a number </p>';
    }
    else {
        fifthQuizQuestion = parseInt(fifthQuizQuestion);
        if (fifthQuizQuestion == 5) {
            document.getElementById('result').innerHTML = '<p style="color: green;"> Your Answer is Correct </p>';
            totalOfAnswer += 1;  //add one in total on right answer
            document.getElementById('total').innerHTML = totalOfAnswer +" /5";
        } else {
            document.getElementById('result').innerHTML = '<p style="color: red;"> Your Answer is incorrect </p>';
        }
        document.getElementById('fifthQuestionScreen').style.display = 'none';
    }
}



