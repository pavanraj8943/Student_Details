window.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.querySelector(".cards");
    const students = JSON.parse(localStorage.getItem("students")) || [];
  
    if (students.length === 0) {
      cardsContainer.innerHTML = "<p></p>";
      return;
    }
  

    cardsContainer.innerHTML = students.map((student, index) => `
      <div class="card" onclick="openProfile(${index})">
        <img src="${student.pic}" alt="Student Picture">
        <h3>${student.name}</h3>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>DOB:</strong> ${student.dob}</p>
      </div>
    `).join("");
  });
  
