function palindrome(str) {
    let s=str.replace(/[^a-zA-Z]/g,'');
    s=s.toLowerCase();
    s=s.trim();
    console.log(s);
    let s1=s.split('').reverse().join('');
   console.log(s1);
    if (s1==s) return true;
    else return false;
  }
  
  palindrome("1 eye for of 1 eye.");