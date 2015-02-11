function hypotenuse(a,b)
{
    
    function sqr(x)
    {
        return x * x;
    }
    return Math.sqrt(sqr(a) + sqr(b));
}
alert(hypotenuse(3,4));