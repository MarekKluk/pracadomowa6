// const firstButton = document.querySelector('.first-button');
// const secondButton = document.querySelector('.second-button');
//
// function waitForButtonToBeClicked([firstButton, secondButton]) {
//     return new Promise((resolve) => {
//         firstButton.addEventListener('click',function(event) {
//             resolve(firstButton);
//         });
//         secondButton.addEventListener('click',function(event) {
//             resolve(secondButton);
//         });
//     });
// }
// waitForButtonToBeClicked([firstButton, secondButton])
//     .then((clickedButton) => {
//         console.log('Button was clicked!', clickedButton);
//     })
//     .catch(() => {
//         console.log('One of the provided buttons does not exist');
//     })


const cards = document.querySelector(".cards");

let listOfUsers = null;
function handleDataFetched (data){
    return data.json();
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(handleDataFetched)
    .then((data)=>{
        listOfUsers = data;
        creatingListOfUsers(listOfUsers);
    })

function creatingListOfUsers (listOfUsers) {
    for (let i = 0; i <= listOfUsers.length - 1; i++) {
        const firstCard = document.createElement("div");
        firstCard.classList.add("firstCard");
        const name = document.createElement("h1");
        name.innerText = listOfUsers[i].name
        const email = document.createElement("h2");
        email.innerText = listOfUsers[i].email
        firstCard.append(name);
        firstCard.append(email);

        const deleteButton = document.createElement("delete");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", (event) => {
            fetch('https://jsonplaceholder.typicode.com/users/' + listOfUsers[i].id, {
                method: 'DELETE',
            }).then(firstCard.remove);

        });
        firstCard.append(deleteButton);

        cards.append(firstCard);
    }
}
