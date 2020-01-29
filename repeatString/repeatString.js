const repeatString = function(repeat, freq) {
    if(freq < 0)
        return 'ERROR'
    holder = '';
    for(i = 0; i < freq; i++)
    {
        holder += repeat;
    }
    return holder;
}

module.exports = repeatString
