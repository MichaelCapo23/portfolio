function validateContactForm(event){
    event.preventDefault();
    const tests = [
        {

            element: "input[name=name]",
            pattern: /^[a-zA-Z0-9 ]{4,}$/,
            message: 'subject can only be letters or spaces, and must be 4+ characters'

        },

        {
            element: "input[name=contactEmail]",
            pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            message: 'must be a valid email address'

        },

        {
            element: "textarea[name=message]",
            pattern: /^[a-zA-Z0-9 ]{4,}$/, <!-- /^\w{3,}$/ -->
            message: 'please enter a message that\'s at least four characters long'
        }
    ]

    if( tests.length === tests.filter( validateInputAndDisplayError).length){
        console.log("it worked!");
        sendEmail();
    }
}

function sendEmail() {
    $.ajax({
        url : 'http://localhost:4444/sendemail',
        data: {
            contactEmail : $('input[name=contactEmail]').val(),
            subject: $('input[name=subject]').val(),
            message: $('textarea[name=message]').val(),

        }
    })
}

function validateInputAndDisplayError( incomingTests ){
    console.log("i ran");
    const element = incomingTests.element, pattern = incomingTests.pattern, errorMessage = incomingTests.message;
    const value = $( element ).val();
    const result = pattern.test( value );
    if( !result ){
        $( element ).next().text( errorMessage );
    } else {
        $( element ).next().text('');
    }
    return result;
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});


