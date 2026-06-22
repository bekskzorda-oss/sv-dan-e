const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
});

function showForm(){
    document.getElementById("formBlock").classList.remove("hidden");
}

function confirmDate(){

    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if(!date || !time){
        alert("Выберите дату и время ❤️");
        return;
    }

    document.getElementById("result").innerHTML =
        `💖 Отлично! Жду тебя ${date} в ${time} 💖`;
}