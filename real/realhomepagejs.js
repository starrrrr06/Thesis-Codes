function enterDashboard() {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}

function loadPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');
}

document.addEventListener("input", function(e) {
    if (e.target.id === "searchBar") {
        const value = e.target.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {
            const name = card.querySelector(".name").textContent.toLowerCase();
            card.style.display = name.includes(value) ? "" : "none";
        });
    }
});