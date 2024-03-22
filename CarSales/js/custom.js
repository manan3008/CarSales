$(document).ready(function() {
    $('.about-form button').click(function() {
        alert('fill in the details');
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
});

$(document).ready(function() {
    // $(".needs-validation-register button").click(function() {
    //     alert("This Manan cars register sucessfully.");
    // });

    // $(".myForm").submit(function() {
    //     var name = document.getElementById("inputName").value;
    //     var myelert = "Thanks " + name + ", We Will be in contact shortly.";
    //     alert(myelert);
    // });
});

$(document).ready(function() {
    $('input:radio[name="exampleRadios"]').change(
        function() {
            if ($(this).is(':checked') && $(this).val() == 'student') {
                $("#student-number").show();
            } else {
                $("#student-number").hide();
            }
        });
})

$(document).ready(function () {
    $("#register_btn").click(function (e) { 

        var message = "Thanks " + $("#firstname").val() + ", We Will be in contact shortly.";
        $("#msg").append($("<div class='alert alert-success fade-in' role='alert' ><p> " + message + " </p></div>"));
        $(".alert-success").delay(5000).fadeOut("slow", function () { $(this).remove(); });
        $("#register_form").hide();
    });
});