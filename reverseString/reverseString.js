const reverseString = function (backwards) {
    "use strict";
    var arr = backwards.split('');
    var bArr = '';
    var i;
    for(i = arr.length -1; i >= 0 ; i--) {
        bArr += arr[i];
    }
    return bArr;

}

module.exports = reverseString;
