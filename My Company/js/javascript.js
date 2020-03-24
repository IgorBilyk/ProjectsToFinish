

menu.onclick= function(){
var x =document.getElementById('navigation');

if (x.className === "navigation__bar") {
    x.className +=  " responsive";
 
}else{

    x.className = "navigation__bar";
    
}
}


