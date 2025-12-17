const password = document.getElementById("password");
const result = document.getElementById("result");

password.addEventListener("input", () => {
  const value = password.value;
  let strength = 0;

  if (value.length >= 8) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[a-z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value)) strength++;

  if (strength <= 2) {
    result.textContent = "Weak Password ❌";
    result.style.color = "red";
  } else if (strength <= 4) {
    result.textContent = "Medium Password ⚠️";
    result.style.color = "orange";
  } else {
    result.textContent = "Strong Password ✅";
    result.style.color = "lightgreen";
  }
});
