// login js part
document.getElementById("loginForm").addEventListener("submit",function(event) {
    event.preventDefault();
    let usernames = document.getElementById("username").value;
    //console.log(usernames);
    let passwords = document.getElementById("password").value;
    console.log("login in with userName:" + usernames + " Login with password:" + passwords);
})


// online  reservation part
function submitReservation() {
    var name = document.getElementById("name").value;
    var guests = document.getElementById("guests").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var reservationDetails = document.getElementById("reservationDetails");

    if (name && guests && date && time) {
        reservationDetails.innerHTML = `
            <h2>Reservation Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Number of Guests:</strong> ${guests}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p>Thank you for your reservation! We look forward to serving you.</p>
        `;
    } else {
        reservationDetails.innerHTML = "<p>Please fill out all fields to complete the reservation.</p>";
    }
}
console.log(submitReservation);