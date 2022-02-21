


let myLeads=[]
let oldLead=[]
// myLeads=JSON.parse(myLeads)
// myLeads.push("www.epic.com")
// myLeads=JSON.stringify(myLeads)
// console.log(typeof myLeads)

const inputEl=document.getElementById("input-el")
const inputBtn =document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletBtn=document.getElementById("delete-btn")
const leadsFromlocalStorage =JSON.parse(localStorage.getItem("myLeads")) 
const tabBtn=document.getElementById("tab-btn")
//localStorage.setItem("myLeads","www.examplelead.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()

   
   
   if(leadsFromlocalStorage){
        myLeads= leadsFromlocalStorage
        render(myLeads)

    } 


    tabBtn.addEventListener("click",function(){
        
        chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
        })


        
    })

    function render(leads){
        let listItem =" "
        for(let i=0;i<leads.length;i++){
           // listItem += "<li><a target='_black' href='"+ myLeads[i] +"'>" + myLeads[i]+"</a></li> "   
           listItem += `<li>
           <a target='_black' href='${leads[i]} '>
           ${leads[i]}
           </a></li> `
        
        }
        
        ulEl.innerHTML= listItem 
    }
    
    
    deletBtn.addEventListener("dblclick",function(){
        localStorage.clear()
        myLeads=[]
        render(myLeads)
    })

   inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    
})



