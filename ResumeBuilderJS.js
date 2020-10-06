    //var schoolName = document.getElementById("school1").value;
    //var resume = document.getElementById("mainBody");
function submitForm()
{
    
    //var extraSpace = document.getElementById("extraSpace");
    
    //extraSpace.innerHTML = '<p>' + SchoolName() + '</p>';
    PrintForm();
    RemoveForm();
}
function RemoveForm()
{
    var bodySection = document.getElementById("mainBody");
    var mainForm = document.getElementById("entireForm");
    bodySection.removeChild(mainForm);
}

function Name()
{
    var resume = document.getElementById("resume");
    var name = document.getElementById("name").value;
    var tag = document.createElement("h1");
    var text = document.createTextNode(name);
    tag.appendChild(text);
    resume.appendChild(tag);
    //return name;
}
function Phone()
{
    var name = document.getElementById("phone").value;
    return name;
}
function Email()
{
    var email = document.getElementById("email").value;
    return email;
}
function Website()
{
    var website = document.getElementById("website").value;
    return website;
}

function MyBorder()
{
    var selectedBorder = document.getElementById("color").value;
    return selectedBorder;
}
function Photo()
{
    var photo = document.getElementById("photo").value;
    return photo;
}

function PhoneEmailWebsite()
{
    var resume = document.getElementById("resume");
    var tag = document.createElement("p");
    var text = document.createTextNode(Phone() + ' | ' + Email() + ' | ' + Website());
    tag.appendChild(text);
    resume.appendChild(tag);
}

function SchoolName()
{
    var schoolName = document.getElementById("school1").value;
    
    return schoolName;
}
function PrintForm()
{
    Name();
    PhoneEmailWebsite();
    document.getElementById("resume").style.border = "thick solid " + MyBorder();
}