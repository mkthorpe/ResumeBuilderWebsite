    //var schoolName = document.getElementById("school1").value;
    //var resume = document.getElementById("mainBody");
function submitForm()
{
    
    //var extraSpace = document.getElementById("extraSpace");
    
    //extraSpace.innerHTML = '<p>' + SchoolName() + '</p>';
    PrintForm();
    RemoveForm();
}

function PrintForm()
{
    document.getElementById("resume").style.border = "thick solid " + MyBorder();
    Name();
    PhoneEmailWebsite();
    Education();
    Jobs();
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

function Education()
{
    var educations = document.getElementsByClassName("education");
    //educations.forEach(MyEducation);
    for(var i = 0; i < educations.length; i++)
    {
        MyEducation(i);
    }
}

function MyEducation(index)
{
    Appender("resume", "h2", "Education");
    Appender("resume", "hr", "");
    //School Name
    Appender("resume", "h3", document.getElementById("school" + index).value);
    //City, State
    Appender("resume", "span", document.getElementById("city" + index).value);
    //Grad Date
    Appender("resume", "span", ("    " + document.getElementById("date" + index).value));

    Appender("resume", "br", "");
    //Degree
    Appender("resume", "span", document.getElementById("degree" + index).value);
    //Major
    Appender("resume", "span", ("    " + document.getElementById("major" + index).value));
}

    function Jobs()
    {
        var educations = document.getElementsByClassName("education");
        //educations.forEach(MyEducation);
        for(var i = 0; i < educations.length; i++)
        {
            MyJobs(i);
        }
    }

    function MyJobs(index)
    {
        Appender("resume", "h2", "Job Experience");
        Appender("resume", "hr", "");
        //Company
        Appender("resume", "h3", document.getElementById("company" + index).value);
        //Job
        Appender("resume", "span", document.getElementById("job" + index).value);
        //Date From
        Appender("resume", "span", ("    " + document.getElementById("dateFrom" + index).value));
        //Date To
        Appender("resume", "span", (", " + document.getElementById("dateTo" + index).value));
        Appender("resume", "br", "");
        //Description
        Appender("resume", "span", (document.getElementById("description" + index).value));
    }

function Appender(ID, tag, text)
{
    var resume = document.getElementById(ID);
    var tag = document.createElement(tag);
    var text = document.createTextNode(text);
    tag.appendChild(text);
    resume.appendChild(tag);
}
else
			{
				$("#educationTable tr").each(function () {
					$(this).find("td").eq(3).after($(this).find("td").eq(0));
				});
				var temp = document.getElementById('column1').className;
				document.getElementById('column1').className = document.getElementById('column2').className;
				document.getElementById('column2').className = document.getElementById('column3').className;
				document.getElementById('column3').className = document.getElementById('column4').className;
				document.getElementById('column4').className = temp;
			}
			break;
		case 'experience':
			if(toggleValue=='experience1')
			{
				$("#sectionExperience .title , #sectionExperience .time").css('display','inline-block');
				$("#sectionExperience .time").addClass('right').removeClass('tab');
				$("#sectionExperience .link").show();
			}
			else
			{
				$("#sectionExperience .title , #sectionExperience .time").css('display','block');
				$("#sectionExperience .time").removeClass('right').addClass('tab');
				$("#sectionExperience .link").hide();
			}


function onSave(){
        if(validateFields()){
            submitted = true;
            document.forms[0].submit();

        }

        return false;
}
    }
