// AllForOne.js

// Define los vuelos disponibles para la aerolínea AllForOne
const flights = [
    {
        "title": "Tokyo - Sydney",
        "price": 5500,
        "departure": "2023-12-03",
        "departureTime": "11:45 AM",
        "return": "2023-12-10",
        "returnTime": "4:45 PM",
        "destinationImage": "img/destination-image-4.jpg",
        "availableSeats": 20,
        "flag": "jp"
    },
    {
        "title": "Paris - Rome",
        "price": 6000,
        "departure": "2023-11-28",
        "departureTime": "8:00 AM",
        "return": "2023-12-05",
        "returnTime": "1:00 PM",
        "destinationImage": "img/destination-image-3.jpg",
        "availableSeats": 40,
        "flag": "fr"
    },
    {
        "title": "NYC - LAX",
        "price": 8000,
        "departure": "2023-12-05",
        "departureTime": "9:30 AM",
        "return": "2023-12-12",
        "returnTime": "3:30 PM",
        "destinationImage": "img/destination-image-2.jpg",
        "availableSeats": 30,
        "flag": "us"
    },
    {
        "title": "Mty - DF",
        "price": 5500,
        "departure": "2023-12-01",
        "departureTime": "10:00 AM",
        "return": "2023-12-10",
        "returnTime": "2:00 PM",
        "destinationImage": "img/destination-image-1.jpg",
        "availableSeats": 50,
        "flag": "mx"
    }
    
    
    
    
];

    // Agrega más vuelos aquí

// Función para mostrar los vuelos de AllForOne en la página
function displayAllForOneFlights() {
    const resultsContainer = document.getElementById("flight-results");

    flights.forEach(flight => {
        const flightElement = document.createElement("div");
        flightElement.classList.add("ui", "segment", "flight");
        flightElement.innerHTML = `
        <div class="flight-flag">
        <i class="${flight.flag} flag"></i>
    </div>
    <div class="flight-title">${flight.title}</div>
    <div class="flight-price">$${flight.price}</div>
    <div class="flight-info">
        <div class="flight-departure">
            <strong>Salida:</strong> ${flight.departure} - ${flight.departureTime}
        </div>
        <div class="flight-return">
            <strong>Regreso:</strong> ${flight.return} - ${flight.returnTime}
        </div>
        <div class="flight-destination-image">
            <img src="${flight.destinationImage}" alt="Destino">
        </div>
        <div class="flight-available-seats">
            <strong>Asientos disponibles:</strong> ${flight.availableSeats}
        </div>
    </div>
    <button class="ui primary button flight-buy-button">Comprar</button>
`;
    
        resultsContainer.appendChild(flightElement);
    });
}

// Llama a la función para mostrar los vuelos de AllForOne
displayAllForOneFlights();
