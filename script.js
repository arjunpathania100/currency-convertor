const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const drop = document.querySelectorAll(".value select");

const message = document.querySelector(".message");
let btn = document.querySelector("button");
let f = document.querySelector(".from select");
let t = document.querySelector(".to select");

for(let select of drop){
    for(code in countryList){
        let opt = document.createElement("option");
        opt.innerHTML= code;
        opt.value = code;
        select.append(opt);
    }
    select.addEventListener("change",(evt)=>{
        updateflg(evt.target)});
}
const updateflg = (elmt) =>{
    let code  = elmt.value;
    let country = countryList[code];
    let newurl = `https://flagsapi.com/${country}/flat/64.png`;
    let img = elmt.parentElement.querySelector("img");
    img.src = newurl;
}

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let money = document.querySelector(".amount input");
    money = money.value;
    nurl = `${url}/${f.value.toLowerCase()}/${t.value.toLowerCase()}.json`;
    let response = await fetch(nurl);
    let data = await response.json();
    let cur = data[t.value.toLowerCase()];
    let finalamt = money*cur;
    message.innerText = `${money} ${f.value} = ${finalamt} ${t.value} `;
})