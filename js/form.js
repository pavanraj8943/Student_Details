
const inputs = [
  { name: "username", id: "userName", placeholder: "Enter your name", type: "text" },
  { name: "email", id: "userEmail", placeholder: "Enter your email", type: "email" },
  { name: "age", id: "userAge", placeholder: "Enter your age", type: "number" },
  { name: "phone", id: "userPhone", placeholder: "Enter phone number", type: "tel" },
  { name: "address", id: "userAddress", placeholder: "Enter your address", type: "text" },
  { name: "city", id: "userCity", placeholder: "Enter city", type: "text" },
  { name: "pincode", id: "userPincode", placeholder: "Enter pincode", type: "number" },
  { name: "dob", id: "userDob", placeholder: "Select date of birth", type: "date" },
  { name: "Profile Picture", id: "userImage", placeholder: "Choose Image", type: "file" },
  { name: "password", id: "userPassword", placeholder: "Enter password", type: "password" },
  { name: "submit", id: "submit", placeholder: "Submit", type: "submit" },
];

function setInputs() {
  let str = "";
  inputs.forEach(field => {
    if (field.type === "submit") {
      str += `
        <div class="btn">
          <button id="${field.id}" type="${field.type}">${field.placeholder}</button>
        </div>`;
    } else {
      str += `
        <div class="input-group">
          <label for="${field.id}">${field.placeholder}</label>
          <input name="${field.name}" id="${field.id}" placeholder="${field.placeholder}" type="${field.type}">
          <small class="error" id="error-${field.id}"></small>
        </div>`;
    }
  });
  document.getElementById("form").innerHTML = str;
  document.getElementById("form").innerHTML = `

   <h3 class="form-title">New Student Registration</h3>
    <div class="img-preview">
      <img id="previewImg" src="" alt="Profile Preview" style="display:none; width:100px; height:100px;  object-fit:cover; border:2px solid #ccc;">
    </div>
    ${str}
  `;
}
setInputs();



document.addEventListener("change", (e) => {
  if (e.target.id === "userImage" && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = document.getElementById("previewImg");
      img.src = event.target.result;
      img.style.display = "block";
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});




document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {};
  let isValid = true;

  // Clear errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.querySelectorAll("input").forEach(el => el.classList.remove("error-border"));

  inputs.forEach(f => {
    const input = document.getElementById(f.id);
    const errorEl = document.getElementById(`error-${f.id}`);

    if (f.type === "submit") return;

    if (f.type === "file") {
      if (input.files.length === 0) {
        errorEl.textContent = `Please upload ${f.name}`;
        input.classList.add("error-border");
        isValid = false;
        return;
      }
    } else if (input.value.trim() === "") {
      errorEl.textContent = `${f.placeholder} is required`;
      input.classList.add("error-border");
      isValid = false;
      return;
    }

    if (f.type !== "file") obj[f.id] = input.value.trim();
  });

  if (!isValid) return;

  const fileInput = document.getElementById("userImage");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      obj.pic = event.target.result;
      saveStudent(obj);
    };
    reader.readAsDataURL(file);
  } else {
    obj.pic = "";
    saveStudent(obj);
  }
});

function saveStudent(studentObj) {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(studentObj);
  localStorage.setItem("students", JSON.stringify(students));
  window.location.href = "../index.html";
}

