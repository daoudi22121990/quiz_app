class Final{
    constructor(correct,ammount){
        this.correct=correct;
        this.ammount=ammount;
        this.finalDom=document.querySelector(".final_quiz");
        this.quizDom=document.querySelector(".QUIZ");
        this.scoreDom=document.querySelector(".scoore");
        this.btn=document.querySelector(".btn")
        this.show_final_scoore()
        this.btn.addEventListener("click",this.relod_quiz)
    }
    show_final_scoore=()=>{
        this.finalDom.style.display="block"
        this.quizDom.style.display="none"
        this.scoreDom.innerHTML=`this your scoore in this quiz: ${this.correct} of ${this.ammount}`
        
    }
    relod_quiz=()=>{
        location.reload()

    }
}
export default Final