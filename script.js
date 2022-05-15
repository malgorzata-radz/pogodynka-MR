
      let elementInput = document.querySelector(".wybranyInput");
      let input = elementInput.value;
      let szukajLista = document.querySelector(".szukajLista"); //div w którym znajduje się input i lista przycisków
      let przyciskSzukaj = document.querySelector(".szukajPrzycisk");

      let dzisTemp = document.querySelector(".tempDzis");
      let dzisZachmurzenie = document.querySelector(
        ".zachmurzenieDzis");
      let dzisWiatr = document.querySelector(".wiatrDzis");
      let dzisOpis = document.querySelector(".opisDzis");

      let jutroTemp = document.querySelector(".tempJutro");
      let jutroZachmurzenie = document.querySelector(
         ".zachmurzenieJutro");
      let jutroWiatr = document.querySelector(".wiatrJutro");
      let jutroOpis = document.querySelector(".opisJutro");


      let wyszukanaFraza = "https://www.wowapi.pl/pogoda/miasta?szukaj="+ input;
     
    //   let elementPrzycisk = document.querySelector(".szukajPrzycisk");
    //   let miastoPrzyciskElement = 
    //   let miastoPrzycisk = 
    //   let nowyDiv = document.createElement("div");


        przyciskSzukaj.addEventListener("click", function() {
            console.log(input);
            console.log(wyszukanaFraza);
            // fetch("https://www.wowapi.pl/pogoda/prognoza?miasto=bialystok").then(odbierzDane).then(rozpakujDane);
            });
           
        

            // function pobierzDane() {
            //     fetch("https://www.wowapi.pl/pogoda/prognoza?miasto=bialystok").then(odbierzDane);
            //   }
            function odbierzDane(response) {
                response.json().then(rozpakujDane);
              }
            function rozpakujDane(dane) {
                console.log("Dane które nas interesują:");
                console.log(dane);
                // elementDzisTemp.innerHTML = dane.teraz.temperatura;
                // elementDzisKierunekWiatru.innerHTML = dane.teraz.wiatrKierunekSłownie;
                // elementDzisZachmurzenie.innerHTML = dane.teraz.zachmurzenie;
                // elementDzisOpis.innerHTML = dane.teraz.opis;
                // elementIkony.innerHTML = dane.ikony;
                // elementJutroTemp.innerHTML = dane.prognoza.jutro.temperatura;
                // elementJutroKierunekWiatru.innerHTML = dane.prognoza.jutro.wiatrKierunekSłownie;
                // elementJutroZachmurzenie.innerHTML = dane.prognoza.jutro.zachmurzenie;
                // elementJutroOpis.innerHTML = dane.prognoza.jutro.opis;
                // elementIkony.innerHTML = dane.ikony;
              }





    //   miastoPrzycisk.innerHTML =  //nazwa miasta zwróconego przez api funkcją fetch po wpisaniu hasła w wyszukiwarkę ;
    //   
    //   miastoPrzycisk.addEventListener("click", function () {

    //   };




    //   function pobierzDane() {
    //     fetch("https://www.wowapi.pl/pogoda/miasta").then(function (response) {
    //       response.json()).then(function (dane) {
    //         console.log("dane ktore nas interere");
    //         console.log(dane );
    //       });
    //     });
    //   };

    
    //    input.addEventListener("change", function(event){
    //     console.log("wartość", event.target.value);
    //     fetch("https://www.wowapi.pl/pogoda/miasta?szukaj=", event.target.value).then(function (response) {
    //       response.json().then(function (miasta) {}
    //     })
    // });