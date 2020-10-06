document.getElementById('service').onclick = mainForm;
document.getElementById('press').onclick = mainForm;
document.getElementById('career').onclick = mainForm;
document.getElementById('partnership').onclick = mainForm;
document.getElementById('homeowners').onclick = mainForm;


window.onload = () => {
    document.getElementById('service').style = "color: rgb(54, 179, 201);background-color:";
    document.getElementById('homeowners').style = "color: white ;background-color: rgb(54, 179, 201)";
    document.getElementById('career').style = "color: white ;background-color: rgb(54, 179, 201)";
    document.getElementById('press').style = "color: white ;background-color: rgb(54, 179, 201)";
    document.getElementById('partnership').style = "color: white ;background-color: rgb(54, 179, 201)";

    document.getElementById('serviceForm').style.display = "block";
    document.getElementById('homeownerForm').style.display = "none";
    document.getElementById('careerForm').style.display = "none";
    document.getElementById('pressForm').style.display = "none";
    document.getElementById('partnershipForm').style.display = "none";
}

function mainForm(event) {
    event.preventDefault();
    /*   var obj = {
           "service": document.getElementById('service').style,
           "homeowners": document.getElementById('homeowners').style,
           "career": document.getElementById('career').style,
           "press": document.getElementById('press').style,
           "partnership": document.getElementById('partnership').style
       };
       console.log(document.getElementById('service').style)
       for (var i in obj) {
           if (event.target.id === i) {
               console.log(obj[event.target.id]);
               obj[event.target.id] = "block";
               obj[event.target.id] = "color: rgb(54, 179, 201);background-color: white";
           } else {
               console.log("disapproved: " + i);
               obj[i] = "none";
               obj[event.target.id] = "color: white ;background-color: rgb(54, 179, 201)";
           }
       }*/

    if (event.target.id == "service") {

        document.getElementById('service').style = "color: rgb(54, 179, 201);background-color: white";
        document.getElementById('homeowners').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('career').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('press').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('partnership').style = "color: white ;background-color: rgb(54, 179, 201)";

        document.getElementById('serviceForm').style.display = "block";
        document.getElementById('homeownerForm').style.display = "none";
        document.getElementById('careerForm').style.display = "none";
        document.getElementById('pressForm').style.display = "none";
        document.getElementById('partnershipForm').style.display = "none";
    } else if (event.target.id == "homeowners") {

        document.getElementById('service').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('homeowners').style = "color: rgb(54, 179, 201);background-color: white";
        document.getElementById('career').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('press').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('partnership').style = "color: white ;background-color: rgb(54, 179, 201)";

        document.getElementById('serviceForm').style.display = "none";
        document.getElementById('homeownerForm').style.display = "block";
        document.getElementById('careerForm').style.display = "none";
        document.getElementById('pressForm').style.display = "none";
        document.getElementById('partnershipForm').style.display = "none";
    } else if (event.target.id == "career") {

        document.getElementById('service').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('homeowners').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('career').style = "color: rgb(54, 179, 201);background-color: white";
        document.getElementById('press').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('partnership').style = "color: white ;background-color: rgb(54, 179, 201)";


        document.getElementById('serviceForm').style.display = "none";
        document.getElementById('homeownerForm').style.display = "none";
        document.getElementById('careerForm').style.display = "block";
        document.getElementById('pressForm').style.display = "none";
        document.getElementById('partnershipForm').style.display = "none";
    } else if (event.target.id == "press") {

        document.getElementById('service').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('homeowners').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('career').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('press').style = "color: rgb(54, 179, 201);background-color: white";
        document.getElementById('partnership').style = "color: white ;background-color: rgb(54, 179, 201)";




        document.getElementById('serviceForm').style.display = "none";
        document.getElementById('homeownerForm').style.display = "none";
        document.getElementById('careerForm').style.display = "none";
        document.getElementById('pressForm').style.display = "block";
        document.getElementById('partnershipForm').style.display = "none";
    } else if (event.target.id == "partnership") {

        document.getElementById('service').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('homeowners').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('career').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('press').style = "color: white ;background-color: rgb(54, 179, 201)";
        document.getElementById('partnership').style = "color: rgb(54, 179, 201);background-color: white";


        document.getElementById('serviceForm').style.display = "none";
        document.getElementById('homeownerForm').style.display = "none";
        document.getElementById('careerForm').style.display = "none";
        document.getElementById('pressForm').style.display = "none";
        document.getElementById('partnershipForm').style.display = "block";
    }
}