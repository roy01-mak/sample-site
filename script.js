const hoursText = document.getElementById("open-status");

function openStatus() {
  const now = new Date();
  const day = now.getDay();
  const minutes = now.getHours() * 60 + now.getMinutes();

  let open = false;
  if (day >= 1 && day <= 5) {
    open = minutes >= 8 * 60 && minutes < 17 * 60;
  } else if (day === 6) {
    open = minutes >= 8 * 60 && minutes < 13 * 60;
  }
  return open ? "Open now" : "Closed now";
}

const hoursSection = document.getElementById("hours");
const status = document.createElement("p");
status.id = "open-status";
status.innerHTML = "<strong>" + openStatus() + "</strong>";
hoursSection.querySelector("h2").after(status);
document.getElementById("enquiry").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("thanks").textContent =
    "Thanks, " + name + ". We will call you back shortly.";
  this.reset();
});