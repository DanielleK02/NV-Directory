//create global variable
let courses


function loadPage() {
fetch("courses.json")
    .then(response => response.json())
    .then(json => {console.log(json)
                  courses = json
                  createCards()})
    .catch(err => console.error(err))
//createCards()

    
}
function createCards() {
let container = document.createElement('div')
container.innerHTML = courses.map(course =>
`<div>
<h3>${course.Course}</h3>
<h3>Department${course['Department']}</h3>
<p>${course['Teacher']}</p>
</div>`
                                  ).join('')
document.querySelector('article')
    .append(container)
}

function addToCart(sessionName) {
    if (!inCart.includes(sessionName)) {
        inCart.push(sessionName)
        let item = document.createElement('li')
        item.innerHTML = sessionName

        document.querySelector('ul#cart')
            .append(item)

        cartCount++
        let cartCountElem = document.querySelector('span#cartCount')
        cartCountElem.textContent = cartCount
        if (cartCount >= 3) {
            cartCountElem.style.backgroundColor = "green"
        }
        else if (cartCount > 0) {
            cartCountElem.style.backgroundColor = "aqua"
        }
    }
    else {
        alert("You have already added this session to your cart.")
    }
}
