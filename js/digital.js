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
$(function() {
    /*导航栏html*/
    var nav = [
        {name: '首页', href:'index.html'},
        {name: '服装', href:'fuzhuang.html'},
        {name: '婴童', href:'baby.html'},
        {name: '鞋子', href:'shoes.html'},
        {name: '运动', href:'exercise.html'},
        {name: '皮具', href:'leatherware.html'},
        {name: '数码', href:'digital.html'},
        {name: '出行', href:'travel.html'},
        {name: '各护', href:'gehu.html'},
        {name: '居家', href:'home_use.html'}
    ];

    var str='<div class="content"><ul>';
    for(var i=0;i<nav.length;i++){
        str+='<li><a href="'+nav[i].href+'">'+nav[i].name+'</a></li>';
    }
    str+='</ul></div>';
 
    $('.header_menu').append(str);

    /*图片列表显示*/

   var list2=[
       {name:'白色 苹果MFi认证数据线',price:'145.00'},
       {name:'Apple/苹果 13 英寸',price:'15229.00'},
       {name:'现货Huawei/华为 Mate 9',price:'3359.00'},
       {name:'Meitu/美图M6 秀秀美颜',price:'2149.00'}
   ];
   str='';
   for(var i=0;i<list2.length;i++){
       str+='<div class="list_img"><a href="buy.html"><img src="./imgs/f'+(i+1)+'.jpg" alt="图片'+(i+1)+'"></a><span>'+list2[i].name+'"</span><br/><span>&yen;'+list2[i].price+'</span><a href="carts.html" class="buy"><span class="tooltiptext">加入购物车</span><img src="imgs/购物车2.png"></a></div>';
   }
   $("#list_1").append(str);
});
