// Script for Smooth transition

$("a:not([href^=\\#])[target!='_blank']").click(function(event){
   if(!event.ctrlKey && !event.metaKey){
     $('html').addClass("sidebarShown");
     $('body').attr('style','-webkit-transition: 0.5s 0.25s; transition: 0.5s 0.25s; opacity:0');

     //if page isn't loading
     setTimeout(function(){ $('body').css('opacity',1) },10000)
   }
 });
