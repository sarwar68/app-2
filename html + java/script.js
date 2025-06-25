document.getElementById("addParaBtn").addEventListener("click", function() {
    let newPara = document.createElement("p");
    newPara.textContent = "New paragraph added!";
    document.getElementById("container").appendChild(newPara);
});

document.getElementById("deleteParaBtn").addEventListener("click", function() {
    let container = document.getElementById("container");
    let paragraphs = container.getElementsByTagName("p");
    if (paragraphs.length > 0) {
        container.removeChild(paragraphs[paragraphs.length - 1]);
    } else {
        alert("No paragraphs to delete.");
    }
});

document.getElementById("changeBgBtn").addEventListener("click", function() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("container").style.backgroundColor = randomColor;
});

document.getElementById("toggleVisibilityBtn").addEventListener("click", function() {
    let container = document.getElementById("container");
    container.style.display = (container.style.display === "none") ? "block" : "none";
});

document.getElementById("addTextForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let inputText = document.getElementById("newText").value;
    if (inputText.trim() === "") {
        alert("Please enter some text.");
        return;
    }
    let newPara = document.createElement("p");
    newPara.textContent = inputText;
    document.getElementById("container").appendChild(newPara);
    document.getElementById("newText").value = "";
});