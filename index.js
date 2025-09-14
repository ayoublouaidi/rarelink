// Scrolling by clicking navbar
function scrollToSection(sectionNumber) {
    const section = document.getElementById(`section${sectionNumber}`);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Login/Register button toggling
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
// Local storage handling
let fname = document.getElementById("fname");
let sname = document.getElementById("sname");
let email = document.getElementById("email");
let pass = document.getElementById("pass");

let logemail = document.getElementById("log-email");
let logpass = document.getElementById("log-pass");

let userArray = JSON.parse(localStorage.getItem('user')) || [];

function SignUp() {
    if (fname.value && sname.value && email.value && pass.value) {
        // Ensure userArray is an array
        if (!Array.isArray(userArray)) {
            userArray = [];
        }

        let emailExists = userArray.some(user => user.email === email.value);

        if (emailExists) {
            alert("A user with this email already exists!");
            return;
        }

        let user = {
            firstName: fname.value,
            secondName: sname.value,
            email: email.value,
            pass: pass.value,
            age: "?",
            wilaya: "?",
            gender: "?",
            illness: "?",
            height: "?",
            weight: "?",
            pic: ""
        };

        userArray.push(user);
        localStorage.setItem('user', JSON.stringify(userArray));
        alert("Sign up successfully");

        fname.value = "";
        sname.value = "";
        email.value = "";
        pass.value = "";
    } else {
        alert("Fill out your information first!");
    }
}

function LogIn() {
    if (logemail.value && logpass.value) {
        const user = userArray.find(user => user.email === logemail.value && user.pass === logpass.value);

        if (user) {
            x = logemail.value;
            localStorage.setItem('x', x);
            location.replace("profile.html");
        } else {
            alert("Email or Password is incorrect! Try again");
        }
    } else {
        alert("Fill your information first!");
    }
}