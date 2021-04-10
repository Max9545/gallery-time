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
