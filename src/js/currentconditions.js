import AerisWeather from '@aerisweather/javascript-sdk';
window.addEventListener('load', () => {

    let modwrapper = document.querySelector('[mod]');
    const aeris = new AerisWeather('ZsXEQGZcQQ297GNvUPbEw', 'qg4V7TY719k33od8qlRPwVFGKgKwawJVZmZPFHDI');

    aeris.api().endpoint('observations').place('minneapolis,mn').get().then((result) => {
        const place = result.data;
        const data = result.data.ob;
        //console.log(data);
        const modheader = (
            `<header class="currentconditions__header mod__header flexcol gap8">
                <span class="currentconditions__label">Current Conditions For:</span>
                <h2 class="currentconditions__headline mod__headline"><span>${place.place.name}</span>, <span>${place.place.state}</span></h2>
                <div class="currentconditions__latlong mod__latlong">
                    <small class="currentconditions__latlong__lat mod__latlong__lat">lat: ${place.loc.lat}</small>
                    <small class="currentconditions__latlong__long  mod__latlong__long">long: ${place.loc.long}</small>
                </div>
            </header>`
        )
        modwrapper.insertAdjacentHTML('afterbegin', modheader);

        const modbody = (
            `<section class="currentconditions__body grid gap32" key=${data.weather}>
                <figure class="currentconditions__icon flexcolcenter gap8">
                    <span class="currentconditions__icon__caption"><span>${data.weather}</span></span>
                    <img src="images/icons/${data.icon}" width="55" height="55" alt="" />
                </figure>
                <div class="currentconditions__section currentconditions__section__temp flexcol gap8">
                    <h3 class="currentconditions__temp__far"><span>${Math.round(data.tempF)}&deg;</span></h3>
                    <h4 class="currentconditions__temp__feelslike"><span>Feels Like: ${Math.round(data.feelslikeF)}&deg;</span></h4>
                    
                </div>
                <div class="currentconditions__section currentconditions__section__wind">
                    <span class="currentconditions__ind"><strong>Humidity:</strong> ${Math.round(data.humidity)}%</span>
                    <span class="currentconditions__ind"><strong>Wind:</strong> ${Math.round(data.windSpeedMPH)}MPH ${data.windDir}</span>
                </div>
            </section>`
        )
        modwrapper.insertAdjacentHTML('beforeend', modbody);

        const modfooter = (
            `<footer class="currentconditions__footer">
                <div class="apicall">
                    <div class="apicall__wrapper">
                    <h4>Obtain the Conditions for Minneapolis, MN</h4>
<pre>
import AerisWeather from '@aerisweather/javascript-sdk';

window.addEventListener('load', () => {
    const aeris = new AerisWeather('KIP_ID', 'KIP_SECRET');
    const request = aeris.api();
    request.endpoint('observations');
    request.place('minneapolis,mn');
    request.get().then((result) => {
        const data = result.data.ob;
        console.log(data);
    });
});
</pre>
<h4>Obtain the latest Conditions for Minneapolis, but only return the temperature in Fahrenheit.</h4>
<pre>
import AerisWeather from '@aerisweather/javascript-sdk';

window.addEventListener('load', () => {
    const aeris = new AerisWeather('KIP_ID', 'KIP_SECRET');
    const request = aeris.api();
    request.endpoint('observations');
    request.place('minneapolis,mn');
    request.fields('ob.tempF');
    request.get().then((result) => {
        const data = result.data;
        console.log(data);
    });
});
</pre>
                    </div>
                </div>
            </footer>`
        )
        modwrapper.insertAdjacentHTML('beforeend', modfooter);
    });

})