let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}];

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
        arrayOfTodos = json;
        populateTodos();
    })
}

const logTodos = () => {
    console.log(arrayOfTodos);
}

const populateTodos = () => {
    const todoList = document.getElementById("todo-list");
    // Clear existing list
    todoList.innerHTML = '';

    // Loop through todos and create <li> elements
    arrayOfTodos.forEach(todo => {
        const listItem = document.createElement("li");
        listItem.textContent = todo.title;
        todoList.appendChild(listItem);
    });
}


// start with getting just the first item and its title property
// Then capture the ol item into a variable (getElementById)
// createElement to make new LI
// createTextNode inside the li using the title property
// now append the text to the new element
// Then append the element to the ol element
// Put all of that inside your populateTodos function