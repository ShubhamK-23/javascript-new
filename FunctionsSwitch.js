const test=  {
    username : 'Shubham',
    isLoggedIn : 'True'
}



/*console.log(typeof test)
console.log(test);

test.username = 'XYZ'
console.log(this.username);
console.log(test.username)*/

//Functions

function normalFunction(anyObject) {
    //console.log(`Hello ${anyObject.username} this is normal function`);
    return
   
}

const b = (anyObject) => {
    //console.log(`Hello ${anyObject.username} this is arrow function`)
    return
}


for (let i = 0; i <= 4; i++) {
    const element = i;  
    if (element<=2) {
       const key = element
       switch (key) {
        case 1:
            normalFunction(test)
            break;
        case 2:
            b(test)
            break;
        default:
            break;
       }

    }
    else {
        break;
    } 
}

( (anyObject) => {
    console.log(`Inside IIFE :${anyObject.username}`)
}) (test);

/*For EACH */

const myArr = [1,2,3,4,5,6]

myArr.forEach( (item) => console.log(`Current no :${item+10}`) )
const bigNum = myArr.filter( (item) => {
    if (item >= 4)
    return item
} )

console.log(bigNum)

const Mapp = myArr.map( (item) => {
    const res = item*10+5
    return res;
} )

console.log(Mapp)

myArr.reduce ( (acc, currVal ) => {
    console.log(`Cureent no:${currVal}`)
    const red = currVal*2 + acc
    console.log(`After operation:${red}`)
    return red;
 },10)

