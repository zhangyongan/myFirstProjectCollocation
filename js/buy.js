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

window.onload=function(){

    //图片以及其他样式的切换
    var center_center=document.getElementsByClassName('center_center')[0];
    var oli=center_center.getElementsByTagName('li');
    var center_left=document.getElementsByClassName('center_left')[0];
    var arr=new Array();
    arr[0]="http://tecmz-demo-shop.c.ecuster.com/data/image/2017/03/05/46755_qrfk_7949.jpg?v=e3b87ff2";
    arr[1]="http://tecmz-demo-shop.c.ecuster.com/data/image/2017/03/05/46755_qrfk_7949.jpg?v=e3b87ff2";
    arr[2]="http://tecmz-demo-shop.c.ecuster.com/data/image/2017/03/05/46732_b6pf_3441.jpg?v=dc7975ff";
    arr[3]="http://tecmz-demo-shop.c.ecuster.com/data/image/2017/03/05/46731_wnjp_9245.jpg?v=7a2b86f8";
    arr[4]="http://tecmz-demo-shop.c.ecuster.com/data/image/2017/03/05/46730_0rbo_1214.jpg?v=a716a597";
    for(var i=0;i<oli.length;i++){
        oli[i].style.backgroundImage="url('"+arr[i]+"')";
        oli[i].style.backgroundSize="contain";
    }
    for(var i=0;i<oli.length;i++){
        oli[i].index=i;
        oli[i].onmouseover=function(){
            for(var i=0;i<oli.length;i++){
                oli[i].className = "li" + (i+1);
            }
            this.className = this.className + ' border_red';
            
            center_left.style.backgroundImage = "url('"+arr[this.index]+"')";
        }
    }

    //尺寸的边框字体颜色切换
    var li_4=document.getElementsByClassName('li_4')[0];
    var spans=li_4.getElementsByTagName('span');
    var li_3=document.getElementsByClassName('li_3')[0];
    var span_3=li_3.getElementsByTagName('span')[1];
    for(var i=1;i<spans.length;i++){
        spans[i].onclick=function(){
            for(var i=1;i<spans.length;i++){
                spans[i].className="";
            }
            this.className="border_text_red";
            if(this==spans[1]){
                span_3.innerHTML='1044';
            }
            else if(this==spans[2]){
                span_3.innerHTML='899';
            }
            else{
                span_3.innerHTML='588';
            }
        }
    }

    //商品个数的加减
    var li_6=document.getElementsByClassName('li_6')[0];
    var Ospan=li_6.getElementsByTagName('span');
    var input=li_6.getElementsByTagName('input')[0];
    for(var i=1;i<Ospan.length;i++){
        console.log(input.value);
        Ospan[i].onclick=function(){

            if(this.innerHTML=='-'){
                if(input.value <= 0){
                    return ;
                }
                 input.value=parseInt(input.value)-1;
            }
            if(this.innerHTML=='+'){
                if(input.value >= 1044){
                    return ;
                }
                input.value=parseInt(input.value)+1;
            }
        }

    }

    //详情与规格的左右页切换
    var tab=document.getElementsByClassName('tab')[0];
    var odiv=tab.getElementsByTagName('div');
    var list=document.getElementsByClassName('list')[0];
    var parameter=document.getElementsByClassName('parameter')[0];
    for(var i=0;i<odiv.length;i++){
        odiv[i].index=i;
        odiv[i].onclick=function(){
            for(var i=0;i<odiv.length;i++){
                odiv[i].className='';
                list.style.display='none';
                parameter.style.display='none';
            }
            this.className='border_red';
            if(this==odiv[0]){
                list.style.display='block';
            }
            else if(this==odiv[1]){
                parameter.style.display='block';
            }
        }
    }
}
//颜色的边框字体的颜色切换
function onchange_bordercolor(){
    var li_5=document.getElementsByClassName("li_5")[0];
    var spans=li_5.getElementsByTagName('span');
    spans[1].style.borderColor="#d32048";
    spans[1].style.color="#d32048";
}