/* Instructions
    Convert the given string to spinal-case. Spinal case is all-letters-in-lowercase-joined-by-dashes

    Hint: research regular expressions for this exercise

*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const spinal = (str) => {
    /* Only make changes below this comment */
    arr = str.split("");
    temp = [];
    flag = true;

    for (letter in arr) {
        if (arr[letter] == " ") {
            temp.push("-")
            flag = false;
            continue
        }
        if (arr[letter] == arr[letter].toUpperCase()) {
            if (letter != 0 && flag) temp.push("-");
            temp.push(arr[letter].toLowerCase());
        } else {
            temp.push(arr[letter]);
        }
        flag = true;
    }
    
    result = temp.join("");
    return result;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.spinal = spinal;