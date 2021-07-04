const btn = document.getElementById('btn');
const c = document.getElementById('reset');
const height = document.getElementById("height");
const bottom = document.getElementById("bottom");
const hy = document.getElementById("hypotenuse");

c.addEventListener('click',(e)=>{
 height.value ='';
 bottom.value ='';
 hy.value ='';
 const radian= document.getElementById("radian")
 radian.value='';
});

btn.addEventListener('click',(e)=>{
  function calc(a,b,c) {
    let Θ = document.getElementById("radian");
    if(c=='') {
       Θ.value = Math.asin(a/b)/(Math.PI/180);
    } else if(a=='') {
       Θ.value = Math.acos(c/b)/(Math.PI/180);
    } else if(b=='') {
       Θ.value = Math.atan(a/c)/(Math.PI/180);
    } 
  }
  
  let y = height.value;
  let x = bottom.value;
  let r = hy.value;
  calc(y,r,x);
  
});


  