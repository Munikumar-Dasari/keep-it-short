const contentBtnEl = document.getElementById("contentBtn");
const teamsBtnEl = document.getElementById("teamsBtn");


const contentEl = document.getElementById("content");
const teamsEl = document.getElementById("teams");

contentEl.style.display = "none";
teamsEl.style.display = "block";


contentBtnEl.classList.remove("kis-content-headings-btn-active");
teamsBtnEl.classList.add("kis-content-headings-btn-active");



function functionContent(){
    contentEl.style.display = "block";
    teamsEl.style.display = "none";

    contentBtnEl.classList.add("kis-content-headings-btn-active");
    teamsBtnEl.classList.remove("kis-content-headings-btn-active");
}

function functionTeams(){
    contentEl.style.display = "none";
    teamsEl.style.display = "block";


    contentBtnEl.classList.remove("kis-content-headings-btn-active");
    teamsBtnEl.classList.add("kis-content-headings-btn-active");

}


contentBtnEl.addEventListener("click", functionContent);
teamsBtnEl.addEventListener("click", functionTeams);


