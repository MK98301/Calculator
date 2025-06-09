let input = document.getElementById("input");

function append_to_display(item)
{
    input.value += item;
}

function clear_display()
{
    input.value = " ";
}

function calculate()
{
    try
    {
       
        input.value = eval(input.value);
        
    }
    catch(error)
    {
        input.value = "Error";
    }
    
}

