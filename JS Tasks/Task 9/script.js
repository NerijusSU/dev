/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;

    }
    getIntroduction() {
        return this.title + " " + this.director + " " + this.budget;
    }
    wasExpensive() {
        if (this.budget > 100000000) {
            return true;
        }
        if (this.budget < 100000000) {
            return false;
        }
    }
}

let Movie1 = new Movie("Gladiator", "directed by Ridley Scott. Budget (USD):", 103000000);
let Movie2 = new Movie("Braveheart", "directed by Mel Gibson. Budget (USD):", 72000000);

console.log(Movie1.getIntroduction() + ". More than 100 mln. USD - " + Movie1.wasExpensive());
console.log(Movie2.getIntroduction() + ". More than 100 mln. USD - " + Movie2.wasExpensive());