const quizData= [
    {
        question: "Q1: In the United Kingdom, what is the day after Christmas known as?",
        a:"Boxing Day",
        b: "Cricket day",
        c: "Hockey Day",
        d: "Madona",
        correct: "a",
        
    },
    {
        // id: "17870cb8-12fb-447e-82ed-78c655e5dfd7",
        question: "Q2: Which country consumes the most chocolate per capita?",
        // options: {
        a:"Switzerland",
        b:"U.S",
        c: "Netherlands",
        d:"Africa",
        // },
        correct: "a",
        
    },
    {
        // id: "130f4b45-4925-4fa5-8ac2-9af6d59a330d",
        question: "Q3: Which of Shakespeare’s plays is the longest?",
        // options: {
        a:"Hamlet",
        b:"Cutlet",
        c:"Mamooth",
        d:"1999",
        // },
        correct: "a",
        
    },
    {
        // id: "bb9413cd-9c7e-429a-b311-a717608b192b",
        question: "Q4: What is the loudest animal on Earth?",
        // options: {
        a: "The sperm whale",
        b:"Blue whale",
        c:"Mamooth",
        d:"Lady Angel",
        // },
        correct: "b",
        
    },
    {
        // id: "d2652c20-bbba-4e50-b962-d32d77917f47",
        question: "Q5: I Know Why the Caged Bird Sings’ is an autobiography about the early years of what inspirational African-American writer and poet?",
        // options: {
        a:"Maya Angelou",
        b:"Nightmarish",
        c:"The Great Dane",
        d:"1999",
        // },
        correct: "a",
        
    }
    ];
    
    
    
        // const submit=document.getElementsByClassName()
       const quiz = document.getElementById("quiz");  
       const answerElements = document.querySelectorAll(".answer");  
       const questionElement = document.getElementById("question");  
       const a_text = document.getElementById("a_text");  
       const b_text = document.getElementById("b_text");  
       const c_text = document.getElementById("c_text");  
       const d_text = document.getElementById("d_text");  
       const submitButton = document.getElementById("submit");  
    
       const timeText = document.querySelector(".timer .time_left_txt");
        const timeCount = document.querySelector(".timer .timer_sec");
    
       let currentQuiz = 0;  
       let score = 0;  
       const deselectAnswers = () => {  
        answerElements.forEach((answer) => (answer.checked = false));  
       };  
       const getSelected = () => {  
        let answer;  
        answerElements.forEach((answerElement) => {  
         if (answerElement.checked) answer = answerElement.id;  
        });  
        return answer;  
       };  
       const loadQuiz = () => {  
        deselectAnswers();  
        const currentQuizData = quizData[currentQuiz];  
        questionElement.innerText = currentQuizData.question;  
        a_text.innerText = currentQuizData.a;  
        b_text.innerText = currentQuizData.b;  
        c_text.innerText = currentQuizData.c;  
        d_text.innerText = currentQuizData.d;  
       };  
       loadQuiz();  
       submitButton.addEventListener("click", () => {  
        const answer = getSelected();  
        if (answer) {  
         if (answer === quizData[currentQuiz].correct) score++;  
         currentQuiz++;  
         if (currentQuiz < quizData.length) loadQuiz();  
         else {  
          quiz.innerHTML = `  
             <h2>You answered ${score}/${quizData.length} questions correctly</h2>  
             <button onclick="history.go(0)">Play Again</button>  
           ` // location.reload() won't work in CodePen for security reasons;  
         }  
        }  
       });
    
    
    
    //    function startTimer(time){
    //     counter = setInterval(timer, 1000);
    //     function timer(){
    //         timeCount.textContent = time; //changing the value of timeCount with time value
    //         time--; //decrement the time value
    //         if(time < 9){ //if timer is less than 9
    //             let addZero = timeCount.textContent; 
    //             timeCount.textContent = "0" + addZero; //add a 0 before time value
    //         }
    //         if(time < 0){ //if timer is less than 0
    //             clearInterval(counter); //clear counter
    //             timeText.textContent = "Time Off"; //change the time text to time off
    //             const allOptions = option_list.children.length; //getting all option items
    //             let correcAns = questions[que_count].answer; //getting correct answer from array
    //             for(i=0; i < allOptions; i++){
    //                 if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
    //                     option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
    //                     option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
    //                     console.log("Time Off: Auto selected correct answer.");
    //                 }
    //             }
    //             for(i=0; i < allOptions; i++){
    //                 option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    //             }
    //             next_btn.classList.add("show"); //show the next button if user selected any option
    //         }
    //     }
    //}
    
    function startTimerLine(time){
        counterLine = setInterval(timer, 29);
        function timer(){
            time += 1; //upgrading time value with 1
            time_line.style.width = time + "px"; //increasing width of time_line with px by time value
            if(time > 549){ //if time value is greater than 549
                clearInterval(counterLine); //clear counterLine
            }
        }
    }
    
    const start_btn = document.querySelector(".start_btn button");
    const quiz_container = document.querySelector(".quiz_container");
    const startButton =document.querySelector('#startButton');
    
    // start_btn.onclick = ()=>{
    //     info_box.classList.add("activequiz-container"); //show info box
    // };
    
    // if startQuiz button clicked
    // start_btn.onclick = ()=>{
    //     startButton.classList.remove(".start_btn");
    //     StyleSheet.remove(quiz_container(display));
    //     // quiz_container.classList.add("quiz_container");
    // }
    
    
    
    
    // function() { 
    //     var continueSpan = document.getElementById("continue"); 
    //     var goButton = continueSpan.firstElementChild.firstElementChild; 
    //     goButton.click();
    // }
    
    
    
    
    // const exit_btn = quiz-container.querySelector(".buttons ");
    // const continue_btn = quiz-container.querySelector(".buttons ");
    
    // const quiz_box = document.querySelector(".quiz-container");
    
    // const restart_quiz = result_box.querySelector(".buttons ");
    
    // restart_quiz.onclick = ()=>{
    //     // quiz-container.classList.add("activeQuiz"); //show quiz box
    //     // result_box.classList.remove("activeResult"); //hide result box
    //     timeValue = 15; 
    //     // que_count = 0;
    //     // que_numb = 1;
    //     // userScore = 0;
    //     // widthValue = 0;
    //     // showQuetions(que_count); //calling showQestions function
    //     // queCounter(que_numb); //passing que_numb value to queCounter
    //     // clearInterval(counter); //clear counter
    //     // clearInterval(counterLine); //clear counterLine
    //     startTimer(timeValue); //calling startTimer function
    //     startTimerLine(widthValue); //calling startTimerLine function
    //     timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    //     // quiz.classList.remove("show"); //hide the next button
    // }