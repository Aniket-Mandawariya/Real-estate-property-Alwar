const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 200;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 15);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});
let selectedProduct = "";
let selectedSlug = "";

// OPEN MODAL
function openModal(productName, productSlug) {
    selectedProduct = productName;
    selectedSlug = productSlug;

    const modal = document.getElementById("propertyModal");
    modal.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("propertyModal");
    const closeBtn = document.querySelector(".close-btn");
    const contactBtn = document.querySelector(".contact-btn");
    const whatsappBtn = document.querySelector(".whatsapp-btn");
    const contactInfo = document.getElementById("contactInfo");

    if (!modal) return;

    closeBtn.onclick = function () {
        modal.style.display = "none";
        contactInfo.style.display = "none";
    };

    window.onclick = function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
            contactInfo.style.display = "none";
        }
    };

    contactBtn.onclick = function () {
        contactInfo.style.display = "block";
    };

    whatsappBtn.onclick = function () {

        // Create product-specific link
        const baseURL = window.location.origin + window.location.pathname;
        const productLink = `${baseURL}?product=${selectedSlug}`;

        const message = `Hello, I am interested in this property:

Property: ${selectedProduct}
Product Link: ${productLink}`;

        const encodedMessage = encodeURIComponent(message);

        window.open(`https://wa.me/919460006458?text=${encodedMessage}`, "_blank");
    };
});