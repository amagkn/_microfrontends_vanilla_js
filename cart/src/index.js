import { faker } from "@faker-js/faker"

let cartText = `<div>You have ${faker.number.int(10)} items in your cart</div>`

document.querySelector("#dev-cart").innerHTML = cartText;