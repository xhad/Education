function truncate(str, num) {
 
  var len = str.length;
  
  if (len > num ) {
    var sliStr = str.slice(0,num-3);
    sliStr = sliStr + "...";
  return sliStr;
  } else {
    return str;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);