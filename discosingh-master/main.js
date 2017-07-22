var stoprunning;
        function swapcolor() {
            var elem = document.querySelector('#box1');
            if (elem.className == "white") {
                $('#box1').removeClass('white').addClass('red');
                $('#box2').removeClass('white').addClass('yellow');
                $('#box3').removeClass('white').addClass('blue');
                $('#box4').removeClass('white').addClass('green');
                //console.log("done1")

            }
            else if (elem.className == "red") {
                $('#box1').removeClass('red').addClass('green');
                $('#box2').removeClass('yellow').addClass('red');
                $('#box3').removeClass('blue').addClass('yellow');
                $('#box4').removeClass('green').addClass('blue');
                //console.log("done2")

            }

            else if (elem.className == "green") {
                $('#box1').removeClass('green').addClass('blue');
                $('#box2').removeClass('red').addClass('green');
                $('#box3').removeClass('yellow').addClass('red');
                $('#box4').removeClass('blue').addClass('yellow');
                //console.log("done3")

            }
            else if (elem.className == "blue") {
                $('#box1').removeClass('blue').addClass('yellow');
                $('#box2').removeClass('green').addClass('blue');
                $('#box3').removeClass('red').addClass('green');
                $('#box4').removeClass('yellow').addClass('red');
                //console.log("done4")

            }

            else if (elem.className == "yellow") {
                $('#box1').removeClass('yellow').addClass('red');
                $('#box2').removeClass('blue').addClass('yellow');
                $('#box3').removeClass('green').addClass('blue');
                $('#box4').removeClass('red').addClass('green');
                //console.log("done5")

            }


            else {
                $('#box1').removeClass('red').addClass('white');
                $('#box2').removeClass('yellow').addClass('white');
                $('#box3').removeClass('blue').addClass('white');
                $('#box4').removeClass('green').addClass('white');
                //console.log("done6")

            }
        }
        function swapwithtime() {
             stoprunning = setInterval(function () {
                swapcolor()
            }, 200);
        }

        function stopwithtime() {
            clearInterval(stoprunning);
        }

        $('.play-icon').on('click', function () {

            var song = document.querySelector('audio');
            if (song.paused == true) {
                song.play();
                console.log("playing")
                swapwithtime()
            }


            else {
                song.pause();
                console.log('Pausing')
                stopwithtime()


            }
        });