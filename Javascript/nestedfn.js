function hypotenuse()
{
    var side1 = 3;
    var side2 = 4;
    function sqrside1()
    {
        return side1 * side1;
    }
    function sqrside2()
    {
        return side2 * side2;
    }
    return Math.sqrt(sqrside1() + sqrside2());
}
alert(hypotenuse());