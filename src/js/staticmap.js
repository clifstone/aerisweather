import MapRequest from '@aerisweather/javascript-sdk/dist/network/maps/MapRequest';
window.addEventListener('load', () => {
    let staticmap = document.querySelector('[staticmap]');

    let maplayers = 'flat,radar,admin';
    let mapcenter = 'minneapolis,mn';
    let mapw = 600;
    let maph = 600;
    let mapz = 5;
    let maptile = 256;
    let mapcols = Math.ceil(mapw / maptile);
    let maprows = Math.ceil(maph / maptile);

    let mapunits = mapcols * maprows;

    console.log(mapunits);

    const request = new MapRequest({
        client: {
            id: 'ZsXEQGZcQQ297GNvUPbEw',
            secret: 'qg4V7TY719k33od8qlRPwVFGKgKwawJVZmZPFHDI'
        }
    });

    request.layers(maplayers);
    request.center(mapcenter);
    request.zoom(mapz);
    request.size(mapw, maph);
    request.get().then((result) => {
        console.log(result.image);
        staticmap.insertAdjacentElement('afterbegin', result.image);
        const estunits = (
            `<h4 class="staticmap__estunits">Estimated Map Units: <span>${mapunits}</span></h4>`
        );
        staticmap.insertAdjacentHTML('afterbegin', estunits);
    });

});