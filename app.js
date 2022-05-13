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
     newsContainer.classList.toggle("d-none")
    }); 


    const artistTitle = document.querySelector(".artisti-title");


  artistTitle.addEventListener("click", function(){
     const artistContainer = document.querySelector(".artist-cards-container");
     console.log(artistContainer.classList);
     artistContainer.classList.toggle("d-none")
    }); 


    const ticketTitle = document.querySelector(".ticket-title");


  ticketTitle.addEventListener("click", function(){
     const ticketContainer = document.querySelector(".ticket-container");
     console.log(ticketContainer.classList);
     ticketContainer.classList.toggle("d-none")
    }); 


    const locationTitle = document.querySelector(".location-title");


  locationTitle.addEventListener("click", function(){
     const locationContainer = document.querySelector(".location-container");
     console.log(locationContainer.classList);
     locationContainer.classList.toggle("d-none")
    }); 


    const sponsorTitle = document.querySelector(".sponsor-title");


  sponsorTitle.addEventListener("click", function(){
     const sponsorContainer = document.querySelector(".sponsor-container");
     console.log(sponsorContainer.classList);
     sponsorContainer.classList.toggle("d-none")
    }); 


//     var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
// if (viewportWidth > 640) {
// 	console.log('Wide viewport');
// } else {
// 	console.log('Small viewport');
// }
