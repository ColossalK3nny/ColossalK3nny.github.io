window.addEventListener("DOMContentLoaded", (event) => {
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});


var translations = {};

// Az XMLHttpReqest objektummal elkérjük a JSON fájlt
var xhr = new XMLHttpRequest();
xhr.open('GET', 'translations.json', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    translations = JSON.parse(xhr.responseText);
  }
};
xhr.send();
//megváltoztatjuk a nyelvet
var langBtn = document.getElementById('lang-btn');
langBtn.addEventListener('click', function() {
  var lang = langBtn.textContent === translations.button.en ? 'hu' : 'en';
  langBtn.textContent = translations.button[lang];
 
  // Az összes meghatározott elem kiválasztása adata-lang attribútum alapján
  var translatableElems = document.querySelectorAll('[data-lang]');
  for (var i = 0; i < translatableElems.length; i++) {
    var key = translatableElems[i].getAttribute('data-lang');
    translatableElems[i].textContent = translations[key][lang];
  }
});
//sötét mód
const darkModeToggle = document.querySelector('#dark-mode-toggle'); 
const body = document.querySelector('body');

// alapértelmezett beállítás a local storage-ból lekérdezve
const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// sötét mód bekapcsolása vagy kikapcsolása és a local storage-ba mentés
const toggleDarkMode = () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('isDarkMode', body.classList.contains('dark-mode'));
}

// sötét mód bekapcsolása vagy kikapcsolása a gombra kattintással
darkModeToggle.addEventListener('click', toggleDarkMode);

// ha a local storage-ban már korábban be volt kapcsolva a sötét mód, bekapcsoljuk
if (isDarkMode) {
  body.classList.add('dark-mode');
}
//cookie
const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  //if cookie contains codinglab it will be returned and below of this code will not run
  if (document.cookie.includes("accepted")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieConsent= accepted; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//executeCodes function will be called on webpage load
window.addEventListener("load", executeCodes);

// A gomb, amelyre kattintva megjelenik a modális ablak
var modalBtn = document.getElementById("modalBtn");

// A modális ablak
var modal = document.getElementById("myModal");

// A bezáró gomb az ablakban
var closeBtn = document.getElementsByClassName("close")[0];

// Amikor a gombra kattintanak, megjelenik a modális ablak
modalBtn.onclick = function() {
  modal.style.display = "block";
}

// Amikor a bezáró gombra kattintanak, eltűnik a modális ablak
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Amikor a felhasználó a modal ablakon kívülre kattint, eltűnik a modális ablak
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
