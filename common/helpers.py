import requests
import cv2
import mojimoji

from decouple import config
from reactool.settings import DEBUG
from PIL import Image
from pytesseract import pytesseract
from reactool.settings import GOOGLE_MAP_API_KEY
from common.normalize_number import get_normal_number


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


def get_sliced_lists_with_range(source, step):
  return [source[i::step] for i in range(step)]


def get_image_px_sizes(image_path):
  AWS_STORAGE_BUCKET_NAME = config('AWS_STORAGE_BUCKET_NAME')
  AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'

  context = {
    'width': None,
    'height': None,
    'channel': None
  }

  try:
    # print(f'https://{AWS_S3_CUSTOM_DOMAIN}/media/' + str(image_path), "kubilay")
    img = Image.open(requests.get(f'https://{AWS_S3_CUSTOM_DOMAIN}/media/' + str(image_path), stream=True).raw)

    if DEBUG:
      img = Image.open(requests.get("http://127.0.0.1:8000/media/" + str(image_path), stream=True).raw)

    # print(img.size, "image size")

    w, h = img.size
    context = {
      'width': w,
      'height': h,
    }
  except cv2.error as e:
    print(e, "cv error")

  return context


def calculate_ppm(image_path):
  context = {
    "ppm": None,
    "shape": None
  }
  if image_path is not None:
    processed_data = None

    try:
      img = Image.open(image_path)
      processed_data = pytesseract.image_to_string(img, config='-c tessedit_do_invert=0 --psm 11')
      context["shape"] = get_image_px_sizes(image_path)
    except ValueError:
      pass

    if processed_data:
      num_array = []
      for item in processed_data:
        string = ""
        for deform_num in mojimoji.zen_to_han(item):
          num = get_normal_number(deform_num)
          if int(num.isdigit()) or num == "," or num == ".":
            string += num

          num_array.append(string)

      string = ""
      for i in num_array:
        if "" == i:
          i = "S"

        string += i

      data_arr = string.split("S")

      extract_num = None
      for i in data_arr:
        if 2 < len(i) < 8:
          extract_num = i

      context["ppm"] = str(context["shape"]["width"] / (int(extract_num.replace(",","")) / 1000))[:6]

  return context
