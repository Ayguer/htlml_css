let radio= [document.getElementById('radio1'),document.getElementById('radio2'),document.getElementById('radio3'),document.getElementById('radio4')]
let a= 1

setInterval(function(){
    
    radio[a].checked='true'
    a+=1
    if(a==4){
        a=0
    }
    

},5000)