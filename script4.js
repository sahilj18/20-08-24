// function move1(char){
//     const alpha = "abcdefghijklmnopqrstuvwxyz";
//     // find index of char 


//     let index =alpha.indexOf(char);
//     index +=  1;
//     console.log(alpha[index]);
// }
// move1("f")
function move(char ,step){
   const alphabet= "abcdefghijklmnopqrstuvwxyz";

   const indexChar = alphabet.indexOf(char);
   let finalIndex= indexChar+ step;
   
   if (finalIndex >25){
    finalIndex =finalIndex%26;
   }
   const finalChar =alphabet[finalIndex];
   return finalChar;

}
const x= move ( "z", 5);
console.log(x);
