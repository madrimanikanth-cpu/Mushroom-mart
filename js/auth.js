function userLogin() {
  if (email.value === "user@manikanth.com" && password.value === "1234") {
    alert("Login Successful");
  } else {
    alert("Invalid Credentials");
  }
}

function adminLogin() {
  if (admin.value === "admin" && pass.value === "admin123") {
    alert("Admin Login Successful");
  } else {
    alert("Invalid Admin Credentials");
  }
}
