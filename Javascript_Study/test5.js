const array = ['aaa', 'bb', 'cccc', 'dddd'];

array.map(na => console.log(na));

for(let na of array){
    console.log(na);
}

const test = [{name:"ddd", age: 22, home:"234324"}];

for(let i in test){
    console.log(`${i}: ${test[i]}`)
}