function num_append(num)
{
    document.getElementById('calc_result').value+=num
}

function calc()
{
    document.getElementById('calc_result').value = eval(document.getElementById('calc_result').value)
}

function clear1()
{
    document.getElementById('calc_result').value = ' '
}