function change() {
  const elements = document.querySelectorAll("div.box");
  for (let element of elements) {
    element.classList.toggle("transformed-state");
  }
}

// const changeButton = document.querySelector("#change");
// changeButton.addEventListener("click", change);


// document.addEventListener('mousemove', function(e) {
//   // let body = document.querySelector('body');
//   let circle = document.getElementById('stone');
//   let left = e.offsetX;
//   let top = e.offsetY;
//   circle.style.left = left + 'px';
//   circle.style.top = top + 'px';
// });

// console.log("grandezza",window.innerWidth);

2
3
	const mainProva = document.querySelector(".main");

  console.log(mainProva);

  // $('fa-arrow-up').scrollTo('#main');

 

 const arrow = document.querySelector(".fa-arrow-up");
 arrow.addEventListener("click", function(){
   mainProva.scrollIntoView();
 });

 $(mainProva).mousemove(function (e) {
    $(".stone").css({ left: e.pageX - 60, top: e.pageY - 60 });
  });


const smartSwipe =document.querySelector(".row-smartphone");
console.log("prova",smartSwipe);



// swipe
$(smartSwipe).on("swipeleft",function(){
  console.log("ciao");
  const itemActive = document.querySelector(".active");
      let listClasses = itemActive.classList;
      let last = false
      
      for (let i = 0; i < listClasses.length; i++) {
          if (listClasses[i] == "last") {
              last = true;
          }
      }
      
  
   if (last == false) {
       itemActive.classList.remove("active");
       setTimeout(function () {
        titleActive.classList.remove("op2");
     }, 20);
       let titleActive = itemActive.nextElementSibling;
       titleActive.classList.add("active");
       indietro.classList.remove("none");  
       titleActive.classList.add("op2");

   }else {
       avanti.classList.add("none");
   }
  
});

$(smartSwipe).on("swiperight",function(){
  console.log("ciao2");
  const itemActive = document.querySelector(".active");
  let listClasses = itemActive.classList;
  let last = false
  
  for (let i = 0; i < listClasses.length; i++) {
      if (listClasses[i] == "first") {
          last = true;
      }
  }
  

if (last == false) {
   itemActive.classList.remove("active");
   setTimeout(function () {
    titleActive.classList.remove("op2");
 }, 20);
   let titleActive = itemActive.previousElementSibling;
   titleActive.classList.add("active"); 
   avanti.classList.remove("none");
   titleActive.classList.add("op2");

  }else {
      indietro.classList.add("none");
  }
});



