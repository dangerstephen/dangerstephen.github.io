$(document).ready(function() {

    if ($('.chatWindow').length) {
        $('#chatWindow').on('submit', function(e) {
            e.preventDefault();
        });
        $('.group').not('[data-active]').hide();
        $('#chatWindow .error').hide();


        function checkName() {
            var name = $('#chatWindow').find('#name').val();
            var errors = {};
            $('.with-error').removeClass('with-error');
            if (!name) {
                errors.name = "ah come on now, its just a name.";
                $('#chatWindow').find('#name').parent().parent().append('<div class="inline-error">ah come on now, its just a name.</div>');
            } else {
                $('#chatWindow').find('#name').parent().parent().find('.inline-error').remove();
            }
            return errors;
        };

        function checkResponse1() {
            var clientResponse1 = $('#chatWindow').find('#clientResponse1').val();
            var errors = {};
            $('.with-error').removeClass('with-error');
            if (clientResponse1 === "nill") {
                errors.clientResponse1 = "Sorry, but we cant deliver this message until you select an option";
                $('#chatWindow').find('#clientResponse1').parent().append('<div class="inline-error">Sorry, but we cant deliver this message until you select an option</div>');
            } else {
                $('#chatWindow').find('#clientResponse1').parent().find('.inline-error').remove();
            }
            return errors;
        };

        function checkResponse2() {
            var clientResponse2 = $('#chatWindow').find('#clientResponse2').val();
            var errors = {};
            $('.with-error').removeClass('with-error');
            if (clientResponse2 === "nill") {
                errors.clientResponse2 = "Sorry, but we cant deliver this message until you select an option";
                $('#chatWindow').find('#clientResponse2').parent().append('<div class="inline-error">Sorry, but we cant deliver this message until you select an option</div>');
            } else {
                $('#chatWindow').find('#clientResponse2').parent().find('.inline-error').remove();
            }
            return errors;
        };

        function checkResponse3() {
            var clientResponse3 = $('#chatWindow').find('#clientResponse3').val();
            var errors = {};
            $('.with-error').removeClass('with-error');
            if (clientResponse3 === "nill") {
                errors.clientResponse3 = "Sorry, but we cant deliver this message until you select an option";
                $('#chatWindow').find('#clientResponse3').parent().append('<div class="inline-error">Sorry, but we cant deliver this message until you select an option</div>');
            } else {
                $('#chatWindow').find('#clientResponse3').parent().find('.inline-error').remove();
            }
            return errors;
        };

        function checkResponse4() {
            var clientResponse4 = $('#chatWindow').find('#clientResponse4').val();
            var errors = {};
            $('.with-error').removeClass('with-error');
            if (clientResponse4 === "nill") {
                errors.clientResponse4 = "Sorry, but we cant deliver this message until you select an option";
                $('#chatWindow').find('#clientResponse4').parent().append('<div class="inline-error">Sorry, but we cant deliver this message until you select an option</div>');
            } else {
                $('#chatWindow').find('#clientResponse4').parent().find('.inline-error').remove();
            }
            return errors;
        };

        function checkEmail() {
            var email = $('#chatWindow').find('#email').val();
            var message = $('#chatWindow').find('#message').val();

            var errors = {};
            $('.with-error').removeClass('with-error');
            if (!email) {
                errors.email = "We Need an email";
                $('#chatWindow').find('#email').parent().append('<div class="inline-error">i need your email</div>');
            } else {
                $('#chatWindow').find('#email').parent().find('.inline-error').remove();
            }
            if (!message) {
                errors.message = "you need to say something";
                $('#chatWindow').find('#message').parent().parent().append('<div class="inline-error">you need to say something</div>');
            } else {
                $('#chatWindow').find('#message').parent().parent().find('.inline-error').remove();
            }
            return errors;
        };

        function pageMover() {
            var currentgroup = $('.group[data-active]');
            var newActive = $('.group[data-active]').next('.group');
            newActive.show();
            var newTop = newActive.offset().top;
            $("html, body").animate({
                scrollTop: newTop
            });
            newActive.find('.inputChatText').first().focus();
            $('.group[data-active]').removeAttr('data-active');
            newActive.attr('data-active', '')
        };

        $('.nextGroup').on('click', function(e) {
            e.preventDefault();
            var errors = [];
            errors = checkName();
            var newActive = $('.group[data-active]').next('.group');
            if ($.isEmptyObject(errors)) {
                $.ajax({
                        url: "https://formspree.io/me@stephendangerfield.com",
                        method: "POST",
                        data: $('.nameForm').serialize(),
                        dataType: "json"
                    });
                $('.wontChat').text('Exit Chat');
                $('.nextGroup').addClass('hidden');
                $(':input').prop("disabled", true);
                pageMover();
            }
        });

        $('.inputChatText').on('keydown', function(e) {
            var code = e.keyCode || e.which;
            if (code == '13') {
                $('.nextGroup').click();
                e.preventDefault();
            }
        });

        $('.nextGroup1').on('click', function(e) {
            var clientResponse1 = $('#chatWindow').find('#clientResponse1').val();
            var email = $('#chatWindow').find('#email').val();
            var name = $('#chatWindow').find('#name').val();
            var message = $('#chatWindow').find('#message').val();
            e.preventDefault();
            var errors = {};
            errors = checkResponse1();
            var newActive = $('.group[data-active]').next('.group');
            if ($.isEmptyObject(errors)) {
                if (clientResponse1 === "About") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Aww 😊 I\'m flatterd. I\'m Stephen Dangerfield, when behind a computer I\'m a software engineer. I love learning new things and challanging myself to do things outside of my comfort zone.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> When I manage to escape the computer screen you can catch me outside. Gowing up in Utah I came to fall in love with everything outdoors. So I now spend my free time in it. From climbing big rocks, trail running, to even just going new places to experience new things.</p></div></div>');
                    $('.aboutOption2').addClass('hidden');
                    $('.aboutOption3').addClass('hidden');
                    $('.aboutOption4').addClass('hidden');
                    $('.contactOption1').addClass('hidden');
                    $('.experienceOption1').addClass('hidden');
                    $('.projectsOption1').addClass('hidden');
                    $('.nextGroup1').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);
                } else if (clientResponse1 === "Contact") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Okay ' + name + '! I\'d love to chat. But first I need to know a few things. What\'s your email? 📧 </p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Also plesae leave me a brief message</p></div></div><form class="contactForm"><div class="message messageUser1"><div class="bubble bubbleUser"><p class="chatText"><div class="chat-input"><div class="chat-input"><input type="email" class="inputChatText" id="email" name="email" placeholder="enter your email" data-required /></div><textarea type="text" class="inputChatText" id="message"  placeholder="enter your message"></textarea></div></p><img type="submit" class="sendEmail" src="img/up.png"></img></div></div></form>');
                    $('.contactOption2').addClass('hidden');
                    $('.contactOption3').addClass('hidden');
                    $('.contactOption4').addClass('hidden');
                    $('.aboutOption1').addClass('hidden');
                    $('.experienceOption1').addClass('hidden');
                    $('.projectsOption1').addClass('hidden');

                    $('.nextGroup1').addClass('hidden');
                    pageMover();
                    $(document).on('click', '.sendEmail', function(e) {
                        var errors = {};
                        errors = checkEmail();
                        if ($.isEmptyObject(errors)) {
                            $('.sendEmail').addClass('hidden');
                            newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText"> Thanks! Your email has been sent from <em>undefined</em>, and I\'ll get back to you as soon as possible! If this doesn\'t look right, feel free to contact me the old fashioned way at <a href="mailto:me@stephendangerfield.com">me@stephendangerfield.com</a></p></div></div>');
                            newActive.append('<div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Man! I am having fun! 😃 Why dont we keep going?</p></div></div>');
                            e.preventDefault();
                            $(':input').prop("disabled", true);
                            setTimeout(pageMover(), 3000);
                        } else {
                            return false;
                        };
                    })
                } else if (clientResponse1 === "Experience") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Thanks for asking! Most Recently I was a Full Stack Web Developer at <a target="_blank" href="https://generalassemb.ly/">General Assembly</a>. During my time here I worked on developing applications during tight 1 week deadlines both on teams and individually.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Prior to GA I was a Technician Manager for <a target="_blank" href="https://www.fluenthome.com/">Fluent Home</a>. A few of my rolls here included: Technician Training, Recruiting and Inventory Managment. For diffrent offices accros the US.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Sill curious? Feel free to check my <a target="_blank" href="https://www.linkedin.com/in/stephen-dangerfield-a46372128/">LinkedIn</a> </p></div></div>');
                    $('.experienceOption2').addClass('hidden');
                    $('.experienceOption3').addClass('hidden');
                    $('.experienceOption4').addClass('hidden');
                    $('.contactOption1').addClass('hidden');
                    $('.aboutOption1').addClass('hidden');
                    $('.projectsOption1').addClass('hidden');

                    $('.nextGroup1').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);
                } else if (clientResponse1 === "Projects") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">One of my personal projects I have enjoyed most is <a target="_blank" href="https://recipebots.herokuapp.com/">Recipe bots</a>. It allows you to enter a website URL and will then go out and scrape the information on that page to generate you a Recipe Card. You should check it out!</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> I also really enjoyed building <a target="_blank" href="https://ourthoughts.herokuapp.com/"> Our Thoughts</a>. I used the <a href="#">Twilio</a> API to message users which made for a fun form of communication.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Of course I also built this site, along with many others, which you can find on <a target="_blank" href="https://github.com/dangerstephen">GitHub</a>.</p></div></div>');
                    $('.projectsOption2').addClass('hidden');
                    $('.projectsOption3').addClass('hidden');
                    $('.projectsOption4').addClass('hidden');
                    $('.contactOption1').addClass('hidden');
                    $('.experienceOption1').addClass('hidden');
                    $('.aboutOption1').addClass('hidden');
                    $('.nextGroup1').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);


                } else {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Well this is awkward. But there was an error. Please contact me at <a href="mailto:me@stephendangerfield.com">me@stephendangerfield.com</a> to help resolve this issue </p></div></div>');
                }

            };


        });

        $('.nextGroup2').on('click', function(e) {
            var clientResponse2 = $('#chatWindow').find('#clientResponse2').val();
            var email = $('#chatWindow').find('#email').val();
            var name = $('#chatWindow').find('#name').val();
            var message = $('#chatWindow').find('#message').val();
            e.preventDefault();
            var errors = {};
            errors = checkResponse2();
            var newActive = $('.group[data-active]').next('.group');
            if ($.isEmptyObject(errors)) {
                if (clientResponse2 === "About") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Aww 😊 I\'m flatterd. I\'m Stephen Dangerfield, when behind a computer I\'m a software engineer. I love learning new things and challanging myself to do things outside of my comfort zone.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> When I manage to escape the computer screen you can catch me outside. Gowing up in Utah I came to fall in love with everything outdoors. So I now spend my free time in it. From climbing big rocks, trail running, to even just going new places to experience new things.</p></div></div>');
                    $('.aboutOption3').addClass('hidden');
                    $('.aboutOption4').addClass('hidden');
                    $('.contactOption2').addClass('hidden');
                    $('.experienceOption2').addClass('hidden');
                    $('.projectsOption2').addClass('hidden');
                    $('.nextGroup2').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);
                } else if (clientResponse2 === "Contact") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Okay ' + name + '! I\'d love to chat. But first I need to know a few things. What\'s your email? 📧 </p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Also plesae leave me a brief message</p></div></div><form class="contactForm"><div class="message messageUser1"><div class="bubble bubbleUser"><p class="chatText"><div class="chat-input"><div class="chat-input"><input type="email" class="inputChatText" id="email" name="email" placeholder="enter your email" data-required /></div><textarea type="text" class="inputChatText" id="message"  placeholder="enter your message"></textarea></div></p><img type="submit" class="sendEmail" src="img/up.png"></img></div></div></form>');
                    $('.contactOption3').addClass('hidden');
                    $('.contactOption4').addClass('hidden');
                    $('.aboutOption2').addClass('hidden');
                    $('.experienceOption2').addClass('hidden');
                    $('.projectsOption2').addClass('hidden');

                    $('.nextGroup2').addClass('hidden');
                    pageMover();
                    $(document).on('click', '.sendEmail', function(e) {
                        e.preventDefault();
                        var email = $('#chatWindow').find('#email').val();
                        var errors = {};
                        errors = checkEmail();
                        if ($.isEmptyObject(errors)) {
                            $('.sendEmail').addClass('hidden');
                            newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText"> Thanks! Your email has been sent from <em> undefined </em>, and I\'ll get back to you as soon as possible! If this doesn\'t look right, feel free to contact me the old fashioned way at <a href="mailto:me@stephendangerfield.com">me@stephendangerfield.com</a></p></div></div>');
                            newActive.append('<div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Man! I am having fun! 😃 Why dont we keep going?</p></div></div>');
                            e.preventDefault();
                            $(':input').prop("disabled", true);
                            setTimeout(pageMover(), 3000);
                        } else {
                            return false;
                        };
                    })
                } else if (clientResponse2 === "Experience") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Thanks for asking! Most Recently I was a Full Stack Web Developer at <a target="_blank" href="https://generalassemb.ly/">General Assembly</a>. During my time here I worked on developing applications during tight 1 week deadlines both on teams and individually.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Prior to GA I was a Technician Manager for <a target="_blank" href="https://www.fluenthome.com/">Fluent Home</a>. A few of my rolls here included: Technician Training, Recruiting and Inventory Managment. For diffrent offices accros the US.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Sill curious? Feel free to check my <a target="_blank" href="https://www.linkedin.com/in/stephen-dangerfield-a46372128/">LinkedIn</a> </p></div></div>');
                    $('.experienceOption3').addClass('hidden');
                    $('.experienceOption4').addClass('hidden');
                    $('.contactOption2').addClass('hidden');
                    $('.aboutOption2').addClass('hidden');
                    $('.projectsOption2').addClass('hidden');
                    $('.nextGroup2').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);
                } else if (clientResponse2 === "Projects") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">One of my personal projects I have enjoyed most is <a target="_blank" href="https://recipebots.herokuapp.com/">Recipe bots</a>. It allows you to enter a website URL and will then go out and scrape the information on that page to generate you a Recipe Card. You should check it out!</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> I also really enjoyed building <a target="_blank" href="https://ourthoughts.herokuapp.com/"> Our Thoughts</a>. I used the <a href="#">Twilio</a> API to message users which made for a fun form of communication.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Of course I also built this site, along with many others, which you can find on <a target="_blank" href="https://github.com/dangerstephen">GitHub</a>.</p></div></div>');
                    $('.projectsOption3').addClass('hidden');
                    $('.projectsOption4').addClass('hidden');
                    $('.contactOption2').addClass('hidden');
                    $('.experienceOption2').addClass('hidden');
                    $('.aboutOption2').addClass('hidden');
                    $('.nextGroup2').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);


                } else {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Well this is awkward. But there was an error. Please contact me at <a href="mailto:me@stephendangerfield.com">me@stephendangerfield.com</a> to help resolve this issue </p></div></div>');
                }

            };


        });


        $('.nextGroup3').on('click', function(e) {
            var clientResponse3 = $('#chatWindow').find('#clientResponse3').val();
            var email = $('#chatWindow').find('#email').val();
            var name = $('#chatWindow').find('#name').val();
            var message = $('#chatWindow').find('#message').val();
            e.preventDefault();
            var errors = {};
            errors = checkResponse3();
            var newActive = $('.group[data-active]').next('.group');
            if ($.isEmptyObject(errors)) {
                if (clientResponse3 === "About") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Aww 😊 I\'m flatterd. I\'m Stephen Dangerfield, when behind a computer I\'m a software engineer. I love learning new things and challanging myself to do things outside of my comfort zone.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> When I manage to escape the computer screen you can catch me outside. Gowing up in Utah I came to fall in love with everything outdoors. So I now spend my free time in it. From climbing big rocks, trail running, to even just going new places to experience new things.</p></div></div>');
                    $('.aboutOption4').addClass('hidden');
                    $('.contactOption3').addClass('hidden');
                    $('.experienceOption3').addClass('hidden');
                    $('.projectsOption3').addClass('hidden');
                    $('.nextGroup3').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);
                } else if (clientResponse3 === "Contact") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Okay ' + name + '! I\'d love to chat. But first I need to know a few things. What\'s your email? 📧 </p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Also plesae leave me a brief message</p></div></div><form class="contactForm"><div class="message messageUser1"><div class="bubble bubbleUser"><p class="chatText"><div class="chat-input"><div class="chat-input"><input type="email" class="inputChatText" id="email" name="email" placeholder="enter your email" data-required /></div><textarea type="text" class="inputChatText" id="message"  placeholder="enter your message"></textarea></div></p><img type="submit" class="sendEmail" src="img/up.png"></img></div></div></form>');
                    $('.contactOption4').addClass('hidden');
                    $('.aboutOption3').addClass('hidden');
                    $('.experienceOption3').addClass('hidden');
                    $('.projectsOption3').addClass('hidden');
                    $('.nextGroup3').addClass('hidden');
                    pageMover();
                    $(document).on('click', '.sendEmail', function(e) {
                        e.preventDefault();
                        var email = $('#chatWindow').find('#email').val();
                        var errors = {};
                        errors = checkEmail();
                        if ($.isEmptyObject(errors)) {
                            $('.sendEmail').addClass('hidden');
                            newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText"> Thanks! Your email has been sent from <em> undefined </em>, and I\'ll get back to you as soon as possible! If this doesn\'t look right, feel free to contact me the old fashioned way at <a href="mailto:me@stephendangerfield.com">me@stephendangerfield.com</a></p></div></div>');
                            newActive.append('<div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Man! I am having fun! 😃 Why dont we keep going?</p></div></div>');
                            e.preventDefault();
                            $(':input').prop("disabled", true);
                            setTimeout(pageMover(), 3000);
                        } else {
                            return false;
                        };
                    })
                } else if (clientResponse3 === "Experience") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Thanks for asking! Most Recently I was a Full Stack Web Developer at <a target="_blank" href="https://generalassemb.ly/">General Assembly</a>. During my time here I worked on developing applications during tight 1 week deadlines both on teams and individually.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Prior to GA I was a Technician Manager for <a target="_blank" href="https://www.fluenthome.com/">Fluent Home</a>. A few of my rolls here included: Technician Training, Recruiting and Inventory Managment. For diffrent offices accros the US.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Sill curious? Feel free to check my <a target="_blank" href="https://www.linkedin.com/in/stephen-dangerfield-a46372128/">LinkedIn</a> </p></div></div>');
                    $('.experienceOption4').addClass('hidden');
                    $('.contactOption3').addClass('hidden');
                    $('.aboutOption3').addClass('hidden');
                    $('.projectsOption3').addClass('hidden');
                    $('.nextGroup3').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);
                } else if (clientResponse3 === "Projects") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">One of my personal projects I have enjoyed most is <a target="_blank" href="https://recipebots.herokuapp.com/">Recipe bots</a>. It allows you to enter a website URL and will then go out and scrape the information on that page to generate you a Recipe Card. You should check it out!</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> I also really enjoyed building <a target="_blank" href="https://ourthoughts.herokuapp.com/"> Our Thoughts</a>. I used the <a href="#">Twilio</a> API to message users which made for a fun form of communication.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Of course I also built this site, along with many others, which you can find on <a target="_blank" href="https://github.com/dangerstephen">GitHub</a>.</p></div></div>');
                    $('.projectsOption4').addClass('hidden');
                    $('.contactOption3').addClass('hidden');
                    $('.experienceOption3').addClass('hidden');
                    $('.aboutOption3').addClass('hidden');
                    $('.nextGroup3').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);


                } else {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Well this is awkward. But there was an error. Please contact me at <a href="mailto:me@stephendangerfield.com">me@stephendangerfield.com</a> to help resolve this issue </p></div></div>');
                }

            };


        });

        $('.nextGroup4').on('click', function(e) {
            var clientResponse4 = $('#chatWindow').find('#clientResponse4').val();
            var email = $('#chatWindow').find('#email').val();
            var name = $('#chatWindow').find('#name').val();
            var message = $('#chatWindow').find('#message').val();
            e.preventDefault();
            var errors = {};
            errors = checkResponse4();
            var newActive = $('.group[data-active]').next('.group');
            if ($.isEmptyObject(errors)) {
                if (clientResponse4 === "About") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Aww 😊 I\'m flatterd. I\'m Stephen Dangerfield, when behind a computer I\'m a software engineer. I love learning new things and challanging myself to do things outside of my comfort zone.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> When I manage to escape the computer screen you can catch me outside. Gowing up in Utah I came to fall in love with everything outdoors. So I now spend my free time in it. From climbing big rocks, trail running, to even just going new places to experience new things.</p></div></div>');
                    newActive.append('<div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText"> Gotta run 🏃🏼! Enjoy the rest of the site and have a great day! Let me know if you have questions.</p></div></div>');
                    $('.wontChat').addClass('hidden');
                    $('.contactOption4').addClass('hidden');
                    $('.experienceOption4').addClass('hidden');
                    $('.projectsOption4').addClass('hidden');
                    $('section').removeClass('hidden');
                    $('.nextGroup4').addClass('hidden');
                    pageMover();
                } else if (clientResponse4 === "Contact") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Okay ' + name + '! I\'d love to chat. But first I need to know a few things. What\'s your email? 📧 </p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Also plesae leave me a brief message</p></div></div><form class="contactForm"><div class="message messageUser1"><div class="bubble bubbleUser"><p class="chatText"><div class="chat-input"><div class="chat-input"><input type="email" class="inputChatText" id="email" name="email" placeholder="enter your email" data-required /></div><textarea type="text" class="inputChatText" id="message"  placeholder="enter your message"></textarea></div></p><img type="submit" class="sendEmail" src="img/up.png"></img></div></div></form>');
                    $('.nextGroup4').addClass('hidden');
                    $('.aboutOption4').addClass('hidden');
                    $('.experienceOption4').addClass('hidden');
                    $('.projectsOption4').addClass('hidden');
                    pageMover();
                    $(document).on('click', '.sendEmail', function(e) {
                        e.preventDefault();
                        var email = $('#chatWindow').find('#email').val();
                        var errors = {};
                        errors = checkEmail();
                        if ($.isEmptyObject(errors)) {
                            $('.sendEmail').addClass('hidden');
                            $('.wontChat').addClass('hidden');
                            $('section').removeClass('hidden');
                            newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText"> Thanks! Your email has been sent from <em> undefined </em>, and I\'ll get back to you as soon as possible! If this doesn\'t look right, feel free to contact me the old fashioned way at <a href="mailto:me@stephendangerfield.com">me@stephendangerfield.com</a></p></div></div>');
                            newActive.append('<div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Man! I am having fun! 😃 Why dont we keep going?</p></div></div>');
                            e.preventDefault();
                            $(':input').prop("disabled", true);
                            setTimeout(pageMover(), 3000);
                        } else {
                            return false;
                        };
                    })
                } else if (clientResponse4 === "Experience") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Thanks for asking! Most Recently I was a Full Stack Web Developer at <a target="_blank" href="https://generalassemb.ly/">General Assembly</a>. During my time here I worked on developing applications during tight 1 week deadlines both on teams and individually.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Prior to GA I was a Technician Manager for <a target="_blank" href="https://www.fluenthome.com/">Fluent Home</a>. A few of my rolls here included: Technician Training, Recruiting and Inventory Managment. For diffrent offices accros the US.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Sill curious? Feel free to check my <a target="_blank" href="https://www.linkedin.com/in/stephen-dangerfield-a46372128/">LinkedIn</a>. Gotta run 🏃🏼 Enjoy the rest of the site and have a great day! Let me know if you have questions!</p></div></div>');
                    $('.wontChat').addClass('hidden');
                    $('.contactOption4').addClass('hidden');
                    $('.aboutOption4').addClass('hidden');
                    $('.projectsOption4').addClass('hidden');
                    $('section').removeClass('hidden');
                    $('.nextGroup4').addClass('hidden');
                    pageMover();
                } else if (clientResponse4 === "Projects") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">One of my personal projects I have enjoyed most is <a target="_blank" href="https://recipebots.herokuapp.com/">Recipe bots</a>. It allows you to enter a website URL and will then go out and scrape the information on that page to generate you a Recipe Card. You should check it out!</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> I also really enjoyed building <a target="_blank" href="https://ourthoughts.herokuapp.com/"> Our Thoughts</a>. I used the <a href="#">Twilio</a> API to message users which made for a fun form of communication.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Of course I also built this site, along with many others, which you can find on <a target="_blank" href="https://github.com/dangerstephen">GitHub</a>. Gotta run 🏃🏼 Enjoy the rest of the site and have a great day! Let me know if you have questions!</p></div></div>');
                    $('.wontChat').addClass('hidden');
                    $('.contactOption4').addClass('hidden');
                    $('.experienceOption4').addClass('hidden');
                    $('.aboutOption4').addClass('hidden');
                    $('section').removeClass('hidden');
                    $('.nextGroup4').addClass('hidden');
                    pageMover();
                } else {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Well this is awkward. But there was an error. Please contact me at <a href="mailto:me@stephendangerfield.com">me@stephendangerfield.com</a> to help resolve this issue </p></div></div>');
                }

            };


        });


    }

    $('.wontChat').on('click', function() {
        $('section').removeClass('hidden');
        $('.mindChanged').removeClass('hidden');
        $('.wontChat').addClass('hidden');
    });

    $('.mindChanged').on('click', function() {
        $('section').addClass('hidden');
        $('.wontChat').removeClass('hidden');
        $('.mindChanged').addClass('hidden');
    });

    $('.returnHome').on('click', function() {
        console.log("I am getting ran");
        $('.hidden').removeClass('hidden');
    });





    // input fields
    $('.option1').on('click', function(e) {
        e.preventDefault();
        var input = $($(this).parent().attr('data-field'));
        input.val($(this).text());
        var optionActive = $(this).parent('.input').find('[optionActive]');
        optionActive.removeAttr('optionActive');
        $(this).attr('optionActive', '');
        $('.nextGroup1').click();
    });

    $('.option2').on('click', function(e) {
        e.preventDefault();
        var input = $($(this).parent().attr('data-field'));
        input.val($(this).text());
        var optionActive = $(this).parent('.input').find('[optionActive]');
        optionActive.removeAttr('optionActive');
        $(this).attr('optionActive', '');
        $('.nextGroup2').click();
    });

    $('.option3').on('click', function(e) {
        e.preventDefault();
        var input = $($(this).parent().attr('data-field'));
        input.val($(this).text());
        var optionActive = $(this).parent('.input').find('[optionActive]');
        optionActive.removeAttr('optionActive');
        $(this).attr('optionActive', '');
        $('.nextGroup3').click();
    });

    $('.option4').on('click', function(e) {
        e.preventDefault();
        var input = $($(this).parent().attr('data-field'));
        input.val($(this).text());
        var optionActive = $(this).parent('.input').find('[optionActive]');
        optionActive.removeAttr('optionActive');
        $(this).attr('optionActive', '');
        $('.nextGroup4').click();
    });



    $('[sendData]').each(function() {
        var watch = $($(this).attr('sendData'));
        var watcher = $(this);
        watch.on('keyup', function() {
            watcher.text($(this).val())
        })
    });



});


function nameBlinker() {
    if ($('input[name=name]').attr('placeholder')) {
        // get the placeholder text
        $('input[name=name]').attr('placeholder', '');
    } else {
        $('input[name=name]').attr('placeholder', 'Enter your name');
    }
    setTimeout(nameBlinker, 1200);
};
