$(document).ready(function() {

    $('.wont-chat').on('click', function() {
        $('section').removeClass('hidden');
        //  $('.wont-chat').addClass('hidden');
    });

    $('.next-chat-group').on('click', function() {
        console.log("i was clicked");
        $('#chat-window').find('#user-name').append('<div class="chat-new">ah come on now, its just a name.</div>');
        console.log("i was added");
    });

    // Data bindings
    $('[sendData]').each(function() {
        var provider = "facebook";
        var watch = $($(this).attr('sendData'));
        var watcher = $(this);
        watch.on('keyup', function() {
            watcher.text($(this).val())
        })
    });

    // Chat-style form stuff
    if ($('.chat-window').length) {
        $('.chat-group').not('[data-active]').hide();
        $('#chat-window .error').hide();

        $('#chat-window').on('submit', function(e) {
            e.preventDefault();
        });

        function checkErrors() {
            var name = $('#chat-window').find('#user-name').val();
            var vistingReason = $('#chat-window').find('#vistingReason').val();

            var errors = [];
            $('.with-error').removeClass('with-error');

            if (!name && $('#chat-window').find('#user-name').is(':visible')) {
                errors.name = "ah come on now, its just a name.";
                $('#chat-window').find('#user-name').parent().parent().parent().addClass('with-error').append('<div class="inline-error">ah come on now, its just a name.</div>');
            } else {
                $('#chat-window').find('#user-name').parent().parent().parent().find('.inline-error').remove();
            }

            if (!vistingReason && $('#chat-window').find('#vistingReason').is(':visible')) {
                errors.vistingReason = "is fairly simple isnt it? either yes or no, will do";
                $('#chat-window').find('#vistingReason').parent().parent().parent().addClass('with-error').append('<div class="inline-error">either yes or no, will do. its fairly simple isnt it?</div>');
            } else {
                $('#chat-window').find('#vistingReason').parent().parent().parent().find('.inline-error').remove();
            }

            return errors;
        }

        $('[data-show="next-chat-group"]').on('click', function(e) {
            e.preventDefault();
            var errors = [];
            errors = checkErrors();
            if ($.isEmptyObject(errors)) {
                $('#chat-window').find('#user-name').parent().parent().parent().append(
                '<div class="chat-group"><div class="message messageClient"><div class="bubble bubbleClient"><p class="chat-text">Nice to meet you <span sendData="#user-name"></span>! Im guessing you came to my site to learn about me. Is that right?</p></div></div>',
                '<div class="message messageUser"><div class="bubble bubbleUser"><p class="chat-text"><div class="chat-input chat-input--required"><input type="text" onclick="reasonBlinker()" class="chat-input--text" id="vistingReason" name="vistingReason" placeholder="yes or no" data-required /></div></p><img type="submit" data-show="next-chat-group"src="img/up.png"></img></div></div></div>'
            );
            }
        });
    }
});

// function nameBlinker() {
//     if ($('input[name=user-name]').attr('placeholder')) {
//         // get the placeholder text
//         $('input[name=user-name]').attr('placeholder', '');
//     } else {
//         $('input[name=user-name]').attr('placeholder', 'Enter your name');
//     }
//     setTimeout(nameBlinker, 1200);
// };
//
// function reasonBlinker() {
//     if ($('input[name=vistingReason]').attr('placeholder')) {
//         // get the placeholder text
//         $('input[name=vistingReason]').attr('placeholder', '');
//     } else {
//         $('input[name=vistingReason]').attr('placeholder', 'Yes Or No');
//     }
//     setTimeout(reasonBlinker, 1200);
// };
