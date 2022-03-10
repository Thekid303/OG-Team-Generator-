let role, name, id, email, office, github, school, job;

Team = (teamOg) => {
    const htmlInside = members(teamOg);
    const htmlFull =
        `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css" />


    <title>Team Generator</title>
</head>
<header>
    <nav class="navbar" id="navbar">
        <div class="navbar-brand" ">Team Generator</div>
        </nav>
</header>







<body>
    <div class=" container">
            <div class="row justify-content-center">
                ${htmlInside}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
        </script>
        </body>

</html>`;
    return htmlFull;
}
// test
members = (teamOg) => {
    let htmlPart = '';
    teamOg.forEach(n => {
        role = n.role;
        name = n.name;
        id = n.id;
        email = n.email
        if (n.role === 'Manager') {
            office = n.officeNumber;
            // icon = "fas fa-mug-hot"; 
            job = `<div class="col-12 col-4 col-lg-3 mx-md-4 my-4 py-1">
    <div class="card">
        <div class="card-header">
            ${name}<br />
            
            ${role}
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${id}</p>
            <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
            <p class="card-text">Office:${office}</p>
        </div>
    </div>
</div>`;
            htmlPart += job;
        } else if (n.role === 'Engineer') {
            github = n.github;

            job = `
<div class="col-12 col-4 col-lg-3 mx-md-4 my-4 py-1">
    <div class="card">
        <div class="card-header">
            ${name}<br />
            
            ${role}
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${id}</p>
            <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
            <p class="card-text">Github: <a href="http://github.com/${github}" target="_blank">${github}</a></p>
        </div>
    </div>
</div>`;
            htmlPart += job;
        } else {
            school = n.school;

            job = `
<div class="col-12 col-4 col-lg-3 mx-md-4 my-4 py-1">
    <div class="card">
        <div class="card-header">
            ${name}<br />
            
            ${role}
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${id}</p>
            <p class="card-text">Email: <a href="mailto:${email}">${email}</a></p>
            <p class="card-text">School:${school}</p>
        </div>
    </div>
</div>`;
            htmlPart += job;
        }
    });
    return htmlPart;
}
module.exports = Team;