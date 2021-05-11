$(function(){
    
  function loadPage (Page){          
    $.ajax({
        url: "views/"+ Page +".html",
        cache: false,
        dataType: "html",
        success: function(data) {
        $("#"+ Page).html(data);
        }
    });
  };
    loadPage("presentation");       
    loadPage("competence");
    loadPage("parcour");
    loadPage("passetemps");
    loadPage("footer");


    var i = 0;
    function sleep(ms) {
       return new Promise(resolve => setTimeout(resolve, ms));
   }
   var textWrapper = document.getElementsByClassName('letters');
   textWrapper[0].style.display="none";
   textWrapper[1].style.display="none";
    setInterval( function() {
    
   // Wrap every letter in a span
   textWrapper[0].style.display="none";
   textWrapper[1].style.display="none";
   textWrapper[i].style.display="block";
   textWrapper[i].innerHTML = textWrapper[i].textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
   anime.timeline({loop: true})
     .add({
       targets: '.ml11 .line',
       scaleY: [0,1],
       opacity: [0.5,1],
       easing: "easeOutExpo",
       duration: 700
     })
     .add({
       targets: '.ml11 .line',
       translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
       easing: "easeOutExpo",
       duration: 700,
       delay: 100
     }).add({
       targets: '.ml11 .letter',
       opacity: [0,1],
       easing: "easeOutExpo",
       duration: 600,
       offset: '-=775',
       delay: (el, i) => 34 * (i+1)
     }).add({
       targets: '.ml11',
       opacity: 0,
       duration: 1000,
       easing: "easeOutExpo",
       delay: 1500
     });
     if(i==0){i=1;}
     else{i=0;} 
   },1800);
});