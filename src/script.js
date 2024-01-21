const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");
const page6 = document.getElementById("page6");
const page7 = document.getElementById("page7");
const page8 = document.getElementById("page8");
const page9 = document.getElementById("homePage");
const footer = document.getElementById("footerNav");
const bio = document.getElementById("bio");
const profile = document.getElementById("profilePage");
const menu = document.getElementById("homePage");

button1.addEventListener("click", () => {
  page1.style.display = "none";
  page2.style.display = "block";
});

button2.addEventListener("click", () => {
  page1.style.display = "none";
  page8.style.display = "block";
});
button3.addEventListener("click", () => {
  page2.style.display = "none";
  page3.style.display = "block";
});

button4.addEventListener("click", () => {
  page3.style.display = "none";
  page4.style.display = "block";
});
button5.addEventListener("click", () => {
  page4.style.display = "none";
  page5.style.display = "block";
});

button6.addEventListener("click", () => {
  page4.style.display = "none";
  page5.style.display = "block";
});
button7.addEventListener("click", () => {
  page5.style.display = "none";
  page6.style.display = "block";
});
button8.addEventListener("click", () => {
  page6.style.display = "none";
  page7.style.display = "block";
});
button9.addEventListener("click", () => {
  page7.style.display = "none";
  addNewCard();
  page9.style.display = "block";
  footer.style.display = "block";
});
profile.addEventListener("click", () => {
  homePage.style.display = "none";
  bio.style.display = "block";
});
home.addEventListener("click", () => {
  bio.style.display = "none";
  page9.style.display = "block";
});

function addNewCard() {
  getInterpreter.forEach((getInterpreter) => {
    var newCard = document.createElement("div");
    let homePage = document.getElementById("homePage");
    newCard.innerHTML = `
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <span class="card-title"></span>
          <a class=" halfway-fab waves-effect waves-light"></a>
        </div>
        <div class="card-content">
          <img class="headshot"src="./images/jessicaDiaz.jpg">
          <img class="flag"src="./images/columbia.png">
          <div class="card-bio">
            <p><b>${getInterpreter.name}</b></p>
            <p>${getInterpreter.distance}</p>
            <p>${getInterpreter.yearsOfExperience} Years of experience</p>
        </div>
      </div>
    </div>
  `;
    homePage.appendChild(newCard);
  });
}

