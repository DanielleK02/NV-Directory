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
<h3>Department: ${course['Department']}</h3>
<p>${course['Teacher']}</p>
<button onclick="myFunction()">Like</button>
</div>`
                                  ).join('')
document.querySelector('article')
    .append(container)
}


function myFunction() {
    console.log(courses);
}
