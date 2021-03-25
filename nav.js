var html = '<h1> Yanniecks Website </h1>\
    <nav>\
        <ul>\
            <li> <a href="index.html"><b> Home </b></a> </li>\
            <li>\
                <div class="dropdown">\
                    <button class ="dropbtn"><b> Mijn Hobbies </b></button>\
                    <div class="dropdown-content">\
                        <a href="HobbyTekenen.html"><b> Tekenen </b></a>\
                        <a href="HobbyProgrammeren.html"><b> Programmeren </b></a>\
                    </div>\
                </div>\
            </li>\
            <li> <a href="OverMij.html"><b> Over mij </b></a></li>\
            <!--<li> <a href="flexbox.html"><b> Flexbox </b></a></li>-->\
            <li> <a href="dobbelen.html"><b> Dobbelen </b></a></li>\
            <li>\
                <div class="dropdown">\
                    <button class ="dropbtn"><b> Havo 4 </b></button>\
                    <div class="dropdown-content">\
                        <a href="Havo4/Per1.html"><b> Periode 1 </b></a>\
                        <a href="Havo4/Per2.html"><b> Periode 2 </b></a>\
                        <a href="Havo4/Per3.html"><b> Periode 3 </b></a>\
                        <a href="Havo4/Per4.html"><b> Periode 4 </b></a>\
                    </div>\
                </div>\
            </li>\
            <li>\
                <div class="dropdown">\
                    <button class ="dropbtn"><b> Havo 5 </b></button>\
                    <div class="dropdown-content">\
                        <a href="Havo5/Per1.html"><b> Periode 1 </b></a>\
                        <a href="Havo5/Per2.html"><b> Periode 2 </b></a>\
                        <a href="Havo5/Per3.html"><b> Periode 3 </b></a>\
                    </div>\
                </div>\
            </li>\
        </ul>\
    </nav>'

document.getElementById('header1').innerHTML = html;