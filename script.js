let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
});

// form validation
    document.getElementById('registration').addEventListener('submit', function(event){
    event.preventDefault();

    let errors = {};
    let form = event.target;


    //usename
    let username = document.getElementById('namelname').value;
    if (username.length < 2 || username == ""){
        errors.username = 'please enter 2 or more character';
    }

    // password
    let password = document.getElementById('passname').value;
    let password2 = document.getElementById('passname2').value;

    if (password != password2){
        errors.password = 'passwords do not match';
    }

    // checkbox
    let checkbox = document.getElementById('agreecheckbox').checked;
    if (!checkbox){
        errors.notagree = 'you must agree terms';
    }


    // radio
    let age = false;

    form.querySelectorAll('.asakii').forEach(event => {
        if (event.checked){
            age = true;
        }
    });

    if (!age){
        errors.age = 'select your age';
    }

    console.log(errors);
});