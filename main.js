const buttons = document.querySelectorAll(".but");
const submitButton = document.getElementById("submit");
const general1 = document.querySelector(".general1");
const general2 = document.querySelector(".general2");
const selectedRatingText = document.querySelector(".selected"); // Get the selectedRatingText element

let selectedRating = null;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove :active state styles
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Apply selected rating and :active state
    selectedRating = button.textContent;
    button.classList.add("active");
  });
});

submitButton.addEventListener("click", function () {
  if (selectedRating !== null) {
    // Display the chosen rating in the selectedRatingText element
    selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;

    // Hide general1 and show general2
    general1.style.display = "none";
    general2.style.display = "block";
  }
});
