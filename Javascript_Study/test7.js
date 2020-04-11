function countBiggerthanTen(numbers) {
    // let result = 0;

    // numbers.map(n => {
    //     if(n > 10){
    //         result++;
    //     }
    // });
    
    // return result;

    return numbers.reduce((acc, current) => 
        {if(current > 10)
           acc++;
           return acc;
        }, 0);
    
}

const count = countBiggerthanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60])
console.log(count); // 5

