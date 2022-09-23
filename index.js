import Contact from "./Contact.js";


let hasJob = true;
if(hasJob) {
showMesssage("Thanks for visiting, I'm currently employed.");
} else {
showMesssage("Please look around, I'm currently looking for a job.")
}

let today = new Date();
let dayOfWeek = today.getDay();

if(dayOfWeek === 0 || dayOfWeek === 6) {
    showMesssage("Since it is the weekend, Please be patient with my returning your email.");
}

function showMesssage(message) {
    const formInfo = document.getElementById("formInfo");
    formInfo.innerHTML = "<p>" + message + "</p>"
}

function clearMessage () {
    formInfo.innerHTML = "";
}

const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", function (event) {
event.preventDefault();
const contact = new Contact(contactForm);
contact.send()
});

const experiences = document.getElementsByClassName("experience")
for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event) {
    event.target.style = "background-color: #999999";
    });
    item.addEventListener("mouseleave", function (event) {
        event.target.style = "";
    });
}


