const burger_menu=document.querySelector(".burger_menu");
const list_menu=document.querySelector(".list_menu");
const Body_lock=document.querySelector(".Body_lock");



burger_menu.addEventListener("click", () =>{
    burger_menu.classList.toggle("active");
    list_menu.classList.toggle("active");
    Body_lock.classList.toggle("lock");
    
    
});

let textArea = document.getElementById("textbox");
let characterCounter = document.getElementById("char_count");
const maxNumOfChars = 0;

const countCharacters = () => {
    let numOfEnteredChars = textArea.value.length;
    let counter = maxNumOfChars + numOfEnteredChars;
    characterCounter.textContent = counter + "/1000";
};

textArea.addEventListener("input", countCharacters);



