
function register(eventName) {
    document.getElementById("eventName").value = eventName;

    document.getElementById("registration").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value.trim();
    let email = document.getElementById("studentEmail").value.trim();
    let college = document.getElementById("college").value.trim();
    let eventName = document.getElementById("eventName").value;

    if (name === "" || email === "" || college === "" || eventName === "") {
        document.getElementById("formMessage").textContent =
            "Please complete all fields.";
        return;
    }

    document.getElementById("formMessage").textContent =
        "Thank you, " + name + "! Your " + eventName +
        " registration details have been received in this demo.";

    document.getElementById("registrationForm").reset();
});