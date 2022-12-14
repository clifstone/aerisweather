import AerisWeather from '@aerisweather/javascript-sdk';
window.addEventListener('load', () => {
    let interactivemap = document.querySelector('[interactivemap]');

    let maplayers = 'alerts,temperatures,radar';
    let mapcenter = {
        lat: 39.099728,
        lon: -94.578568
    }
    let mapw = 600;
    let maph = 600;
    let mapz = 4;
    let maptile = 256;
    let mapcols = Math.ceil(mapw / maptile);
    let maprows = Math.ceil(maph / maptile);

    let mapunits = mapcols * maprows;

    const aeris = new AerisWeather('ZsXEQGZcQQ297GNvUPbEw', 'qg4V7TY719k33od8qlRPwVFGKgKwawJVZmZPFHDI');

    aeris.views().then((views) => {
        const map = new views.Map(interactivemap, {
            map: {
                strategy: 'leaflet',
                layers: {
                    data: maplayers
                },
                center: mapcenter,
                zoom: mapz,
                size: {
                    width: mapw,
                    height: maph
                },
                timeline: {
                    from: -2 * 3600,
                    to: 0
                }
            }
        });
    });

    const estunits = (
        `<h4 class="staticmap__estunits">Estimated Map Units: <span>${mapunits}</span></h4>`
    );

    document.querySelector('.interactivemap__wrapper').insertAdjacentHTML('afterbegin', estunits);

});