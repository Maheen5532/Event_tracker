
let para = document.getElementById("date-para");
function displayDate() {
    para.innerHTML = new Date();
}
// ---------2
function changeColor() {
    let color = document.getElementById("colorSelect").value;
    document.getElementById("colorBox").style.backgroundColor = color;
    document.getElementById("color-para").innerHTML = `selected color is ${color}`
}
// ------------3
document.getElementById("trackingArea").addEventListener("mousemove", function(event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("coordinates").innerHTML = `Mouse Coordinates: (${x }, ${y} )`;
});
// -----------4
 function changeBgColor(){
    document.getElementById("div4").style.backgroundColor = "plum";
    document.getElementById("bg-para").innerHTML = `Double Click Event Worked!`
 }
//  -------------5
let lastKey = '';
document.getElementById("input-field").addEventListener("keydown", (event) => {
    lastKey = event.key; 
    document.getElementById("key-display").textContent = `Last Key Pressed in Input: ${lastKey}`;
});
// ------------------6
function updateResizeInfo() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("resize-info").textContent = `Width: ${width}, Height: ${height}`;
}

updateResizeInfo();
window.addEventListener("resize", updateResizeInfo);
// ------------------7
let image = document.getElementById("image");
    let imgContainer = document.getElementById("img-container");
    imgContainer.addEventListener("mouseover", () => {
        image.src = "./imges/Gojo.jpg";
    });

    imgContainer.addEventListener("mouseout", () => {
        image.src = "./imges/Utahime.jpg";  
    });
// --------------------------8
function myFunction(event) {
    let submit = 'your form is submitted'
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    document.getElementById("para").innerHTML = `Status: ${submit}`;
}
// --------------------9
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
// ---------------------10

const video = document.getElementById("videoPlayer");
const status = document.getElementById("mediaStatus");


video.addEventListener("play", () => {
    status.textContent = "Status: Video is playing";
});

video.addEventListener("pause", () => {
    status.textContent = "Status: Video is paused";
});

video.addEventListener("ended", () => {
    status.textContent = "Status: Video has ended";
});


video.addEventListener("error", () => {
    status.textContent = "Status: An error occurred while playing the video.";
});