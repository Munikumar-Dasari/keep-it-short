const question1El = document.getElementById("question1");
const question2El = document.getElementById("question2");
const question3El = document.getElementById("question3");
const question4El = document.getElementById("question4");
const question5El = document.getElementById("question5");
const question6El = document.getElementById("question6");
const question7El = document.getElementById("question7");
const question8El = document.getElementById("question8");
const question9El = document.getElementById("question9");
const question10El = document.getElementById("question10");
const question11El = document.getElementById("question11");
const question12El = document.getElementById("question12");



const answer1El =  document.getElementById("answer1");
const answer2El =  document.getElementById("answer2");
const answer3El =  document.getElementById("answer3");
const answer4El =  document.getElementById("answer4");
const answer5El =  document.getElementById("answer5");
const answer6El =  document.getElementById("answer6");
const answer7El =  document.getElementById("answer7");
const answer8El =  document.getElementById("answer8");
const answer9El =  document.getElementById("answer9");
const answer10El =  document.getElementById("answer10");
const answer11El =  document.getElementById("answer11");
const answer12El =  document.getElementById("answer12");

let qaeNameEl = document.getElementById("qae-name");



function functionQae1(){
    answer1El.style.display = "block";
    answer2El.style.display = "none";
    answer3El.style.display = "none";
    answer4El.style.display = "none";
    answer5El.style.display = "none";
    answer6El.style.display = "none";
    answer7El.style.display = "none";
    answer8El.style.display = "none";
    answer9El.style.display = "none";
    answer10El.style.display = "none";
    answer11El.style.display = "none";
    answer12El.style.display = "none";

    question1El.classList.add("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");
    question8El.classList.remove("questions-active");
    question9El.classList.remove("questions-active");
    question10El.classList.remove("questions-active");
    question11El.classList.remove("questions-active");
    question12El.classList.remove("questions-active");

    qaeNameEl.textContent = question1El.textContent;

}

function functionQae2(){
    answer1El.style.display = "none";
    answer2El.style.display = "block";
    answer3El.style.display = "none";
    answer4El.style.display = "none";
    answer5El.style.display = "none";
    answer6El.style.display = "none";
    answer7El.style.display = "none";
    answer8El.style.display = "none";
    answer9El.style.display = "none";
    answer10El.style.display = "none";
    answer11El.style.display = "none";
    answer12El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.add("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");
    question8El.classList.remove("questions-active");
    question9El.classList.remove("questions-active");
    question10El.classList.remove("questions-active");
    question11El.classList.remove("questions-active");
    question12El.classList.remove("questions-active");

    qaeNameEl.textContent = question2El.textContent;

}

function functionQae3(){
    answer1El.style.display = "none";
    answer2El.style.display = "none";
    answer3El.style.display = "block";
    answer4El.style.display = "none";
    answer5El.style.display = "none";
    answer6El.style.display = "none";
    answer7El.style.display = "none";
    answer8El.style.display = "none";
    answer9El.style.display = "none";
    answer10El.style.display = "none";
    answer11El.style.display = "none";
    answer12El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.add("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");
    question8El.classList.remove("questions-active");
    question9El.classList.remove("questions-active");
    question10El.classList.remove("questions-active");
    question11El.classList.remove("questions-active");
    question12El.classList.remove("questions-active");

    qaeNameEl.textContent = question3El.textContent;

}

function functionQae4(){
    answer1El.style.display = "none";
    answer2El.style.display = "none";
    answer3El.style.display = "none";
    answer4El.style.display = "block";
    answer5El.style.display = "none";
    answer6El.style.display = "none";
    answer7El.style.display = "none";
    answer8El.style.display = "none";
    answer9El.style.display = "none";
    answer10El.style.display = "none";
    answer11El.style.display = "none";
    answer12El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.add("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");
    question8El.classList.remove("questions-active");
    question9El.classList.remove("questions-active");
    question10El.classList.remove("questions-active");
    question11El.classList.remove("questions-active");
    question12El.classList.remove("questions-active");

    qaeNameEl.textContent = question4El.textContent;

}

function functionQae5(){
    answer1El.style.display = "none";
    answer2El.style.display = "none";
    answer3El.style.display = "none";
    answer4El.style.display = "none";
    answer5El.style.display = "block";
    answer6El.style.display = "none";
    answer7El.style.display = "none";
    answer8El.style.display = "none";
    answer9El.style.display = "none";
    answer10El.style.display = "none";
    answer11El.style.display = "none";
    answer12El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.add("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");
    question8El.classList.remove("questions-active");
    question9El.classList.remove("questions-active");
    question10El.classList.remove("questions-active");
    question11El.classList.remove("questions-active");
    question12El.classList.remove("questions-active");

    qaeNameEl.textContent = question5El.textContent;

}

function functionQae6(){
    answer1El.style.display = "none";
    answer2El.style.display = "none";
    answer3El.style.display = "none";
    answer4El.style.display = "none";
    answer5El.style.display = "none";
    answer6El.style.display = "block";
    answer7El.style.display = "none";
    answer8El.style.display = "none";
    answer9El.style.display = "none";
    answer10El.style.display = "none";
    answer11El.style.display = "none";
    answer12El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.add("questions-active");
    question7El.classList.remove("questions-active");
    question8El.classList.remove("questions-active");
    question9El.classList.remove("questions-active");
    question10El.classList.remove("questions-active");
    question11El.classList.remove("questions-active");
    question12El.classList.remove("questions-active");

    qaeNameEl.textContent = question6El.textContent;

}

