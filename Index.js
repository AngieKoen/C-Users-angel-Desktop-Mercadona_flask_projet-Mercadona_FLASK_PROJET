
const productsByCategory = {
  "Boissons": ["Eau", "Jus", "Sodas"],
  "Boulangerie": ["Pain", "Sandwich", "Pâtisseries"],
  "Charcuterie": ["Saucisson", "Jambon", "Pâté"],
  "Féculents": ["Riz", "Pâtes", "Pommes de terre"],
  "Fruits": ["Pommes", "Fraises", "Oranges"],
  "Légumes": ["Carottes", "Tomates", "Salade"],
  "Poisson": ["Saumon", "Thon", "Crevettes"],
  "Viande": ["Poulet rôti", "Steak haché", "Saucisses"]
};

const prices = {
  "Eau": 1.5,
  "Jus": 2.0,
  "Sodas": 1.8,
  "Pain": 1.0,
  "Sandwich": 1.2,
  "Pâtisseries": 2.5,
  "Saucisson": 3.5,
  "Jambon": 4.0,
  "Pâté": 2.8,
  "Riz": 2.2,
  "Pâtes": 1.8,
  "Pommes de terre": 1.5,
  "Pommes": 1.2,
  "Fraises": 1.0,
  "Oranges": 1.3,
  "Carottes": 1.0,
  "Tomates": 1.2,
  "Salade": 1.5,
  "Saumon": 5.0,
  "Thon": 4.5,
  "Crevettes": 6.0,
  "Poulet rôti": 3.0,
  "Steak haché": 8.0,
  "Saucisses": 6.5
};

function populateProducts() {
  const categorySelect = document.getElementById("categories");
  const productSelect = document.getElementById("products");
  const selectedCategory = categorySelect.value;
  productSelect.innerHTML = "<option value='' disabled selected hidden>Choisir un produit</option>";

  if (selectedCategory in productsByCategory) {
      productsByCategory[selectedCategory].forEach(product => {
          const option = document.createElement("option");
          option.value = product;
          option.textContent = product;
          productSelect.appendChild(option);
      });
  }
}

function updatePrice() {
  const productSelect = document.getElementById("products");
  const selectedProduct = productSelect.value;
  const priceInput = document.getElementById("price");

  if (selectedProduct in prices) {
      priceInput.value = prices[selectedProduct];
  } else {
      priceInput.value = "";
  }
}

function applyPromotion() {
  const productSelect = document.getElementById("products");
  const selectedProduct = productSelect.value;
  const promotionInput = document.getElementById("promotion");
  const selectedPromotion = promotionInput.value;
  const startDateInput = document.getElementById("start_date");
  const endDateInput = document.getElementById("end_date");
  const newPriceInput = document.getElementById("new-price");

  if (selectedPromotion !== "" && startDateInput.value !== "" && endDateInput.value !== "") {
      const originalPrice = parseFloat(prices[selectedProduct]);
      const discount = parseFloat(selectedPromotion) / 100;
      const discountedPrice = originalPrice * (1 - discount);
      newPriceInput.value = discountedPrice.toFixed(2);  
      prices[selectedProduct] = discountedPrice.toFixed(2);  
      alert("La promotion a été appliquée avec succès !");
  } else {
      alert("Veuillez remplir tous les champs pour appliquer la promotion.");
  }
}

function initAdminProducts() {
  const adminProductSelect = document.getElementById("products");
  adminProductSelect.innerHTML = "<option value='' disabled selected hidden>Choisir un produit</option>";
  Object.keys(prices).forEach(product => {
      const option = document.createElement("option");
      option.value = product;
      option.textContent = product;
      adminProductSelect.appendChild(option);
  });
}

window.addEventListener('DOMContentLoaded', function() {
  initAdminProducts();
});

document.querySelector("nav a[href='#Catalogue']").addEventListener("click", function() {
  document.getElementById("Administrateur").style.display = "none";
  document.getElementById("Catalogue").style.display = "block";
});

document.querySelector("nav a[href='#Administrateur']").addEventListener("click", function() {
  document.getElementById("Catalogue").style.display = "none";
  document.getElementById("Administrateur").style.display = "block";
});

window.addEventListener('DOMContentLoaded', function() {
  const adminImagesContainer = document.getElementById('Catalogue');
  const catalogueImages = document.querySelectorAll('#Catalogue .Product img');
  
  catalogueImages.forEach(function(image) {
      const clonedImage = image.cloneNode(true);
      adminImagesContainer.appendChild(clonedImage);
  });
});

