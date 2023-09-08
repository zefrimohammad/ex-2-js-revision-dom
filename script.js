// coded by Mohammad Zefri
// contact me on mdzefri.code@gmail.com


let wildCard = document.querySelectorAll("*");

wildCard.forEach((e) => e.style.cssText = `-webkit-tap-highlight-color: transparent; box-sizing: border-box; user-select: none; margin: 0px; padding: 0px; font-family: sans-serif;`);

document.body.style.backgroundColor = "#eee";

// Create A parent Element
let parent = document.createElement("div");
parent.style.cssText = `display: flex; flex-direction: row; justify-content: center; align-items: center; height: 100vh;`;
// Append parent Element Into body
document.body.appendChild(parent);

let con = document.createElement("div");
con.style.cssText = `width: 70%;`;


// Create A fieldset Element
let fieldset = document.createElement("fieldset");
fieldset.style.cssText = `width: 50%; display: flex; flex-direction: row; justify-content: center; align-items: center; background-color: #fffbec; border: none; border-radius: 9px; padding-bottom: 13px;`;

// Append fieldset Into parent
parent.appendChild(fieldset);


// Create A Title For Form

let titleH3 = document.createElement("h3");
titleH3.appendChild(document.createTextNode(`Facture`));
titleH3.style.cssText = `text-align: center; margin: 27px 0px;`;

// Add titleH3 To fieldset
con.appendChild(titleH3);

// Create nested parent elment
let parentTauxTVA = document.createElement("div");
parentTauxTVA.classList.add("taux-tva-parent");

// Create taux TVA label
let tauxTVALabel = document.createElement("label");
tauxTVALabel.style.cssText = `display: inline-block;`;
tauxTVALabel.appendChild(document.createTextNode(`Taux TVA`));

// Create parent element for radio inputs
let rICon = document.createElement("div");

let nineCon = document.createElement("div");
let elevenCon = document.createElement("div");
let nineteenCon = document.createElement("div");


let nineIn = document.createElement("input");
nineIn.setAttribute("id", "nine");
nineIn.setAttribute("name", "taux-tva");
nineIn.setAttribute("value", "9");

let nineLabel = document.createElement("label");
nineLabel.setAttribute("for", "nine");
nineLabel.appendChild(document.createTextNode(`9%`));

let elevenIn = document.createElement("input");
elevenIn.setAttribute("id", "eleven");
elevenIn.setAttribute("name", "taux-tva");
elevenIn.setAttribute("value", "11");


let elevenLabel = document.createElement("label");
elevenLabel.setAttribute("for", "eleven");
elevenLabel.appendChild(document.createTextNode(`11%`));


let nineteenIn = document.createElement("input");
nineteenIn.setAttribute("id", "nineteen");
nineteenIn.setAttribute("name", "taux-tva");
nineteenIn.setAttribute("value", "19");


let nineteenLabel = document.createElement("label");
nineteenLabel.setAttribute("for", "nineteen");
nineteenLabel.appendChild(document.createTextNode(`19%`));


nineCon.append(nineIn, nineLabel);
elevenCon.append(elevenIn, elevenLabel);
nineteenCon.append(nineteenIn, nineteenLabel);

rICon.append(nineCon, elevenCon, nineteenCon);
rICon.style.cssText = `display: flex; flex-direction: row; gap: 13px; width: 70%;`;
rICon.classList.add("r-i-con");
parentTauxTVA.append(tauxTVALabel, rICon);

parentTauxTVA.style.cssText = `display: flex; flex-direction: row; justify-content: space-between;`;
con.appendChild(parentTauxTVA);

let radioInts = [nineIn, elevenIn, nineteenIn];
let nenCons = [nineCon, elevenCon, nineteenCon];

radioInts.forEach(function(e) {
    e.setAttribute("type", "radio");
    e.style.cursor = `pointer`;
    e.style.margin = `0px 7px 0px 0px`;
    e.style.transform = `scale(1.3)`;
    e.style.outline = `none`;
});

