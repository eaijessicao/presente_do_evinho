// tela de carregamento

window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const conteudo = document.getElementById("conteudo");
  
    setTimeout(function() {
      loader.style.display = "none";
      conteudo.style.display = "block";
    }, 4000);
  });
  


// modal

document.getElementById("openModalBtn").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "block";
});
document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
});

// acordeon
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    item.classList.toggle('active');
    content.style.display = item.classList.contains('active') ? 'block' : 'none';
  });
});





var slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

// slide
function showSlide(n) {
    var slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// vale

var vouchers = [
    "Parabens, você ganhou um vale beijo",
    "Parabens, você ganhou um vale chameguinho",
    "Parabens, você ganhou um vale abraço",
    "Parabens, você ganhou um vale pedido"
];

function generateVoucher() {
    var randomIndex = Math.floor(Math.random() * vouchers.length);
    var voucherText = vouchers[randomIndex];
    document.getElementById("voucher").textContent = voucherText;
}

var generateButton = document.getElementById("btn-generate");
generateButton.addEventListener("click", generateVoucher);
