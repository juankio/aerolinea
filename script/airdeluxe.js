// AllForOne.js

// Define los vuelos disponibles para la aerolínea AllForOne
const flights = [
    {
        "title": "LAX - LAS",
        "price": 450,
        "departure": "2023-12-10",
        "departureTime": "11:00 AM",
        "return": "2023-12-15",
        "returnTime": "3:30 PM",
        "destinationImage": "img/destination-image-5.jpg",
        "availableSeats": 25,
        "flag": "us"
    },
    {
        "title": "BCN - MAD",
        "price": 650,
        "departure": "2023-11-18",
        "departureTime": "9:30 AM",
        "return": "2023-11-25",
        "returnTime": "2:30 PM",
        "destinationImage": "img/destination-image-6.jpg",
        "availableSeats": 30,
        "flag": "es"
    },
    {
        "title": "CUN - MIA",
        "price": 900,
        "departure": "2023-10-05",
        "departureTime": "10:15 AM",
        "return": "2023-10-12",
        "returnTime": "4:00 PM",
        "destinationImage": "img/destination-image-7.jpg",
        "availableSeats": 35,
        "flag": "mx"
    },
    {
        "title": "DEL - BOM",
        "price": 1100,
        "departure": "2023-09-15",
        "departureTime": "8:00 AM",
        "return": "2023-09-22",
        "returnTime": "1:45 PM",
        "destinationImage": "img/destination-image-8.jpg",
        "availableSeats": 40,
        "flag": "in"
    },
    {
        "title": "SYD - AKL",
        "price": 1400,
        "departure": "2023-08-25",
        "departureTime": "11:30 AM",
        "return": "2023-09-01",
        "returnTime": "4:30 PM",
        "destinationImage": "img/destination-image-9.jpg",
        "availableSeats": 45,
        "flag": "au"
    }
    
    // Agrega más datos de vuelo aquí
];

    // Agrega más vuelos aquí

// Función para mostrar los vuelos de AllForOne en la página
function displayAllForOneFlights() {
    const resultsContainer = document.getElementById("flight-results");

    flights.forEach(flight => {
        const flightElement = document.createElement("div");
        flightElement.classList.add("ui", "segment", "flight");
        flightElement.innerHTML = `
        <div class="ui segment">
    <strong>${flight.airline}</strong> - Precio: $${flight.price} - Salida: ${flight.departure} - Regreso: ${flight.return}
    <button class="ui primary button flight-buy-button"><a href="compra.html">Comprar</a>
    </button>
</div>
`;
    
        resultsContainer.appendChild(flightElement);
    });
}

// Llama a la función para mostrar los vuelos de AllForOne
displayAllForOneFlights();
