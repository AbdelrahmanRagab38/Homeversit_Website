var sections = $("section"),
  nav = $("nav"),
  nav_height = nav.outerHeight();
$("");
$(window).on("scroll", function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function () {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top - 200 && cur_pos <= bottom - 200) {
      nav.find("a").removeClass("active");
      sections.removeClass("active");

      $(this).addClass("active");
      nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
    }
  });
});

$(".filter a").click(function (e) {
  e.preventDefault();
  var a = $(this).attr("href");
  a = a.substr(1);
  $(".gallery a").each(function () {
    if (!$(this).hasClass(a) && a != "all") $(this).addClass("hide");
    else $(this).removeClass("hide");
  });
});
// signup&login flip
function flip(event) {
  var element = document.getElementsByClassName("card");
  console.log(element[0].style.transform);
  if (element[0].className === "card") {
    if (element[0].style.transform == "rotateY(180deg)") {
      element[0].style.transform = "rotateY(0deg)";
    } else {
      element[0].style.transform = "rotateY(180deg)";
    }
  }
}
