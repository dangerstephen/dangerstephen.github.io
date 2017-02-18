$(document).ready(function() {

    if ($('.chatWindow').length) {
        $('#chatWindow').on('submit', function(e) {
            e.preventDefault();
        });
        $('.group').not('[data-active]').hide();
        $('#chatWindow .error').hide();


        function checkName() {
            var name = $('#chatWindow').find('#user-name').val();
            var errors = {};
            $('.with-error').removeClass('with-error');
            if (!name) {
                errors.name = "ah come on now, its just a name.";
                $('#chatWindow').find('#user-name').parent().parent().append('<div class="inline-error">ah come on now, its just a name.</div>');
            } else {
                $('#chatWindow').find('#user-name').parent().parent().find('.inline-error').remove();
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
                $('.wontChat').text('Exit Chat');
                $('.nextGroup').addClass('hidden');
                pageMover();
            }
        });

        $('.inputChatText').on('keydown', function(e) {
            var code = e.keyCode || e.which;
            if (code == '13') {
                console.log("the enter button was hit");
                $('.nextGroup').click();
                e.preventDefault();
            }
        });

        $('.nextGroup1').on('click', function(e) {
            var clientResponse1 = $('#chatWindow').find('#clientResponse1').val();
            var email = $('#chatWindow').find('#email').val();
            var message = $('#chatWindow').find('#message').val();
            e.preventDefault();
            var errors = {};
            errors = checkResponse1();
            var newActive = $('.group[data-active]').next('.group');
            if ($.isEmptyObject(errors)) {
                if (clientResponse1 === "About") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">You want to talk about me? Aww 😊 I am flatterd. Im Stephen Dangerfield, a recent transplant to the bay area. When behind a computer Im a software engineer, with a foucus on Full Stack Web Development. I love learning new things and challanging myself to do things outside of my comfort zone.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> When I manage to escape the computer screen I become a Full Time Adventurer. Gowing up in Utah I came to fall in love with everything outdoors. So I now spend my free time in it. From climbing big rocks, trail running, to even just going new places to experience new things.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Looking to hire? Lucky for you Im currently seeking my next adventure. Lets chat!</p></div></div>');
                    $('.aboutOption2').addClass('hidden');
                    $('.aboutOption3').addClass('hidden');
                    $('.aboutOption4').addClass('hidden');
                    $('.nextGroup1').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);
                } else if (clientResponse1 === "Contact") {
                    newActive.append('<form class="contactForm"><div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Okay {name}! Id love to chat. But first I need to know a few things. Whats your email?</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Also I just need a your brief message.</p></div></div><div class="message messageUser1"><div class="bubble bubbleUser"><p class="chatText"><div class="chat-input"><div class="chat-input"><input type="email" class="inputChatText" id="email" name="email" placeholder="enter your email" data-required/></div><textarea type="text" class="inputChatText" id="message" name="message" placeholder="enter your message" data-required/></div></p><img type="submit" class="sendEmail" src="img/up.png"></img></div></div></form>');
                    $('.contactOption2').addClass('hidden');
                    $('.contactOption3').addClass('hidden');
                    $('.contactOption4').addClass('hidden');
                    $('.nextGroup1').addClass('hidden');
                    pageMover();
                    $(document).on('click', '.sendEmail', function(e) {
                        e.preventDefault();
                        var errors = {};
                        errors = checkEmail();
                        if ($.isEmptyObject(errors)) {
                            $.ajax({
                                method: 'POST',
                                url: '//formspree.io/me@stephendangerfield.com',
                                data: $('#contact-form').serialize(),
                                datatype: 'json'
                            });
                            $('.sendEmail').addClass('hidden');
                            newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText"> Thanks! Your email has been sent, Ill get back to you as soon as possible!</p></div></div>');
                            e.preventDefault();
                            setTimeout(pageMover(), 3000);
                        } else {
                            return false;
                        };
                    })
                } else if (clientResponse1 === "Experience") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">One of my personal projects I have enjoyed most is <a target="_blank" href="https://recipebots.herokuapp.com/">Recipe bots</a>. It allows you to enter a website URL and will go out and scrape the information on that page to generate you a Recipe Card. You should check it out!</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> I also really enjoyed building <a target="_blank" href="https://ourthoughts.herokuapp.com/"> Our Thoughts</a>. I built this after my first week of a coding bootcamp and it just made me excited for the future. Plus I really enjoyed messing around with the <a href="#">Twilio</a> api until I finally got it to send users texts.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">You can find more of my code & projects on <a target="_blank" href="https://github.com/dangerstephen">GitHub</a>.</p></div></div>');
                    $('.experienceOption2').addClass('hidden');
                    $('.experienceOption3').addClass('hidden');
                    $('.experienceOption4').addClass('hidden');
                    $('.nextGroup1').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);
                } else if (clientResponse1 === "Projects") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">One of my personal projects I have enjoyed most is <a target="_blank" href="https://recipebots.herokuapp.com/">Recipe bots</a>. It allows you to enter a website URL and will go out and scrape the information on that page to generate you a Recipe Card. You should check it out!</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> I also really enjoyed building <a target="_blank" href="https://ourthoughts.herokuapp.com/"> Our Thoughts</a>. I built this after my first week of a coding bootcamp and it just made me excited for the future. Plus I really enjoyed messing around with the <a href="#">Twilio</a> api until I finally got it to send users texts.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">You can find more of my code & projects on <a target="_blank" href="https://github.com/dangerstephen">GitHub</a>.</p></div></div>');
                    $('.projectsOption2').addClass('hidden');
                    $('.projectsOption3').addClass('hidden');
                    $('.projectsOption4').addClass('hidden');
                    $('.nextGroup1').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);


                } else {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Well this is awkward. But there was an error.</p></div></div>');
                }

            };


        });

        $('.nextGroup2').on('click', function(e) {
            var clientResponse2 = $('#chatWindow').find('#clientResponse2').val();
            e.preventDefault();
            var errors = {};
            errors = checkResponse2();
            var newActive = $('.group[data-active]').next('.group');
            if ($.isEmptyObject(errors)) {

                if (clientResponse2 === "About") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">You want to talk about me? Aww 😊 I am flatterd. Im Stephen Dangerfield, a recent transplant to the bay area. When behind a computer Im a software engineer, with a foucus on Full Stack Web Development. I love learning new things and challanging myself to do things outside of my comfort zone.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> When I manage to escape the computer screen I become a Full Time Adventurer. Gowing up in Utah I came to fall in love with everything outdoors. So I now spend my free time in it. From climbing big rocks, trail running, to even just going new places to experience new things.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Looking to hire? Lucky for you Im currently seeking my next adventure. Lets chat!</p></div></div>');
                    $('.aboutOption3').addClass('hidden');
                    $('.aboutOption4').addClass('hidden');
                    $('.nextGroup2').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);

                } else if (clientResponse2 === "Contact") {
                    newActive.append('<form class="contactForm"><div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Okay {name}! Id love to chat. But first I need to know a few things. Whats your email?</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Also I just need a your brief message.</p></div></div><div class="message messageUser1"><div class="bubble bubbleUser"><p class="chatText"><div class="chat-input"><div class="chat-input"><input type="email" class="inputChatText" id="email" name="email" placeholder="enter your email" data-required/></div><textarea type="text" class="inputChatText" id="message" name="message" placeholder="enter your message" data-required/></div></p><img type="submit" class="sendEmail" src="img/up.png"></img></div></div></form>');
                    $('.contactOption3').addClass('hidden');
                    $('.contactOption4').addClass('hidden');
                    $('.nextGroup2').addClass('hidden');
                    pageMover();
                    $(document).on('click', '.sendEmail', function(e) {
                        e.preventDefault();
                        var errors = {};
                        errors = checkEmail();
                        if ($.isEmptyObject(errors)) {
                            $.ajax({
                                method: 'POST',
                                url: '//formspree.io/me@stephendangerfield.com',
                                data: $('#contact-form').serialize(),
                                datatype: 'json'
                            });
                            $('.sendEmail').addClass('hidden');
                            newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText"> Thanks! Your email has been sent, Ill get back to you as soon as possible!</p></div></div>');
                            e.preventDefault();
                            setTimeout(pageMover(), 3000);
                        } else {
                            return false;
                        };
                    })
                } else if (clientResponse2 === "Experience") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Thanks for asking! Most Recently I was a Full Stack Web Developer at <a target="_blank" href="https://generalassemb.ly/">General Assembly</a>. During my here I worked one developing applications during short 1 week deadlines both on teams and individually.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Before GA I was a Technician Manager for <a target="_blank" href="https://www.fluenthome.com/">Fluent Home</a>. A few of my rolls here included technician training, recruiting and inventory managment. For diffrent offices accros the US.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Want to know more still? Feel free to check my <a target="_blank" href="https://www.linkedin.com/in/stephen-dangerfield-a46372128/">LinkedIn</a> or <a href="stephen_dangerfield.pdf" download>download my resume</a></p></div></div>');
                    $('.experienceOption3').addClass('hidden');
                    $('.experienceOption4').addClass('hidden');
                    $('.nextGroup2').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);

                } else if (clientResponse2 === "Projects") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">One of my personal projects I have enjoyed most is <a target="_blank" href="https://recipebots.herokuapp.com/">Recipe bots</a>. It allows you to enter a website URL and will go out and scrape the information on that page to generate you a Recipe Card. You should check it out!</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> I also really enjoyed building <a target="_blank" href="https://ourthoughts.herokuapp.com/"> Our Thoughts</a>. I built this after my first week of a coding bootcamp and it just made me excited for the future. Plus I really enjoyed messing around with the <a href="#">Twilio</a> api until I finally got it to send users texts.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">You can find more of my code & projects on <a target="_blank" href="https://github.com/dangerstephen">GitHub</a>.</p></div></div>');
                    $('.projectsOption3').addClass('hidden');
                    $('.projectsOption4').addClass('hidden');
                    $('.nextGroup2').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);

                }

            };


        });

        $('.nextGroup3').on('click', function(e) {
            var clientResponse3 = $('#chatWindow').find('#clientResponse3').val();
            e.preventDefault();
            var errors = {};
            errors = checkResponse3();
            var newActive = $('.group[data-active]').next('.group');

            if ($.isEmptyObject(errors)) {

                if (clientResponse3 === "About") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">You want to talk about me? Aww 😊 I am flatterd. Im Stephen Dangerfield, a recent transplant to the bay area. When behind a computer Im a software engineer, with a foucus on Full Stack Web Development. I love learning new things and challanging myself to do things outside of my comfort zone.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> When I manage to escape the computer screen I become a Full Time Adventurer. Gowing up in Utah I came to fall in love with everything outdoors. So I now spend my free time in it. From climbing big rocks, trail running, to even just going new places to experience new things.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Looking to hire? Lucky for you Im currently seeking my next adventure. Lets chat!</p></div></div>');
                    $('.aboutOption4').addClass('hidden');
                    $('.nextGroup3').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);
                } else if (clientResponse3 === "Contact") {
                    newActive.append('<form class="contactForm"><div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Okay {name}! Id love to chat. But first I need to know a few things. Whats your email?</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Also I just need a your brief message.</p></div></div><div class="message messageUser1"><div class="bubble bubbleUser"><p class="chatText"><div class="chat-input"><div class="chat-input"><input type="email" class="inputChatText" id="email" name="email" placeholder="enter your email" data-required/></div><textarea type="text" class="inputChatText" id="message" name="message" placeholder="enter your message" data-required/></div></p><img type="submit" class="sendEmail" src="img/up.png"></img></div></div></form>');
                    $('.contactOption4').addClass('hidden');
                    $('.nextGroup3').addClass('hidden');
                    pageMover();
                    $(document).on('click', '.sendEmail', function(e) {
                        e.preventDefault();
                        var errors = {};
                        errors = checkEmail();
                        if ($.isEmptyObject(errors)) {
                            $.ajax({
                                method: 'POST',
                                url: '//formspree.io/me@stephendangerfield.com',
                                data: $('#contact-form').serialize(),
                                datatype: 'json'
                            });
                            $('.sendEmail').addClass('hidden');
                            newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText"> Thanks! Your email has been sent, Ill get back to you as soon as possible!</p></div></div>');
                            e.preventDefault();
                            setTimeout(pageMover(), 3000);
                        } else {
                            return false;
                        };
                    })
                } else if (clientResponse3 === "Experience") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Thanks for asking! Most Recently I was a Full Stack Web Developer at <a target="_blank" href="https://generalassemb.ly/">General Assembly</a>. During my here I worked one developing applications during short 1 week deadlines both on teams and individually.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Before GA I was a Technician Manager for <a target="_blank" href="https://www.fluenthome.com/">Fluent Home</a>. A few of my rolls here included technician training, recruiting and inventory managment. For diffrent offices accros the US.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Want to know more still? Feel free to check my <a target="_blank" href="https://www.linkedin.com/in/stephen-dangerfield-a46372128/">LinkedIn</a> or <a href="stephen_dangerfield.pdf" download>download my resume</a></p></div></div>');
                    $('.experienceOption4').addClass('hidden');
                    $('.nextGroup3').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);
                } else if (clientResponse3 === "Projects") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">One of my personal projects I have enjoyed most is <a target="_blank" href="https://recipebots.herokuapp.com/">Recipe bots</a>. It allows you to enter a website URL and will go out and scrape the information on that page to generate you a Recipe Card. You should check it out!</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> I also really enjoyed building <a target="_blank" href="https://ourthoughts.herokuapp.com/"> Our Thoughts</a>. I built this after my first week of a coding bootcamp and it just made me excited for the future. Plus I really enjoyed messing around with the <a href="#">Twilio</a> api until I finally got it to send users texts.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">You can find more of my code & projects on <a target="_blank" href="https://github.com/dangerstephen">GitHub</a>.</p></div></div>');
                    $('.projectsOption4').addClass('hidden');
                    $('.nextGroup3').addClass('hidden');
                    pageMover();
                    setTimeout(pageMover(), 3000);
                }


            };


        });

        $('.nextGroup4').on('click', function(e) {
            var clientResponse4 = $('#chatWindow').find('#clientResponse4').val();
            e.preventDefault();
            var errors = {};
            errors = checkResponse4();
            var newActive = $('.group[data-active]').next('.group');
            if ($.isEmptyObject(errors)) {

                if (clientResponse4 === "About") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">You want to talk about me? Aww 😊 I am flatterd. Im Stephen Dangerfield, a recent transplant to the bay area. When behind a computer Im a software engineer, with a foucus on Full Stack Web Development. I love learning new things and challanging myself to do things outside of my comfort zone.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> When I manage to escape the computer screen I become a Full Time Adventurer. Gowing up in Utah I came to fall in love with everything outdoors. So I now spend my free time in it. From climbing big rocks, trail running, to even just going new places to experience new things.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Looking to hire? Lucky for you Im currently seeking my next adventure. Lets chat!</p></div></div>');
                    newActive.append('<div class="message messageClient3"><div class="bubble bubbleClient"><p class="chatText"> Gotta run! Enjoy the rest of the site and have a great day! Let me know if you have questions.</p></div></div>');
                    $('.wontChat').addClass('hidden');
                    $('section').removeClass('hidden');
                    $('.nextGroup4').addClass('hidden');
                    pageMover();
                } else if (clientResponse4 === "Contact") {
                    newActive.append('<form class="contactForm"><div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">Okay {name}! Id love to chat. But first I need to know a few things. Whats your email?</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Also I just need a your brief message.</p></div></div><div class="message messageUser1"><div class="bubble bubbleUser"><p class="chatText"><div class="chat-input"><div class="chat-input"><input type="email" class="inputChatText" id="email" name="email" placeholder="enter your email" data-required/></div><textarea type="text" class="inputChatText" id="message" name="message" placeholder="enter your message" data-required/></div></p><img type="submit" class="sendEmail" src="img/up.png"></img></div></div></form>');
                    $('.nextGroup4').addClass('hidden');
                    pageMover();
                    $(document).on('click', '.sendEmail', function(e) {
                        e.preventDefault();
                        var errors = {};
                        errors = checkEmail();
                        if ($.isEmptyObject(errors)) {
                            $.ajax({
                                method: 'POST',
                                url: '//formspree.io/me@stephendangerfield.com',
                                data: $('#contact-form').serialize(),
                                datatype: 'json'
                            });
                            $('.sendEmail').addClass('hidden');
                            $('.wontChat').addClass('hidden');
                            $('section').removeClass('hidden');
                            newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText"> Thanks! Your email has been sent, Ill get back to you as soon as possible!</p></div></div>');
                            newActive.append('<div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> Gotta run! Enjoy the rest of the site and have a great day! Let me know if you have questions.</p></div></div>');
                            e.preventDefault();
                            setTimeout(pageMover(), 3000);
                        } else {
                            return false;
                        };
                    })
                } else if (clientResponse4 === "Experience") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText"> Gotta run! Enjoy the rest of the site and have a great day! Let me know if you have questions.</p></div></div>');
                    newActive.append('<div class="message messageClient3"><div class="bubble bubbleClient"><p class="chatText">Thanks for asking! Most Recently I was a Full Stack Web Developer at <a target="_blank" href="https://generalassemb.ly/">General Assembly</a>. During my here I worked one developing applications during short 1 week deadlines both on teams and individually.</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText">Before GA I was a Technician Manager for <a target="_blank" href="https://www.fluenthome.com/">Fluent Home</a>. A few of my rolls here included technician training, recruiting and inventory managment. For diffrent offices accros the US.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">Want to know more still? Feel free to check my <a target="_blank" href="https://www.linkedin.com/in/stephen-dangerfield-a46372128/">LinkedIn</a> or <a href="stephen_dangerfield.pdf" download>download my resume</a></p></div></div>');
                    $('.wontChat').addClass('hidden');
                    $('section').removeClass('hidden');
                    $('.nextGroup4').addClass('hidden');
                    pageMover();
                } else if (clientResponse4 === "Projects") {
                    newActive.append('<div class="message messageClient"><div class="bubble bubbleClient"><p class="chatText">One of my personal projects I have enjoyed most is <a target="_blank" href="https://recipebots.herokuapp.com/">Recipe bots</a>. It allows you to enter a website URL and will go out and scrape the information on that page to generate you a Recipe Card. You should check it out!</p></div></div><div class="message messageClient1"><div class="bubble bubbleClient"><p class="chatText"> I also really enjoyed building <a target="_blank" href="https://ourthoughts.herokuapp.com/"> Our Thoughts</a>. I built this after my first week of a coding bootcamp and it just made me excited for the future. Plus I really enjoyed messing around with the <a href="#">Twilio</a> api until I finally got it to send users texts.</p></div></div><div class="message messageClient2"><div class="bubble bubbleClient"><p class="chatText">You can find more of my code & projects on <a target="_blank" href="https://github.com/dangerstephen">GitHub</a>.</p></div></div>');
                    newActive.append('<div class="message messageClient3"><div class="bubble bubbleClient"><p class="chatText"> Gotta run! Enjoy the rest of the site and have a great day! Let me know if you have questions.</p></div></div>');
                    $('.wontChat').addClass('hidden');
                    $('section').removeClass('hidden');
                    $('.nextGroup4').addClass('hidden');
                    pageMover();
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



    // input fields
    $('.inputOption').on('click', function(e) {
        e.preventDefault();
        var input = $($(this).parent().attr('data-field'));
        input.val($(this).text());
        var optionActive = $(this).parent('.input').find('[optionActive]');
        optionActive.removeAttr('optionActive');
        $(this).attr('optionActive', '');
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
    if ($('input[name=user-name]').attr('placeholder')) {
        // get the placeholder text
        $('input[name=user-name]').attr('placeholder', '');
    } else {
        $('input[name=user-name]').attr('placeholder', 'Enter your name');
    }
    setTimeout(nameBlinker, 1200);
};
