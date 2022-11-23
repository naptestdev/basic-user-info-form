const showInfo = () => {
  const data = JSON.parse(localStorage.getItem("user-info") || "{}");

  const username = data.username || "Unknown";
  const phone = data.phone || "Unknown";
  const address = data.address || "Unknown";

  document.querySelector(
    "#info"
  ).innerHTML = `Username: ${username}. Phone: ${phone}. Address: ${address}`;
};

showInfo();

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);

  localStorage.setItem(
    "user-info",
    JSON.stringify({
      username: data.get("username"),
      phone: data.get("phone"),
      address: data.get("address"),
    })
  );

  showInfo();

  alert("Data updated successfully and saved to localStorage");
});
