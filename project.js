const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");




eventListener();

function eventListener() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsFromSt();
        UI.loadAllFilms(films);
    });

    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}



function addFilm(e) {

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;


    if (title === "" || director === "" || url === "") {
        UI.displayMessages("Fill all area", "danger");
    } else {

        // Create New Film
        const newFilm = new Film(title, director, url);

        UI.addFilmToUI(newFilm);
        Storage.addFilmToSt(newFilm);
        UI.displayMessages("The film was added succefully", "success");

    }

    UI.clearInputs(titleElement, urlElement, directorElement);

    e.preventDefault();
}


function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        Storage.deleteFilmFromSt(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.deleteFilmFromUI(e.target)
    }
}

function clearAllFilms() {
    if (confirm("Are You sure?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromSt();
    }

}