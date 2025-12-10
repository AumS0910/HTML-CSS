// var a = document.getElementsByTagName('li')
// console.log(a) 


// var a = document.getElementsByClassName('hero')
// console.log(a)


// var a = document.getElementById('hero')
// console.log(a)

// var a = document.querySelector('li')
// console.log(a)

// var child = document.querySelector('ul')
// var p = child.childNodes;
// console.log(p)


// console.log(document.querySelector('.qs').previousElementSibling);

// const ul = document.querySelector('ul');
// const newE = document.createElement('li');
// newE.textContent = '6. Sigma 6';
// ul.appendChild(newE);

// const list = document.querySelector('ul');
// const childToChange = list.children[1]
// newList = document.createElement('li');
// newList.textContent = 'Giga Chad';
// list.replaceChild(newList, childToChange);

// var fChild = document.querySelector('ul');
// console.log(fChild.firstElementChild);
// var fChild = document.querySelector('ul');
// console.log(fChild.firstChild);

// let a = document.querySelector('.qs');
// a.innerHTML = '<b>3. Giga Chad </b > '
// console.log(a.innerHTML)

// var target = document.querySelector('.hero');
// var newE = '<b>Lets go</b>'
// target.insertAdjacentHTML("beforebegin", newE);



// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomNumber(50, 100));



// function reverseOdd(str) {
//     let result = '';
//     let words = str.split(' ');

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length % 2 !== 0) {
//             result += words[i].split('').reverse().join('') + ' ';
//         } else {
//             result += words[i] + ' ';
//         }
//     }

//     return result.trim();
// }

// console.log(reverseOdd("Apple"));


function findLargest(arr) {
    return arr.reduce((max, current) =>
        current > max ? current : max)
}

console.log(findLargest([3, 5, 7, 2, 8]));