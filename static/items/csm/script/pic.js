// JavaScript Document
function trains(id,text){document.all[id].innerHTML='&nbsp;'+text}
function trainpic(id,text){document.all[id].innerHTML='<img src="'+text+'.gif">'}
function high(which2){
theobject=which2;theobject.filters.alpha.opacity=0
highlighting=setInterval("highlightit(theobject)",50)}
function low(which2){
clearInterval(highlighting)
which2.filters.alpha.opacity=100}
function highlightit(cur2){
if (cur2.filters.alpha.opacity<100)
cur2.filters.alpha.opacity+=15
else if(window.highting)
clearInterval(highlighting)}
