function moveTen(s){
 let alpha = {'a':'k', 'b':'l', 'c':'m', 'd':'n', 'e':'o', 'f':'p', 'g':'q', 
              'h':'r', 'i':'s', 'j':'t', 'k':'u', 'l':'v','m':'w', 'n':'x', 
              'o':'y', 'p':'z', 'q':'a', 'r':'b', 's':'c', 't':'d', 'u':'e', 
              'v':'f', 'w':'g', 'x':'h', 'y':'i','z':'j'};
  s = s.toLowerCase();
  let arr = s.split('').map(x => alpha[x]).join('');
  return arr
}
  