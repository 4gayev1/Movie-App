class UI {
    static addFilmToUI(newFilm) {
        const filmList = document.getElementById("films");

        filmList.innerHTML += ` <tr>
        <td><img style="width: 300px;" src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
      </tr> `;
    }


    static clearInputs(e1, e2, e3) {
        e1.value = "";
        e2.value = "";
        e3.value = "";

    }

    static displayMessages(message, type) {
        const cardBody = document.querySelector(".card-body");

        const div = document.createElement("div");


        div.className = `alert alert-${type}`;
        div.textContent = message;
        cardBody.appendChild(div);

        setTimeout(function () {
            div.remove();
        }, 2000);
    }

    static loadAllFilms(films) {
        const filmList = document.getElementById("films");
        films.forEach(function (film) {
            filmList.innerHTML += ` <tr>
            <td><img style="width: 300px;" src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
          </tr> `;
        });
    }

    static deleteFilmFromUI(element) {
        element.parentElement.parentElement.remove();
    }


    static clearAllFilmsFromUI() {
        const filmList = document.getElementById("films");
        filmList.innerHTML = "";
    }



}