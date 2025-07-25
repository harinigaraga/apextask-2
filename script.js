// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});

// Dynamic Image Gallery
function addImage() {
  const input = document.getElementById("imageUrlInput");
  const url = input.value.trim();
  const gallery = document.getElementById("imageGallery");

  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Gallery Image";
    img.onclick = () => img.remove();
    gallery.appendChild(img);
    input.value = "";
  } else {
    alert("Please enter a valid image URL.");
  }
}

