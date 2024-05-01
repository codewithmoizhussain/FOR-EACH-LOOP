// [[1,2], [3,4], [5,6]] = [1,2,3,4,5,6]

// 1) 

function flattenNestedArrays(nestedarray) {

    let flattenedarray = [];

    nestedarray.forEach(function (nested) {

        if (Array.isArray(nested)) {
            flattenedarray.push(...flattenNestedArrays(nested))
        } else {
            flattenedarray.push(nested)
        }
    })
    return flattenedarray
}

const nestedarray = [[1, 2], [3, 4], [5, 6]]
console.log(flattenNestedArrays(nestedarray)) // ✅✅✅


// 2) 

// obj1 {price: 10} obj2 {price: 20} obj3 {price: 30} = price = 60.


function ArrayOfObjects(arrayofobjects) {

    let sum = 0;
    arrayofobjects.forEach(function (obj) {
        sum += obj.price
    })
    return sum
}

const obj = [
    { price: 10 },
    { price: 20 },
    { price: 30 }
]

console.log(obj, ArrayOfObjects(obj)); // ✅✅✅

// [10,20,30] = [60]

// 3) 

function SumOfArrays(sum) {

    let sumArray = 0;

    sum.forEach(function (array) {
        sumArray += array
    })
    return sumArray
}

const array = [10, 20, 30]

console.log(SumOfArrays(array)) // ✅✅✅

// ['moiz', "Hussain"] = ["MOIZ", "HUSSAIN"]

// 4) 

function ArrayToUppercase(uppercase) {
    let uppercasearray = [];

    uppercase.forEach(function (val) {

        uppercasearray.push(val.toUpperCase())
    })
    return uppercasearray
}

const lowercase = ['moiz', 'Hussain'];
console.log(ArrayToUppercase(lowercase)) // ✅✅✅


// ["John Cena", "CM Punk", "Undertaker"] = WWE Superstar: John Cena

// 5) 

function Superstars(superstar) {

    superstar.forEach(function (supers) {
        console.log(`WWE Superstar: ${supers}`)
    })
}

const wrestlers = ["John Cena", "CM Punk", "The Undertaker"];
Superstars(wrestlers) // ✅✅✅

// [3,6,8,10,12,15] = [3,6,8]

// 6)  

function FilterArray(filter) {

    let filteredarray = [];

    filter.forEach(function (filtered) {

        if (filtered < 10) {
            filteredarray.push(filtered)
        }
    })
    return filteredarray;
}

let filterone = [3, 6, 8, 10, 12, 15]
console.log(FilterArray(filterone))

// 7) 

// [1,2,3,4,5,1,2,3,4,5] = [1,2,3,4,5]

function RemoveDuplicate(array) {
    let UpdatedArray = [];
    let repeatedArray = [];

    array.forEach(function (el) {

        if (!repeatedArray.includes(el)) {
            UpdatedArray.push(el);
            repeatedArray.push(el);
        }
    })
    return UpdatedArray;
}

const arrayok = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

console.log(RemoveDuplicate(arrayok))