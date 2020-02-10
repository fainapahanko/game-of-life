const canvas = document.querySelector("#gamefield")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const ctx = canvas.getContext("2d")
let arrWithBlocks = new Array
//const arrWithCells = new Array
var canvasWidth = 500
var canvasHeight = 500
canvas.width = canvasWidth
canvas.height = canvasHeight
var cellWidth = 25
var cellHeight = 25
var cellsInRow = Math.floor(canvasWidth / cellWidth)
var cellsInColumn = Math.floor(canvasHeight / cellHeight)
var next = []

const handleClick = (e) => {
    ctx.fillStyle = "green";
    let filteredArr = arrWithBlocks.filter(arr => arr.x == (Math.floor(e.offsetX / 25) * 25))
    let specificCell = filteredArr.find(arr => arr.y == Math.floor(e.offsetY / 25) * 25)
    var index = arrWithBlocks.indexOf(specificCell)
    let modifiedCell = {
        x: Math.floor(e.offsetX / 25) * 25,
        y: Math.floor(e.offsetY / 25) * 25,
        v: 1,
        n: arrWithBlocks[index].n
    }
    arrWithBlocks[index] = modifiedCell
    ctx.fillRect(Math.floor(e.offsetX / 25) * 25,
      Math.floor(e.offsetY / 25) * 25,
      25, 25);
    //   console.log(modifiedCell)
      //countLiveNeighbours()
    countForOne(index)
    // getLive(index)
}

