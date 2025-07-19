// typing.js
 //get the input and output class inside elements to js
 

 let  input=document.getElementById("input");
 let   output=document.getElementById("output");
 let randomSentence="";
   let count=0;


   const quizQues= [
    {
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Computer Personal Unit", "Central Programming Unit", "Control Processing Unit"],
      answer: "Central Processing Unit"
    },
    {
      question: "Which data structure uses LIFO (Last In, First Out)?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      answer: "Stack"
    },
    {
      question: "Which of the following is a non-volatile memory?",
      options: ["RAM", "Cache", "Hard Disk", "Register"],
      answer: "Hard Disk"
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: "O(log n)"
    },
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Marketing Language",
        "Hyper Text Markup Language",
        "Hyper Text Mark Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which sorting algorithm is best in the average case?",
      options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
      answer: "Merge Sort"
    },
    {
      question: "What is the purpose of an operating system?",
      options: [
        "Translate high-level code",
        "Manage hardware and software resources",
        "Control internet connections",
        "Handle graphics processing"
      ],
      answer: "Manage hardware and software resources"
    },
    {
      question: "Which of these is a programming language?",
      options: ["HTTP", "CSS", "JavaScript", "SQL Server"],
      answer: "JavaScript"
    },
    {
      question: "What does 'null' mean in programming?",
      options: [
        "Zero value",
        "Nothing or no value",
        "False value",
        "Memory overflow"
      ],
      answer: "Nothing or no value"
    },
    {
      question: "Which of the following is not an OOP principle?",
      options: ["Encapsulation", "Abstraction", "Compilation", "Inheritance"],
      answer: "Compilation"
    }
  ];
  
   
   
   
   
   
   
   
   
   
   
   
   


 function randomSentencess(){
 const sentences = [
    "Learning to type quickly and accurately takes consistent practice. Focus on proper finger placement and avoid looking at the keyboard. Over time, muscle memory develops naturally. Set small daily goals and track your progress. Typing is a skill that improves gradually with patience, discipline, and a little bit of fun.",
    "Technology evolves rapidly, changing how we live, work, and communicate. Coding is a powerful tool in this digital world. It allows you to build websites, automate tasks, and create apps. By understanding programming, you become more than just a user-you become a creator, shaping the future with your knowledge.",
    "Reading and writing are foundational skills, but typing brings them to life in the modern age. A fast, accurate typist can get ideas out quickly and efficiently. Typing games and challenges help improve these skills. Practice consistently and stay motivated. Progress may be slow, but improvement always comes with effort.","JavaScript is used to make websites interactive. It can respond to user actions, update content without reloading, and create dynamic animations. Understanding JavaScript opens the door to front-end development. It’s one of the most popular languages in the world and a great starting point for aspiring web developers everywhere.",
    "Practice makes perfect, especially with typing. Try to challenge yourself every day. Use different kinds of text to stay sharp and keep things interesting. Focus on posture and accuracy before speed. Over time, your words per minute will increase naturally. Just remember to stay consistent and never give up.",
    "The internet connects us all and provides endless opportunities to learn and grow. You can study languages, build websites, explore science, or learn new skills for free. Being curious and motivated is more important than having fancy tools. Knowledge is everywhere you just have to reach out and grab it."
  ];
   randomSentence= sentences[Math.floor(Math.random() * sentences.length)];  //  Pick a random one
   input.value='';
   input.focus();
   
   // calculating the wpm 
   let len=randomSentence.length;
   let startTime=null;
   
   randomSentence.split("").forEach((char,index)=>{     
     const span=document.createElement("span");               //creating span tag to html but it is only existing only in memory.
     span.textContent=char;                                   //store each text to span using 'textContent ' from the char
     output.appendChild(span);                              //it add the span file to html content.
 });
   
  input.addEventListener("input",()=>{                                            //next we want to what the user is input in the text box this done by this
        const typed=input.value;                                   //store each value to  typed variable
        const spans=document.querySelectorAll("span");              //store the all values in a previously stored span to new spans variable
        if(startTime==null&&typed.length>0)
        {
          startTime=Date.now();
        }
        count=0;
        spans.forEach((span,i)=>{                                //iterate each char in previously stored span contents
             if(i<typed.length)
             {                                        //checking the user input is more than the randomly generated words
                 if(typed[i]===randomSentence[i])
                 {
                    count++;
                    span.style.color="rgba(186, 189, 192, 0.822)";
                    
                 }
                  else{
                     span.style.color="rgba(182, 11, 11, 0.733)";
                 }
             }
            else
             {
                 span.style.color="rgba(114, 112, 111, 0.712)";
             }
        });
        
        const acc=(count/len)*100;
      
      if(typed.length===randomSentence.length)
      {
        let endTime=Date.now();
        wpm(len,startTime,endTime,acc);
        document.getElementById("alertbox").style.display='block';
           
       
      }
 
      
  });
};


window.addEventListener('DOMContentLoaded',()=>{

let next=document.getElementById("next");
next.addEventListener('click',() =>
{
  document.getElementById('output').innerHTML=""
  randomSentencess();
});
});

function wpm(len,startTime,endTime,acc,){
  let starttime=startTime;
  let endtime=endTime; 
  let numChar=len;
  let accuracy=acc;
  let avg=numChar/5;
  let timetaken=((endtime-starttime)/1000)/60;
  let wpm=avg/timetaken;
  document.getElementById("wpm").innerHTML=Math.round(wpm)+' WPM<br> ' +Math.round(accuracy)+"% Accuracy";
}



function closealert(){

   document.getElementById("alertbox").style.display='none';
   document.getElementById('output').innerHTML='';
   randomSentencess();

};




//quiz page 


let rightAnswer=0;
let clicks=0;

 function quiz(){

  if(clicks<10){
   
  let qnoutput=document.getElementById("qnoutput");
   
  let randomKey=Object.keys(quizQues)[Math.floor(Math.random()*Object.keys(quizQues).length)];
  let qns=quizQues[randomKey];
 
 
  qnoutput.textContent=qns.question;
 let opt=document.querySelectorAll(".showopn");
 opt.forEach((div,index)=>{
    div.innerHTML=qns.options[index]; 
    div.addEventListener('click',()=>{
      let selected=div.textContent;
      if(selected==qns.answer){
        div.style.backgroundColor='green';
        rightAnswer++;
      }
      else{
        div.style.backgroundColor='red';
      }
    
    })
    div.style.backgroundColor='';
 })
 clicks++;
 }
 if(clicks===10)
  {
   document.getElementById("alertbox").style.display='block';
   document.getElementById("corrects").innerHTML=Math.round(rightAnswer);
   clicks=0;
 
  }
}
 quiz();


