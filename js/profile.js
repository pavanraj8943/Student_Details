window.addEventListener("DOMContentLoaded", () => {
  const students = JSON.parse(localStorage.getItem("students")) || [];


  const params = new URLSearchParams(window.location.search);
  const selectedIndex = params.get("index");

  const student = students[selectedIndex];


  // Fill profile details
  document.getElementById("profile-pic").src = student.userImage || student.pic || "";
  document.getElementById("profile-name").textContent = student.userName ;
  document.getElementById("profile-email").textContent = student.userEmail ;
  document.getElementById("profile-password").textContent =
    student.userPassword ? '*'.repeat(student.userPassword.length) : "N/A";
  document.getElementById("profile-age").textContent = student.userAge 
  document.getElementById("profile-phone").textContent = student.userPhone 
  document.getElementById("profile-address").textContent = student.userAddress
  document.getElementById("profile-city").textContent = student.userCity
  document.getElementById("profile-pincode").textContent = student.userPincode 
  document.getElementById("profile-dob").textContent = student.userDob 
 
  const deleteBtn = document.getElementById("delete-btn");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => deleteStudent(selectedIndex));

  document.getElementById("back").addEventListener("click",()=>{
    window.location.href = "./index.html";
  })
});

function deleteStudent(index) {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));

  alert("Student deleted successfully!");
  window.location.href = "./index.html";
} 