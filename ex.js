function hello()
{
    var name=document.getElementById("name").value;
if (name=="")
{
    document.getElementById("err").innerHTML="*";
    return false;
}
}