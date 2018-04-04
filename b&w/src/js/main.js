// // // МОЖНО ОТКРЫТЬ ВСЕ СРАЗУ

var title = document.getElementsByClassName('sidebar__elem');
$(function() {
    $(".sidebar__elem").click(function() {
        $(".sidebar__elem_dropped").not($(this)).removeClass("sidebar__elem_dropped");
        $(".sidebar__elem").addClass("sidebar__elem");
        $(this).toggleClass("sidebar__elem_dropped");
    })
});

$(function() {
    $(".nav-btn-white").click(function() {
        $(".page").toggleClass("white-active");
    })
});

$(function() {
    $(".nav-btn").click(function() {
        $(".page").toggleClass("active");
    })
});



// function nav() {
//   let btn = document.querySelector('.nav-btn');
//   let holder = document.querySelector('.page');
  
//     btn.addEventListener('click', (e) => {
//       e.preventDefault();
//       holder.classList.toggle('.active');
//     })
// };

// $(function() {
//     $(".nav-btn-white").click(function() {
//         if ($(".page").hasClass("active")) {
//           $(".page").removeClass("active");
//           $(".page").addClass("white-active");
//         }
//     })
// });






$(document).ready(() => {
  App.init();
});

// var title = document.getElementsByClassName('sidebar__elem');
//     // var content = document.getElementsByClassName('sidebar__drop');
//     for (var i = 0; i < title.length; i++) {
//       title[i].addEventListener('click', function() {
//           for(var i = 0; i < title.length; i++) {
//             if (!this === title[i]) {
//                     title[i].classList.remove('sidebar__elem_dropped');
//             }
//           }
//         if(!(this.classList.contains('sidebar__elem_dropped'))) {
//           this.classList.add('sidebar__elem_dropped');
//         } else {
//           this.classList.remove('sidebar__elem_dropped');
//         }
//       })
//     }

// ОТКРЫВАЕТ ВСЕ СРАЗУ
// var menuElem = document.getElementById('list');
//     var titleElem = menuElem.querySelector('.sidebar__elem');

//     titleElem.onclick = function() {
//       menuElem.classList.toggle('sidebar__elem_dropped');
//     };




// $(function navigation_white(){
//     $(".nav-btn-white").click(function() {      
//         $(this).toggleClass("nav-btn-white_active");
//     })
//     $(".nav-btn-white").click(function() {      
//         $(".nav-white__list").toggleClass("nav-white__list_active");
//     })
// });



