const info = {
    name: "yyy",
    age: 14,
    home: "aaaa"
}

console.log(info.name);
console.log(info.age);

const myInfo = ({name, age, home}) => {
    
    console.log(name);
    console.log(age);
    console.log(home);
}

myInfo(info);