startLife = () => {
    window.setInterval(() => {
        resetNeighbours()
        countLiveNeighbours()
        getLive()
    }, 1500)
}
stopLife = (i) => {
    getLive(i)
}
const countForOne = (i) => {
    console.log(arrWithBlocks[i])
    if(arrWithBlocks[i+1] && arrWithBlocks[i+1].v === 1){
        console.log(arrWithBlocks[i+1])
        arrWithBlocks[i] = {
            x: arrWithBlocks[i].x,
            y: arrWithBlocks[i].y,
            v: arrWithBlocks[i].v,
            n: arrWithBlocks[i].n + 1
        }
    }
    if(arrWithBlocks[i-1] && arrWithBlocks[i-1].v === 1){
        console.log(arrWithBlocks[i-1])
        arrWithBlocks[i] = {
            x: arrWithBlocks[i].x,
            y: arrWithBlocks[i].y,
            v: arrWithBlocks[i].v,
            n: arrWithBlocks[i].n + 1
        }
    }
    if(arrWithBlocks[i-19] && arrWithBlocks[i-19].v === 1){
        console.log(arrWithBlocks[i-19])
        arrWithBlocks[i] = {
            x: arrWithBlocks[i].x,
            y: arrWithBlocks[i].y,
            v: arrWithBlocks[i].v,
            n: arrWithBlocks[i].n + 1
        }
    }
    if(arrWithBlocks[i-20] && arrWithBlocks[i-20].v === 1){
        console.log(arrWithBlocks[i-20])
        arrWithBlocks[i] = {
            x: arrWithBlocks[i].x,
            y: arrWithBlocks[i].y,
            v: arrWithBlocks[i].v,
            n: arrWithBlocks[i].n + 1
        }
    }
    if(arrWithBlocks[i-21] && arrWithBlocks[i-21].v === 1){
        console.log(arrWithBlocks[i-21])
        arrWithBlocks[i] = {
            x: arrWithBlocks[i].x,
            y: arrWithBlocks[i].y,
            v: arrWithBlocks[i].v,
            n: arrWithBlocks[i].n + 1
        }
    }
    if(arrWithBlocks[i+19] && arrWithBlocks[i+19].v === 1){
        console.log(arrWithBlocks[i+19])
        arrWithBlocks[i] = {
            x: arrWithBlocks[i].x,
            y: arrWithBlocks[i].y,
            v: arrWithBlocks[i].v,
            n: arrWithBlocks[i].n + 1
        }
    }
    if(arrWithBlocks[i+20] && arrWithBlocks[i+20].v === 1){
        console.log(arrWithBlocks[i+20])
        arrWithBlocks[i] = {
            x: arrWithBlocks[i].x,
            y: arrWithBlocks[i].y,
            v: arrWithBlocks[i].v,
            n: arrWithBlocks[i].n + 1
        }
    }
    if(arrWithBlocks[i+21] && arrWithBlocks[i+21].v === 1){
        console.log(arrWithBlocks[i+21])
        arrWithBlocks[i] = {
            x: arrWithBlocks[i].x,
            y: arrWithBlocks[i].y,
            v: arrWithBlocks[i].v,
            n: arrWithBlocks[i].n + 1
        }
    }
    console.log(arrWithBlocks[i].n)
}
const getLive = () => {
    //console.log(width,height)
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < arrWithBlocks.length; i++){
        if(arrWithBlocks[i].v === 0 && arrWithBlocks[i].n === 0){
            ctx.lineWidth = 2;
            ctx.fillStyle = "#181818";
            ctx.strokeStyle = "white";
            ctx.fillRect(arrWithBlocks[i].x,arrWithBlocks[i].y,25,25)
        } else if(arrWithBlocks[i].v === 1 && arrWithBlocks[i].n > 4){
            arrWithBlocks[i] = {
                x: arrWithBlocks[i].x,
                y: arrWithBlocks[i].y,
                v: 0,
                n: arrWithBlocks[i].n
            }
            ctx.lineWidth = 2;
            ctx.fillStyle = "#181818";
            ctx.strokeStyle = "white";
            ctx.fillRect(arrWithBlocks[i].x,arrWithBlocks[i].y,25,25)
        } else if(arrWithBlocks[i].v === 1 && arrWithBlocks[i].n < 2){
            arrWithBlocks[i] = {
                x: arrWithBlocks[i].x,
                y: arrWithBlocks[i].y,
                v: 0,
                n: arrWithBlocks[i].n
            }
            ctx.lineWidth = 2;
            ctx.fillStyle = "#181818";
            ctx.strokeStyle = "white";
            ctx.fillRect(arrWithBlocks[i].x,arrWithBlocks[i].y,25,25)
        } else if (arrWithBlocks[i].v === 0 && arrWithBlocks[i].n == 2){
            //console.log("yo")
            arrWithBlocks[i] = {
                x: arrWithBlocks[i].x,
                y: arrWithBlocks[i].y,
                v: 1,
                n: arrWithBlocks[i].n
            }
            ctx.fillStyle = "green";
            ctx.fillRect(arrWithBlocks[i].x, arrWithBlocks[i].y, 25, 25);
        } else if (arrWithBlocks[i].v === 0 && arrWithBlocks[i].n == 3){
            //console.log("yo")
            arrWithBlocks[i] = {
                x: arrWithBlocks[i].x,
                y: arrWithBlocks[i].y,
                v: 1,
                n: arrWithBlocks[i].n
            }
            ctx.fillStyle = "green";
            ctx.fillRect(arrWithBlocks[i].x, arrWithBlocks[i].y, 25, 25);
        } else {
            ctx.lineWidth = 2;
            ctx.fillStyle = "#181818";
            ctx.strokeStyle = "white";
            ctx.fillRect(arrWithBlocks[i].x,arrWithBlocks[i].y,25,25)
        } 
    }
}
const resetNeighbours = () => {
    for(var i = 0; i < arrWithBlocks.length; i++){
        arrWithBlocks[i] = {
            x: arrWithBlocks[i].x,
            y: arrWithBlocks[i].y,
            v: arrWithBlocks[i].v,
            n: 0
        }
    }
}
const countLiveNeighbours = () => {
    for(var i = 0; i < arrWithBlocks.length; i++){
        if(arrWithBlocks[i+1] && arrWithBlocks[i+1].v === 1){
            arrWithBlocks[i].n += 1
        }
        if(arrWithBlocks[i-1] && arrWithBlocks[i-1].v === 1){
            arrWithBlocks[i].n += 1
        }
        if(arrWithBlocks[i-19] && arrWithBlocks[i-19].v === 1){
            arrWithBlocks[i].n += 1
        }
        if(arrWithBlocks[i-20] && arrWithBlocks[i-20].v === 1){
            arrWithBlocks[i].n += 1
        }
        if(arrWithBlocks[i-21] && arrWithBlocks[i-21].v === 1){
            arrWithBlocks[i].n += 1
        }
        if(arrWithBlocks[i+19] && arrWithBlocks[i+19].v === 1){
            arrWithBlocks[i].n += 1
        }
        if(arrWithBlocks[i+20] && arrWithBlocks[i+20].v === 1){
            arrWithBlocks[i].n += 1
        }
        if(arrWithBlocks[i+21] && arrWithBlocks[i+21].v === 1){
            arrWithBlocks[i].n += 1
        }
    }
    //getLive()
}

const fillAray = () => {
    let x = 0;
    let y = 0;
    for(var  i = 0; i < 20; i++){
        for(var j = 0; j < 20; j++){
            ctx.lineWidth = 2;
            ctx.fillStyle = "#181818";
            ctx.strokeStyle = "white";
            ctx.fillRect(x,y,25,25)
            var cell = {
                x: x,
                y: y,
                v: 0,
                n: 0
            }
            arrWithBlocks.push(cell)
            x += 25
        }
        if(x == 500) x = 0;
        y += 25;
        if(y == 500) y = 0;
    }
}

canvas.addEventListener('click', handleClick);
start.addEventListener('click', startLife);
stop.addEventListener('click', stopLife);
window.onload = () => {
    fillAray()
}