$( document ).ready(function() {
    const showOnPx = 100;
    const backToTopButton = document.querySelector(".back-to-top");
    const pageProgressBar = document.querySelector(".progress-bar");
    const navbar = document.querySelector('.navbar');
    navbar.style.display = "none";

    const scrollContainer = () => {
        return document.documentElement || document.body;
    };

    const goToTop = () => {
        document.body.scrollIntoView({
            behavior: "smooth"
        });
    };

    document.addEventListener("scroll", () => {
        console.log("Scroll Height: ", scrollContainer().scrollHeight);
        console.log("Client Height: ", scrollContainer().clientHeight);

        const scrolledPercentage =
            (scrollContainer().scrollTop /
                (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
            100;

        pageProgressBar.style.width = `${scrolledPercentage}%`;

        if (scrollContainer().scrollTop > showOnPx) {
            backToTopButton.classList.remove("hidden");
            if (scrollContainer().scrollTop > 350) {
                navbar.style.display = "block";
            }
            if (scrollContainer().scrollTop < 350) {
                navbar.style.display = "none";
            }
        } else {
            backToTopButton.classList.add("hidden");
        }
    });

    backToTopButton.addEventListener("click", goToTop);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
