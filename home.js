/* pecentage-section
sectintervale*/
let one = document.querySelector('#firstIntervale');
let two = document.querySelector('#secondIntervale');
let three = document.querySelector('#tirthIntervale');
let four = document.querySelector('#forthIntervale');
let content1 = document.getElementById('content1');
let content2 = document.getElementById('content2');
let content3 = document.getElementById('content3');
let content4 = document.getElementById('content4');

//FirstsetIntervale
   a = 0;
  function render1(){
    a++;
    if(a > 28){
      a=0;
     
    }
    content1.innerHTML = a;
  }
  setInterval(render1,200)

//SecondsetIntervale
b= 0;
function render2(){
  b++;
  if(b > 86){
    b=0;
   
  }
  content2.innerHTML = b;
}
setInterval(render2,200)

//TirthsetInterval
c= 0;
function render3(){
  c++;
  if(c > 47){
    c=0;
   
  }
  content3.innerHTML = c;
}
setInterval(render3,200)


//ForthsetIntervale
d= 0;
function render4(){
  d++;
  if(d > 36){
    d=0;
   
  }
  content4.innerHTML = d;
}
setInterval(render4,200)


 //MOMMENT-SECTION
 let all = document.querySelector('#all');
 let activities = document.querySelector('#activities');
 let classes = document.querySelector('#classes');
 let facilities = document.querySelector('#facilities');


 let display = document.querySelector('#render');
 
    //FUNCTION ALL
    function allItems(){
      activities.style.display ='block';
      classes.style.display = 'block'
      facilities.style.display ='block';
      display.style.display='flex'
    }
 
    //ACTIVITIES FUNCTION
   function activitiesItems(){
    activities.style.display ='block';
    facilities.style.display ='none';
    classes.style.display = 'none'
    activities.style.display ='flex';
   } 

      //CLASSES FUNCTION
      function classesItems(){
        activities.style.display ='none';
        facilities.style.display ='none';
        classes.style.display = 'block'
        classes.style.display='flex'
       } 
  
    //ACTIVITIES FUNCTION
    function facilitiesItems(){
      activities.style.display ='none';
      facilities.style.display ='block';
      facilities.style.display='flex'
      classes.style.display = 'none'
  
     }       
   

  



