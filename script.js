// document.onmousemove = function (swim) {
//     var x = swim.clientX - 13.5;
//     var y = swim.clientY - 0
//     document.getElementById("SStar").style.marginLeft = x + "px";
//     document.getElementById("SStar").style.marginTop = y + "px";
//   };

var hometext = "Welcome To my personal website.My name is Lucas Kersten and I am a student currently enrolled at the high school Clovis High and I participate in an extracurricular activity provided by my school called CART(Center for Advanced Research and Technology). To properly navigate this page press the arrows near the vortex to move around, Press the A button to land on a planet, and Press the B button to exit a planet";

let up = document.querySelector(".up")
up.addEventListener ("click", ()=>{  
    MoveUp()
}
)
let left = document.querySelector(".left")
left.addEventListener ("click", ()=>{  
    MoveLeft()
}
)
let right = document.querySelector(".right")
right.addEventListener ("click", ()=>{  
    MoveRight()
}
)
let down = document.querySelector(".down")
down.addEventListener ("click", ()=>{  
    MoveDown()
}
)
// let center = document.querySelector(".center")
// center.addEventListener ("click", ()=>{  
//     SelectPlan()
// }
// )

const area = ['0', 'space1', 'space2', 'space3', 'space4', 'space5', 'space6', 'space7', 'space8', 'space9', 'space10', 'space11', 'space12', 'space13', 'space14', 'space15', 'space16', 'space17', 'space18', 'space19', 'space20', 'space21', 'space22', 'space23', 'space24', 'space25', 'space26', 'space27', 'space28', 'space29', 'space30', 'space31', 'space32', 'space33', 'space34', 'space35', 'space36', 'space37', 'space38', 'space39', 'space40', 'space41', 'space42', 'space43', 'space44', 'space45', 'space46', 'space47', 'space48', 'space49', 'space50', 'space51', 'space52', 'space53', 'space54', 'space55', 'space56', 'space57', 'space58', 'space59', 'space60', 'space61', 'space62', 'space63', 'space64', 'space65', 'space66', 'space67', 'space68', 'space69', 'space70', 'space71', 'space72', 'space73', 'space74', 'space75', 'space76', 'space77', 'space78', 'space79', 'space80', 'space81', 'space82', 'space83', 'space84', 'space85', 'space86', 'space87', 'space88', 'space89', 'space90', 'space91', 'space92', 'space93', 'space94', 'space95', 'space96', 'space97', 'space98', 'space99', 'space100', 'space101', 'space102', 'space103', 'space104', 'space105', 'space106', 'space107', 'space108', 'space109', 'space110', 'space111', 'space112', 'space113', 'space114', 'space115', 'space116', 'space117', 'space118', 'space119', 'space120', 'space121']

var ShipStop = 0
var local = 61;
function MoveUp() {
    console.log("up")
    if (ShipStop == 1 || local == 1 || local == 2 || local == 3 || local == 4 || local == 5 || local == 6 || local == 7 || local == 8 || local == 9 || local == 10 || local == 11) {
    } else {
        const node = document.getElementById(area[local]).lastElementChild;
        local -= 11;
        document.getElementById(area[local]).appendChild(node);  
        console.log(local)    
    }
}
function MoveLeft() {
    console.log("left")
    if (ShipStop == 1 || local == 1 || local == 12 || local == 23 || local == 34 || local == 45 || local == 56 || local == 67 || local == 78 || local == 89 || local == 100 || local == 111) {
    } else {
    const node = document.getElementById(area[local]).lastElementChild;
    local -= 1;
    document.getElementById(area[local]).appendChild(node);  
    console.log(local)
    }
}
function MoveRight() {
    console.log("right")
    if (ShipStop == 1 || local == 11 || local == 22 || local == 33 || local == 44 || local == 55 || local == 66 || local == 77 || local == 88 || local == 99 || local == 110 || local == 121) {
    } else {
    const node = document.getElementById(area[local]).lastElementChild;
    local += 1;
    document.getElementById(area[local]).appendChild(node);  
    console.log(local)
    }
}
function MoveDown() {
    console.log("down")
    if (ShipStop == 1 || local == 111 || local == 112 || local == 113 || local == 114 || local == 115 || local == 116 || local == 117 || local == 118 || local == 119 || local == 120 || local == 121) {
    } else {
    const node = document.getElementById(area[local]).lastElementChild;
    local += 11;
    document.getElementById(area[local]).appendChild(node);  
    console.log(local)
    }
}
function SelectPlan() {
    if (local == 17){
        document.getElementById('textbox').innerHTML = 'The portfolio of the stuff that I had worked on before this is but not limited to DelveHomes This portfolio was the first website I made and it shows, it has bad image sizing and spacing, However I have gotten better since then. Candyland-Rockyroad This was the latest website I have made which is a digitized game of Candyland with 0-4 players';
        document.getElementById('box').classList.add('ColorLand')
        HideShip()
    } else if (local == 46) {
        document.getElementById('textbox').innerHTML = 'Programing';
        document.getElementById('box').classList.add('IceLand')
        HideShip()
    } else if (local == 54) {
        document.getElementById('textbox').innerHTML = 'Personal Projects';
        document.getElementById('box').classList.add('SunLand')
        HideShip()
    } else if (local == 92) {
        document.getElementById('textbox').innerHTML = 'Writting';
        document.getElementById('box').classList.add('RingLand')
        HideShip()
    } else if (local == 96) {
        document.getElementById('textbox').innerHTML = 'Programing';
        document.getElementById('box').classList.add('PacLand')
        HideShip()
    } else if (ShipStop == 0) {
      document.getElementById('textbox').innerHTML = '. . .';
    } else {
    }
}

