function registerUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please fill in both fields.");
    return;
  }

  alert(`User Registered:\nName: ${name}\nEmail: ${email}`);
}

function loginUser() {
  const email = document.getElementById("email").value.trim();

  if (!email) {
    alert("Please enter your email to login.");
    return;
  }

  alert(`Login requested for: ${email}`);
}
