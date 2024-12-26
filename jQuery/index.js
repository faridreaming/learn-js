$("h1").css("color", "red");

// $(document).keydown(function (e) {
//   $("h1").text(e.key);
// });

$("h1").on("mouseover", function () {
  $(this).css("color", "purple"); // Mengubah warna teks
  $(this).animate({ fontSize: "3em" }, 300); // Membuat teks lebih besar
});

$("h1").on("mouseout", function () {
  $(this).css("color", "red");
  $(this).animate({ fontSize: "1em" }, 300); // Membuat teks lebih besar
});
