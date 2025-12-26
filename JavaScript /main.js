const btn_dark = document.getElementById("btn-dark");
const body = document.getElementById("body");

btn_dark.addEventListener("click", () => {
  body.classList.toggle("dark");
  
});
/////////////
const text = ["developer", "designer" ,"engineer"]; // الكلمات اللي هتظهر
let i = 0;  // رقم الكلمة الحالية
let j = 0;  // رقم الحرف الحالي
let currentText = "";
let isDeleting = false; // هل بيتم مسح الكلام دلوقتي

function type() {
  const fullText = text[i];
  
  if (isDeleting) {
    currentText = fullText.substring(0, j - 1);
    j--;
  } else {
    currentText = fullText.substring(0, j + 1);
    j++;
  }
  
  document.getElementById("typing").textContent = currentText;
  
  let speed = 200; // سرعة الكتابة
  
  if (!isDeleting && currentText === fullText) {
    speed = 1000; // وقت الوقوف بعد كتابة الكلمة كاملة
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    i = (i + 1) % text.length; // الانتقال للكلمة التالية
    speed = 500;
  }
  
  setTimeout(type, speed);
}

type(); // تشغيل التأثير


/////////projects 
let all_btn = document.getElementById("all")
let creative_btn = document.getElementById("creative")
let digital_btn = document.getElementById("digital")
let development_btn = document.getElementById("development")
/////////buttons
let img1 = document.getElementById("img_1")
let img2 = document.getElementById("img_2")
let img3 = document.getElementById("img_3")
let img4 = document.getElementById("img_4")
let img5 = document.getElementById("img_5")
let img6 = document.getElementById("img_6")
////////images 

all_btn.addEventListener("click",()=>{
  img1.classList.remove("remove")
  img2.classList.remove("remove")
  img3.classList.remove("remove")
  img4.classList.remove("remove")
  img5.classList.remove("remove")
  img6.classList.remove("remove")
})

creative_btn.addEventListener("click",()=>{
  img1.classList.add("remove")
  img2.classList.add("remove")
  img3.classList.remove("remove")
  img4.classList.remove("remove")
  img5.classList.add("remove")
  img6.classList.add("remove")
})
digital_btn.addEventListener("click",()=>{
  img1.classList.add("remove")
  img2.classList.add("remove")
  img3.classList.add("remove")
  img4.classList.add("remove")
  img5.classList.remove("remove")
  img6.classList.remove("remove")
})

development_btn.addEventListener("click",()=>{
  img1.classList.remove("remove")
  img2.classList.remove("remove")
  img3.classList.add("remove")
  img4.classList.add("remove")
  img5.classList.add("remove")
  img6.classList.add("remove")
})


//////contact 

function click_me() {
  let full_name = document.getElementById("name").value 
let email = document.getElementById("email").value
let subject = document.getElementById("subject").value
let massage = document.getElementById("massage").value 



  if (full_name===""||email===""||subject===""||massage==="") {
    alert("Please fill out the form");
    return false;
  }
  if (email.indexOf("@")===-1||email.indexOf(".")===-1) {
    alert("Please write the email address correctly (@ or .)")
    return false;
  }
  return true;
  
}