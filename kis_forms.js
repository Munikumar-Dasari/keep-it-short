let uploadProfileEl = document.getElementById("uploadProfile");
let uploadImgTextEl = document.getElementById("uploadImgText");


uploadProfileEl.addEventListener('change', function(event) {
    let selectedFile = event.target.files[0];
    uploadImgTextEl.textContent = selectedFile.name;
});


