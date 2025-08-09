// JavaScript Document
function $_class(name){
 var elements = document.getElementsByTagName("*");
 for(s=0;s<elements.length;s++){
  if(elements[s].className==name){
   return  elements[s];
  }
 }
}
//tab effects
var tabList = $_class("menu_zzjs_net").getElementsByTagName("li")
 tabCon = $_class("sub_zzjs").getElementsByTagName("ul");
for(i=0;i<tabList.length;i++){
 (function(){
  var t = i;
  tabList[t].onmouseover = function(){
   for(o=0;o<tabCon.length;o++){
    tabCon[o].style.display = "none";
    tabList[o].className = "";
    if(t==o){
     this.className = "this_zzjs";
     tabCon[o].style.display = "block";
    }
   }
  }
 })()
}