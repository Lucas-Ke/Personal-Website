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

const area = ['0', 'space1', 'space2', 'space3', 'space4', 'space5', 'space6', 'space7', 'space8', 'space9', 'space10', 'space11', 'space12', 'space13', 'space14', 'space15', 'space16', 'space17', 'space18', 'space19', 'space20', 'space21', 'space22', 'space23', 'space24', 'space25', 'space26', 'space27', 'space28', 'space29', 'space30', 'space31', 'space32', 'space33', 'space34', 'space35', 'space36', 'space37', 'space38', 'space39', 'space40', 'space41', 'space42', 'space43', 'space44', 'space45', 'space46', 'space47', 'space48', 'space49', 'space50', 'space51', 'space52', 'space53', 'space54', 'space55', 'space56', 'space57', 'space58', 'space59', 'space60', 'space61', 'space62', 'space63', 'space64', 'space65', 'space66', 'space67', 'space68', 'space69', 'space70', 'space71', 'space72', 'space73', 'space74', 'space75', 'space76', 'space77', 'space78', 'space79', 'space80', 'space81', 'space82', 'space83', 'space84', 'space85', 'space86', 'space87', 'space88', 'space89', 'space90', 'space91', 'space92', 'space93', 'space94', 'space95', 'space96', 'space97', 'space98', 'space99', 'space100', 'space101', 'space102', 'space103', 'space104', 'space105', 'space106', 'space107', 'space108', 'space109', 'space110', 'space111', 'space112', 'space113', 'space114', 'space115', 'space116', 'space117', 'space118', 'space119', 'space120', 'space121']

var local = 61;
function MoveUp() {
    console.log("up")
    if (local == 1 || local == 2 || local == 3 || local == 4 || local == 5 || local == 6 || local == 7 || local == 8 || local == 9 || local == 10 || local == 11) {
    } else {
        const node = document.getElementById(area[local]).lastElementChild;
        local -= 11;
        document.getElementById(area[local]).appendChild(node);  
        console.log(local)    
    }
}
function MoveLeft() {
    console.log("left")
    if (local == 1 || local == 12 || local == 23 || local == 34 || local == 45 || local == 56 || local == 67 || local == 78 || local == 89 || local == 100 || local == 111) {
    } else {
    const node = document.getElementById(area[local]).lastElementChild;
    local -= 1;
    document.getElementById(area[local]).appendChild(node);  
    console.log(local)
    }
}
function MoveRight() {
    console.log("right")
    if (local == 11 || local == 22 || local == 33 || local == 44 || local == 55 || local == 66 || local == 77 || local == 88 || local == 99 || local == 110 || local == 121) {
    } else {
    const node = document.getElementById(area[local]).lastElementChild;
    local += 1;
    document.getElementById(area[local]).appendChild(node);  
    console.log(local)
    }
}
function MoveDown() {
    console.log("down")
    if (local == 111 || local == 112 || local == 113 || local == 114 || local == 115 || local == 116 || local == 117 || local == 118 || local == 119 || local == 120 || local == 121) {
    } else {
    const node = document.getElementById(area[local]).lastElementChild;
    local += 11;
    document.getElementById(area[local]).appendChild(node);  
    console.log(local)
    }
}
