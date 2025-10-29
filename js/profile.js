window.addEventListener("DOMContentLoaded", () => {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const selectedIndex = localStorage.getItem("selectedStudentIndex");


  
  const student = students[selectedIndex];

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
});