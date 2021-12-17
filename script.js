let showTime = document.getElementById('showTime')

        setInterval(function () {

            let currTime = new Date()
            let hours = currTime.getHours();
            let minute = currTime.getMinutes();
            let seconds = currTime.getSeconds();
            let AMPM = hours >= 12 ? 'PM' : 'AM';


            if (hours > 12) {
                hours = hours - 12;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minute < 10) {
                minute = '0' + minute;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            tim = ` ${hours} hrs : ${minute} min : ${seconds} sec ${AMPM}`;
            showTime.innerHTML = tim;

            // day

            let day = currTime.getDay();
            const dayarr = ['sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            let currday = dayarr[day];
            //console.log(dayarr[day])
            let date = currTime.getDate()
            //console.log(date)
            let year = currTime.getFullYear()
            // console.log(year)
            let showDay = document.getElementById('showDay')
            showDay.innerHTML = `${currday} ${date} , ${year}`;


        }, 1000);
