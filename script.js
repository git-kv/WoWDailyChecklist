var resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener('click', resetCheckboxes);

function resetCheckboxes() {
  for (const checkbox of document.querySelectorAll('.taskCheckbox')) {
    checkbox.checked = false;
  }
}
