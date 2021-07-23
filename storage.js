class Storage {
    static addFilmToSt(newFilm) {
        let films = this.getFilmsFromSt();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    }


    static getFilmsFromSt() {
        let films;

        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"));

        }

        return films;
    }

    static deleteFilmFromSt(filmTitle) {
        let films = this.getFilmsFromSt();
        films.forEach(function (film, index) {
            if (film.title === filmTitle) {
                films.splice(index, 1);
            }
        });

        localStorage.setItem("films", JSON.stringify(films));
    }

    static clearAllFilmsFromSt() {
        localStorage.removeItem("films");

    }

}