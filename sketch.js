window.onload = function() {
    var img1 = document.querySelector(".ball1");
    var width = 100+"vw";
    var height = 100+ "vh";
    img1.style.position = "absolute";
    img1.style.left = Math.floor(Math.random() * width) + "px";
    img1.style.top = Math.floor(Math.random() * height) + "px";
    setInterval(function() {
        img1.style.left = Math.floor(Math.random() * width) + "px";
        img1.style.top = Math.floor(Math.random() * height) + "px";
    }, 2300);

    var img2 = document.querySelector(".ball2");
    var width = window.innerWidth ;
    var height = window.innerHeight ;
    img2.style.position = "absolute";
    img2.style.left = Math.floor(Math.random() * width) + "px";
    img2.style.top = Math.floor(Math.random() * height) + "px";
    setInterval(function() {
        img2.style.left = Math.floor(Math.random() * width) + "px";
        img2.style.top = Math.floor(Math.random() * height) + "px";
    }, 2000);

    var img3 = document.querySelector(".ball3");
    var width = window.innerWidth ;
    var height = window.innerHeight ;
    img3.style.position = "absolute";
    img3.style.left = Math.floor(Math.random() * width) + "px";
    img3.style.top = Math.floor(Math.random() * height) + "px";
    setInterval(function() {
        img3.style.left = Math.floor(Math.random() * width) + "px";
        img3.style.top = Math.floor(Math.random() * height) + "px";
    }, 3200);
}

var img1 = document.querySelector(".ball1");
img1.classList.add("ball");

var img2 = document.querySelector(".ball2");
img2.classList.add("ball");

var img3 = document.querySelector(".ball3");
img3.classList.add("ball");

const arrow = document.querySelector(".arrow");
const page1 = document.querySelector(".page1");
const mainV = document.querySelector(".mainV");
const balls = document.querySelectorAll('.ball');

arrow.addEventListener("click", function () {
    page1.style.transition = 'top 1s ease-in-out';
    page1.style.top = "-100vh";
    mainV.play();
    balls.forEach(ball => {
    ball.style.animationPlayState = 'paused';
    ball.style.opacity = 0;
  });
   
});

const arrow2 = document.querySelector(".arrow2");
const pagewrap = document.querySelector(".pagewrap");

arrow2.addEventListener("click", function () {
   pagewrap.style.height = "345vh";
   arrow2.style.display = "none";

   const scrollOptions = {
      top: window.pageYOffset + window.innerHeight,
      behavior: 'smooth'
   };
   window.scrollTo(scrollOptions);
   mainV.muted = true;
   mainV.controls = true;
});

const toplink = document.querySelector('.top');

toplink.addEventListener('click', function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    page1.style.transition = 'bottom 1s ease-in-out';
    page1.style.top = "0";
    if (page1.style.top === "0px") {
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
});

const info=[
{
    mainT:'Effective,<br>Nature-Powered Skincare<br>Discovered from the Island',
    subT:'무한한 자연의 힘을 담은 다채로운 식물과<br>생명력 가득한 토양을 품은 대지,<br>그리고 미지의 에너지로 가득한 청록의 바다'
},
{
    mainT:'with INNISFREE<br>Better for Usanf Earth',
    subT:'이니스프리와 함께할 수 있는 즐거운 실천들과<br>그동안 모두와 함께 만들어 온 아름다운 발자취를<br>지금 바로 확인해보세요.'
}
]

const leftbt = document.querySelector('.leftbt');
const rightbt = document.querySelector('.rightbt');
const page3 = document.querySelector('.page3');
const textbox2 = document.querySelector('.textbox2');
const textbox3 = document.querySelector('.textbox3');
const textbox3h4 = document.querySelector('.textbox3 h4');
const mainTTag = document.querySelector('.textbox2 h2');
const subTTag = document.querySelector('.textbox2 p');
const bold = document.getElementById("B");



leftbt.addEventListener("click", function () {
   page3.style.backgroundImage="url(https://i.postimg.cc/jdnq1GLY/brandstory-2x.png)"
   textbox2.style.color = "white"
   mainTTag.innerHTML =info[0].mainT
   subTTag.innerHTML =info[0].subT
   leftbt.style.backgroundColor = "white"
   rightbt.style.backgroundColor = "rgba(255,255,255,0.5)"
   textbox3.style.color = "white"
   textbox3h4.style.color = "white"
   bold.style.textShadow = "0px 0px 10px rgba(5,54,28,0.5)";

});

rightbt.addEventListener("click", function () {
   page3.style.backgroundImage="url(https://i.postimg.cc/J44Y993h/better-For-Earth-waifu2x-photo-noise3-scale.png)"
   textbox2.style.color = "#644E4E"
   mainTTag.innerHTML =info[1].mainT
   subTTag.innerHTML =info[1].subT
   bold.style.textShadow = "none";
   subTTag.style.textShadow = "none";
   leftbt.style.backgroundColor = "rgba(100,78,78,0.5)"
   rightbt.style.backgroundColor = "rgba(100,78,78,1)"
   textbox3.style.color = "#644E4E"
   textbox3h4.style.color = "#644E4E"
});




