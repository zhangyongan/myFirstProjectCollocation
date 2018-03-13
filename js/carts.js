window.onload=function(){

    var tbody=document.getElementsByTagName('tbody')[0];
    // var trs=tbody.getElementsByTagName('tr');
    str='';
    for(var i=0;i<1;i++){
        str+='<tr><td class="td1"><img src="imgs/勾.png" alt="勾" class="checked" >'+
        '</td><td class="td2"><div class="right_img"></div><div class="left_text">'+
        '<h6>蕾丝拼接短袖连衣裙77B1716040</h6><p>尺寸:M  颜色:黑色</p><p>库存：347</p>'+
        '</div></td><td class="td3"><div style="color: #d32048;font-size:14px;line-height:20px;">&yen;'+
        '<span class="price">349.00</span></div></td><td class="td4"><span>-</span><input readonly class="input" '+
        'type="text" value="1" /><span>+</span></td><td class="td5"><a href="#" class="deleted">'+
        '<img src="imgs/删除.png" alt=""></a></td></tr>';
    }
    $('tbody').append(str);

    /*删除列表*/
    var deleted=document.getElementsByClassName('deleted');
    var tbody=document.getElementsByTagName('tbody')[0];
    var money=document.getElementsByClassName('money')[0];
    for(var i=0;i<deleted.length;i++){
        deleted[i].onclick=function(){
            
            if(window.confirm('你确定要删除吗？')){
                var tr=this.parentNode.parentNode;
                tbody.removeChild(tr);
                money.innerHTML='0.00';
            }
            else{
                return false;
            }
            
        }
    }
    
    /*商品数量的加减*/
    var td4=document.getElementsByClassName('td4');
    for(var i=0;i<td4.length;i++){
        (function(i){
            var span = td4[i].getElementsByTagName("span");
            var input = td4[i].getElementsByTagName("input")[0];
            span[0].onclick = function(){
                var number = parseInt(input.value) - 1;
                if(number <= 0) return;
                input.value = number;
                var price=document.getElementsByClassName('price');
                var money=document.getElementsByClassName('money')[0];
                var sum=0;
                for(var i=0;i<price.length;i++){
                    sum+=(parseFloat(price[i].innerHTML)*input.value);
                }
                money.innerHTML=sum+".00";
            }
            span[1].onclick = function(){
                var number = parseInt(input.value) + 1;
                input.value = number;
                var price=document.getElementsByClassName('price');
                var money=document.getElementsByClassName('money')[0];
                var sum=0;
                for(var i=0;i<price.length;i++){
                    sum+=(parseFloat(price[i].innerHTML)*input.value);
                }
                money.innerHTML=sum+".00";
            }
        })(i)
    }
    function min(){
       var td4=document.getElementsByClassName('td4'); 
    }

    /*提交商品订单总钱数*/
    var price=document.getElementsByClassName('price');
    var money=document.getElementsByClassName('money')[0];
    var input=document.getElementsByClassName('input');
    var sum=0;
    for(var i=0;i<price.length;i++){
        console.log(input[i].value);
        sum+=(parseFloat(price[i].innerHTML)*input[i].value);
    }
    money.innerHTML=sum+".00";
}

/*右侧回顶部以及二维码显示*/
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
$(function(){
    /*选中切换*/
    $(".checked").click(function() {
        if($(this).attr('alt') == '勾'){
            $(this).attr("src","imgs/圈.png");
            $(this).attr('alt', '圈');
            $('.money').text('0.00');
        }else if($(this).attr('alt') == '圈'){
            $(this).attr("src","imgs/勾.png");
            $(this).attr('alt', '勾');
            var num=parseInt($('.price').text())*$('.input').val();
            
            
            $('.money').text(num+'.00');
        }

    });
});