[nineLabel, elevenLabel, nineteenLabel].forEach(function(l){
    l.style.cursor = `pointer`;
});

nenCons.forEach((c) => c.style.cssText = `display: flex; flex-direction: row; justify-content: center; align-center: center;`);


let produitLabel = document.createElement("label");
produitLabel.appendChild(document.createTextNode(`Produit`));


let qteLabel = document.createElement("label");
qteLabel.appendChild(document.createTextNode(`Quantite`));

let prixHTLabel = document.createElement("label");
prixHTLabel.appendChild(document.createTextNode(`Prix HT`));

let montantLabel = document.createElement("label");
montantLabel.appendChild(document.createTextNode(`Montant`));

let totalTTCLabel = document.createElement("label");
totalTTCLabel.appendChild(document.createTextNode(`Total TTC`));

[tauxTVALabel, produitLabel, qteLabel, prixHTLabel, montantLabel, totalTTCLabel].forEach(function(la){
    la.style.display = `inline-block`;
});

let objectsTable = [
    {nom: "Produit 01", prix: 13.5},
    {nom: "Produit 02", prix: 17.3},
    {nom: "Produit 03", prix: 24.70},
    {nom: "Produit 04", prix: 15.5},
    {nom: "Produit 05", prix: 20.9},
    {nom: "Produit 06", prix: 30.2},
];


let produitDropDown = document.createElement("div");
produitDropDown.style.cssText += `width: 70%; position: relative; margin-right: 4px;`;
produitDropDown.classList.add("drop-down-menu");


let titCon = document.createElement("div");

let tit = document.createElement("div");
tit.appendChild(document.createTextNode(`${objectsTable[0].nom}`));

let arrow = document.createElement("div");
arrow.appendChild(document.createTextNode(`▾`));

let optionsCon = document.createElement("div");
optionsCon.style.cssText += `position: absolute;
                            left: 0px;
                            top: 33px;
                            width: 100%;
                            background-color: rgb(255, 255, 255);
                            border-radius: 9px;`;

optionsCon.style.display = `none`;

objectsTable.forEach(function(o){
    let op = document.createElement("div");
    op.setAttribute("value", `${o.prix}`);
    op.style.cssText = `padding-top: 7px; padding-bottom: 7px; padding-left: 7px;`;
    op.appendChild(document.createTextNode(`${o.nom}`));
    optionsCon.appendChild(op);
})

titCon.append(tit, arrow);
titCon.setAttribute("id", "tC");
titCon.setAttribute("tabindex", 0);

titCon.style.cssText = `display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        gap: 45px;
                        cursor: pointer;
                        height: 33px;
                        border-radius: 9px;
                        outline: none;
                        background-color: rgb(255, 255, 255);
                        font-size: 15px;
                        padding-left: 8px;
                        padding-right: 8px;`;





produitDropDown.append(titCon, optionsCon);

titCon.addEventListener("click", function(){
    (getComputedStyle(optionsCon).display === `block`) ? optionsCon.style.display = `none` : optionsCon.style.display = `block`;
});


let produitCon = document.createElement("div");
produitCon.classList.add("produit-con");

produitCon.append(produitLabel, produitDropDown);
con.appendChild(produitCon);

optionsCon.childNodes.forEach(function(opti) {
    opti.addEventListener("click", function() {
        tit.innerHTML = opti.innerHTML;
        tit.setAttribute("value", `${opti.getAttribute("value")}`);
        prixHTIn.value = tit.getAttribute("value");
        optionsCon.style.display = "none";
    });
    opti.addEventListener("mouseenter", () => opti.style.backgroundColor = `rgb(128, 128, 128)`);
    opti.addEventListener("mouseleave", () => opti.style.backgroundColor = `revert`);
});


let qteIn = document.createElement("input");
let prixHTIn = document.createElement("input");
prixHTIn.setAttribute("readonly", "readonly");

let montantIn = document.createElement("input");
montantIn.setAttribute("readonly", "readonly");

