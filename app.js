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
    // $(".stone").css('display', 'block' );
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
