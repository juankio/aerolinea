const urlParams = new URLSearchParams(window.location.search);
const startDate = urlParams.get("startDate");
const endDate = urlParams.get("endDate");
const budget = urlParams.get("budget");

$(document).ready(function () {
    $('.ui.dropdown').dropdown();

    $('#airline-dropdown').dropdown({
        onChange: function (value) {
            filterFlightsByAirline(value);
        }
    });
    const flights = [
        { airline: "AllForOne", price: 1200, departure: startDate, return: endDate },
        { airline: "HighCloud", price: 2500, departure: startDate, return: endDate },
        { airline: "AirDeluxe", price: 5000, departure: startDate, return: endDate }
    ];
    if (budget>400) {
        function filterFlightsByAirline(selectedAirline) {
            const filteredFlights = flights.filter(flight => flight.airline === selectedAirline);
            displayFlights(filteredFlights);}
        }else{
            alert("presupuesto bajo")
        }
        
    function displayFlights(flights) {
        const resultsContainer = document.getElementById("flight-results");
        resultsContainer.innerHTML = '';

        if (flights.length > 0) {
            flights.forEach(flight => {
                const flightInfo = document.createElement("div");
                flightInfo.innerHTML = `<div class="ui items">
                <!-- Repite este bloque para cada vuelo en tu lista -->
                <div class="item">
                    <div class="content">
                        <div class="header">
                            <strong>${flight.airline}</strong>
                        </div>
                        <div class="description">
                            Precio: $${flight.price} - Salida: ${flight.departure} - Regreso: ${flight.return}
                        </div>
                    </div>
                </div>
                <!-- Fin del bloque repetible -->
            </div>`;
                resultsContainer.appendChild(flightInfo);
            });
        } else {
            resultsContainer.textContent = "Lo sentimos, no se encontraron vuelos para esta aerolínea.";
        }
    }
});
