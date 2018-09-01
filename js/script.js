// button select
let plusButton = document.getElementById("btnPlus");
let minusButton = document.getElementById("btnMinus")
let resetButton = document.getElementById("btnReset");

// element select
let txtNama = document.getElementById("nama");
let skor = document.getElementById("skor");
let body = document.body;

// declare and initialize
let num = 0;
let nama = prompt("Halo, siapa nama kamu?");

// change text nama and color when hover
txtNama.textContent = "Selamat datang, " + nama;

txtNama.addEventListener("mouseover", () => {
    txtNama.style.color = randomColor();
})

txtNama.addEventListener("mouseleave", () => {
    txtNama.style.color = "#fff";
})

// EventListener, here begin
plusButton.addEventListener("click", () => {
    num += 1;
    skor.textContent = num;
    if(num == 0){
        skor.style.color = "#fff";
        body.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    } else {
        skor.style.color = randomColor();
        body.style.backgroundColor = randomBodyColor();
    }
});

minusButton.addEventListener("click", () => {
    num -= 1;
    skor.textContent = num;
    if(num == 0){
        skor.style.color = "#fff";
        body.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    } else {
        skor.style.color = randomColor();
        body.style.backgroundColor = randomBodyColor();
    }
});

resetButton.addEventListener("click", () => {
    num = 0;
    skor.textContent = num;
    skor.style.color = "#fff"
    body.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
});


//generate random color
let randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

let randomBodyColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgba(" + r + ", " + g + ", " + b + ",.4)";
}