let movies = [
    {
        Name: "Interstellar",
        YearOfRelease: "2014",
        Director: "Christopher Nolan",
        KeyActor: "Matthew McConaughey",
    },
    {
        Name: "Mother!",
        YearOfRelease: "2017",
        Director: "Darren Aronofsky",
        KeyActor: "Jennifer Lawrence",
    },
    {
        Name: "Arrival",
        YearOfRelease: "2016",
        Director: "Denis Villeneuve",
        KeyActor: "Amy Adams",
    },
    {
        Name: "Dracula",
        YearOfRelease: "1992",
        Director: "Bram Stoker",
        KeyActor: "Anthony Hopkins",
    },
    {
        Name: "Children of Men",
        YearOfRelease: "2006",
        Director: "Alfonso Cuaron",
        KeyActor: "Clive Owen",
    }

]

let movie = [
    {
    Name: "Contact",
    YearOfRelease: "1997",
    Director: "Robert Zemeckis",
    KeyActor: "Jodie Foster",
    }
]
movies.splice(1, 0, movie);

console.log(movies);

