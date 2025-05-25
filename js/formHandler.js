document.getElementById("venueForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  localStorage.setItem("venuePreferences", JSON.stringify(data));
  window.location.href = "match-results.html";
});
