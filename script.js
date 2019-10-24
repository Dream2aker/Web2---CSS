function LinksSetColor(color){
  var acolor = document.querySelectorAll('a');
  i = 0;
  while(i < acolor.length){
  acolor[i].style.color = color;
  i = i + 1;
  }
}
function BodySetBackgroundColor(color){
  document.querySelector('body').style.backgroundColor = color;
}
function BodySetColor(color){
  document.querySelector('body').style.color = color;
}
function NightDayHandler(self){
   var target = document.querySelector('body');
     if(self.value === 'night'){
       BodySetBackgroundColor('black');
       BodySetColor('white');
       self.value = 'day';
       LinksSetColor('powderblue')
       }
     else {
       BodySetBackgroundColor('white');
       BodySetColor('black');
       self.value = 'night';
       LinksSetColor('black');
      }
 }
