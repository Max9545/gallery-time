Cypress.Commands.add('allStubbedAPICalls', () => {
  cy.detailsSearchAPICall()
  cy.galleriesSearchAPICall()
  // cy.photoSearchAPICall()
  cy.citySearchAPICall()
  cy.geoLocationAPICall()
  cy.visit('http://localhost:3000/')
})

Cypress.Commands.add('geoLocationAPICall', () => {
  cy.intercept(`https://www.googleapis.com/geolocation/v1/geolocate?key=${Cypress.env('API_KEY')}`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      }
    }, { fixture: 'denverGeoLocation' })
})

Cypress.Commands.add('citySearchAPICall', () => {
  cy.intercept(`https://pure-hollows-05817.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.7115392,-105.05420799999999&radius=2000&key=${Cypress.env('API_KEY')}`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      }
    }, { fixture: 'denverNearbySearch' })
})

// Cypress.Commands.add('photoSearchAPICall', () => {
//   cy.intercept(`https://pure-hollows-05817.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=576&photoreference=ATtYBwLoNDtdNcpudhiFZlfa7gZHwJ3KADFwqrKeA0EdIZ_3JHCzccWDbB-YOIlwAAdlMaEw9Yi4vFNSzOufwusWtjQGIveoHgWoe5KBjqXesmw4_4bQ6zWlCFzYdjnY-DJLio8DDlvrJweDLg3xfsDRdEvOcqUAXonulqYJFPCY82sjSDNy&key=${Cypress.env('API_KEY')}`, {
//       method: 'POST',
//       headers: {
//         "content-type": "application/json"
//       }
//     }, { fixture: 'denverImg' })
// })

Cypress.Commands.add('galleriesSearchAPICall', () => {
  cy.intercept(`https://pure-hollows-05817.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.7115392,$-105.05420799999999&radius=2000&type=art_gallery&key=${Cypress.env('API_KEY')}`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      }
    }, { fixture: 'denverGalleries' })
})

Cypress.Commands.add('detailsSearchAPICall', () => {
  cy.intercept(`https://pure-hollows-05817.herokuapp.com/https://maps.googleapis.comChIJ-3ruCiOHa4cREDKUdRveGqw/maps/api/place/details/json?place_id=ChIJ-3ruCiOHa4cREDKUdRveGqw&key=${Cypress.env('API_KEY')}`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      }
    }, { fixture: 'rockyMountainCollegeOfArt' })
})


