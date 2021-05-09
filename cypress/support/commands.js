Cypress.Commands.add('allStubbedAPICalls', () => {
  cy.detailsSearchAPICall()
  cy.galleriesSearchAPICall()
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

Cypress.Commands.add('galleriesSearchAPICall', () => {
  cy.intercept(`https://pure-hollows-05817.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.7115392,-105.05420799999999&radius=3220&type=art_gallery&key=${Cypress.env('API_KEY')}`, {
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

Cypress.Commands.add('userCitySearch', () => {
  cy.intercept(`http://api.positionstack.com/v1/forward?access_key=816d21fe8bc88b24b44c05e76014dcfd&country=US&limit=1&query=Chicago`, {
    method: 'GET',
    headers: {
      "content-type": "application/json"
    }
  }, { fixture: 'chicagoUserSearch' })
})

Cypress.Commands.add('badCitySearch', () => {
  cy.intercept(`http://api.positionstack.com/v1/forward?access_key=${REACT_APP_POSITON_KEY}&country=US&limit=1&query=fasdfadsfassfdaa`, {
    method: 'GET',
    headers: {
      "content-type": "application/json"
    }
  }, { fixture: 'badUserSearch' })
})

