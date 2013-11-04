<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <title>Contact Us</title>
    <style type='text/css'>
        #contact_form_holder {
            font-family: 'Verdana';
            font-variant: small-caps;
            width: 400px;
        }

        #contact_form_holder input, #contact_form_holder textarea {
            width: 100%;
            font-family: inherit;
            padding: 5px;
        }

        #contact_form_holder textarea {
            height: 100px;
        }

        #send_message {
            width: 200px !important;
            font-variant: small-caps;
            border: 1px solid black;
            cursor: pointer;
            cursor: hand;
        }

        #cf_submit_p {
            text-align: right;
        }

        .error {
            display: none;
            padding: 10px;
            color: #D8000C;
            font-size: 12px;
            background-color: #FFBABA;
        }

        .success {
            display: none;
            padding: 10px;
            color: #044406;
            font-size: 12px;
            background-color: #B7FBB9;
        }

        #contact_logo {
            vertical-align: middle;
        }

        .error img {
            vertical-align: top;
        }
    </style>
    <script src="/lib/jquery-1.6.1.min.js"></script>
    <script type='text/javascript'>
        $(document).ready(function () {
            $('#send_message').click(function (e) {
                e.preventDefault();

                var error = false;
                var name = $('#name').val();
                var email = $('#email').val();
                var subject = $('#subject').val();
                var message = $('#message').val();

                if (name.length == 0) {
                    var error = true;
                    $('#name_error').fadeIn(500);
                } else {
                    $('#name_error').fadeOut(500);
                }
                if (email.length == 0 || email.indexOf('@') == '-1') {
                    var error = true;
                    $('#email_error').fadeIn(500);
                } else {
                    $('#email_error').fadeOut(500);
                }
                if (subject.length == 0) {
                    var error = true;
                    $('#subject_error').fadeIn(500);
                } else {
                    $('#subject_error').fadeOut(500);
                }
                if (message.length == 0) {
                    var error = true;
                    $('#message_error').fadeIn(500);
                } else {
                    $('#message_error').fadeOut(500);
                }

                if (error == false) {
                    $('#send_message').attr({'disabled': 'true', 'value': 'Sending...' });

                    $.post("/impl/send_email.php", $("#contact_form").serialize(), function (result) {
                        if (result == 'sent') {
                            $('#cf_submit_p').remove();
                            $('#mail_success').fadeIn(500);
                        } else {
                            $('#mail_fail').fadeIn(500);
                            $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');
                        }
                    });
                }
            });
        });
    </script>
</head>
<body>
<div id='contact_form_holder'>
    <form action='index.php' method='post' id='contact_form'>
        <h2><img id='contact_logo' src='images/mail.png'/> Контактная форма</h2>

        <p>
            Ваше имя:

        <div id='name_error' class='error'><img src='images/error.png'> Введите ваше имя</div>
        <div><input type='text' name='name' id='name'></div>
        </p>
        <p>
            Ваш Email:

        <div id='email_error' class='error'><img src='images/error.png'> Введите ваш Email адрес</div>
        <div><input type='text' name='email' id='email'>

            <div>
                </p>
                <p>
                    Тема письма:

                <div id='subject_error' class='error'><img src='images/error.png'> Введите тему сообщения</div>
                <div><input type='text' name='subject' id='subject'></div>
                </p>
                <p>
                    Текст сообщения:

                <div id='message_error' class='error'><img src='images/error.png'> Введите текст сообщения</div>
                <div><textarea name='message' id='message'></textarea></div>
                </p>
                <div id='mail_success' class='success'><img src='images/success.png'> Ваше сообщение отправленно.</div>
                <div id='mail_fail' class='error'><img src='images/error.png'> Ваше сообщение не отправленно</div>
                <p id='cf_submit_p'>
                    <input type='submit' id='send_message' value='Send The Message'>
                </p>
    </form>
</div>
</body>
</html>
