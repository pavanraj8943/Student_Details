let params = window.location.search;
let id = new URLSearchParams(params);
let index = id.get("index");
let students = JSON.parse(localStorage.getItem("students")) || [];

let student = students[index];

let str = `
  <label>Name</label>
  <input type="text" id="name" value="${student.userName || ""}"><br><br>

  <label>Email</label>
  <input type="email" id="email" value="${student.userEmail || ""}"><br><br>

  <label>Password</label>
  <input type="text" id="password" value="${student.userPassword || ""}"><br><br>

  <label>Age</label>
  <input type="number" id="age" value="${student.userAge || ""}"><br><br>

  <label>Phone</label>
  <input type="tel" id="phone" value="${student.userPhone || ""}"><br><br>

  <label>Address</label>
  <input type="text" id="address" value="${student.userAddress || ""}"><br><br>

  <label>City</label>
  <input type="text" id="city" value="${student.userCity || ""}"><br><br>

  <label>Pincode</label>
  <input type="text" id="pincode" value="${student.userPincode || ""}"><br><br>

  <label>DOB</label>
  <input type="date" id="dob" value="${student.userDob || ""}"><br><br>

  <label>Profile Picture</label><br>
  <img src="${student.pic || student.userImage || ""}" id="preview" width="200" height="200" style="object-fit:cover;"><br>
  <input type="file" id="profile"><br><br>

  <input type="submit" id="submit" value="Save Changes">
`;

document.getElementById("form").innerHTML = str;

let picture = "";

document.getElementById("profile").addEventListener("change", () => {
  let image = document.getElementById("profile").files[0];
  let reader = new FileReader();
  reader.onload = () => {
    picture = reader.result;
    document.getElementById("preview").src = picture;
  };
  reader.readAsDataURL(image);
});


document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();


  let updatedStudent = {
    ...student,
    userName: document.getElementById("name").value.trim(),
    userEmail: document.getElementById("email").value.trim(),
    userPassword: document.getElementById("password").value.trim(),
    userAge: document.getElementById("age").value.trim(),
    userPhone: document.getElementById("phone").value.trim(),
    userAddress: document.getElementById("address").value.trim(),
    userCity: document.getElementById("city").value.trim(),
    userPincode: document.getElementById("pincode").value.trim(),
    userDob: document.getElementById("dob").value.trim(),
    pic: picture === "" ? (student.pic || student.userImage || "") : picture,
  };


  students.splice(index, 1, updatedStudent);
  localStorage.setItem("students", JSON.stringify(students));

  alert("Student updated successfully!");
  window.location.href = "./index.html";
});
