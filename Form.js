function redirectToTerms() {
   window.open('https://termify.io/terms-and-conditions-generator?gad_source=1&gclid=CjwKCAiA9ourBhAVEiwA3L5RFjMVFw99hYJv1B0_0VTzgBD1CAolgkTFLQKTziWOm7jG9Sk3Gcs5ohoCqbYQAvD_BwE', '_blank');
    document.getElementById('terms').checked = false;
 }



function Cities() {
    const cities = document.getElementById('cities');
    const url = "https://run.mocky.io/v3/aa90513c-fce9-4bd5-ba31-71177eb8ef87";
    fetch(url).then(async (res) => {
        const data = await res.json();
        data.forEach(item => { generateCityOption(item.id, item.City, cities) });
    });
}

function generateCityOption(value, text, selectDom) {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    selectDom.appendChild(option);
}

window.addEventListener('load', () => {
    Cities();
});



let coursesLoaded = false;

function Courses() {
    if (!coursesLoaded) {
        const courses = document.getElementById('courses');
        const url = "https://run.mocky.io/v3/ecb41f0b-14cd-4fd2-aaab-fe1b23fc2a0c";
        fetch(url).then(async (res) => {
            const items = await res.json();
            items.forEach(item => { generateOption(item.id, item.CourseType, courses) });
            coursesLoaded = true;
        });
    }
}

function generateOption(value, text, selectDom) {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    selectDom.appendChild(option);
}

window.addEventListener('load', () => {
    Courses();
});



function submitForm() {
    window.location.href = "Submit.html";
}

function isValidPhoneNumber(phoneNumber) {
    var phoneRegex = /^\+90\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm(event) {
    var title = document.getElementById('name');
    var yourName = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var course = document.getElementById('courses');
    var city = document.getElementById('cities');
    var byPhone = document.getElementById('byPhone');
    var hours = document.getElementById('hours');
    var terms = document.getElementById('terms');

   
    if (!isValidPhoneNumber(phone.value)) {
        alert('Please enter a valid Turkish phone number (ex: +905555555555).');
        event.preventDefault();
        return;
    }

    if (!isValidEmail(email.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }
    if (
        title.value === '' ||
        yourName.value === '' ||
        email.value === '' ||
        phone.value === '' ||
        course.value === '' ||
        city.value === '' ||
        byPhone.value === '' ||
        hours.value === '' ||
        !terms.checked
    ) {
        alert('Please fill in all fields and accept the terms.');

        event.preventDefault();
    } else {
        console.log('The form has been sent successfully!');
        window.location.href = 'Submit.html';
    }
}

function redirectToTerms() {

    console.log('Redirection to Terms and Conditions page');
}