function functionQae7(){
    answer1El.style.display = "none";
    answer2El.style.display = "none";
    answer3El.style.display = "none";
    answer4El.style.display = "none";
    answer5El.style.display = "none";
    answer6El.style.display = "none";
    answer7El.style.display = "block";
    answer8El.style.display = "none";
    answer9El.style.display = "none";
    answer10El.style.display = "none";
    answer11El.style.display = "none";
    answer12El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.add("questions-active");
    question8El.classList.remove("questions-active");
    question9El.classList.remove("questions-active");
    question10El.classList.remove("questions-active");
    question11El.classList.remove("questions-active");
    question12El.classList.remove("questions-active");

    qaeNameEl.textContent = question7El.textContent;

}

function functionQae8(){
    answer1El.style.display = "none";
    answer2El.style.display = "none";
    answer3El.style.display = "none";
    answer4El.style.display = "none";
    answer5El.style.display = "none";
    answer6El.style.display = "none";
    answer7El.style.display = "none";
    answer8El.style.display = "block";
    answer9El.style.display = "none";
    answer10El.style.display = "none";
    answer11El.style.display = "none";
    answer12El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");
    question8El.classList.add("questions-active");
    question9El.classList.remove("questions-active");
    question10El.classList.remove("questions-active");
    question11El.classList.remove("questions-active");
    question12El.classList.remove("questions-active");

    qaeNameEl.textContent = question8El.textContent;

}

function functionQae9(){
    answer1El.style.display = "none";
    answer2El.style.display = "none";
    answer3El.style.display = "none";
    answer4El.style.display = "none";
    answer5El.style.display = "none";
    answer6El.style.display = "none";
    answer7El.style.display = "none";
    answer8El.style.display = "none";
    answer9El.style.display = "block";
    answer10El.style.display = "none";
    answer11El.style.display = "none";
    answer12El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");
    question8El.classList.remove("questions-active");
    question9El.classList.add("questions-active");
    question10El.classList.remove("questions-active");
    question11El.classList.remove("questions-active");
    question12El.classList.remove("questions-active");


    qaeNameEl.textContent = question9El.textContent;

}

function functionQae10(){
    answer1El.style.display = "none";
    answer2El.style.display = "none";
    answer3El.style.display = "none";
    answer4El.style.display = "none";
    answer5El.style.display = "none";
    answer6El.style.display = "none";
    answer7El.style.display = "none";
    answer8El.style.display = "none";
    answer9El.style.display = "none";
    answer10El.style.display = "block";
    answer11El.style.display = "none";
    answer12El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");
    question8El.classList.remove("questions-active");
    question9El.classList.remove("questions-active");
    question10El.classList.add("questions-active");
    question11El.classList.remove("questions-active");
    question12El.classList.remove("questions-active");

    qaeNameEl.textContent = question10El.textContent;

}

function functionQae11(){
    answer1El.style.display = "none";
    answer2El.style.display = "none";
    answer3El.style.display = "none";
    answer4El.style.display = "none";
    answer5El.style.display = "none";
    answer6El.style.display = "none";
    answer7El.style.display = "none";
    answer8El.style.display = "none";
    answer9El.style.display = "none";
    answer10El.style.display = "none";
    answer11El.style.display = "block";
    answer12El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");
    question8El.classList.remove("questions-active");
    question9El.classList.remove("questions-active");
    question10El.classList.remove("questions-active");
    question11El.classList.add("questions-active");
    question12El.classList.remove("questions-active");

    qaeNameEl.textContent = question11El.textContent;

}

function functionQae12(){
    answer1El.style.display = "none";
    answer2El.style.display = "none";
    answer3El.style.display = "none";
    answer4El.style.display = "none";
    answer5El.style.display = "none";
    answer6El.style.display = "none";
    answer7El.style.display = "none";
    answer8El.style.display = "none";
    answer9El.style.display = "none";
    answer10El.style.display = "none";
    answer11El.style.display = "none";
    answer12El.style.display = "block";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");
    question8El.classList.remove("questions-active");
    question9El.classList.remove("questions-active");
    question10El.classList.remove("questions-active");
    question11El.classList.remove("questions-active");
    question12El.classList.add("questions-active");

    qaeNameEl.textContent = question12El.textContent;

}


question1El.addEventListener("click", functionQae1);
question2El.addEventListener("click", functionQae2);
question3El.addEventListener("click", functionQae3);
question4El.addEventListener("click", functionQae4);
question5El.addEventListener("click", functionQae5);
question6El.addEventListener("click", functionQae6);
question7El.addEventListener("click", functionQae7);
question8El.addEventListener("click", functionQae8);
question9El.addEventListener("click", functionQae9);
question10El.addEventListener("click", functionQae10);
question11El.addEventListener("click", functionQae11);
question12El.addEventListener("click", functionQae12);
