const container = document.querySelector("#container")
const numGrid = 20
const headerSection = document.querySelector("#header")
const totalSquare = Math.pow(numGrid,2);
const description = document.createElement("p")
description.textContent = `There are ${totalSquare} squares in this canvas` 

function createCanvas(square){
    const totalSquare = Math.pow(square,2);
    description.textContent = `There are ${totalSquare} squares in this canvas` 
    headerSection.appendChild(description)       
    for (let i=0;i<totalSquare;i++){
        let squareDiv = document.createElement("div")
        squareDiv.classList.add("square")
        squareDiv.style.border = "1px black solid"
        container.style.gridTemplateColumns = `repeat(${square},1fr)`
        container.appendChild(squareDiv)
        let hoverCount = 0;
        let opact = 0
        squareDiv.addEventListener("mouseover",()=>{
            hoverCount++;
            opact+=10;
            for (let i=10;i>0;i--){
                squareDiv.style.background = randomColor(opact);
            }
        })
    }
}

function deleteCanvas(){
    container.innerHTML = '';
}

function randomColor(e){
    let numColor1 = Math.floor(Math.random()*256) //Create int from 0 to 255
    let numColor2 = Math.floor(Math.random()*256)
    let numColor3 = Math.floor(Math.random()*256)
    let opacity = e
    let colorRgb = `rgb(${numColor1} ${numColor2} ${numColor3} / ${opacity}%)`
    return colorRgb
}


const gridButton = document.createElement("button")
gridButton.textContent = "Change Grid Square"
headerSection.appendChild(gridButton)
gridButton.addEventListener("click",()=>{
    let userGrid = prompt("Input Number of Squares : ")
    if (userGrid > 100){
        description.innerHTML= "<p> Please input at max of 100 squares only</p>"
    } else{
        deleteCanvas()
        createCanvas(userGrid)
    }
})

const resetButton = document.createElement("button")
resetButton.textContent = "Reset Canvas?"
headerSection.appendChild(resetButton)
resetButton.addEventListener("click",()=>{
    const squareAll = document.querySelectorAll("div.square")
    for (let i=0;i<squareAll.length;i++){
        squareAll[i].style.background ="white";
    }
})


createCanvas(numGrid)