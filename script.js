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
        squareDiv.addEventListener("mouseover",()=>{
            squareDiv.style.background = "blue";
        })
    }
}

function deleteCanvas(){
    container.innerHTML = '';
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