// kontrolna GRUPA A

//1. Napisi funkciju koja ispisuje parne brojeve od 0 do 100 (ukljucujuci 100)

function ispis_brojeva() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
//ispis_brojeva();

//2.
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u dan u tjednu. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Ponedjeljak";
//INPUT: 5; OUTPUT: "Petak"; 

function promjena(broj) {
    switch (broj) {
        case 1:
            console.log("Ponedjeljak");
            break;
        case 2:
            console.log("Utorak");
            break;
        case 3:
            console.log("Srijeda");
            break;
        case 4:
            console.log("Četvrtak");
            break;
        case 5:
            console.log("Petak");
            break;
        case 6:
            console.log("Subota");
            break;
        case 7:
            console.log("Nedjelja");
            break;
        default:
            console.log("Ne postoji taj dan u tjednu");
            break;

    }
}
//promjena(1);

//3
//Napisi funkciju koja okrece uneseni string i broji charactere ne uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao";
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 35)

function okretanje(string1) {
    let string2 = "";
    let brojac = 0;
    for (let i = string1.length - 1; i >= 0; i--) {
        string2 += string1[i];
        brojac++;
    }
    console.log(string2, ",", brojac);
}
//okretanje("Pisanje zadataka nije jednostavan posao");

//4 
//Napisi funkciju koja vraca najkraci kljuc u danom objektu
const somePeople = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}

//INPUT: somePeople
//OUTPUT: "Ada"

function najkraci() {
    kljuc = "";
    brojac = 0;
    for (let i = 0; i < somePeople.length; i++) {
        if (somePeople[i].length > brojac) {
            kljuc += somePeople[i];
            brojac++;
        }
    }
    console.log(kljuc);
}

//najkraci();

// 5
//Napisi funkciju u obliku function expressiona koja vraca proste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [3, 5, 11]
//Napisi funkciju u obliku arrow functiona koja kvadrira i vraca dane inpute
//INPUT: [2, 4, 6, 0, 1]
//OUTPUT: [4, 16, 36, 0, 1]

function Kvadrat(number) {
    return number * number;
}

//console.log(Kvadrat(2));

//6
//Napisi funkciju koja vraca sve dogadaje koji su se dogodili prije od vrijednosti iz ulaznog parametra
const someEvents = [
    {
        eventName: "Izasla je Java",
        eventYear: 1995,
    },
    {
        eventName: "Izasao je C#",
        eventYear: 2000,
    },
    {
        eventName: "Izasao je Python",
        eventYear: 1991,
    },
    {
        eventName: "Izasao je C++",
        eventYear: 1985,
    },
    {
        eventName: "Izasao je JavaScript",
        eventYear: 1995,
    },
];
//INPUT: (someEvents, 1992)
//OUTPUT: [{eventName: "Izasao je Python", eventYear: 1991}, {eventName: "Izasao je C++", eventYear: 1985}]

function OdredenaGodina(someEvents, godina) {
    for (let i = 0; i < someEvents.length; i++) {
        if (someEvents[i].eventYear < godina) {
            console.log(someEvents[i]);
        }
    }
}

//OdredenaGodina(someEvents, 1992);



