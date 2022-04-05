def get_normal_number(deformated_num):
  if deformated_num == "①":
    return "1"
  elif deformated_num == "②":
    return "2"
  elif deformated_num == "③":
    return "3"
  elif deformated_num == "④":
    return "4"
  elif deformated_num == "⑤":
    return "5"
  elif deformated_num == "⑥":
    return "6"
  elif deformated_num == "⑦":
    return "7"
  elif deformated_num == "⑧":
    return "8"
  elif deformated_num == "⑨":
    return "9"
  elif deformated_num == "⑩":
    return "10"
  elif deformated_num == "0":
    return "0"
  elif deformated_num == ",":
    return ","
  elif deformated_num == ".":
    return "."
  else:
    return deformated_num