let totalTTCIn = document.createElement("input");
totalTTCIn.setAttribute("readonly", "readonly");


[qteIn, prixHTIn, montantIn, totalTTCIn].forEach(function(i){
    i.setAttribute("type", "number");
    i.style.cssText = `height: 33px; border-radius: 9px; outline: none; border: none; padding-left: 9px; padding-right: 9px; width: 70%;`;
    if (i !== prixHTIn && i !== montantIn && i !== totalTTCIn) {
        i.addEventListener("focus", function(){
            i.style.border = `1px solid cornflowerblue`;
            i.style.outline = `2px solid #BBDEFB`;
        });
        i.addEventListener("blur", function(){
            i.style.borderColor = `gray`;
            i.style.outline = `none`;
        });
        i.style.cssText += `border: 1px solid gray`;
    } else {
        i.style.cssText += `background-color: #E1F5FE;`;
    };
});

let qteCon = document.createElement("div");
qteCon.classList.add("qte-con");
let prixHTCon = document.createElement("div");
prixHTCon.classList.add("prix-ht-con");
let montantCon = document.createElement("div");
montantCon.classList.add("montant-con");
let totalTTCon = document.createElement("div");
totalTTCon.classList.add("total-con");

[parentTauxTVA, produitCon, qteCon, prixHTCon, montantCon, totalTTCon].forEach(function(c){
    c.style.cssText += `margin-bottom: 19px; display: flex; flex-direction: row; justify-content: space-between; align-items: center; gap: 45px;`;
});

qteCon.append(qteLabel, qteIn);
prixHTCon.append(prixHTLabel, prixHTIn);
montantCon.append(montantLabel, montantIn);
totalTTCon.append(totalTTCLabel, totalTTCIn);


con.append(qteCon, prixHTCon, montantCon, totalTTCon);


[tauxTVALabel, produitLabel, qteLabel, prixHTLabel, montantLabel, totalTTCLabel].forEach(function(la){
    la.style.cssText = `width: 30%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`;
});



let buttonsCon = document.createElement("div");

buttonsCon.style.cssText = `margin-top: 33px; display: flex; flex-direction: row; justify-content: center; flex-wrap: nowrap;`;

let effBtn = document.createElement("button");
effBtn.appendChild(document.createTextNode(`Effacer`));
let cBtn = document.createElement("button");
cBtn.appendChild(document.createTextNode(`Calculer`));

[effBtn, cBtn].forEach(function(b){
    b.setAttribute("type", "button");
    b.style.cssText = `padding: 9px 13px; cursor: pointer; outline: none; border: none; border-radius: 7px;`;
    b.addEventListener("mouseenter", () => b.style.fontSize = `17px`);
    b.addEventListener("mouseleave", () => b.style.fontSize = `revert`);
});
effBtn.style.cssText += `margin-right: 17px; background-color: coral;`;
cBtn.style.cssText += `background-color: cornflowerblue;`;


buttonsCon.append(effBtn, cBtn);
con.appendChild(buttonsCon);

fieldset.append(con);



function cFn() {
    [nineIn, elevenIn, nineteenIn].forEach(function(r){
        if (r.checked && qteIn.value !== "" && prixHTIn.value !== "") {
            let montantHT = qteIn.value * prixHTIn.value;
            let totalTTC = 0;
            if (nineIn.checked) {
                totalTTC = montantHT * 1.09;
            } else if (elevenIn.checked) {
                totalTTC = montantHT * 1.11;
            } else if (nineteenIn.checked) {
                totalTTC = montantHT * 1.9;
            };
        
            montantIn.value = montantHT.toFixed(2);
            totalTTCIn.value = totalTTC.toFixed(2);
        }
    });

};

function eFn() {
    qteIn.value = ``;
    prixHTIn.value = ``;
    montantIn.value = ``;
    totalTTCIn.value = ``;
    tit.innerHTML = optionsCon.childNodes[0].innerHTML;
};

cBtn.addEventListener("click", cFn);
effBtn.addEventListener("click", eFn);


