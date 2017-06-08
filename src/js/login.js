$(function(){
    getCard(true);

    /**********
     * START TEST
     ***********/

    var data ={
        "error": false,
        "details": {
            "username": "korshunov.ev",
            "user_id": 21086,
            "first_name": "Иван",
            "last_name": "Петров",
            "middle_name": "Валерьевич",
            "main_email": null,
            "icon_profile":"img/val.jpg",
            "structure":[
                {
                    "type": "студент",
                    "number": "1698542",
                    "dep": "ИКНТ",
                    "sub_dep": "130120/25",
                    "email": null
                },
                {
                    "type": "старший преподаватель",
                    "number": "01256",
                    "dep": "ИКНТ",
                    "sub_dep": "КИТ",
                    "email": null
                }
            ],
            "meta": {
                "post_address": null,
                "phone": null,
                "date_of_birth": null
            },
            "permissions": null
        },
        "authorize": true
    };
    showCard();
    $("#card").html(
        $("#cardTemplate").render(data.details)
    );

    if(data.details.icon_profile == null){
        showAvatar(data.details.first_name+" "+data.details.last_name);
    }
    else{
        cropImg($('.person_img>img'));
    }

    /**********
     * END TEST
     ***********/

    $("#enter").on('submit', function (e) {
        e.preventDefault();
        doLogin();
    });

    $("#doLogin").click(function(){
        doLogin()
    });

    $("#doCancel").click(function(){
        doCancel()
    });

    $("#doLogout").click(function(){
        doLogout()
    });

    $('.owl-carousel').owlCarousel({
        items:1,
        pagination: true,
        nav:true,
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        //animateOut: 'zoomOut',
        //animateIn: 'zoomIn',
        smartSpeed:450,
        navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });

});

//функция распознавания лиц

function faceDetectionJquery(options, callback) {
    $('.person_img>img').faceDetection({
        complete: function(faces) {
            if (faces === false) {
                return console.log('jquery.facedetection returned false');
            }
            //console.log('jquery.facedetection detected ' + faces.length + ' faces', faces);
            options.boost = Array.prototype.slice.call(faces, 0).map(function(face) {
                return {
                    x: face.x,
                    y: face.y,
                    width: face.width,
                    height: face.height,
                    weight: 1.0
                };
            });

            callback();
        }
    });
}

//функция умной обрезки Фотографии

function cropImg(crImg){
    if (crImg.length){
        var processed = {};
        var options = {
            debug: true,
            ruleOfThirds:true,
            width: 250,//запас качества
            height: 250//запас качества
        };
        crImg.on('load',function() {
            window.setTimeout(function() {
                    var img = this;
                    if (processed[img.src]) return;
                    processed[img.src] = true;

                faceDetectionJquery(options, function() { //если медленно можно закомментировать
                    //console.log(options);
                    smartcrop.crop(img, options, function(result) {
                        // console.log(img.src, result);
                        var crop = result.topCrop;
                        var canvas = $('<canvas>')[0];
                        var ctx = canvas.getContext('2d');
                        canvas.width = options.width;
                        canvas.height = options.height;
                        ctx.drawImage(img, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);
                        $(img).hide().after(canvas);
                    });
                }); //если медленно можно закомментировать

          }.bind(this), 100);
        });
        if (this.complete) {
            $(this).load();
        }
    }
}

//функция генерации аватара из ФИО
function showAvatar(name){
    if (arguments.length) {

        var colours = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];

        var nameSplit = name.split(" "),
            initials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();

        var charIndex = initials.charCodeAt(0) - 65,
            colourIndex = charIndex % 19;

        var canvas = document.getElementById("canvas-img");
        var context = canvas.getContext("2d");

        var canvasWidth = $(canvas).data("w"),
            canvasHeight = $(canvas).data("h"),
            canvasCssWidth = canvasWidth,
            canvasCssHeight = canvasHeight;

        if (window.devicePixelRatio) {
            $(canvas).attr("width", canvasWidth * window.devicePixelRatio);
            $(canvas).attr("height", canvasHeight * window.devicePixelRatio);
            $(canvas).css("width", canvasCssWidth);
            $(canvas).css("height", canvasCssHeight);
            context.scale(window.devicePixelRatio, window.devicePixelRatio);
        }

        context.fillStyle = colours[colourIndex];
        context.fillRect (0, 0, canvas.width, canvas.height);
        context.font = "50px Arial";
        context.textAlign = "center";
        context.fillStyle = "#FFF";
        context.fillText(initials, canvasCssWidth / 2, canvasCssHeight / 1.5);
    } else {
        console.log('Function has no arguments passed!');
    }
}

