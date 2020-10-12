// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  geocodingUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places/{lon},{lat}.json?access_token=pk.eyJ1IjoibHVpc2RpYXphaXMiLCJhIjoiY2tnNWlta3ZmMHY1YzJyczNiNDJ4a3V4cyJ9.yyX8S0PzdHh-eP6Ia4N1Lw',
  forecastUrl: 'http://localhost:5001/api/CurrentWeather/{location}/{units}'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
