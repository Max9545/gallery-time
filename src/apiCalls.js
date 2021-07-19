const geoLocateUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key='
const key = process.env.REACT_APP_API_KEY
const mapsUrl = 'https://maps.googleapis.com/maps/api/'

export const geoLocatePost = () => {
  return fetch(`${geoLocateUrl}${key}`, {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    }
  })
  .then(res => res.json())
}

export const citySearch = (latitude, longitude) => {
  return fetch(`https://pure-hollows-05817.herokuapp.com/${mapsUrl}/place/nearbysearch/json?location=${latitude},${longitude}&radius=2000&key=${key}`, {
    method: 'POST',
    headers: {
      "content-type": "application/json",
    }
  })
  .then(res => res.json())
}

export const photoSearch = (photoReference) => {
  return fetch(`https://pure-hollows-05817.herokuapp.com/${mapsUrl}/place/photo?maxwidth=1600&photoreference=${photoReference}&key=${key}`,{
    method: 'POST',
    headers: {
      "content-type": "image/jpeg",
    }
  })
  .then(res => res.blob())
  .then(blob => URL.createObjectURL(blob))
}

export const galleriesSearch = (latitude, longitude) => {
  return fetch(`https://pure-hollows-05817.herokuapp.com/${mapsUrl}/place/nearbysearch/json?location=${latitude},${longitude}&radius=3220&type=art_gallery&key=${key}`, {
    method: 'POST',
    headers: {
      "content-type": "application/json",
    }
  })
  .then(res => res.json())
}

export const detailsSearch = (placeId) => {
  
  return fetch(`https://pure-hollows-05817.herokuapp.com/${mapsUrl}/place/details/json?place_id=${placeId}&key=${key}`, {
    method: 'POST',
    header: {
      "content-type": "application/json",
    }
  })
  .then(res => res.json())
}

export const selectLocation = (city) => {
  const formattedCity = city.toLowerCase()
  return fetch(`https://pure-hollows-05817.herokuapp.com/http://api.positionstack.com/v1/forward?access_key=816d21fe8bc88b24b44c05e76014dcfd&country=US&limit=1&query=${formattedCity}`)
  .then((res) => res.json())
}