home = document.getElementById("home");
education= document.getElementById("education");
about = document.getElementById("about");
contact = document.getElementById("contact");
project = document.getElementById("project");
project1 = document.getElementById("project1");
project2 = document.getElementById("project2");
project3 = document.getElementById("project3");
footer = document.getElementById("footer");
nav = document.getElementById("nav");

function remove(){
    home.style.display = 'none'
    education.style.display = 'none'
    about.style.display = 'none'
    contact.style.display = 'none'
    project.style.display = 'none'
    footer.style.display = 'none'
    nav.style.display = 'none'
}

function displayProject(P){
    var project1 = document.getElementById("project1");
    var project2 = document.getElementById("project2");
    var project3 = document.getElementById("project3");
    project1.style.display = 'none';
    project2.style.display = 'none';
    project3.style.display = 'none';
    P.style.display = 'block'
}


function goBack() {
    // history.go(-1);
    window.history.back();
}


(function ($) {
    "use strict";

    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();


    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text #typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });



    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);



let langs = document.getElementById("langs"),
    link = document.querySelectorAll("a"),
    typedText = document.getElementById("typed-text"),
    im = document.getElementById("im"),
    btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2"),
    btn3 = document.getElementById("btn3"),
    btn4 = document.getElementById("sendMessageButton"),
    title1 = document.getElementById("title1"),
    title101 = document.getElementById("title101"),
    title102 = document.getElementById("title102"),
    title103 = document.getElementById("title103"),
    title2 = document.getElementById("title2"),
    school = document.getElementById("school"),
    institute1 = document.getElementById("institute1"),
    institute2 = document.getElementById("institute2"),
    p101 = document.getElementById("p101"),
    p102 = document.getElementById("p102"),
    p103 = document.getElementById("p103"),
    p2 = document.getElementById("p2"),
    p3 = document.getElementById("p3"),
    p4 = document.getElementById("p4");
    // Name = document.getElementById("Name").placeholder,
    // email = document.getElementById("email").placeholder,
    // subject = document.getElementById("subject").placeholder,
    // message = document.getElementById("message").placeholder;

link.forEach(el => {
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        let attr = el.getAttribute("language")

        im.textContent = data[attr].im
        // typedText.textContent = data[attr].typedText
        btn1.textContent = data[attr].btn1
        btn2.textContent = data[attr].btn2
        btn3.textContent = data[attr].btn3
        btn4.textContent = data[attr].btn4
        title1.textContent = data[attr].title1
        title101.textContent = data[attr].title101
        title102.textContent = data[attr].title102
        title103.textContent = data[attr].title103
        title2.textContent = data[attr].title2
        school.textContent = data[attr].school
        institute1.textContent = data[attr].institute1
        institute2.textContent = data[attr].institute2
        p101.textContent = data[attr].p101
        p102.textContent = data[attr].p102
        p103.textContent = data[attr].p103
        p2.textContent = data[attr].p2
        p3.textContent = data[attr].p3
        p4.textContent = data[attr].p4
        Name.textContent = data[attr].Name
        email.textContent = data[attr].email
        subject.textContent = data[attr].subject
        message.textContent = data[attr].message
    })
})

let data = {
    german: {
        typedText: "Web Designer, Web Entwickler, Full Stack Entwickler",
        im: " Ich bin",
        btn1: "Mich Einstellen",
        btn2: "Mich Kontaktieren",
        title1: "Schulbildung",
        title101: "Allgemeine Wissenschaften Abitur",
        title102: "Studienkolleg Richtung Technik",
        title103: "Full Stack Entwicklung",
        title2: "Fähigkeiten",
        school: "Jamil Al Rawwas, Beirut, Libanon",
        institute1: "ISB, Braunschweig, Deutschland",
        institute2: "Roni Rizk Institue, Beirut, Libanon",
        p101: "Ich habe mich in meinem Abiturstudium auf Mathematik und Physik konzentriert.",
        p102: "Ich habe in diesem Institut etwas Physik, Mathematik und Chemie gelernt. Sowie die deutsche Sprache (B2).",
        p103: "Ich habe mich entschieden, Full-Stack-Entwicklung online von zu Hause aus zu lernen, anstatt zu einem deutschen Institut zu gehen, damit ich den ganzen Tag arbeiten und heute Abend lernen kann. Dieses Bootcamp ist in 8 Teile à 1,5 Monate unterteilt. Im ersten Teil habe ich Html, CSS, Javascript, NodeJs, den Umgang mit Git und Github und auch den Umgang mit Apis gelernt. Im zweiten Teil habe ich Typoskript und Winkel gelernt. Und jetzt lerne ich Database und MongoDB.",
        p2: "Ich habe diese Fähigkeiten und Programmiersprachen in einem Full-Stack Development Bootcamp, YouTube, W3Schools, Freecodecamp usw. gelernt",
        p3: "In diesem Javascript-Projekt haben die Benutzer nur Zugriff auf die Wetter-App. Hier kann er den Namen der Stadt eingeben, um Temperatur, Windgeschwindigkeit und Wetterbedingungen übersichtlich auf dem Bildschirm anzuzeigen.",
        p4: "In diesem Angular-Projekt kann der Benutzer den gewünschten Spielernamen in die Suchleiste oben eingeben oder ihn aus dem Dropdown-Menü daneben auswählen, um die Fifa 2023-Bewertungen des Spielers anzuzeigen. Wird bald aktualisiert!!",
        btn3: "Mehr Erfahren",
        Name: "Vor- und Nachname",
        emai: "Email",
        subject: "Betreff",
        message: "Nachricht",
        btn4: "Nachricht Senden"
    },
    english: {
        typedText: "Web Designer, Web Developer, Full Stack Developer",
        im: "I'm",
        btn1: "Hire Me",
        btn2: "contact",
        title1: "Education",
        title101: "High School",
        title102: "Freshman",
        title103: "Full Stack Development",
        title2: "My Skills",
        school: "Jamil Al Rawwas, Beirut, Lebanon",
        institute1: "ISB, Brunswick, Germany",
        institute2: "Roni Rizk Institue, Beirut, Lebanon",
        p101: "I focused of mathmatics and physics in my high-school study.",
        p102: "I didn't complete my freshman deu to changing my plan of studieng in the University.",
        p103: "I choosed to learn full stack development online from home instead of going to german institue so that i can work the whole day and study tonight. This bootcamp is devided to 8 parts 1.5 months each. In the first part i learned Html, CSS, Javascript, NodeJs, dealing with git and github, and dealing with Apis as well. In the second part i learned Typescript and angular. And now im learning Database and MongoDB.",
        p2: "I learned this skills and programming-languages in a Full-Stack Development bootcamp, youtube, W3Schools, freecodecamp etc..",
        p3: "In this javascript project the user have access only for the weather App. Where he can type the city name to display the temperature, wind-speed, and weather condition in an organized way at the screen.",
        p4: "In this angular project the user can type the player's name he wants in the search bar above or choose him from the dropdown aside to see the Fifa 2023 ratings of the player. Will be updated soon!!",
        btn3: "Learn More",
        Name: "Your Name",
        emai: "Your Email",
        subject: "Subject",
        message: "Message",
        btn4: "Send Message"

    }
}