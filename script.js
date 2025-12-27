console.log("Real Estate Website Loaded");

const properties = [
  {
    price: "Rs. 45,000,000",
    location: "Colombo",
    type: "House",
    details: "3 Beds • 2 Baths",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
  },
  {
    price: "Rs. 25,000,000",
    location: "Kandy",
    type: "Apartment",
    details: "2 Beds • 2 Baths",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    price: "Rs. 18,000,000",
    location: "Galle",
    type: "Land",
    details: "10 Perches",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c"
  }
];

const grid = document.getElementById("propertyGrid");

function displayProperties(list) {
  grid.innerHTML = "";
  list.forEach(property => {
    grid.innerHTML += `
      <div class="property-card">
        <img src="${property.image}" />
        <div class="card-body">
          <h3>${property.price}</h3>
          <p>${property.type} – ${property.location}</p>
          <span>${property.details}</span>
        </div>
      </div>
    `;
  });
}

function filterProperties() {
  const location = document.getElementById("locationFilter").value;
  const type = document.getElementById("typeFilter").value;

  const filtered = properties.filter(p => {
    return (
      (location === "" || p.location === location) &&
      (type === "" || p.type === type)
    );
  });

  displayProperties(filtered);
}

displayProperties(properties);
