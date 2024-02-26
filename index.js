function age_cal() {
  const birthYear = document.querySelector(".birthYear").value;
  const birthMonth = document.querySelector(".birthMonth").value;
  const birthDate = document.querySelector(".birthDate").value;
  const display = document.querySelector(".display");
  const currentDate = new Date();
  if (!birthYear || !birthDate || !birthMonth) {
    alert("Please enter your birth date.");
    return;
  }
  // testing
  console.log(currentDate);
  console.log("birthYear is ", birthYear);
  console.log("birthMonth is ", birthMonth);
  console.log("birthDate is ", birthDate);

  const birthDateObject = new Date(birthYear, birthMonth, birthDate);
  const age = currentDate.getFullYear() - birthDateObject.getFullYear();
  console.log("Your age is ", age);
  display.innerHTML = `<h3>Your age is ${age} years old.</h3>`;
}
