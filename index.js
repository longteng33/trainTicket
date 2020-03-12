var oChange=document.getElementsByClassName("change")[0];
var oItem=Array.prototype.slice.call(document.getElementsByClassName("item"));
var oCard=document.getElementsByClassName("card")[0];
var oReturn=document.getElementsByClassName("return")[0];
var oUl=document.getElementsByClassName("city-list")[0];

oChange.deg=0;

oChange.onclick=function(){
    oItem.forEach(function(ele){
        if(ele.classList.contains("item1")){
            ele.classList.remove("item1");
            ele.classList.add("item2");
        }else{
            ele.classList.remove("item2");
            ele.classList.add("item1");
        }
        
    })
    this.deg==0?this.deg='180deg':this.deg=0;
    this.style.transform="rotate("+this.deg+")"
}

oItem.forEach(function(ele){
    ele.onclick=function(){
        oCard.style.left=0;
        // 将所有的item的id清空
        oItem.forEach(function(ele){
            ele.id="";
        });
        // 点了谁，就给谁一个id
        ele.id="flag"
    }
})

oReturn.onclick=function(){
    oCard.style.left="500px";
}
oUl.addEventListener("click",function(e){
    if(e.target.nodeName=="LI"){
        var str=e.target.innerText;
        document.getElementById("flag").innerText=str;
        oCard.style.left="500px";

    }
})


