/**
 * @param {string} text
 */
function skipFirstCharacter(text) {
    return text.substring(1, text.length);
}

// Sample usage - do not modify
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"
