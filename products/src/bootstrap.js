import { faker } from "@faker-js/faker"

const mount = (el) => {
    let products = "";

    for(let i = 0; i < 5; i++) {
        const name = faker.commerce.productName()

        products += `<div>${name}</div>`
    }

    el.innerHTML = products;
}

// Running this frontend in development in isolation
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#dev-product")

    // We assume element with that ID exist only in products/public/index.html and not in container/public/index.html
    // We can come up with more unique id for that
    if (el) {
        // We are probably running in isolation
        mount(el)
    }
}

// Export for running this file in development or production through the CONTAINER app
export { mount }