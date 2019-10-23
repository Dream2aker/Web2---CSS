function NightDayHandler(self){
   var target = document.querySelector('body');
     if(self.value === 'night'){
       target.style.backgroundColor = 'black';
       target.style.color = 'white';
       self.value = 'day';
       var acolor = document.querySelectorAll('a');
       i = 0;
       while(i < acolor.length){
       acolor[i].style.color = 'powderblue';
       i = i + 1;
       }
     }
     else {
       target.style.backgroundColor = 'white';
       target.style.color = 'black';
       self.value = 'night';
       var acolor = document.querySelectorAll('a');
       i = 0;
       while(i < acolor.length){
       acolor[i].style.color = 'black';
       i = i + 1;
       }
     }
   }
