const quesbank=[
    {
        ques:"1.What does HTML stands for?",
        ans:[
            {text:'Hyper Text Preprocessor',correct:false},
            {text:'Hyper Text Markup Language',correct:true},
            {text:'Hyper Text Multiple Language',correct:false},
            {text:'Hyper Tool Multi Language',correct:false}
        ]
    },
    
    {
        ques:"2.What does CSS stands for?",
        ans:[
            {text:'Common Style Sheet',correct:false},
            {text:'Colorful Style Sheet',correct:false},
            {text:'Computer Style Sheet',correct:false},
            {text:'Cascading Style Sheet',correct:true}
        ]
    },
    
    {
        ques:"3.What does PHP stands for?",
        ans:[
            {text:'Hypertext Preprocessor',correct:true},
            {text:'Hypertext Programming',correct:false},
            {text:'Hypertext Preprogramming',correct:false},
            {text:'Hometext Preprocessor',correct:false}
        ]
    },
    
    {
        ques:"4.What does SQL stands for?",
        ans:[
            {text:'Stylish Question Language',correct:false},
            {text:'Stylesheet Query Language',correct:false},
            {text:'Structured Query Language',correct:true},
            {text:'Statement Question Language',correct:false}
        ]
    },
    {
        ques:"5.What does XML stands for?",
        ans:[
            {text:'eXtensible Markup Language',correct:true},
            {text:'eXecutable Multiple Language',correct:false},
            {text:'eXtra Multi Language',correct:false},
            {text:'eXamine Multiple Language',correct:false}
        ]
    }
]


let currentQuestion=0;
let score=0;

const container=document.getElementById('container')
const q=document.getElementById('q')
const a=document.getElementById('a')
const one=document.getElementById('one')
const two=document.getElementById('two')
const three=document.getElementById('three')
const four=document.getElementById('four')
const next=document.getElementById('next')

function loadQuestion(){
    q.innerText=quesbank[currentQuestion].ques;
    one.innerHTML=quesbank[currentQuestion].ans[0].text;
    two.innerHTML=quesbank[currentQuestion].ans[1].text;
    three.innerHTML=quesbank[currentQuestion].ans[2].text;
    four.innerHTML=quesbank[currentQuestion].ans[3].text;

    one.style.backgroundColor=''
    two.style.backgroundColor=''
    three.style.backgroundColor=''
    four.style.backgroundColor=''
}


function handleAnswer(button,correct){
    if(correct){
        button.style.backgroundColor="green"
        score++;
    }
    else{
        button.style.backgroundColor="red"
    }
}

one.onclick=function(){
    handleAnswer(one,quesbank[currentQuestion].ans[0].correct)
}
two.onclick=function(){
    handleAnswer(two,quesbank[currentQuestion].ans[1].correct)
}
three.onclick=function(){
    handleAnswer(three,quesbank[currentQuestion].ans[2].correct)
}
four.onclick=function(){
    handleAnswer(four,quesbank[currentQuestion].ans[3].correct)
}

next.onclick=function(){
    currentQuestion++;
    if(currentQuestion<quesbank.length){
        loadQuestion();
    }
    else{
        q.innerHTML=""
        next.style.display='none'
        a.innerHTML=`Your Score is ${score}/${quesbank.length}`;
        a.style.display='flex'
        a.style.alignItems='center'
        a.style.justifyContent='center'
        a.style.fontSize='40px'
        a.style.fontWeight='bold'
    }
}
loadQuestion();