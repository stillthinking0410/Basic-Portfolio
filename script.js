document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("recommendationForm");
    const modal = document.getElementById("dialog");
    const closeBtn = document.querySelector(".close");
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 


        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;

      
        const newRecommendation = document.createElement("div");
        newRecommendation.classList.add("recommendation");


        let content = `<p><span>"</span> ${message}`;
        if (name) {
            content += ` - ${name}`;
        }
        content += ` <span>"</span></p>`;

        newRecommendation.innerHTML = content;

        document.querySelector(".recommendation-container").appendChild(newRecommendation);

        document.getElementById("recommendationForm").reset();


        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
