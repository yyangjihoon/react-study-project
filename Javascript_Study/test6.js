//배열내장함수

const student = ['aaa', 'bbb', 'ccc'];

//forEach
student.forEach(s => console.log(s));

//map
student.map(a => console.log(a));

//indexOf
console.log(student.indexOf('aaa'));
console.log(student.indexOf('bbb'));
console.log(student.indexOf('ccc'));

//find
const todos = [
    {
        id: 1,
        text: 'html',
        done: true
    },
    {
        id: 2,
        text: 'css',
        done: true
    },
    {
        id: 3,
        text: 'javascript',
        done: true
    },
    {
        id: 4,
        text: 'react',
        done: false
    }
];

const ff = todos.find(todo => todo.text === 'javascript');
console.log(ff);

//filter
const dd = todos.filter(todo => !todo.done);
console.log(dd);

//concat
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = a.concat(b);

console.log(c);

//reduce
const num = [1, 2, 3, 4, 5];

let sum = num.reduce((acc, current) => (acc += current), 0);

console.log(sum);