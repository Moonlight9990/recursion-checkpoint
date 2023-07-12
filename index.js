function isPalindrome(word) {
  // Convert the word to lowercase to ignore case sensitivity
  word = word.toLowerCase();
  
  // Base case: an empty word or a word containing a single character is a palindrome
  if (word.length === 0 || word.length === 1) {
    return true;
  }
  
  // Compare characters at the ends of the word
  if (word[0] === word[word.length - 1]) {
    // Recursively check the rest of the word (excluding the first and last characters)
    return isPalindrome(word.slice(1, word.length - 1));
  } else {
    // Characters at the ends are different, not a palindrome
    return false;
  }
}

// Example usage:
console.log(isPalindrome("radar")); // Output: true
console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("Palindrome")); // Output: false
