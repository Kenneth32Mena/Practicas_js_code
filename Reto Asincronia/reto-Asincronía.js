function inicio() {
    setTimeout(() => {
        console.log('Mostrando datos obtenidos de la API.....');
    }, 0);
}
function obtenerDatos() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    setTimeout(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Datos obtenidos de la API:');
                console.log(data);
            })
            .catch(error => {
                console.error('Error al obtener datos de la API:', error);
            });
    }, 3000);
}
inicio();
obtenerDatos();
