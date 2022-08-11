'use strict';



function part(x) {
    const arr = ['ship', 'use', 'food'];
    let num = x.filter(v => arr.includes(v)).length;
    if(arr.some(v => x.includes(v))) return `Mine\'s a Pint ${'!'.repeat(num)}`;
    return 'Lynn';
}

part(['part', 'goust', 'ship']);
part(['part', 'goust']);

// console.log(part(['part', 'goust', 'ship']));
// console.log(part(['part', 'goust']));

function arrayPlus(arr1, arr2) {
    let arrMerge = [...arr1, ...arr2];
    let res =0;
    arrMerge.forEach(i => {
        res += i;
    });
    return res;
}
arrayPlus([1,2,3], [4,5,6]);

//считаем какое кол-во true в массиве
function sheep(arr) {
    let res = [];
    arr.forEach(i => {
        if(i) res.push(i);
    })
 
    return res.length;
}
sheep([true, true, false]);

//2й способ короткий
function sheep1(arr) {
    return arr.filter(Boolean).length;
}
sheep1([true, true, false]);

//получить число. сделать из него массив и реверс
function dig(n) {
    let str = String(n).split('');
    let res = [];
    for(let i=0; i<str.length; i++) {
        res.push(Number(str[i]));
    }
   
    return res.reverse();
}
dig(123568);

//2 способ короткий
function dig1(n) {
    return String(n).split('').map(Number).reverse();
}
dig1(125698);


function aver(m) {
    let res = 0;
    m.map(i => {
        res += i;
    })
    return res / m.length;
}
aver([2,2,2,2]);


let number = function(array) {
    let res = [];
    array.map((item, index) => {
        res.push(`${index + 1}: ${item}`);
    })
    // console.log(array);
    return res;
}
number(['f','d','t']);

function arr(array) {
    let res = array.flat();
    res.sort((a,b) => {
        return a-b;
    })
    return res;
}
arr([[1,2,5],[8,3,45]]);

function mis(arr) {
    let res = 0;
    let sort = arr.sort((a,b) => {
        return a-b;
    })
    sort.forEach((item, index) => {
        if(index === item) {
            res++;
        }
    })
    return res;
}
mis([0,5,4,8,1,3,2,8,7,9]);
// console.log(mis([0,5,4,1,3,2,8,7,9]));

const is = function(arr) {
    let res = '';
    arr.map(i => {
        if(Math.sqrt(i)) {
            return res = true;
        } else if(!Math.sqrt(i)){
            return res = false;
        }
    })
    return res;
}
is([1,4,9,16,25,36]);
// console.log(is([1,4,9,16,25,36]));
// console.log(is([1,2,3,4,5,6]));

function even(arr, num) {
    let rev = arr.reverse();
    let res=[];
    rev.filter(i => {
        if(i %2 === 0) res.push(i);
    })
    res.splice(num);
    return res.reverse();
}
even([-22,5,3,11,26,-6,-7,-8,-9,-8,-26],2);
// console.log(even([-22,5,3,11,26,-6,-7,-8,-9,-8,-26],2));

function oddEven (arr) {
    let res = arr.reduce((total, amount) => {
        return total + amount;
    })
    if(res % 2 === 0) res ='even';
    if(res % 2) res = 'odd';

    return res;
}
oddEven([0,1,2,1]);
// console.log(oddEven([0,1,2,1]));

function small (arr, pos) {
    let res = arr.sort((a,b) => {
        return a - b;
    })
    return res[pos-1];
}
small([15,20,7,10,4,3],3);
// console.log(small([15,20,7,10,4,3],3));

function check(arr1, arr2) {
    let res = 0;
    // for(let i=0; i<arr1.length; i++) {
    //     for(let h=0; h<arr2.length; h++) {
    //         if(arr1[i] === arr2[h]) res += 4;
    //         if(arr1[i] !== arr2[h]) res -= 1;
    //         if(arr1[i] === ' ' || arr2[h] === ' ') res += 0;
    //     }
    // }
    for(let i=0; i<arr1.length; i++) {
        if(arr1[i] === arr2[i]) {
            res += 4;
        } else if(arr2[i] === '') {
            res += 0;
        } else {
            res -= 1;
        }
    }
    return res;
}
check(['a','a','b','b'], ['a','c','b','d']);
// console.log(check(['a','a','b','b'], ['a','c','b','d']));

const list = [
    {age: 25, language: 'Java'},
    {age: 25, language: 'Java'},
    {age: 25, language: 'Java1'}
]
function lang(list) {
    let a = list.every(item => {
        if(item.language === 'Java') {
            return true;
        }
    })
    return a;
}
lang(list);

