
async function fetchUsers() {
    const container = document.getElementById("userContainer");
    const message = document.getElementById("message");

    message.textContent = "Loading users...";
    container.innerHTML = "";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const users = await response.json();

        message.textContent = "Users loaded successfully!";

        users.forEach(function(user) {
            const card = document.createElement("div");
            card.className = "card";

            const name = document.createElement("h3");
            name.textContent = user.name;

            const email = document.createElement("p");
            email.textContent = "Email: " + user.email;

            const city = document.createElement("p");
            city.textContent = "City: " + user.address.city;

            card.append(name, email, city);
            container.appendChild(card);
        });

    } catch (error) {
        message.textContent =
            "Error loading data. Please check your internet connection.";
        console.error(error);
    }
}
