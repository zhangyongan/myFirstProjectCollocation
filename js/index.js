window.onload = function() {

    /*轮播图*/

    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    function animate(length) {
        var newLeft = parseInt(list.style.left) + length;
        list.style.left = newLeft + 'px';
        if(newLeft<-6000){
            list.style.left = -1200 + 'px';
        }
        if(newLeft>-1200){
            list.style.left = -6000 + 'px';
        }
    }

    //按钮切换
    // prev.onclick = function() {             
    //     animate(1200);
    // }
    // next.onclick = function() {  
    //     animate(-1200);
    // }

    //定时器
    var timer;
    function play(){
        timer=setInterval(function(){
            next.onclick();
        },1500);
    }
    play();

    //关闭定时器和开启定时器事件
    var container=document.getElementById("container");
    function stop(){
        clearInterval(timer);
    }
    container.onmouseover=stop;
    container.onmouseout=play;

    //设置下面一排小圆点
    var buttons=document.getElementById("buttons");
    var spans=buttons.getElementsByTagName("span");
    var index=0;
    function clearClass(){
        for(var i=0;i<spans.length;i++){
            spans[i].className="";
        }
        spans[index].className="on";
    }
    next.onclick=function(){
        index+=1;
        if(index>=5){
            index=0;
        }
        clearClass();
        animate(-1200);
    }
    prev.onclick=function(){
        index-=1;
        if(index<0){
            index=4;
        }
        clearClass();
        animate(1200);
    }

    //设置小圆点的点击事件
    for(var i=0;i<spans.length;i++){
        spans[i].onclick=function(){
            for(var i=0;i<spans.length;i++){
                spans[i].className="";
            }
            this.className="on";
            var clickIndex=parseInt(this.getAttribute("index"));
            var sum=clickIndex-index-1;
            list.style.left=list.offsetLeft-1200*sum+"px";
            index=clickIndex-1;

        }
    }
}


/*回顶部*/

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

/*取消扫二维码*/

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
        {name: '婴童', href:'#'},
        {name: '鞋子', href:'#'},
        {name: '运动', href:'#'},
        {name: '皮具', href:'#'},
        {name: '数码', href:'#'},
        {name: '出行', href:'#'},
        {name: '各护', href:'#'},
        {name: '居家', href:'#'}
    ];

    var str='<div class="content"><ul>';
    for(var i=0;i<nav.length;i++){
        str+='<li><a href="'+nav[i].href+'">'+nav[i].name+'</a></li>';
    }
    str+='</ul></div>';

    console.log($('.header_menu'));
    $('.header_menu').append(str);

    /*图片列表显示*/

    var list1=[
        {name:'蕾丝拼接短袖连衣裙',price:'349.00'},
        {name:'格子嵌条衬衫裙',price:'299.00'},
        {name:'女士中蓝色修身窄脚牛仔裤',price:'249.00'},
        {name:'三防免烫功能牛津纺衬衫五色',price:'289.00'}
    ];
    str='';
    for(var i=0;i<list1.length;i++){
        str+='<div class="list_img"><a href="buy.html"><img src="./imgs/a'+(i+1)+'.jpg" alt="图片'+(i+1)+'"></a><span>'+list1[i].name+'"</span><br/><span>&yen;'+list1[i].price+'</span><a href="carts.html" class="buy"><span class="tooltiptext">加入购物车</span><img src="imgs/购物车2.png"></a></div>';
    }
    console.log(str);
    $("#list_1").append(str);

    var list2=[
        {name:'VL418349 儿童绒布棒球服外衣',price:'129.00'},
        {name:'美国Pima棉男女童棒球服套装',price:'129.00'},
        {name:'儿童圆领套衫JC16QN-19',price:'129.00'},
        {name:'VL418349 儿童绒布棒球服外衣',price:'129.00'}
    ];
    str='';
    for(var i=0;i<list2.length;i++){
        str+='<div class="list_img"><a href="buy.html"><img src="./imgs/b'+(i+1)+'.jpg" alt="图片'+(i+1)+'"></a><span>'+list2[i].name+'"</span><br/><span>&yen;'+list2[i].price+'</span><a href="carts.html" class="buy"><span class="tooltiptext">加入购物车</span><img src="imgs/购物车2.png"></a></div>';
    }
    $("#list_2").append(str);
});


