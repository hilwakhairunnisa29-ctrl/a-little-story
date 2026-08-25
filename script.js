document.addEventListener("DOMContentLoaded", function () {

  let currentPage = 1;
  const totalPages = 20;

  const pages = document.querySelectorAll(".page");
  const progressBar = document.getElementById("progressBar");
  const music = document.getElementById("music");
  const particles = document.getElementById("particles");

  /* =========================
     SPARKLES
  ========================= */

  if (particles) {

    for (let i = 0; i < 30; i++) {

      const sparkle = document.createElement("div");

      sparkle.className = "sparkle";

      sparkle.style.left =
        Math.random() * 100 + "%";

      sparkle.style.top =
        Math.random() * 100 + "%";

      sparkle.style.animationDelay =
        Math.random() * 4 + "s";

      particles.appendChild(sparkle);
    }
  }


  /* =========================
     UPDATE PROGRESS
  ========================= */

  function updateProgress() {

    if (!progressBar) return;

    const percent =
      (currentPage / totalPages) * 100;

    progressBar.style.width =
      percent + "%";
  }


  /* =========================
     NEXT PAGE
  ========================= */

  window.nextPage = function () {

    if (currentPage >= totalPages) return;

    pages[currentPage - 1]
      .classList.remove("active");

    currentPage++;

    pages[currentPage - 1]
      .classList.add("active");

    updateProgress();

  };


  /* =========================
     PREVIOUS PAGE
  ========================= */

  window.previousPage = function () {

    if (currentPage <= 1) return;

    pages[currentPage - 1]
      .classList.remove("active");

    currentPage--;

    pages[currentPage - 1]
      .classList.add("active");

    updateProgress();

  };


  /* =========================
     START
  ========================= */

  window.startJourney = function () {

    if (music) {

      music.volume = 0.45;

      music.play()
        .catch(function () {
          console.log(
            "Browser memblokir autoplay."
          );
        });

    }

    window.nextPage();

  };


  /* =========================
     THREE CARDS
  ========================= */

  window.openCard = function (card) {

    const cards =
      document.querySelectorAll(
        ".memory-card"
      );

    cards.forEach(function (item) {

      if (item !== card) {
        item.classList.remove("open");
      }

    });

    card.classList.toggle("open");

  };


  /* =========================
     THINGS
  ========================= */

  window.showThing = function (type) {

    const text =
      document.getElementById(
        "thingText"
      );

    if (!text) return;


    if (type === "music") {

      text.innerHTML =
        "🎧 Sama-sama suka dengar lagu. Kadang satu lagu aja cukup buat bikin mood berubah.";

    }


    else if (type === "book") {

      text.innerHTML =
        "📖 Sama-sama suka cerita. Bedanya, aku kadang lebih suka cerita random ke abang 😭";

    }


    else if (type === "travel") {

      text.innerHTML =
        "✈︎ Sama-sama suka jalan-jalan. Jadi kali ini kita bikin perjalanan kecil sendiri.";

    }

  };


  /* =========================
     LETTER
  ========================= */

  window.openLetter = function (envelope) {

    envelope.classList.toggle("open");

  };


  /* =========================
     CLINGY BUTTON
  ========================= */

  let clingCount = 0;

  window.clingMe = function () {

    const button =
      document.getElementById(
        "clingButton"
      );

    const message =
      document.getElementById(
        "clingMessage"
      );

    if (!button || !message) return;

    clingCount++;


    const messages = [

      "ehhh jangan pergi dulu 😭",

      "abanggg tungguu...",

      "sebentar ajaa 🥺",

      "aku belum selesai ngomong 😭",

      "susah kali dipanggil 😭",

      "yaudah sini lanjut ♡"

    ];


    const index =
      Math.min(
        clingCount - 1,
        messages.length - 1
      );


    message.innerText =
      messages[index];


    if (clingCount < 5) {

      const x =
        Math.random() * 100 - 50;

      const y =
        Math.random() * 60 - 30;

      button.style.transform =
        `translate(${x}px, ${y}px)`;

    }


    else {

      button.style.transform =
        "translate(0,0)";

      button.innerText =
        "YA UDAH LANJUT 😭";

      button.onclick =
        window.nextPage;

    }

  };


  /* =========================
     HEART GAME
  ========================= */

  const heartGame =
    document.getElementById(
      "heartGame"
    );

  const heartCounter =
    document.getElementById(
      "heartCounter"
    );

  let heartsCaught = 0;


  function createHeart() {

    if (!heartGame) return;


    const heart =
      document.createElement("span");

    heart.className =
      "game-heart";

    heart.innerHTML =
      Math.random() > 0.5
        ? "♡"
        : "♥";


    heart.style.left =
      Math.random() * 90 + "%";

    heart.style.top =
      Math.random() * 85 + "%";


    heart.addEventListener(
      "click",
      function () {

        heartsCaught++;

        heart.remove();


        if (heartCounter) {

          heartCounter.innerText =
            heartsCaught + " / 7";

        }


        if (heartsCaught >= 7) {

          if (heartCounter) {

            heartCounter.innerText =
              "semuanya ketangkap ♡";

          }

        }

      }
    );


    heartGame.appendChild(
      heart
    );

  }


  if (heartGame) {

    for (let i = 0; i < 7; i++) {

      setTimeout(
        createHeart,
        i * 250
      );

    }

  }


  /* =========================
     BUBBLES
  ========================= */

  let poppedBubbles = 0;

  window.popBubble = function (button) {

    if (
      button.classList.contains(
        "popped"
      )
    ) {
      return;
    }


    button.classList.add(
      "popped"
    );

    poppedBubbles++;


    const message =
      document.getElementById(
        "bubbleMessage"
      );


    const texts = [

      "musik 🎧",

      "cerita 📖",

      "perjalanan ✈︎",

      "waktu ⏳",

      "ngobrol 💬"

    ];


    if (message) {

      message.innerText =
        texts[
          Math.min(
            poppedBubbles - 1,
            texts.length - 1
          )
        ];

    }

  };


  /* =========================
     BOOK
  ========================= */

  let bookPage = 0;


  window.turnPage = function () {

    const bookPages =
      document.querySelectorAll(
        ".book-page"
      );


    if (!bookPages.length) return;


    bookPages[bookPage]
      .classList.remove("active");


    bookPage++;


    if (
      bookPage >= bookPages.length
    ) {

      bookPage = 0;

    }


    bookPages[bookPage]
      .classList.add("active");

  };


  /* =========================
     QUIZ
  ========================= */

  window.quiz = function (correct) {

    const result =
      document.getElementById(
        "quizResult"
      );


    if (!result) return;


    if (correct) {

      result.innerText =
        "hehe iyaaa 😭 ternyata abang lumayan kenal.";

    }

    else {

      result.innerText =
        "salahhh 😭 coba kenal aku lagi.";

    }

  };


  /* =========================
     DESTINATION
  ========================= */

  window.choosePlace = function (place) {

    const result =
      document.getElementById(
        "placeResult"
      );


    if (!result) return;


    const answers = {

      sea:
        "🌊 Duduk dekat laut, ngobrol pelan-pelan.",

      mountain:
        "🏔️ Cari pemandangan bagus sambil menikmati dinginnya udara.",

      city:
        "🌃 Jalan-jalan, cari makanan, terus ngobrol sampai lupa waktu.",

      quiet:
        "📖 Tempat tenang, baca cerita masing-masing tapi tetap bareng."

    };


    result.innerText =
      answers[place] || "";

  };


  /* =========================
     FINAL CARD
  ========================= */

  window.openFinalCard =
    function (card) {

      const text =
        document.getElementById(
          "finalText"
        );


      if (text) {

        text.innerHTML =
          "Makasih sudah tetap ada ♡";

      }


      card.style.background =
        "linear-gradient(135deg,#f8dce6,#ffffff)";

    };


  /* =========================
     CLOSE
  ========================= */

  window.closeJourney =
    function () {

      pages[currentPage - 1]
        .classList.remove("active");


      const closePage =
        document.getElementById(
          "closePage"
        );


      if (closePage) {

        closePage.classList.add(
          "active"
        );

      }


      if (progressBar) {

        progressBar.style.width =
          "100%";

      }

    };


  /* =========================
     FLOATING HEARTS
  ========================= */

  function floatingHeart() {

    const heart =
      document.createElement("div");


    heart.innerHTML =
      Math.random() > 0.5
        ? "♡"
        : "♥";


    heart.style.position =
      "fixed";

    heart.style.left =
      Math.random() * 100 + "%";

    heart.style.bottom =
      "-20px";

    heart.style.fontSize =
      12 + Math.random() * 15 + "px";

    heart.style.color =
      Math.random() > 0.5
        ? "#e9a8bd"
        : "#777";

    heart.style.pointerEvents =
      "none";

    heart.style.zIndex =
      "15";


    document.body.appendChild(
      heart
    );


    const animation =
      heart.animate(

        [
          {
            transform:
              "translateY(0)",
            opacity: 0
          },

          {
            transform:
              "translateY(-40vh)",
            opacity: .7
          },

          {
            transform:
              "translateY(-100vh)",
            opacity: 0
          }
        ],

        {
          duration:
            5000 +
            Math.random() * 3000,

          easing: "ease-out"
        }

      );


    animation.onfinish =
      function () {
        heart.remove();
      };

  }


  setInterval(
    floatingHeart,
    1800
  );


  /* =========================
     SWIPE HP
  ========================= */

  let touchStartX = 0;


  document.addEventListener(
    "touchstart",
    function (event) {

      touchStartX =
        event.changedTouches[0]
          .screenX;

    },
    {
      passive: true
    }
  );


  document.addEventListener(
    "touchend",
    function (event) {

      const touchEndX =
        event.changedTouches[0]
          .screenX;


      const distance =
        touchEndX - touchStartX;


      if (distance < -70) {

        window.nextPage();

      }


      else if (distance > 70) {

        window.previousPage();

      }

    },
    {
      passive: true
    }
  );


  /* =========================
     KEYBOARD
  ========================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key ===
        "ArrowRight"
      ) {

        window.nextPage();

      }


      if (
        event.key ===
        "ArrowLeft"
      ) {

        window.previousPage();

      }

    }
  );


  /* =========================
     START
  ========================= */

  updateProgress();

});