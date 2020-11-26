// Задача 1

function getResult(a, b, c) {
    let roots;
    
    let d = Math.pow(b, 2) - 4*a*c; ;
    let person = {
        d ,
        roots: []
        };
   
   d = Math.pow(b, 2) - 4*a*c;
    for (i=0; i<=1; i++)
  {     
     if (d < 0){
         return person ;
          }
       if (d === 0) {
       person.roots[i] = (-b + Math.sqrt(d)) / 2 * a
        return person ;
  }
     if (d > 1) {
         person.roots[i] = (-b + Math.sqrt(d)) / 2 * a;
          person.roots[i+1] = (-b - Math.sqrt(d)) / 2 * a;
    return person ;
   
     }
}
}
function showSolutionsMessage( a, b, c ){
    let results=getResult()
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`)

console.log(`Значение дискриминанта: ${results.d}`)
if (results.roots.length==0){
    console.log("Уравнение не имеет вещественных корней")
}
if (results.roots.length==1){
    console.log(`Уравнение имеет один корень X₁ = ${results.roots}`)
}
if (results.roots.length>1){
    console.log(`Уравнение имеет два корня. X₁ =${ results.roots[0]}, X₂ = ${results.roots[1]}`)
}
}

// ......................................................

// Задача 2
let data={
    c:[5,5,5,5,5,],
    b:[5,5],
    a:[5,5,5,5]}
   
    let m
    let key
    let sum
    sum=0
    function getAverageMark(marks){
      let data={
    c:[5,5,5,5,5],
    b:[5,5],
    a:[5,5,5,5]}
    for (let key of Object.values(data))
     {
       //  console.log(key)
           for (i=0; i<key.length; i++){
           // console.log(key[i])
           sum=sum+key[i]
            console.log(sum)
            console.log(key.length)
         //    for (j=0; j<=key[i].lenght;j++){
         // console.log(key[i])
         //    }
         }
         }
       
    
    }
    for (let key of Object.values(data)){
      key=
    }
//      let sum
//       sum=0
//    for (let key of data){
//        for(let i=0; i<=key.length; i++){
//         sum=sum+key[i]
//             return key;

//     }
//      return sum;
//     }
//       }
//   function getAverageScore(data) {
//     data={
//       c:[5,5,5,5,5,],
//       b:[5,5],
//       a:[5,5,5,5]
    
//     }
  
  
   
  
// //  for (key in data){
// //    key=getAverageMark(m)

// //  }
// //  return getAverageMark()
 // }
 console.log(getAverageMark(data))