function even(num) {
    let res = 0;
    num.filter((item, index) => {
        if(index %2 === 0) {
            res += item;
        }
    })
    return res * num[num.length-1] ? res * num[num.length-1] : 0;
}
even([2,3,4,5]);
// console.log(even([2,3,4,5]));

function math(n, k) {
    let res = [0];
    for(let i = 1; i <= n; i++) res.push(i);
    return res.sort().indexOf(k);
    //или через цикл
//    for(let i = 0; i < res.length; i++) {
//        if(res[i] === k) return i + 1;
//    }
}
math(11,2);
// console.log(math(11,2));
const data = [
    {name: 'Alex', language: 'JavaScript', age: 36},
    {name: 'Lime', language: 'JavaScript', age: 96},
    {name: 'Leo', language: 'JavaScript', age: 52},
]
function same(data) {
    let a = data[0].language;
    let res = data.every(item => {
        if(item.language === a) {
            return true;
        } else {
            return false;
        }
    })
    return res;
}
same(data);

const list3 = [
    {age: 30, country: 'Odessa'},
    {age: 70, country: 'Ukraine'}
]
function get(list) {
    let a = 0;  //100
    list.map(i=> {
        a += i.age;
    })
    return a / list.length;
}
get(list3);

function filterEven() {
    
}
filterEven([1,2]); //2
// console.log(filterEven([1,2])

function num(...n) {
    let a = [];
    a.push(...n);
    return a.every(item => typeof Number(item))
    
};
num(1,'a',5);

//1 неделя - от 3 января
function monkeyCount(n) {
    let res = [];
    for(let i = 1; i<=n; i++) {
        res.push(i);
    }
    return res;
}
monkeyCount(15);
// console.log(monkeyCount(15));

function grow(arr) {
    return arr.reduce((acc, item) => {
        return acc * item;
    })
}
grow([1,2,3]);
// console.log(grow([1,2,3]));

const removeChar = (str) => {
    let res = str.split('').splice(1, str.length-2)
    return res.join('')
    //str.slice(1,-1)
}
removeChar('eloquent');

const opp = (n) => {
    return n ? -n : n;
}
opp(-1)
// console.log(opp(-1));

const numsumm= (num) => {
    let res = 0
    for(let  i =1; i <= num; i++) {
        res += i
    }

    return res;
}
numsumm(4);
// console.log(numsumm(4));  //10

const oper=(op, v1, v2)=> {
    if(op === '+') {
        return v1 + v2
    }
    if(op === '-') {
        return v1 - v2
    }
    if(op === '*') {
        return v1 * v2
    }
    if(op === '/') {
        return v1 / v2
    }
}
oper('*', 1, 2)
// console.log(oper('*', 1, 2));

function remove(arr) {
    let res = []
    for(let i=0; i < arr.length; i++) {
        if(i%2==0) {
             res.push(i)
        }
    
    }
    return res
}
remove([1,2,3,4,5,6])

const revers = n => {
    let res = []
    for(let i=1; i<=n; i++) {
        res.push(i)
    }
    return res.reverse();
}
revers(5)

function isSortedAndHow(array) {
    let a = '';
    let count = 0;

    for(let i = 0; i < array.length; i++) {
        if (array[i] > array[i+1]) {
            count +=1;
            a = 'yes, descending';
    
        } else if (array[i] < array[i+1]) {
            count +=1;
            a = 'yes, ascending';

        } else {
            count +=1;
            a = 'no'
        }
    }
    return a;
 }

//  console.log(isSortedAndHow([1,2,3]))   //yes, ascending
//  console.log(isSortedAndHow([3,2,1]))  //yes, descending'
 //console.log(isSortedAndHow([1,4,2]))  //NO



 function findDup( arr ){
    //Variant 1
    let arrSort = arr.sort();
    let duplicateValue  = 0;

    for(let i=0; i<arrSort.length; i++) {
        if(arrSort[i] === arrSort[i+1]) {
            duplicateValue = arrSort[i]
        }
    }
    return duplicateValue;
    //variant 2

    // const countItems = arr.reduce((acc, item) => {
    //     acc[item] = acc[item] ? acc[item] + 1 : 1; 
    //     return acc;
    //   }, {});
    //   const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
    //   console.log(typeof result)
    // return +result;
  }
//   console.log(findDup([1,3,2,5,4,5,7,6]))  //5

