let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeads();
    

})
function renderLeads(){
    //list
    let listItems = ""
    for(let i = 0; i<myLeads.length;i++){
        let httpControl = myLeads[i];
        //if(httpControl.substring(0,7) != "https://"){
          //  listItems+="<li><a target='_blank' href='" +"https://" +myLeads[i] + "'>" + myLeads[i] + "</a></li>"
            //console.log(listItems)
        //}
        //else{
            listItems+="<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
            console.log(listItems)
        //}

}
    ulEl.innerHTML = listItems;
}


