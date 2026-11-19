
const makePlayer = (name, position, rating, age, line) => ({
    name, position, rating, age, line
});

export const clubs = {
    "FC Bayern München": [
        makePlayer("Manuel Neuer", "GK", 86, 40, 0),
        makePlayer("Alphonso Davies", "LB", 85, 25, 1),
        makePlayer("Dayot Upamecano", "CB", 86, 28, 1),
        makePlayer("Jonathan Tah", "CB", 86, 30, 1),
        makePlayer("Konrad Laimer", "RB", 84, 29, 1),
        makePlayer("Joshua Kimmich", "CDM", 89, 31, 2),
        makePlayer("Tom Bischof", "CM", 78, 21, 2),
        makePlayer("Jamal Musiala", "CAM", 90, 23, 2),
        makePlayer("Luis Díaz", "LW", 87, 29, 3),
        makePlayer("Harry Kane", "ST", 91, 33, 3),
        makePlayer("Michael Olise", "RW", 89, 24, 3)
    ],

    "Borussia Dortmund": [
        makePlayer("Gregor Kobel", "GK", 86, 28, 0),
        makePlayer("Julian Ryerson", "RB", 82, 29, 1),
        makePlayer("Waldemar Anton", "CB", 83, 30, 1),
        makePlayer("Nico Schlotterbeck", "CB", 86, 27, 1),
        makePlayer("Ramy Bensebaini", "LB", 82, 31, 1),
        makePlayer("Emre Can", "CDM", 82, 32, 2),
        makePlayer("Felix Nmecha", "CM", 83, 26, 2),
        makePlayer("Jobe Bellingham", "CM", 80, 21, 2),
        makePlayer("Maximilian Beier", "LW", 83, 24, 3),
        makePlayer("Serhou Guirassy", "ST", 86, 30, 3),
        makePlayer("Carney Chukwuemeka", "RW", 80, 23, 3)
    ],

    "Bayer Leverkusen": [
        makePlayer("Mark Flekken", "GK", 82, 33, 0),
        makePlayer("Miguel Gutiérrez", "LB", 83, 25, 1),
        makePlayer("Loïc Badé", "CB", 83, 26, 1),
        makePlayer("Edmond Tapsoba", "CB", 85, 27, 1),
        makePlayer("Jarell Quansah", "RB", 82, 23, 1),
        makePlayer("Robert Andrich", "CDM", 83, 32, 2),
        makePlayer("Aleix García", "CM", 83, 29, 2),
        makePlayer("Malik Tillman", "CAM", 82, 24, 2),
        makePlayer("Eliesse Ben Seghir", "LW", 82, 21, 3),
        makePlayer("Patrik Schick", "ST", 85, 30, 3),
        makePlayer("Nathan Tella", "RW", 81, 27, 3)
    ],

    "Hamburger SV": [
        makePlayer("Daniel Heuer Fernandes", "GK", 77, 34, 0),
        makePlayer("David Møller Wolfe", "LB", 78, 24, 1),
        makePlayer("Warmed Omari", "CB", 77, 26, 1),
        makePlayer("Sebastiaan Bornauw", "CB", 79, 27, 1),
        makePlayer("Zakaria El Ouahdi", "RB", 79, 25, 1),
        makePlayer("Albert Sambi Lokonga", "CDM", 79, 27, 2),
        makePlayer("Nicolai Remberg", "CM", 77, 26, 2),
        makePlayer("Fábio Vieira", "CAM", 81, 26, 2),
        makePlayer("Bakery Jatta", "LW", 76, 28, 3),
        makePlayer("Terem Moffi", "ST", 81, 27, 3),
        makePlayer("Patson Daka", "RW", 79, 28, 3)
    ],

    "Manchester United": [
        makePlayer("Senne Lammens", "GK", 80, 24, 0),
        makePlayer("Diogo Dalot", "RB", 82, 27, 1),
        makePlayer("Matthijs de Ligt", "CB", 85, 27, 1),
        makePlayer("Lisandro Martínez", "CB", 84, 28, 1),
        makePlayer("Patrick Dorgu", "LB", 80, 22, 1),
        makePlayer("Manuel Ugarte", "CDM", 82, 25, 2),
        makePlayer("Kobbie Mainoo", "CM", 84, 21, 2),
        makePlayer("Bruno Fernandes", "CAM", 88, 32, 2),
        makePlayer("Marcus Rashford", "LW", 85, 29, 3),
        makePlayer("Benjamin Šeško", "ST", 84, 23, 3),
        makePlayer("Bryan Mbeumo", "RW", 85, 27, 3)
    ],

    "Liverpool FC": [
        makePlayer("Alisson Becker", "GK", 89, 34, 0),
        makePlayer("Milos Kerkez", "LB", 83, 23, 1),
        makePlayer("Virgil van Dijk", "CB", 89, 35, 1),
        makePlayer("Ibrahima Konaté", "CB", 86, 27, 1),
        makePlayer("Jeremie Frimpong", "RB", 86, 25, 1),
        makePlayer("Ryan Gravenberch", "CDM", 86, 24, 2),
        makePlayer("Alexis Mac Allister", "CM", 87, 27, 2),
        makePlayer("Florian Wirtz", "CAM", 90, 23, 2),
        makePlayer("Cody Gakpo", "LW", 85, 27, 3),
        makePlayer("Alexander Isak", "ST", 89, 27, 3),
        makePlayer("Bradley Barcola", "RW", 86, 24, 3)
    ],

    "Real Madrid": [
        makePlayer("Thibaut Courtois", "GK", 90, 34, 0),
        makePlayer("Álvaro Carreras", "LB", 82, 23, 1),
        makePlayer("Dean Huijsen", "CB", 84, 21, 1),
        makePlayer("Antonio Rüdiger", "CB", 86, 33, 1),
        makePlayer("Trent Alexander-Arnold", "RB", 87, 28, 1),
        makePlayer("Aurélien Tchouaméni", "CDM", 86, 26, 2),
        makePlayer("Federico Valverde", "CM", 89, 28, 2),
        makePlayer("Jude Bellingham", "CAM", 91, 23, 2),
        makePlayer("Vinícius Júnior", "LW", 91, 26, 3),
        makePlayer("Kylian Mbappé", "ST", 92, 27, 3),
        makePlayer("Rodrygo", "RW", 87, 25, 3)
    ],

    "FC Barcelona": [
        makePlayer("Joan García", "GK", 84, 25, 0),
        makePlayer("Alejandro Balde", "LB", 84, 23, 1),
        makePlayer("Pau Cubarsí", "CB", 85, 19, 1),
        makePlayer("Eric García", "CB", 82, 25, 1),
        makePlayer("Jules Koundé", "RB", 87, 28, 1),
        makePlayer("Frenkie de Jong", "CDM", 87, 29, 2),
        makePlayer("Pedri", "CM", 90, 23, 2),
        makePlayer("Gavi", "CAM", 85, 22, 2),
        makePlayer("Raphinha", "LW", 88, 29, 3),
        makePlayer("Gabriel Jesus", "ST", 84, 29, 3),
        makePlayer("Lamine Yamal", "RW", 91, 19, 3)
    ]
};
