var timers;
function playReturn(){
    // console.log(document.documentElement.scrollTop)
    timers=setInterval(function(){
        if(document.documentElement.scrollTop <= 0){
            clearInterval(timers);
        } 
        
        window.scrollBy(0,-100);
    },50);
}
function returnTop(){
    if(document.documentElement.scrollTop>0){
        playReturn();
    }
}
function quxiao(){
    var erweima_box=document.getElementsByClassName('erweima_box')[0];
    if(erweima_box.style.display=='none'){
        erweima_box.style.display = 'block';
    }
    else{
        erweima_box.style.display='none';
    }
}