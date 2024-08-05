myButton.addEventListener('mouseover', function() {
    console.log("Mouse on button");
});

myButton.addEventListener('click', function() {
    console.log("Button was clicked!");
    document.getElementById('registrationForm').style.display = 'block';
});

demo.addEventListener('click', function() {
    let currentDateTime = new Date();
    document.getElementById('dateTime').textContent = currentDateTime;
    console.log("Time");
});
