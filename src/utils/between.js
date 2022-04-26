const between = (str, quotes) => {
  let i = str.indexOf(quotes[0]);

  if (i === -1) return "";

  str = str.substring(i + 1);

  if (quotes[1]) {
    i = str.indexOf(quotes[1]);
    if (i === -1) return "";
    str = str.substring(0, i);
  }
  
  return str;
};

module.exports = { between };