function showProgress() {
    $("#loader").show();
    $("#enter").hide();
    $("#card").hide();
    $("#enter_alert").hide();
}

function showEnter() {
    $("#loader").hide();
    $("#enter").show();
    $("#card").hide();
    $("#card").show();
    $("#enter_alert").hide();
}

function showCard() {
    $("#loader").hide();
    $("#enter").hide();
    $("#card").show();
    $("#enter_alert").hide();
}

function showAlert(Status, Text) {

    $("#enter_alert").show();
    if (Status == 401) {
        $(".form_wrap").addClass("swing animated");//анимация формы
        $("#enter_alert").text("Неверный логин или пароль!");
    }if (Status == 0) {
        $("#enter_alert").text("Время ожидания истекло!");
        $(".form_wrap").addClass("swing animated");//анимация формы
    }else{
        console.log(Status, Text);
        $(".form_wrap").addClass("swing animated");
        $("#enter_alert").text("Ошибка на сервере!");//анимация формы
    }
}

function getCard(isFirst) {

    showProgress();

    var reqInfo = $.ajax({
        url: "/api/v1/login2/info",
        contentType: 'application/json; charset=utf-8',
        method: "get",
        dataType: "json",
        timeout: 10000
    });

    reqInfo.done(function (data) {

        var params= get_params(window.location.search);

        var back_url = params["back_url"];

        if (back_url) {

            back_url = decodeURIComponent(back_url);
            redirect(back_url);
            return
        }

        showCard();
        $("#card").html(
            $("#cardTemplate").render(data.details)
        );

        if(data.details.icon_profile == null){
            showAvatar(data.details.first_name+" "+data.details.last_name);
        }
        else{
            cropImg($('.person_img>img'));
        }
    });

    reqInfo.fail(function (httpObj) {

        showEnter();
        if (!isFirst) showAlert(httpObj.status, httpObj.responseText);
    });
}

function doLogin() {

    showProgress();

    var user = $("#user").val();
    var password = $("#password").val();

    $.ajax({
        url: "/api/v1/login2/login",
        data: JSON.stringify({
            "user": user,
            "password": password
        }),
        contentType: 'application/json; charset=utf-8',
        method: "post",
        dataType: "json",
        timeout: 10000
    })
        .done(function (data) {
            getCard(false)
        })
        .fail(function (httpObj) {

            showEnter();
            showAlert(httpObj.status, httpObj.responseText)
        });
}

function doLogout() {

    showProgress();

    $.ajax({
        url: "/api/v1/login2/logout",
        contentType: 'application/json; charset=utf-8',
        method: "get",
        dataType: "json",
        timeout: 10000
    })
        .done(function (data) {
            getCard(true)
        })
        .fail(function (httpObj) {

            showEnter();
            showAlert(httpObj.status, httpObj.responseText)
        });
}

function doCancel() {

    var params= get_params(window.location.search);

    var back_url = params["back_url"];

    if (back_url) {

        back_url = decodeURIComponent(back_url);

        var parms_back_url = get_params(back_url);
        if (sizeObj(parms_back_url) === 0 ) {
            back_url = back_url + "?"
        } else {
            back_url = back_url + "&"
        }
        back_url = back_url + "isCancel=yes";

        redirect(back_url);
    }
}

function get_params(url) {
    var vars = {};
    url.replace( location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    return vars;
}

function redirect (url) {
    var ua        = navigator.userAgent.toLowerCase(),
        isIE      = ua.indexOf('msie') !== -1,
        version   = parseInt(ua.substr(4, 2), 10);

    // Internet Explorer 8 and lower
    if (isIE && version < 9) {
        var link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
        link.click();
    }

    // All other browsers can use the standard window.location.href (they don't lose HTTP_REFERER like Internet Explorer 8 & lower does)
    else {
        window.location.href = url;
    }
}

function sizeObj(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}