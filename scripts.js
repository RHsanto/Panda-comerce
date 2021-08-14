// function makeColour(){
//   document.body.style.color = 'red';
// }

//  const color = document.querySelectorAll('h1');
//  color.body.style.color = 'red';


// const blue = document.getElementById('bag');

// blue.onclick = function(){
//   document.body.style.color = 'yellow';
// }


//Task 2 change h1 color
const getColor = document.getElementsByTagName('h1');
for(const color of getColor){
 color.style.color = 'deeppink';
 color.style.fontStyle = 'italic';
}
 // task 3 backpacks background color change

 const backpacs = document.getElementById('bags').addEventListener('click', function(){
  document.body.style.background = '#FEEAE9';
 })


 //task 4 add card border redius

 const cardRedius = document.getElementsByClassName('card');
 for(const redius of cardRedius){
   redius.style.borderRadius = '30px';

 }

 // task 6 

//  const buyButtonGayab = document.getElementsByClassName('btn').addEventListener('click',function(){
//    buyButtonGayab.body.style.display = 'none';
//  })

 //vbfgbn
 document.getElementById("kalu").addEventListener('click', function(){

  document.getElementById('kaltus').style.display = 'none';

  })


  //Task 7

  