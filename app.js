let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

function copySorted(arr) {
  return arr.slice().sort()
}
console.log(sorted); // ['Angular', 'React', 'Vue']
console.log(arr); // ['React', 'Vue', 'Angular']
