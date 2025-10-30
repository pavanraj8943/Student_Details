window.addEventListener("DOMContentLoaded", () => {
  const students = JSON.parse(localStorage.getItem("students")) || [];

 
  const params = new URLSearchParams(window.location.search);
  const selectedIndex = params.get("index");

  const student = students[selectedIndex];


  // Fill profile details
  document.getElementById("profile-pic").src = student.userImage || student.pic || "";
  document.getElementById("profile-name").textContent = student.userName || "No Name";
  document.getElementById("profile-email").textContent = student.userEmail || "N/A";
  document.getElementById("profile-password").textContent =
    student.userPassword ? '*'.repeat(student.userPassword.length) : "N/A";
  document.getElementById("profile-age").textContent = student.userAge || "N/A";
  document.getElementById("profile-phone").textContent = student.userPhone || "N/A";
  document.getElementById("profile-address").textContent = student.userAddress || "N/A";
  document.getElementById("profile-city").textContent = student.userCity || "N/A";
  document.getElementById("profile-pincode").textContent = student.userPincode || "N/A";
  document.getElementById("profile-dob").textContent = student.userDob || "N/A";
  // const deleteBtn = document.createElement("button");
  // deleteBtn.textContent = "Delete Student";
  // deleteBtn.classList.add("delete-btn");
  // deleteBtn.addEventListener("click", () => deleteStudent(selectedIndex));
  // document.body.appendChild(deleteBtn); 
});

// Delete function (same as index)
// function deleteStudent(index) {
//   let students = JSON.parse(localStorage.getItem("students")) || [];
//   students.splice(index, 1); 
//   localStorage.setItem("students", JSON.stringify(students));

//   alert("Student deleted successfully!");
//   window.location.href = "./index.html";
// }
