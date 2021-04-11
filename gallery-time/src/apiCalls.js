const geoLocateUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key='
const key = 'AIzaSyCPYBIOh7g3wHpWjUjZTqndgZpbon7B6Ag'
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
  return fetch(`https://pure-hollows-05817.herokuapp.com/${mapsUrl}/place/photo?maxwidth=700&photoreference=${photoReference}&key=${key}`,{
    method: 'POST',
    headers: {
      "content-type": "image/jpeg",
    }
  })
  .then(res => res.blob())
  .then(blob => URL.createObjectURL(blob))
}

export const galleriesSearch = (latitude, longitude) => {
  return fetch(`https://pure-hollows-05817.herokuapp.com/${mapsUrl}/place/nearbysearch/json?location=${latitude},${longitude}&radius=2000&type=art_gallery&key=${key}`, {
    method: 'POST',
    headers: {
      "content-type": "application/json",
    }
  })
  .then(res => res.json())
}
