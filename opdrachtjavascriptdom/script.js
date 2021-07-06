
const handleEvent = () => {
    console.log("Button clicked!")
};

const btn_alert = document.querySelector(".btn_alert");
btn_alert.addEventListener("click", handleEvent);

// const changeBackground = () => {
//     document.getElementsByClassName("btn_alert1").style.backgroundColor = "red";
// };

// const btn_alert1 = document.querySelector(".btn_alert1");
// btn_alert1.classList;
// btn_alert1.classList.add("red")

const btn_alert1 = document.querySelector(".btn_alert1");
let isColored = false;

btn_alert1.addEventListener("click", function(){
if(isColored){
document.body.style.background = "red";
isColored = false;
} else {
document.body.style.background = "blue";
isColored = true;
}
}); 



