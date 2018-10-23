function Select(sel){
    var elem=document.querySelector(sel);
    return elem;
}
var tbody=Select("tbody");

function Hesabla(){
    tbody.innerHTML="";
    var ay=Select(".ay").value;
    var faiz=Select(".faiz").value;
    var pul=Select(".pul").value;
    var faizHesabla=pul/100*faiz;
    var yeniPul=parseInt(pul)+parseInt(faizHesabla);
    var ayHesabla=yeniPul/ay;

    for(var i=1;i<=ay;i++){
        var tr=document.createElement("tr");
        var td=document.createElement("td");
        td.innerText=i+"-inci ay";
        var td2=document.createElement("td");
        td2.innerText=Math.floor(ayHesabla)+" azn";
        tr.appendChild(td);
        tr.appendChild(td2)
        tbody.appendChild(tr);

    }
    
}