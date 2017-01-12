// - Converting characters to ASCII and back.
// - Converting from decimal numbers to/from hexadecimal numbers.
// - Using the JavaScript String methods
// - Using High-Order Functions
'use strict';

// - decode: converts ASCII-Hex to string
function decode(str){
  return str
    .split(',')
    .map(h => String.fromCharCode(parseInt(h, 16)))
    .join('')
}

function decode1(str){
  var hex = str.split(',');
  var charArr = [];
  var str;

  for(var i=0; i < hex.length; i++){
    hex[i] = parseInt(hex[i], 16);
    charArr.push(String.fromCharCode(hex[i]));
  }
  return charArr.toString().replace(/,/g , "");
}


// - encode: converts string to ASCII-Hex
function encode(str) {
  return str
    .split('')
    .map(c => c.charCodeAt().toString(16))
    .join(',')
}

function encode1(str){
  var encodedArr = [];

  for (var i = 0; i < str.length; i++) {
   let encoded = str.charCodeAt(i);
   encoded = (encoded + Math.pow(16, 6)).toString(16).substr(-6);
   encoded = encoded.replace(/^0+/, '');
   encodedArr.push(encoded);
  }
 return encodedArr.toString();
}

//360 / 16 / encoded[i]
// - encodeArc: convers a string to the proper degrees of arc to point the camera.
// The first card is at 0° and they are placed around the circle in a clockwise fashion.
function encodeArc(str) {
return str
  .split('')
  .map(c => c.charCodeAt().toString(16))
  .join('')
  .split('')
  .map(d => parseInt(d, 16) * 22.5)
  .join(',')
};

function encodeArc1(str) {
  let encoded = encode(str);
  let var01 = 0;
  let var0 = 22.5;
  var arc = [];

  for (var i = 0; i < encoded.length; i++) {

    switch (encoded[i]) {
      case '0':
          arc.push(var01);
          break;
      case '1':
        arc.push(var0);
        break;
      case '2':
        arc.push(var0 * 2);
        break;
      case '3':
        arc.push(var0 * 3);
        break;
      case '4':
        arc.push(var0 * 4);
        break;
      case '5':
        arc.push(var0 * 5);
        break;
      case '6':
        arc.push(var0 * 6);
        break;
      case '7':
        arc.push(var0 * 7);
        break;
      case '8':
        arc.push(var0 * 8);
        break;
      case '9':
        arc.push(var0 * 9);
        break;
      case 'a':
        arc.push(var0 * 10);
        break;
      case 'b':
        arc.push(var0 * 11);
        break;
      case 'c':
        arc.push(var0 * 12);
        break;
      case 'd':
        arc.push(var0 * 13);
        break;
      case 'e':
        arc.push(var0 * 14);
        break;
      case 'f':
        arc.push(var0 * 15);
        break;
      }
    }
    return arc.toString();
}

module.exports = {decode,encode,encodeArc};
