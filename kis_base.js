
const dashboardEl = document.getElementById('dashboard');
const contentEl = document.getElementById('content');




function functionDashboard() {
    let dashboardTextEl = document.getElementById("dashboardText");
    let baseText = dashboardTextEl.textContent;
    localStorage.setItem('text', baseText);
}

function functionContent() {
    let contentTextEl = document.getElementById("contentText");
    let baseText = contentTextEl.textContent;
    localStorage.setItem('text', baseText);
}

let textEl = localStorage.getItem('text');
console.log(textEl)

window.onload = function() {
    if (textEl == "Dashboard") {
        dashboardEl.style.backgroundColor = "red";
        contentEl.style.backgroundColor = "transparent";
    }else if(textEl == "Content"){
        dashboardEl.style.backgroundColor = "transparent";
        contentEl.style.backgroundColor = "red";
    }
}

dashboardEl.addEventListener("click", functionDashboard);
contentEl.addEventListener("click", functionContent);
