
// Usage: randstr("anything")

function randstr(prefix)
{
    return Math.random().toString(36).replace('0.',prefix || '');
} 

module.exports = {
    randstr
}
