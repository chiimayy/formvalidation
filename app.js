
function showsuccess()
{
    var fname=document.getElementById('fullname').value;
    localStorage.setItem("textvalue",fname);
    var emailval=document.getElementById('email').value;
    localStorage.setItem("emailvalue",emailval);
    var dropval=document.getElementById('dropdown').value;
    localStorage.setItem("ddvalue",dropval);
    var feedvalue=document.getElementById('feedback').value;
    localStorage.setItem("feedback",feedvalue);
    var radiovalue=document.getElementsByName('radio-group');
    for(i=0;i<radiovalue.length;i++)
    {
        if(radiovalue[i].checked)
            var selectedvalue=radiovalue[i].value;
    }
    localStorage.setItem("selectedvalue",selectedvalue);
    return false;
}