const newsTitle = document.querySelector(".news-title");


  newsTitle.addEventListener("click", function(){
     const newsContainer = document.querySelector(".news-cards-container");
     console.log(newsContainer.classList);
     newsContainer.classList.toggle("d-none");

     setTimeout(function () {
      newsContainer.classList.remove("opacity");
   }, 20);

     const iconNewsPiu = document.querySelector(".icona-news-p");
     const iconNewsMeno = document.querySelector(".icona-news-m");

     console.log(iconNewsPiu, iconNewsMeno);

     if (!newsContainer.classList.contains("d-none")) {
      iconNewsMeno.classList.remove("d-none");
      iconNewsPiu.classList.add("d-none");
      newsContainer.classList.add("opacity");
     artistTitle.classList.add("top-border")

     }else {
      iconNewsMeno.classList.add("d-none");
      iconNewsPiu.classList.remove("d-none");
     artistTitle.classList.remove("top-border")

     }
    
    }); 


    const artistTitle = document.querySelector(".artisti-title");
    

    const artistContainer = document.querySelector(".artist-cards-container");

  artistTitle.addEventListener("click", function(){
     console.log(artistContainer.classList);
     artistContainer.classList.toggle("d-none");
     

     setTimeout(function () {
      artistContainer.classList.remove("opacity");
   }, 20);

     const iconartistiPiu = document.querySelector(".icona-artisti-p");
     const iconartistiMeno = document.querySelector(".icona-artisti-m");

     console.log(iconartistiPiu, iconartistiMeno);

     if (!artistContainer.classList.contains("d-none")) {
      iconartistiMeno.classList.remove("d-none");
      iconartistiPiu.classList.add("d-none");
      artistContainer.classList.add("opacity");
     ticketTitle.classList.add("top-border")
     sponsorTitle.classList.add("top-border")



     }else {
      iconartistiMeno.classList.add("d-none");
      iconartistiPiu.classList.remove("d-none");
     ticketTitle.classList.remove("top-border")
     sponsorTitle.classList.remove("top-border")


     }
    }); 

  const scrollToArtist = document.querySelector(".line-up-artisti");

 const artistSection = document.getElementById("artisti")
 scrollToArtist.addEventListener("click", function(){
   artistSection.scrollIntoView();
   artistContainer.classList.remove("d-none");
   sponsorTitle.classList.add("top-border")

   setTimeout(function () {
    artistContainer.classList.remove("opacity");
 }, 20);
});

 const scrollToticket = document.querySelector(".ticket-up-title");

 const ticketSection = document.getElementById("ticket")
 const ticketContainer = document.querySelector(".ticket-cards-container");
 scrollToticket.addEventListener("click", function(){
   ticketSection.scrollIntoView();
   ticketContainer.classList.remove("d-none");
   sponsorTitle.classList.add("top-border")

   setTimeout(function () {
    ticketContainer.classList.remove("opacity");
 }, 20);

});



    const ticketTitle = document.querySelector(".ticket-title");


  ticketTitle.addEventListener("click", function(){
     const ticketContainer = document.querySelector(".ticket-container");
     console.log(ticketContainer.classList);
     ticketContainer.classList.toggle("d-none");

     setTimeout(function () {
      ticketContainer.classList.remove("opacity");
   }, 20);

     const iconticketPiu = document.querySelector(".icona-ticket-p");
     const iconticketMeno = document.querySelector(".icona-ticket-m");

     console.log(iconticketPiu, iconticketMeno);

     if (!ticketContainer.classList.contains("d-none")) {
      iconticketMeno.classList.remove("d-none");
      iconticketPiu.classList.add("d-none");
      ticketContainer.classList.add("opacity");
     locationTitle.classList.add("top-border")


     }else {
      iconticketMeno.classList.add("d-none");
      iconticketPiu.classList.remove("d-none");
     locationTitle.classList.remove("top-border")

     }
    }); 


    const locationTitle = document.querySelector(".location-title");


  locationTitle.addEventListener("click", function(){
     const locationContainer = document.querySelector(".location-container");
     console.log(locationContainer.classList);
     locationContainer.classList.toggle("d-none");

     setTimeout(function () {
      locationContainer.classList.remove("opacity");
   }, 20);

     const iconlocationPiu = document.querySelector(".icona-location-p");
     const iconlocationMeno = document.querySelector(".icona-location-m");

     console.log(iconlocationPiu, iconlocationMeno);

     if (!locationContainer.classList.contains("d-none")) {
      iconlocationMeno.classList.remove("d-none");
      iconlocationPiu.classList.add("d-none");
      locationContainer.classList.add("opacity");
     sponsorTitle.classList.add("top-border")


     }else {
      iconlocationMeno.classList.add("d-none");
      iconlocationPiu.classList.remove("d-none");
     sponsorTitle.classList.remove("top-border")

     }
    }); 


    const sponsorTitle = document.querySelector(".sponsor-title");
    const footer = document.querySelector(".footer");




  sponsorTitle.addEventListener("click", function(){
     const sponsorContainer = document.querySelector(".sponsor-container");
     console.log(sponsorContainer.classList);
     sponsorContainer.classList.toggle("d-none");
     


     setTimeout(function () {
      sponsorContainer.classList.remove("opacity");
   }, 20);

     const iconsponsorPiu = document.querySelector(".icona-sponsor-p");
     const iconsponsorMeno = document.querySelector(".icona-sponsor-m");

     console.log(iconsponsorPiu, iconsponsorMeno);

     if (!sponsorContainer.classList.contains("d-none")) {
      iconsponsorMeno.classList.remove("d-none");
      iconsponsorPiu.classList.add("d-none");
      sponsorContainer.classList.add("opacity");
     footer.classList.add("top-border")


     }else {
      iconsponsorMeno.classList.add("d-none");
      iconsponsorPiu.classList.remove("d-none");
     footer.classList.remove("top-border")

     }
    }); 


    const arrayTitolo = [
      "Dicono di noi",
      "Seguici su Instagram",
      "Mast 19",  

  ]
  
  const arrayImg = [
      "NEWS PER mast.png",
      "seguici_sui_social.png",
      "news-video.png"
  ]

  const linkNews = [
    "https://www.dlso.it/site/2022/05/19/guida-migliori-festival-estate-2022/32/",

    "https://www.instagram.com/mast_fest/",

    "https://fb.watch/d666wXc4uL/"


  ]

  const objectCover = [
    "object-cover",
    "",
    "object-cover",
  ]
  
  const innerContainer = document.querySelector(".row-smartphone");
  
  console.log(innerContainer);
  
  for (let index = 0; index < arrayTitolo.length; index++) {
      const element = arrayTitolo[index];
      console.log(element);
      
      let classElement = '';
  
      if (index == 0) {
          classElement = "active first";
      } else if (index == arrayTitolo.length - 1) { //se sono nell'ultimo aggiungo classe last
          classElement = "last";
      }
  
      let titoloProva = 
      `
      <a target="_blank" href="${linkNews[index]}" class="col item ${classElement} justify-content-center">
							<div class="card-cont d-flex justify-content-center">
								<div class="card">
									<div class="row card-title m-0">
										<div class="col-12 d-flex align-items-center">
											<h4 class=" p-0">${arrayTitolo[index]}</h4>
										</div>
									</div>
									<div class="row card-img m-0">
										<div class="col-12 w-100 h-100 p-0">
											<img class="${objectCover[index]} image-news" src="img/${arrayImg[index]}" alt="">
										</div>
									</div>
								</div>
								<div class="vector"></div>
							</div>
						</a>
      `
      innerContainer.innerHTML += (titoloProva);

      let cardProva = 
      `
      <a target="_blank" href="${linkNews[index]}" class="col justify-content-center">
							<div class="card-cont d-flex justify-content-center">
								<div class="card">
									<div class="row card-title m-0">
										<div class="col-12 d-flex align-items-center">
											<h4 class=" p-0">${arrayTitolo[index]}</h4>
										</div>
									</div>
									<div class="row card-img m-0">
										<div class="col-12 w-100 h-100 p-0">
											<img class="${objectCover[index]} image-news" src="img/${arrayImg[index]}" alt="">
										</div>
									</div>
								</div>
								<div class="vector"></div>
							</div>
						</a>
      `
     const cardsCont = document.querySelector(".card-cards");

      cardsCont.innerHTML += (cardProva);

  
  }
  
  const avanti = document.querySelector(".avanti");
  
  avanti.addEventListener ("click",function() {
      const itemActive = document.querySelector(".active");
      let listClasses = itemActive.classList;
      let last = false
      
      for (let i = 0; i < listClasses.length; i++) {
          if (listClasses[i] == "last") {
              last = true;
          }
      }
      
  
   if (last == false) {
       itemActive.classList.remove("active");
       setTimeout(function () {
        titleActive.classList.remove("op2");
     }, 20);
       let titleActive = itemActive.nextElementSibling;
       titleActive.classList.add("active");
       indietro.classList.remove("none"); 
       titleActive.classList.add("op2");
   }else {
       avanti.classList.add("none");
   }
  
  });
  
  const indietro = document.querySelector(".indietro");
  
  
  indietro.addEventListener ("click",function() {
      const itemActive = document.querySelector(".active");
      let listClasses = itemActive.classList;
      let last = false
      
      for (let i = 0; i < listClasses.length; i++) {
          if (listClasses[i] == "first") {
              last = true;
          }
      }
      
  
   if (last == false) {
       itemActive.classList.remove("active");
       setTimeout(function () {
        titleActive.classList.remove("op2");
     }, 20);
       let titleActive = itemActive.previousElementSibling;
       titleActive.classList.add("active"); 
       avanti.classList.remove("none");
       titleActive.classList.add("op2");

      }else {
          indietro.classList.add("none");
      }
  
  });


  // resize

  // function reportWindowSize() {
  //   if (window.innerHeight > 575) {
  //    footer.classList.remove("top-border")
  //    artistTitle.classList.remove("top-border")
  //    sponsorTitle.classList.remove("top-border")
  //    locationTitle.classList.remove("top-border")
  //    ticketTitle.classList.remove("top-border")      
  //   }

  //   if (window.innerHeight == 575) {
  //    sponsorContainer.classList.toggle("d-none");
      
  //   }
  // }

  // window.addEventListener('resize', reportWindowSize);



  // scroll news

  const scrollAvanti = document.querySelector(".scroll-avanti");
  const overflowRowNews = document.querySelector(".overflow-news");
  console.log(overflowRowNews);

