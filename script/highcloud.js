// AllForOne.js

// Define los vuelos disponibles para la aerolínea AllForOne
const flights = [
    {
        "title": "MEX - CUN",
        "price": 3800,
        "departure": "2023-08-05",
        "departureTime": "12:15 PM",
        "return": "2023-08-12",
        "returnTime": "6:30 PM",
        "destinationImage": "img/destination-image-5.jpg",
        "availableSeats": 35,
        "flag": "mx"
    },
    {
        "title": "SYD - AKL",
        "price": 2200,
        "departure": "2023-09-10",
        "departureTime": "11:20 AM",
        "return": "2023-09-17",
        "returnTime": "5:10 PM",
        "destinationImage": "img/destination-image-4.jpg",
        "availableSeats": 20,
        "flag": "au"
    },
    {
        "title": "LAX - HND",
        "price": 4000,
        "departure": "2023-10-15",
        "departureTime": "8:45 AM",
        "return": "2023-10-22",
        "returnTime": "2:15 PM",
        "destinationImage": "img/destination-image-3.jpg",
        "availableSeats": 15,
        "flag": "us"
    },
    {
        "title": "LHR - CDG",
        "price": 3000,
        "departure": "2023-11-20",
        "departureTime": "10:00 AM",
        "return": "2023-11-27",
        "returnTime": "4:00 PM",
        "destinationImage": "img/destination-image-1.jpg",
        "availableSeats": 25,
        "flag": "gb"
    },
    {
        "title": "NYC - LAX",
        "price": 2000,
        "departure": "2023-12-05",
        "departureTime": "9:30 AM",
        "return": "2023-12-12",
        "returnTime": "3:30 PM",
        "destinationImage": "img/destination-image-2.jpg",
        "availableSeats": 30,
        "flag": "us"
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
