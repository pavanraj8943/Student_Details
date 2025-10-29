const container = document.getElementById("formContainer");

// Create form
const form = document.createElement("form");
form.id = "studentForm";

// Title
const title = document.createElement("h2");
title.textContent = "Add Student";
container.appendChild(title);

// Function to create input with label
function createInput(labelText, type, id) {
  const label = document.createElement("label");
  label.textContent = labelText;

  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.required = true;

  const div = document.createElement("div");
  div.classList.add("inputGroup");
  div.appendChild(label);
  div.appendChild(input);

  return div;
}

// Create inputs
const nameInput = createInput("Name:", "text", "name");
const ageInput = createInput("Age:", "number", "age");
const dobInput = createInput("Date of Birth:", "date", "dob");
const picInput = createInput("Profile Picture:", "file", "pic");
picInput.querySelector("input").accept = "image/*";

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Add Student";


form.append(nameInput, ageInput, dobInput, picInput, submitBtn);
container.appendChild(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const dob = document.getElementById("dob").value;
  const picFile = document.getElementById("pic").files[0];

  const reader = new FileReader();
  reader.readAsDataURL(picFile);

  reader.onload = function () {
    const student = {
      name,
      age,
      dob,
      pic: reader.result,
    };

    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    alert("Student added successfully!");
    window.location.href = "../index.html";
  };
});