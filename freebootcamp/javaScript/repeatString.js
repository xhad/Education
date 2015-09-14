function repeat(str, num) {
  
  if (num < 0) {
    return '';
  } else {
    var rs = str.repeat(num);
  return rs;
}
}
repeat('abc', -1);