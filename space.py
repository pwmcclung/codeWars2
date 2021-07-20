
def valid_spacing(s):
  return s.count(' ') == len([s for s in s.split(" ") if s != ''])-1 if s != "" else True