function HideShip(){
    const node = document.getElementById(area[local]).lastElementChild;
    local = 61;
    document.getElementById(area[local]).appendChild(node);  
    ShipStop = 1
    document.getElementById(area[local]).style.visibility = "hidden"
}

let RedButtA = document.querySelector(".RedButtA")
RedButtA.addEventListener ("click", ()=>{  
    SelectPlan()
}
)
let RedButtB = document.querySelector(".RedButtB")
RedButtB.addEventListener ("click", ()=>{  
    document.getElementById('box').classList.remove('IceLand')
    document.getElementById('box').classList.remove('ColorLand')
    document.getElementById('box').classList.remove('SunLand')
    document.getElementById('box').classList.remove('PacLand')
    document.getElementById('box').classList.remove('RingLand')
    ShipStop = 0
    document.getElementById(area[local]).style.visibility = "visible"
}
)

let backbutton = document.querySelector(".B-img")
backbutton.addEventListener ("click", ()=>{  
    DisplayB()
}
)
function DisplayB() {
    document.getElementById('textbox').innerHTML = hometext;
}

var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  }());
};

Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

for (var i = 0; i < 10; i++) {
  var d = new Dot();
  dots.push(d);
}

function draw() {
  var x = mouse.x,
      y = mouse.y;
  
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x - 4.5;
    dot.y = y - 4.5;
    dot.draw();
    x += (nextDot.x - dot.x) * .3;
    y += (nextDot.y - dot.y) * .3;

  });
}

addEventListener("mousemove", function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();


let resume = document.querySelector(".Resume")
resume.addEventListener ("click", ()=>{  
    DisplayRes()
}
)
let contact = document.querySelector(".Contact")
contact.addEventListener ("click", ()=>{  
    DisplayCon()
}
)
let home = document.querySelector(".Home")
home.addEventListener ("click", ()=>{  
    DisplayHom()
}
)
function DisplayRes(){
  document.getElementById('textbox').innerHTML = 'Resume';
  document.getElementById('box').classList.remove('IceLand')
  document.getElementById('box').classList.remove('ColorLand')
  document.getElementById('box').classList.remove('SunLand')
  document.getElementById('box').classList.remove('PacLand')
  document.getElementById('box').classList.remove('RingLand')
  ShipStop = 0
  document.getElementById(area[local]).style.visibility = "visible"
}
function DisplayCon(){
  document.getElementById('textbox').innerHTML = 'You can contact me through my email “LucasRocks246@gmail.com” or send me a text Through my phone number (559) 593-8637';
  document.getElementById('box').classList.remove('IceLand')
  document.getElementById('box').classList.remove('ColorLand')
  document.getElementById('box').classList.remove('SunLand')
  document.getElementById('box').classList.remove('PacLand')
  document.getElementById('box').classList.remove('RingLand')
  ShipStop = 0
  document.getElementById(area[local]).style.visibility = "visible"
}
function DisplayHom(){
  document.getElementById('textbox').innerHTML = hometext;
  document.getElementById('box').classList.remove('IceLand')
  document.getElementById('box').classList.remove('ColorLand')
  document.getElementById('box').classList.remove('SunLand')
  document.getElementById('box').classList.remove('PacLand')
  document.getElementById('box').classList.remove('RingLand')
  ShipStop = 0
  document.getElementById(area[local]).style.visibility = "visible"
}
