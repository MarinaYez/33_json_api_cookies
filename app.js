fetch("./data.json")
.then(response => response.json())

async function showAdminName(data) { //Task1
    let response = await fetch(data)
    let users = await response.json();
    for (const key in users) {
        if (users[key].isAdmin === true) {
            console.log(users[key].name);
        }
    }
}

showAdminName('./data.json');


let nikola = { firstName: 'Nakola', lastName: 'Tesla' }; //Task2
let bob = { firstName: 'Bob' };
let mike = { lastName: 'Smith' };
let michel = {};

let getFullName = function (user) {
    return `${user.firstName} ${user.lastName}`;
}

getFullName = new Proxy(getFullName,{
    apply(target, thisArg, args) {
        let user = '';
        for (const key in args[0]) {
                user += (args[0][key]) + ' ';
        }
        return user || 'No Name';
    }
});
console.log(getFullName(nikola));
console.log(getFullName(bob));
console.log(getFullName(mike));
console.log(getFullName(michel));



let users = [ ///Task3
    { name: 'Nikola', age: 18, id: 1 },
    { name: 'Bob', age: 25, id: 2 },
    { name: 'Mike', age:32, id:3 },
];

localStorage.setItem(users[0].name, JSON.stringify(users[0]));
localStorage.setItem(users[1].name, JSON.stringify(users[1]));
localStorage.setItem(users[2].name, JSON.stringify(users[2]));

function sayHelloToUser(id) {
    console.log('Hello ' + localStorage.key(id-1));
}

sayHelloToUser(3);
sayHelloToUser(2);

 

function showValue() { ///Task 4
    console.dir(document.querySelector('input').value);
}
const btn = document.querySelector('button');
btn.addEventListener('click',showValue);
document.querySelector('input').value = getValue("input");
function getValue(key) {
  if (localStorage.getItem(key) === null) {
    return "";
  }
  return localStorage.getItem(key);
}

let cookieShow = showValue;
document.cookie = `${cookieShow}=${JSON.stringify(showValue)}; path=/; expires=Tue, 15 Jan 2030 06:00:00 GMT`;