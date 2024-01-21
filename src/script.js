const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');



const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const page6 = document.getElementById('page6');
const page7 = document.getElementById('page7');
const page8 = document.getElementById('page8');



button1.addEventListener("click",()=>{
    page1.style.display = "none";
    page2.style.display = "block";
})

button2.addEventListener("click",()=>{
    page1.style.display = "none";
    page8.style.display = "block";
})
button3.addEventListener("click",()=>{
    page2.style.display = "none";
    page3.style.display = "block";
})

button4.addEventListener("click",()=>{
    page3.style.display = "none";
    page4.style.display = "block";
})
button5.addEventListener("click",()=>{
    page4.style.display = "none";
    page5.style.display = "block";

})

button6.addEventListener("click",()=>{
    page4.style.display = "none";
    page5.style.display = "block";

    
})
button7.addEventListener("click",()=>{
    page5.style.display = "none";
    page6.style.display = "block";
})

button8.addEventListener("click",()=>{
    page6.style.display = "none";
    page7.style.display = "block";
})
button9.addEventListener("click",()=>{
    page7.style.display = "none";
    homepage.style.display = "block";
})
