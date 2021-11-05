class QUASTION{
    constructor(quastion){
        this.quastionDom=document.querySelector("#quastion")
        //console.log(this.quastionDom);
        this.next=document.querySelector("#submit")
        this.chek=document.querySelector("#choice")
    
        this.answerDom=[
            document.querySelector("#q_1"),
            document.querySelector("#q_2"),
            document.querySelector("#q_3"),
            document.querySelector("#q_4")

        ]
        this.quastion=quastion.question
        

        this.correct=quastion.correct_answer
        this.answers=[this.correct,...quastion.incorrect_answers]
        
        
        this.YOUanswerCorrect=false
        this.show()
        
       
        this.next.addEventListener("click",this.choice)
        this.chek.innerHTML=``
        
    
    }
    show=()=>{
        let answers=this.answers
        
        this.quastionDom.innerHTML=`${this.quastion}`
        this.answerDom.forEach(function(ele,index){
            
            ele.innerHTML=`<input type=radio name="a" id=${index}/>${answers[index]}`
        
        })
        
    }
    choice=()=>{
        let cheked=this.answerDom.filter(ele=>ele.firstChild.checked);
        if(cheked.length===1){
            if(cheked[0].textContent===this.correct){
                this.chek.innerHTML=`correct`
                this.YOUanswerCorrect=true

            }else{
                this.chek.innerHTML=`incorrect`
                this.YOUanswerCorrect=false


            }
        }
        
        
    }
    
    
}
export default QUASTION