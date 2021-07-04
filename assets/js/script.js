var ul = document.getElementById("ul")
var nextButton = document.getElementById("btnNext");
var quizbox = document.getElementById("questionBox")
var opt1 = document.getElementById("opt1")
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3")
var opt4 = document.getElementById("opt4")

var app={
        questions:[
            {
                q:"What year was JavaScript developed?",
                options: ["1875", "1995", "1992", "2001"],
                answer:2
            },
            {
                q:"What is == used to compare?",
                options: ["animals", "colors", "values", "objects"],
                answer:3
            },
            {
                q:"What is DOM?",
                options: ["Donuts Over Men", "Dogs Of Minnessota", "Dozens Of Memes", "Document Object Model"],
                answer:4
            }, 
            {
                q:"Who developed JavaScript?",
                options: ["Brendan Eich", "The Rock", "Mark Zuckerberg", "Albert Einstein"],
                answer:1
            }         
        ],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split("");
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=""
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.questions.length + "/" + this.score;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}