const getInterpreter = [
  {
    name: "Elena Rodriguez",
    rating: 4.8,
    certifications: ["Legal Interpreter", "Medical Interpreter"],
    gender: "Female",
    hourlyRate: 45.0,
    language: "English",
    country: "United States",
    specialization: "Legal and Medical",
    distance: "2.5km away",
    yearsOfExperience: 10,
    introduction:
      "Hola! I'm Elena Rodriguez, a certified interpreter with a specialization in legal and medical contexts. With 10 years of experience, I'm dedicated to facilitating clear communication and ensuring accurate interpretation.",
    profilePicLink:
      "https://www.turing.ac.uk/sites/default/files/2021-07/rodriguez-falcon_prof._elena_photo.jpeg",
  },
  {
    name: "Carlos Gomez",
    rating: 4.2,
    certifications: ["Conference Interpreter", "Technical Interpreter"],
    gender: "Male",
    hourlyRate: 55.75,
    language: "Spanish",
    country: "Mexico",
    specialization: "Conference and Technical",
    distance: "1.5km away",

    yearsOfExperience: 8,
    introduction:
      "¡Hola! I'm Carlos Gomez, a certified interpreter specializing in conference and technical interpretation. With 8 years of experience, I thrive on ensuring seamless communication in diverse settings.",
    profilePicLink:
      "https://m.media-amazon.com/images/M/MV5BNjIzMDc2NzUwMV5BMl5BanBnXkFtZTgwMjg0MjE3MDE@._V1_.jpg",
  },
  {
    name: "Aisha Patel",
    rating: 4.5,
    certifications: ["Community Interpreter", "Educational Interpreter"],
    gender: "Female",
    hourlyRate: 40.5,
    language: "Arabic",
    country: "Canada",
    specialization: "Community and Educational",
    yearsOfExperience: 12,
    distance: "500m away",
    introduction:
      "Hello! I'm Aisha Patel, a certified interpreter specializing in community and educational settings. With 12 years of experience, I'm passionate about breaking down language barriers and fostering understanding.",
    profilePicLink:
      "https://media.licdn.com/dms/image/C5603AQGdvrsvEabKEQ/profile-displayphoto-shrink_800_800/0/1627100608899?e=2147483647&v=beta&t=dSXbAyJhcuCrUTRJ4URI6xADo3Beie5RvudRLMFMXKM",
  },
  {
    name: "David Kim",
    rating: 4.0,
    certifications: ["Legal Interpreter"],
    gender: "Male",
    hourlyRate: 48.25,
    language: "Korean",
    country: "United States",
    specialization: "Legal",
    distance: "5 km away",
    yearsOfExperience: 6,
    introduction:
      "안녕하세요! I'm David Kim, a certified legal interpreter fluent in Korean. With 6 years of experience, I'm committed to providing accurate legal interpretation services to facilitate effective communication.",
    profilePicLink:
      "https://media.licdn.com/dms/image/C4E03AQGGIXbURsh8Bg/profile-displayphoto-shrink_800_800/0/1630447772665?e=2147483647&v=beta&t=-4r8mFtJ0DrUMTMg0YlyUshKBLTXa1B4pueagFpsTag",
  },
  {
    name: "Sophie Lefevre",
    rating: 4.7,
    certifications: ["Medical Interpreter", "Social Services Interpreter"],
    gender: "Female",
    hourlyRate: 42.8,
    language: "French",
    country: "France",
    specialization: "Medical and Social Services",
    yearsOfExperience: 15,
    distance: "1 km away",
    introduction:
      "Bonjour! I'm Sophie Lefevre, a certified interpreter specializing in medical and social services. With 15 years of experience, I'm dedicated to bridging linguistic gaps and ensuring compassionate communication in healthcare and social settings.",
    profilePicLink:
      "https://img.freepik.com/free-photo/charming-young-female-with-blonde-straight-hair-wearing-white-shirt-looking-pleasantly-into-camera-touching-her-chin-young-pretty-girl-with-toothy-smile-posing_176420-13580.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699228800&semt=ais",
  },
  {
    name: "Raj Patel",
    rating: 4.3,
    certifications: ["Legal Interpreter", "Business Interpreter"],
    gender: "Male",
    hourlyRate: 50.0,
    language: "Hindi",
    country: "India",
    specialization: "Legal and Business",
    distance: "1.2 km",
    yearsOfExperience: 9,
    introduction:
      "नमस्ते! I'm Raj Patel, a certified interpreter specializing in legal and business contexts. With 9 years of experience, I bring a wealth of knowledge to facilitate smooth communication in legal and business settings.",
    profilePicLink:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgrist.org%2Farticle%2F2010-01-14-raj-patel-on-colbert%2F&psig=AOvVaw2D79TPTvTS6vlP2-g7X3Ca&ust=1705810949728000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLiO0ZGP64MDFQAAAAAdAAAAABAD",
  },
  {
    name: "Maria Gonzalez",
    rating: 4.6,
    certifications: ["Medical Interpreter", "Community Interpreter"],
    gender: "Female",
    hourlyRate: 48.5,
    language: "Spanish",
    country: "United States",
    specialization: "Medical and Community",
    distance: "3 km away",

    yearsOfExperience: 11,
    introduction:
      "¡Hola! I'm Maria Gonzalez, a certified interpreter specializing in medical and community contexts. With 11 years of experience, I'm dedicated to ensuring accurate communication and building connections within diverse communities.",
    profilePicLink: "https://example.com/maria_gonzalez.jpg",
  },
  {
    name: "Yuki Tanaka",
    rating: 4.4,
    certifications: ["Legal Interpreter", "Technical Interpreter"],
    gender: "Female",
    hourlyRate: 52.25,
    language: "Japanese",
    country: "Japan",
    specialization: "Legal and Technical",
    distance: "1.7 km away",
    yearsOfExperience: 7,
    introduction:
      "こんにちは! I'm Yuki Tanaka, a certified interpreter specializing in legal and technical fields. With 7 years of experience, I strive to bridge language gaps and facilitate precise communication in complex contexts.",
    profilePicLink: "https://example.com/yuki_tanaka.jpg",
  },
  {
    name: "Ahmed Mahmoud",
    rating: 4.1,
    certifications: ["Business Interpreter", "Arabic-English Translator"],
    gender: "Male",
    hourlyRate: 55.0,
    language: "Arabic",
    country: "Egypt",
    specialization: "Business and Translation",
    distance: "1.3 km away",

    yearsOfExperience: 10,
    introduction:
      "مرحبًا! I'm Ahmed Mahmoud, a certified interpreter with expertise in business settings and Arabic-English translation. With 10 years of experience, I bring linguistic precision and cultural understanding to facilitate successful business communication.",
    profilePicLink: "https://example.com/ahmed_mahmoud.jpg",
  },
];
