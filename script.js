// const newArray = new Array(5);
// newArray.fill(0);
// for (let i=0; i<newArray.length; i++){
//     console.log(newArray[i], i);
// }
// console.log(newArray)
// newArray.forEach(item => console.log(item, 'from forEach'))

// const strArray = 'Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast';
// let str = strArray.split(' ');
// console.log(str)
// str[5] = ''
// let newStr1 = '';
// for (let i=0; i<str.length; i++){
//     // console.log(str1[i])
//     // console.log(str1[i] === 'Fire', str1[i])
//     if (str[i] === 'Fire') {
//         str[i] = '~~'
//     }
//     newStr1 += str[i] + ' ';
//     console.log(str[i])
// }
// newStr1.trim(); // убирает пробелы до и после строки
// const newStr = str.join(' ')
// console.log(newStr)
// // newStr1[i] = newStr1[i] + ' ' //не работает добавление пробелов


// console.log(newStr1)
// console.log('spread:', ...str) // ... - spread operator создает копию, а не ссылается на негшо



const pirateNum = 5;
const gold = pirateNum * 20;

const amaroGold = gold - ((pirateNum-1)/2);

const goldArray = new Array(pirateNum).fill(0);
goldArray[0] = amaroGold;
for (let i=1; i<goldArray.length; i++){
    console.log(i%2)
    if (i%2 === 0) {
        console.log(true) 
        goldArray[i] = 1;
    } 
}

console.log(goldArray) 
// Math.ceil(1.2) // 2
// (1.2).toFixed();