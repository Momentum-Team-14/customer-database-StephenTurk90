console.log("hi!")

const container = document.querySelector(".container");
console.log(customers);

function showName(customerArray) {
    for (let customer of customerArray){
        let customerDiv = document.createElement("div")
        customerDiv.classList.add("personsInfo")
        let nameDiv = document.createElement("div")
        nameDiv.classList.add("name")
        nameDiv.innerText = `${customer.name.first} ${customer.name.last}`
        customerDiv.appendChild(nameDiv)
        container.appendChild(customerDiv)
    }
}
// name: first and last
showName(customers)