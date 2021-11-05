import QUASTION from "./QUASTION.js";
import Final from "./final.js";
class Quiz{
    constructor(res,amount){
        this.numDom=document.querySelector(".numofquastion")
        this.next=document.querySelector("#next");
        this.res=res;
        this.amount=amount
        this.num=0
        this.num_correct=0;
        this.submit=document.querySelector("#submit")
        this.ne=new QUASTION(this.res[this.num])
        this.numDom.innerHTML=`quasion number ${this.num+1} of amount qustion${this.amount}`
        this.next.addEventListener("click",this.next_quastion)  
    }
    next_quastion=()=>{
        if (this.num+1<this.amount){

            let answer=this.ne.YOUanswerCorrect
            if(answer){
                this.num_correct++
                this.num++
                this.ne=new QUASTION(this.res[this.num])
            }else{
                
                this.num++
                this.ne=new QUASTION(this.res[this.num])
            }
            this.numDom.innerHTML=`quasion number ${this.num+1} of amount qustion${this.amount}`
            
        }
        else{
            let answer=this.ne.YOUanswerCorrect
            if(answer){
                this.num_correct++
                this.num++
            }   

            this.show_scoor()
        }
            
    }
    show_scoor=()=>{
        new Final(this.num_correct,this.amount)
        
    }
    
   
}
export default Quiz