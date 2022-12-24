(() => {
    // Select HTML Elements
    const header = document.querySelector("header");
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");

    // Add/Remove Classes On Scroll, duration it takes to show the black bar
    window.addEventListener("scroll", () => {
        if (!hamburger.classList.contains("open")) {
            if (window.pageYOffset > 50) {
                header.classList.add("scroll");
            } else {
                header.classList.remove("scroll");
            }
        }
    });

    // Rotate Package Card

    const equipmentBtns = document.querySelectorAll(".equipment-btn");
    const flipCard = document.querySelector(".flip-card");

    const flipCardHandler = () => {
        flipCard.classList.toggle("rotate");
    };

    equipmentBtns.forEach((btn) => {
        btn.addEventListener("click", flipCardHandler);
    });

    // Event Listeners
    hamburger.addEventListener("click", toggleMobileNav);
    navList.addEventListener("click", toggleMobileNav);

    // Gallery Handler
    const galleryTabs = document.querySelectorAll(".gallery-tabs > .tab");
    const galleryTabIndicator = document.querySelector(
        ".gallery-tabs > .tab-indicator"
    );
    const galleries = document.querySelectorAll(".gallery");

    galleryTabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            galleryTabs.forEach((tab) => {
                tab.classList.remove("active");
            });

            galleries.forEach((gallery) => {
                gallery.classList.remove("active");
            });

            galleryTabIndicator.style.left = `${index * 140}px`;
            tab.classList.add("active");
            galleries[index].classList.add("active");
        });
    });

    // Previous Event Slider

    let eventSlider = new Swiper(".event-slider", {
        slidesPerView: 1,
        spaceBetween: 130,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".next-event",
            prevEl: ".prev-event",
        },
        pagination: {
            el: ".event-slider-pagination",
            clickable: true,
        },
        // breakpoints: {
        //     992: {
        //         slidesPerView: 2,
        //     },
        // },
    });
})();
