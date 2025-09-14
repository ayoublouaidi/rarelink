const restrievedUser = localStorage.getItem('user');

const userOb = JSON.parse(restrievedUser);



document.addEventListener('DOMContentLoaded', function () {
    const outputImage = document.getElementById('output');

    const retrievedUser = localStorage.getItem('user');
    const userOb = JSON.parse(retrievedUser) || [];

    const email = localStorage.getItem('x');
    let userIndex = -1;

    // Find the user by email
    for (let i = 0; i < userOb.length; i++) {
        if (userOb[i].email === email) {
            userIndex = i;
            break;
        }
    }

    // If the user is found
    if (userIndex !== -1) {
        const storedImage = userOb[userIndex].pic;
        if (storedImage) {
            outputImage.src = storedImage;
        }

        window.loadFile = function (event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imageData = e.target.result;
                    outputImage.src = imageData;

                    // Save the image data to localStorage
                    userOb[userIndex].pic = imageData;
                    localStorage.setItem('user', JSON.stringify(userOb));
                    localStorage.removeItem('user');
                    window.localStorage.setItem('user', JSON.stringify(userOb));
                };
                reader.readAsDataURL(file);
            }
        };
    }
});


let age = document.getElementById("age");
let n = document.getElementById("n");
let wilaya = document.getElementById("wilaya");
let gender = document.getElementById("gender");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let illness = document.getElementById("illness");


for (let i = 0; i < userOb.length; i++) {
    if (userOb[i].email === localStorage.getItem('x')) {
        n.innerText = userOb[i].firstName + "  " + userOb[i].secondName;
        age.innerText = userOb[i].age;
        wilaya.innerText = userOb[i].wilaya;
        gender.innerText = userOb[i].gender;
        height.innerText = userOb[i].height;
        weight.innerText = userOb[i].weight;
        illness.innerText = userOb[i].illness;
    }

}

let ageInput = document.getElementById("ageInput");
let fnInput = document.getElementById("fnInput");
let snInput = document.getElementById("snInput");
let wilayaInput = document.getElementById("wilayaInput");
let genderInput = document.getElementById("genderInput");
let heightInput = document.getElementById("heightInput");
let weightInput = document.getElementById("weightInput");
let illnessInput = document.getElementById("illnessInput");

function editInfos() {
    if (!fnInput.value || !snInput.value || !ageInput.value || !wilayaInput.value || !genderInput.value || !heightInput.value || !weightInput.value || !illnessInput.value) {
        alert('Please fill in all the inputs.');
        return;
    }

    for (let i = 0; i < userOb.length; i++) {
        if (userOb[i].email === localStorage.getItem('x')) {
            userOb[i].firstName = fnInput.value;
            userOb[i].secondName = snInput.value;
            userOb[i].age = ageInput.value;
            userOb[i].wilaya = wilayaInput.value;
            userOb[i].gender = genderInput.value;
            userOb[i].height = heightInput.value;
            userOb[i].weight = weightInput.value;
            userOb[i].illness = illnessInput.value;

            localStorage.removeItem('user');
            window.localStorage.setItem('user', JSON.stringify(userOb));
            location.reload();
            return;
        }
    }
}
