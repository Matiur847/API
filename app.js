// const userInfo = {id: 12, name: "Shariyar", friends: ["kamal", "jamal", "samal",], friendsAge: [22, 19, 21]};
// { "id": 12, "name": "Shariyar" }

// const userJSON = JSON.stringify(userInfo);
// console.log(userJSON);
// const userFromJSON = JSON.parse(userJSON);
// console.log(userFromJSON);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayUser(json))


function displayUser(users) {
    console.log(users);
    const userName = users.map(user => user.username);
    const ul = document.getElementById("user-container");
    for (let i = 0; i < userName.length; i++) {
        const user = userName[i];
        const li = document.createElement("li");
        li.innerText = user;
        ul.appendChild(li);
    }
}
