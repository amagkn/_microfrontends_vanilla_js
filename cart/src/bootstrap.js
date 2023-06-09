import { faker } from "@faker-js/faker"

const mount = (el) => {
    let cartText = `<div>You have ${faker.number.int(10)} items in your cart</div>`

    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#dev-cart")

    // We assume element with that ID exist only in products/public/index.html and not in container/public/index.html
    // We can come up with more unique id for that
    if (el) {
        // We are probably running in isolation
        mount(el)
    }
}

export { mount }