function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }
//   console.log(isSortedAndHow([1,4,2]))
//   console.log(isSortedAndHow([1,2,3]))
//   console.log(isSortedAndHow([3,2,1]))


function dbSort(a){
    let num = a.filter(item => typeof item === 'number').sort((a,b)=>a-b);
    let str = a.filter(item => typeof item === 'string').sort();
    return [...num, ...str];
}

// console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]))




   function isSortedAndHow(array) {
    let counterAsc = 0;
    let counterDesc = 0;
    let response = "";
    
    for (let i = 0; i < array.length - 1; i++) {
     if(array[i] < array[i + 1]) {
       counterAsc++; 
     } else if (array[i] > array[i + 1]) {
      counterDesc++;
     }
    }
    
    if (counterAsc === array.length - 1) {
     response = 'yes, ascending';
    } else if (counterDesc === array.length - 1) {
    response = 'yes, descending';
    } else {
    response = 'no';
    }
 
     return response;
}

// console.log(isSortedAndHow([1, 4, 2]));  //no
// console.log(isSortedAndHow([999, 666, 555, 333, 100, 5]));  //des
// console.log(isSortedAndHow([-999, 0, 3, 89, 105]));  //as

const list1 = [  
    { firstName: 'Nikau', language: 'Ruby' },
    { firstName: 'Precious', language: 'JavaScript' },
    { firstName: 'Maria', language: 'C' },
    { firstName: 'Agustin', language: 'JavaScript' },
    { firstName: 'Yric', language: 'JavaScript' }
  ];

  const list2 =  [ 
    { firstName: 'Andrei', language: 'C' },
    { firstName: 'Maria', language: 'C' },
    { firstName: 'Jing', language: 'Ruby' },
    { firstName: 'Kseniya', language: 'JavaScript' },
    { firstName: 'Maria', language: 'C' },
    { firstName: 'Piotr', language: 'JavaScript' },
    { firstName: 'Viktoria', language: 'PHP' } 
];

  function sortByLanguage(list) {
    let res = list.sort((a,b) => {
        if(a.language === b.language) {
            return  a.firstName > b.firstName ? 1 : -1;
        }
        return a.language > b.language ? 1 : -1
    })
    return res;
  }

  //variant 2
//   function sortByLanguage(list) {
//     return list.sort((a, b) => a.language === b.language ? a.firstName.localeCompare(b.firstName) : a.language.localeCompare(b.language));
//   }

//   console.log(sortByLanguage(list1));
//   console.log(sortByLanguage(list2));
  
  const dates = [
    '2019/06/01',
    '2018/06/01',
    '2019/09/01', // This is the most recent date, but how to find it?
    '2018/09/01'
  ].map(v => new Date(v));
                                      
  const maxDate = dates.reduce((max, d) => d > max ? d : max, dates[0]);


  const characters = [
    { name: 'Jean-Luc Picard', age: 59 },
    { name: 'Will Riker', age: 29 },
    { name: 'Deanna Troi', age: 29 }
  ];
  const reducer = (map, val) => {
    if (map[val] == null) {
      map[val] = 1;
    } else {
      ++map[val];
    }
    return map;
  };
  let res = characters.map(char => char.age).reduce(reducer, {});
  console.log(res)

  console.log((1).toString())

  function adjacentElementsProduct(array) {
    let res = [];
    res.push(Math.max(...array))  //10

    let a = array.filter(i=> i !== Math.max(...array)) //[1,3,9]
    res.push(Math.max(...a));

    return res.reduce((acc, item) => acc*item)
  }
adjacentElementsProduct([1,3,9,10])  //90


function adjacentElementsProduct1(array) {
    
  let a = array.indexOf(Math.max(...array))   //2
 
  let newArr = [...array].splice(a - 1, 2);  //[5,10]
  let newArr2 = [...array].splice(a, 2); //[10,9]

  let a1 = newArr.reduce((acc, item) => acc*item)  //50
  let a2 = newArr2.reduce((acc, item) => acc*item)  //90

  return Math.max(a1, a2)
  }
console.log(adjacentElementsProduct1([5, 1, 2, 3, 1, 4]))  //6

function fizzbuzz(n) {
    let arr = []
    for(let i=1; i<n+1; i++) arr.push(i) //[1,2,3,4,5,6,7,8,9,10]

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 === 0 || arr[i] % 5 === 0) arr[i] = 'FizzBuzz'
        if(arr[i] % 3 === 0 ) arr[i] = 'Fizz'
        if(arr[i] % 5 === 0 ) arr[i] = 'Buzz'
    }
    return arr
}

console.log(fizzbuzz(30))

