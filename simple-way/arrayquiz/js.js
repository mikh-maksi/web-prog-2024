let question_arr = ["Згідно із законом Оукена, двовідсоткове перевищення фактичного рівня безробіття над його природним рівнем означає, що відставання фактичного обсягу ВВП від реального становить:","Інфляція витрат розвивається при:","Крива, що показує зв'язок між рівнем безробіття та річним темпом , зростання цін - це:","Державний борг-це:","Фіскальна політика може бути:"]
let a1_arr = ["2%", "помірному зростанні обсягів грошової маси", "крива Лоренца", "заборгованість населення, фірм, банків та зарубіжних держав перед урядом цієї країни", "стимулюючої"]
let a2_arr = ["4%","зростанні цін на ресурси","крива Лаффера","заборгованість уряду перед населенням країни","стримує"]
let a3_arr = ["3%","зростанні цін на споживчі товари та послуги","крива Філіпса","заборгованість уряду цієї країни перед іноземними державами","автоматичної"]
let a4_arr = ["5%","зниженні облікової ставки","крива попиту","заборгованість уряду перед усіма господарюючими суб'єктами як цієї країни, так і зарубіжних країн","всі відповіді вірні"]
let answer_arr = ["5%","зростання цін на ресурси","крива Філіпса","заборгованість уряду перед усіма господарюючими суб'єктами як цієї країни, так і зарубіжних країн","всі відповіді вірні"]
let n_right_answer_arr = [4,2,3,4,4]
let n_right_answer = 1;
let right_answers = 0;
let n_answer = 4;

question.innerHTML=question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
a4.innerHTML = a4_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
  function f_out (){
        console.log(y1.checked);
        console.log(y2.checked);
        console.log(y3.checked);
        console.log(y4.checked);

        if (y1.checked){ n_a = 1;}
        if (y2.checked){ n_a = 2;}
        if (y3.checked){ n_a = 3;}
        if (y4.checked){ n_a = 4;}
        console.log(n_a);
        
        if (n_a == n_right_answer){
        right_answers += 1;
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        if (n_question.value == n_answer){
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b>"+right_answers+"</b>";
            right_div.appendChild(el1);
        }
        }
        else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
        }
  }
  function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
  }
  function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    n_question.value = k;
    console.log(n_question)
    question.innerHTML=question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
    a4.innerHTML = a4_arr[n_question.value];
    answer.innerHTML = answer_arr[n_question.value];
    
    n_right_answer =n_right_answer_arr[n_question.value];
    
  }