
    $('#rangestart').calendar({
        type: 'date',
        endCalendar: $('#rangeend')
    });
    $('#rangeend').calendar({
        type: 'date',
        startCalendar: $('#rangestart')
    });
    $(document).ready(function () {
        $('.ui.dropdown').dropdown();
    });
    $(document).ready(function () {
        // Agregar un controlador de clic al botón "Buscar Vuelos"
        $('#search-flights').click(function () {
            // Obtener los valores de los campos de entrada
            var startLocation = $('input[name="startLocation"]').val();
            var returnLocation = $('input[name="returnLocation"]').val();
            var startDate = $('#startDate').val();
            var endDate = $('#endDate').val()
            var budget = parseInt($('#budget').val());
            console.log(startLocation, returnLocation, startDate, endDate,budget);

            // Convierte las fechas a cadenas de texto en el formato deseado
            var url = 'resultados.html' + 
            '?startLocation=' + encodeURIComponent(startLocation) +
            '&returnLocation=' + encodeURIComponent(returnLocation) +
            '&startDate=' + encodeURIComponent(startDate) +
            '&endDate=' + encodeURIComponent(endDate)+
            '&budget=' + encodeURIComponent(budget)

            // Redirigir al usuario a la página de resultados
            console.log('>:)',url)
            
            window.location.href = url;
          });
    });
// Obtén los parámetros de búsqueda desde la URL (puedes usar la API URLSearchParams).

