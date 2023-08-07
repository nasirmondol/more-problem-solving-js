const array = ['Alom', 'Sazzad', 'Habib', 'Labib', 'Kalam', 'Salam', 'Balam', 'Alom', 'Habib', 'Sazzad'];

function removeDuplicate(names) {
    let uniqueName = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (uniqueName.includes(name) === false) {
            uniqueName.push(name);
        }
    }
    return uniqueName;
}

const duplicate = removeDuplicate(array);
// console.log(duplicate)

// How to select truthy value from the array;

const value = ["apple", false, NaN, 20, 40, undefined, true, 'Lothif', 'Thif', 'Rasel'];
const selectedTruthyValue = value.filter(Boolean)
// console.log(selectedTruthyValue);

const array1 = [10, 22, 19, 15, 44, 33, 90, 99, 78, 65, 42];
array1.length = 5;
// console.log(array1)

const arr3333 = [10, 39, [11, 33, [22, 88, 0], 90], 49, 90, [22, 88, 0]]
const singleArray = arr3333.flat(Infinity);
// console.log(singleArray);

const captain = 'Mashrafi' && console.log('Our price');;
// if(captain === 'Mashrafi'){
//     console.log('Our pride');
// }


const quote = 'React is a popular framework. Now this framework is popular day by day. We use framework to helping.'
console.log(quote.replace(/framework/g, "Library"));

