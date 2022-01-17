import requests

from reactool.settings import GOOGLE_MAP_API_KEY


def set_coordinates(model):
  coords = {
    "lat": "",
    "lng": "",
  }

  api_response = requests.get(
    'https://maps.googleapis.com/maps/api/geocode/json?address={0}&key={1}'.format(model.address, GOOGLE_MAP_API_KEY))
  api_response_dict = api_response.json()

  if api_response_dict['status'] == 'OK':
    coords["lat"] = api_response_dict['results'][0]['geometry']['location']['lat']
    coords["lng"] = api_response_dict['results'][0]['geometry']['location']['lng']

  return coords
