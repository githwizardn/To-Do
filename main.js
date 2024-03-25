const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const imageInput = document.querySelector("#image");
const submitBtn = document.querySelector("#submitBtn");
const displayTodos = document.querySelector("#displayTodo");

const PLACEHOLDER_IMAGE =
  "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg";

let index = 0;

submitBtn.addEventListener("click", () => {
  const title = titleInput.value;
  const description = descriptionInput.value;

  if (isInvalidInputs(title, description)) {
    alert("Invalid inputs");
    return;
  }

  displayTodo(title, description, ++index);
  clearInputs();
});

function isInvalidInputs(title = "", description = "") {
  return title.length < 2 || description.length < 5;
}

function displayTodo(title, description, id) {
  displayTodos.innerHTML += `
    <div class="card" id="todo-${id}" style="width: 18rem; margin-bottom: 10px;">
      <img src="${PLACEHOLDER_IMAGE}" class="card-img-top" alt="todo image" id="todo-image-${id}">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <button class="btn btn-danger" onclick="removeItemFromTodo('todo-${id}')">Delete</button>
      </div>
    </div>
  `;
  convertImageToBase64(`todo-image-${id}`);
}

function removeItemFromTodo(id) {
  // ! cudia | document.getElementById(id).innerHTML = "";
  document.getElementById(id).remove();
}

function clearInputs() {
  titleInput.value = "";
  descriptionInput.value = "";
  imageInput.value = "";
}

function convertImageToBase64(id) {
  if (imageInput.files && imageInput.files[0]) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageInput.files[0]);
    fileReader.onload = () => {
      document.getElementById(id).src = fileReader.result;
    };
  }
}

/*
  დავალება
  თეიბლის ნაცვლად გამოვიტანოთ ბუტსტრეპის ქარდებში.
  https://getbootstrap.com/docs/5.3/components/card/
*/
