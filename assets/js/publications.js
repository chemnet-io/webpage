function toggleCite(id, but) {
    const cite = document.getElementById(id);
    const button = document.getElementById(but);
    if (cite.style.display === "none") {
        cite.style.display = "block";
        button.textContent = "Hide Citation";
    }
    else {
        cite.style.display = "none";
        button.textContent = "Show Citation";
    }    
}