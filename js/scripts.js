/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });

  // tooltips
  $('[data-toggle="tooltip"').tooltip();

  // skills_help
  $("#skills_help")
    .tooltip({
      title: "조금 사용해봤으며, 흥미가 있고 지속적으로 개발할 기술",
      placement: "right",
    })
    .on("click", function (e) {
      e.preventDefault();
    });

  // project modal open
  $("#project_1").on("click", function (e) {
    e.preventDefault();
    $("#project_modal_1").modal("show");
  });

  $("#project_2").on("click", function (e) {
    e.preventDefault();
    $("#project_modal_2").modal("show");
  });

  $("#project_3").on("click", function (e) {
    e.preventDefault();
    $("#project_modal_3").modal("show");
  });
})(jQuery); // End of use strict

/* typing script */
var typingBool = false;
var typingIdx = 0;
var typingTxt = $(".typing-txt").text();

typingTxt = typingTxt.split("");

if (typingBool == false) {
  typingBool = true;
  // var tyInt = setTimeout(function () {
  //   setInterval(typing, 200);
  // }, 3000);
  var tyInt = setInterval(typing, 150);
}

function typing() {
  if (typingIdx < typingTxt.length) {
    if (
      typingTxt[typingIdx] === "조" ||
      typingTxt[typingIdx] === "준" ||
      typingTxt[typingIdx] === "석"
    ) {
      typingTxt[typingIdx] =
        "<span class='text-custom' style='font-size: 2.5rem'>" +
        typingTxt[typingIdx] +
        "</span>";
    }
    $(".typing").append(typingTxt[typingIdx]);
    typingIdx++;
  } else {
    clearInterval(tyInt);
  }
}
