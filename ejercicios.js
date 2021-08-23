
// de binario a decimal
var num = '1001';

var array= num.split('');
var sum = 0;
for (var i=0; i<array.length; i++){
  sum+=array[i]*2**(array.length-1-i)
}


// de decimal a binario

var num = 40;
var array = [];
if (num <=0) 
  console.log('0');

while (num > 0){
  array.unshift(num%2);
  num = Math.floor(num/2);
}

console.log (array.join(''));
