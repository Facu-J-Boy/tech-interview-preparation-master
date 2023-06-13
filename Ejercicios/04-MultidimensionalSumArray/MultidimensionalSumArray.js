function mdArraySum (arr) {
  // Your code here:
  console.log(arr);

 let sum = 0;

 for (let i = 0; i < arr.length; i++) {
  if(Array.isArray(arr[i]) ) sum += mdArraySum(arr[i])
  else sum += arr[i]

  
 }
  return sum;
}

// -------SOLUCION 2 EN UNA LINEA------------

// const mdArraySum = arr => arr.reduce((count, elem)=> count +  (Array.isArray(elem)? mdArraySum(elem) : elem ), 0 )

module.exports = mdArraySum

console.log(mdArraySum([1, 2, 3, 4]))//(10)
 console.log(mdArraySum([[2, 4], [1], [4, 2, 1]]))//(14)
 console.log(mdArraySum([2, [3, 4], 5, [-3, [6, [4, 5]]]]))//(26)
