window.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".cards");
  const students = JSON.parse(localStorage.getItem("students")) || [];

  if (students.length === 0) {
    cardsContainer.innerHTML = "<p>No students added yet.</p>";
    return;
  }


  cardsContainer.innerHTML = students.map((student, index) => `
    <div class="card">
    
        <img src="${student.userImage || student.pic || ''}" alt="Student Picture">
        <h3>${student.userName || "No Name"}</h3>
        <p><strong>Age:</strong> ${student.userAge || "N/A"}</p>
        <p><strong>Address:</strong> ${student.userAddress || "N/A"}</p>
        <p><strong>DOB:</strong> ${student.userDob || "N/A"}</p>
    <p>
        <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
        <a href="./profile.html?index=${index}" class="card-link">
        <button class="view">View more.</button>
</a>
</p>
    </div>
  `).join("");
});

// Simple delete function
function deleteStudent(index) {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  location.reload();
}


// // Function to open the profile page
// function openProfile(index) {
//   localStorage.setItem("selectedStudentIndex", index);
//   window.location.href = "./profile.html";
// }