scrollAvanti.addEventListener("click", function() {
  overflowRowNews.scrollBy({
    top: 0,
    left: 500,
    behavior : "smooth"
});
  console.log("bottone",overflowRowNews.offsetWidth,overflowRowNews.scrollLeft, overflowRowNews.scrollWidth);

  if (overflowRowNews.offsetWidth + overflowRowNews.scrollLeft >= overflowRowNews.scrollWidth) {
    overflowRowNews.scrollLeft = 0;
  }

})

const scrollindietro = document.querySelector(".scroll-indietro");
console.log(overflowRowNews);

scrollindietro.addEventListener("click", function() {
overflowRowNews.scrollBy({
  top: 0,
  left: -500,
  behavior : "smooth"
});

// if (overflowRowNews.scrollLeft <= 0) {
//   overflowRowNews.scrollLeft = overflowRowNews.scrollWidth;
// }


console.log("bottone",overflowRowNews.offsetWidth,overflowRowNews.scrollLeft, overflowRowNews.scrollWidth);

})


// scroll artisti

const scrollAvantiArtisti = document.querySelector(".scroll-avanti-artisti");
const overflowArtisti = document.querySelector(".artisti-overflow");
console.log(overflowArtisti);

scrollAvantiArtisti.addEventListener("click", function() {
overflowArtisti.scrollBy({
  top: 0,
  left: 500,
  behavior : "smooth"
});
console.log("bottone",overflowArtisti.offsetWidth,overflowArtisti.scrollLeft, overflowArtisti.scrollWidth);

if (overflowArtisti.offsetWidth + overflowArtisti.scrollLeft >= overflowArtisti.scrollWidth) {
  overflowArtisti.scrollLeft = 0;
}

})

const scrollIndietroArtisti = document.querySelector(".scroll-indietro-artisti");


scrollIndietroArtisti.addEventListener("click", function() {
overflowArtisti.scrollBy({
top: 0,
left: -500,
behavior : "smooth"
});

// if (overflowArtisti.scrollLeft <= 0) {
//   overflowArtisti.scrollLeft = overflowArtisti.scrollWidth;
// }


console.log("bottone",overflowArtisti.offsetWidth,overflowArtisti.scrollLeft, overflowArtisti.scrollWidth);

})