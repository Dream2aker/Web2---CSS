var Links = {
    setColor:function(color){
      //var acolor = document.querySelectorAll('a');
      //i = 0;
      //while(i < acolor.length){
      //acolor[i].style.color = color;
      //i = i + 1;
      //}
        $('a').css('color', color); // jQuery for link text color
    }
}
var Body = {
  setBackgroundColor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color); //jQuery for body background color
  },
  setColor:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color); //jQuery for body text color
  }
}
function NightDayHandler(self){
   var target = document.querySelector('body');
     if(self.value === 'night'){
       Body.setBackgroundColor('black');
       Body.setColor('white');
       self.value = 'day';
       Links.setColor('white')
       }
     else {
       Body.setBackgroundColor('white');
       Body.setColor('black');
       self.value = 'night';
       Links.setColor('black');
      }
 }
