import QUIZ from "./file.js";

//https://opentdb.com/api.php?amount=10&category=21&difficulty=easy
class Settings{
    constructor(){
        this.settingsDom=document.querySelector(".settings");
        this.quizDom= document.querySelector(".QUIZ");
        this.categoryDom=document.querySelector("#select");
        this.lavel=[
            this.easy=document.querySelector("#easy"),
            this.medume=document.querySelector("#medium"),
            this.hard=document.querySelector("#hard")
        ]
        this.nnmberOfaQustion=document.querySelector("#numberofQ")
        this.StartDom=document.querySelector("#start")
        this.StartDom.addEventListener("click",this.data)
        //this.data()
        //this.get_level()
      
        


    }
    displyQuiz = ()=>{
        this.settingsDom.style.display="none";
        
        this.quizDom.style.display="block";
    }
    data = async()=>{
        const amount=this.get_amount();
        const level=this.get_level();
        const category=this.categoryDom.value
        if(amount===undefined ||level===undefined||category===undefined){
            alert("pleas full all feildes")
        }else{
            let results;
            await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${level}`).then((response)=>
            response.json()).then(data=>results=data.results)
           
            if(results){

                this.displyQuiz()
                
                new QUIZ(results,amount)
            }
            
            
        }
    }
    get_amount=()=>{
        const amount=this.nnmberOfaQustion.value 
        if (amount===""){
            return
        }else{

        
            if (amount>0 && amount<20){
                return amount
            }else{
                alert("please entre number 0---20")
            }
        }

    }
    get_level=()=>{
        const level=this.lavel.filter((ele) => ele.checked);
        if (level.length===1){
            return level[0].id
        }else{
            return
        }
        

    }
}
export default Settings