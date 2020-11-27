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
   let key
   let m
    let k
    let sum
    sum=0

    function getAverage(k){
      sum=0;
      for (i=0; i<k.length; i++){
        sum=sum+k[i];
      }
       
       return sum;
    }
    function getAverageMark(data){
       data={
    c:[5,5,5,5,5],
    b:[5,5],
    a:[5,5,5,5]}
    
       for (let k of Object.values(data)){
        m=getAverage(k)
       
       
         for ( let key in data){
            m=getAverage(k)
        
          data[key]=m
       }
       
     
 }
  return data
 
    }
    
//     
  console.log(getAverageMark(data))