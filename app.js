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



2
3
	const mainProva = document.querySelector(".main");

  console.log(mainProva);

  

 $(mainProva).mousemove(function (e) {
    $(".stone").css({ left: e.pageX - 60, top: e.pageY - 60 });
  });


// $(mainProva).mouseout(function(){
//   console.log("ciao");
//   $(".stone").css('display', 'none' );
  
// })

// $(mainProva).mouseover(function (e) {
//   // $(".stone").css({ left: e.pageX, top: e.pageY });
//    $(".stone").css('display', 'block' );
//  });

// var $circle = $('#stone'),
//     $wrapper = $('.main'); 

// function moveCircle(e) {
//   TweenLite.to($circle, 0.3, {
//     css: {
//       left: e.pageX,
//       top: e.pageY
//     }
//   });
// }

// var flag = false;

// $($wrapper).mouseover(function(){
// flag = true;
// TweenLite.to($circle,0.4,{scale:1,autoAlpha:1})
// $($wrapper).on('mousemove', moveCircle);
// });
// $($wrapper).mouseout(function(){
//   flag = false;
//   TweenLite.to($circle,0.4,{scale:0.1,autoAlpha:0})
// });


// var app = new Vue({
//   el: '#app',
//   data: {

//   },

//   methods: {

//     activeDisplay() {
//       console.log("ciao");
//     }
//   },

//   created() {
//     console.log("ciao");
//   }
// });


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
     }else {
      iconNewsMeno.classList.add("d-none");
      iconNewsPiu.classList.remove("d-none");
     }
    
    }); 


    const artistTitle = document.querySelector(".artisti-title");


  artistTitle.addEventListener("click", function(){
     const artistContainer = document.querySelector(".artist-cards-container");
     console.log(artistContainer.classList);
     artistContainer.classList.toggle("d-none")

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

     }else {
      iconartistiMeno.classList.add("d-none");
      iconartistiPiu.classList.remove("d-none");
     }
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

     }else {
      iconticketMeno.classList.add("d-none");
      iconticketPiu.classList.remove("d-none");
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

     }else {
      iconlocationMeno.classList.add("d-none");
      iconlocationPiu.classList.remove("d-none");
     }
    }); 


    const sponsorTitle = document.querySelector(".sponsor-title");


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

     }else {
      iconsponsorMeno.classList.add("d-none");
      iconsponsorPiu.classList.remove("d-none");
     }
    }); 


    const arrayTitolo = [
      "Dicono di noi",
      "Prova 2",
      "Dicono di noi 3",
      "Test"
  ]
  
  const arrayImg = [
      "5 1.jpg",
      "4 1.jpg",
      "5.jpg",
      "5 1.jpg"
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
      <div class="col item ${classElement} justify-content-center">
							<div class="card-cont">
								<div class="card">
									<div class="row card-title m-0">
										<div class="col-12 d-flex align-items-center">
											<h4 class="m-0 p-0">${arrayTitolo[index]}</h4>
										</div>
									</div>
									<div class="row card-img m-0">
										<div class="col-12 w-100 h-100 p-0">
											<img src="img/${arrayImg[index]}" alt="">
										</div>
									</div>
								</div>
								<div class="vector"></div>
							</div>
						</div>
      `
      innerContainer.innerHTML += (titoloProva);
  
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
       let titleActive = itemActive.nextElementSibling;
       titleActive.classList.add("active");
       indietro.classList.remove("none");  
  
  
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
       let titleActive = itemActive.previousElementSibling;
       titleActive.classList.add("active"); 
       avanti.classList.remove("none");  
      }else {
          indietro.classList.add("none");
      }
  
  });

