fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => displayEmail(json))

function displayEmail(userEmail) {
    const emailAddress = userEmail.map(emails => emails.email);
    const listItem = document.getElementById("email-container");
    console.log(emailAddress);
    for (let i = 0; i < emailAddress.length; i++) {
        const address = emailAddress[i];
        console.log(address);
        const li = document.createElement("li");
        li.innerText = address;
        listItem.appendChild(li);
    }
}