const palindrome = str => {

  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;



  // console.log(str);


  // str.replace(" ", "");

  // str.spice

  // let revString = str.reverse();
  // string.innerHTML = revString;

  // return revString === str;




}

console.log(palindrome("a man a plan a canal panama"))

module.exports = {
  palindrome
}
