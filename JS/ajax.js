$(document).ready(function () {
    /*============== Contact form =======================*/
    var nameError;
    var phoneError;
    var emailError;

    $('#name-contact').on('keyup', function () {
        if (/^[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF_]+( [a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF_]+){1,4}$/.test($(this).val()) && $(this).val().trim() !== "") {
            $(this).closest(".nameInp")
                .removeClass('has-error')
                .addClass('has-success has-feedback')
                .append('<span class="name-validation-icon-ok fa fa-check form-control-feedback"></span>');
            $(".name-validation-icon-remove").remove();
            $('#nameError').hide();
            nameError = true;
        } else {
            $(this).closest(".nameInp")
                .removeClass('has-success')
                .addClass('has-error has-feedback')
                .append('<span class="name-validation-icon-remove fa fa-close form-control-feedback"></span>');

            $(".name-validation-icon-ok").remove();

            nameError = false;

        }
    });

    $('#tfn-contact').on('keyup', function () {
        if (/^(\d[- ]*|\+\d*){8,20}\d$/.test($(this).val()) && $(this).val().trim() !== "") {
            $(this).closest(".numbInp")
                .removeClass('has-error')
                .addClass('has-success has-feedback')
                .append('<span class="tfn-validation-icon-ok fa fa-check form-control-feedback"></span>');
            $(".tfn-validation-icon-remove").remove();
            $('#phoneError').hide();
            phoneError = true;
        } else {
            $(this).closest(".numbInp")
                .removeClass('has-success')
                .addClass('has-error has-feedback')
                .append('<span class="tfn-validation-icon-remove fa fa-close form-control-feedback"></span>');

            $(".tfn-validation-icon-ok").remove();

            phoneError = false;
        }
    });


    $('#email-contact').on('keyup', function () {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($(this).val()) && $(this).val().trim() !== "") {
            $(this).closest(".emailInp")
                .removeClass('has-error')
                .addClass('has-success has-feedback')
                .append('<span class="email-validation-icon-ok fa fa-check form-control-feedback"></span>');
            $(".email-validation-icon-remove").remove();
            $('#emailError').hide();
            emailError = true;
        } else {
            $(this).closest(".emailInp")
                .removeClass('has-success')
                .addClass('has-error has-feedback')
                .append('<span class="email-validation-icon-remove fa fa-close form-control-feedback"></span>');

            $(".email-validation-icon-ok").remove();

            emailError = false;
        }
    });


    $('#submitbtn-contact').on('click', function (e) {
        e.preventDefault();
        if (!nameError || !phoneError || !emailError) {
            if ($('#name-contact').val() === "") {
                $('#nameError').html('Du behöver fylla i namn!');
            } else if (/^[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF_]+( [a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF_]+){1,4}$/.test($(this).val()) === false) {
                $('#nameError').html('Fyll i fullt namn med mellanslag emellan!');
            }

            if ($('#tfn-contact').val() === "") {
                $('#phoneError').html('Du behöver fylla i telefonnummer!');
            } else if (/^(\d[- ]*|\+\d*){8,20}\d$/.test($(this).val()) === false) {
                $('#phoneError').html('Bara siffror är tillåtet men även + och -');
            }

            if ($('#email-contact').val() === "") {
                $('#emailError').html('Du behöver fylla i email!');
            } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($(this).val()) === false) {
                $('#emailError').html('exempel@domän.se!');
            }
        } else {
            let contactinfo = {
                name: document.querySelector('#name-contact').value,
                phone: document.querySelector('#tfn-contact').value,
                email: document.querySelector('#email-contact').value,
                note: document.querySelector('#text-contact').value
            };
            $.post('https://danieldahlman.se/api/?/incoming_msg', contactinfo).then(function (response) {
                Array.from(document.querySelectorAll('input[type=text], #text-contact')).map(function (inp) {
                    inp.value = '';
                    return inp.value;
                });

                $('.modal').css('display', 'block');
                $('.modal-header, .modal-footer').css('background-color', '#ec9b13');
                $('.closeModal, .btn-again').on('click', function () {
                    $('.modal').css('display', 'none');
                });

                $('.nameInp, .numbInp, .emailInp').removeClass('has-success has-feedback');
                $(".email-validation-icon-ok, .tfn-validation-icon-ok, .name-validation-icon-ok").remove();
            });
        }
    });
    /*============================= get Welcome_text to home.php ===============*/
    $.get('https://danieldahlman.se/api/?/welcome_text').then(function (response) {
        $('#welcome-text').html(response.texts[0].welcome_text);
    });
    /*=============================== get CV first text ===========================*/
    $.get('https://danieldahlman.se/api/?/cv_text').then(function (response) {
        $('#cv-firsttext').html(response.texts[0].first_text);
    });
    /*=========================== get CV headers and lists ==============================*/
    $.get("https://danieldahlman.se/api/?/cv_headers").then(function (result) {
        let resultheaders = result.allheaders;
        Array.from(document.querySelectorAll('.list-header')).map(function (head, i) {
            head.innerHTML = resultheaders[i].header;
            return head.innerHTML;
        });
        resultheaders.map(function (obj) {
            $.get('https://danieldahlman.se/api/?/cv_headers/' + obj.headersID + '/items')
                .then(function (response) {
                    let li = response.header_items.map(function (item) {
                        return '<li>' + item.list_item + '</li>';
                    });

                    let id = response.id;

                    switch (id) {
                        case "1":
                            $('#first-list').html(li);
                            break;
                        case "2":
                            $('#second-list').html(li);
                            break;
                        case "3":
                            $('#third-list').html(li);
                            break;
                        default:
                            break;
                    }
                });
            return obj;
        });
    });

    /*=================== get Employments ==================================*/
    $.get('https://danieldahlman.se/api/?/cv_employment')
        .then(function (response) {
            let employment = response.employments.map(function (obj) {
                let emp = '<li class="li-education"><br/>' + obj.employment +
                    '</li><li class="li-education">' + obj.year + '</li>';
                return emp;
            });
            $('#employments').html(employment);
        });
    /*======================== get Education =============================*/
    $.get('https://danieldahlman.se/api/?/cv_education')
        .then(function (response) {
            let education = response.educations.map(function (obj) {
                let emp = '<li class="li-education"><br/>' + obj.school +
                    '</li><li class="li-education">' + obj.year + '</li>';
                return emp;
            });
            $('#educations').html(education);
        });

    /*=============== get About me =========================*/
    $.get('https://danieldahlman.se/api/?/about').then(function (response) {
        let str = response.texts[0].text;
        Array.from(document.querySelectorAll('.about-text')).map(function (tag, i) {
            tag.innerHTML = str.split('...')[i];
            return tag.innerHTML;
        });
    });
    /*============ get Projects ===============================*/
    $.get('https://danieldahlman.se/api/?/portfolio').then(function (response) {
        let projects = response.projects.map(function (obj) {
            let project = '<div class="well"><a href="' + obj.url + '">' + obj.url +
                '</a><p>' + obj.project_text + '</p></div>';
            return project;
        });
        $('#myWork').html(projects);
    });
});