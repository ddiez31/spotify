(function() {
    var app = {
        url: null,
        inputUsername: null,
        inputPassword: null,
        color: null,
        connexion: [],
        init: function() {
            console.log("init ok");
            this.url = "../data/users.json";
            this.listener();
        },
        listener: function() {
            console.log("listener ok");
            $('#btnConnex').on('click', function() {
                app.getUsers(app.url);
            });
        },
        getUsers: function(url) {
            console.log("getUsers ok");
            $.ajax({
                url: url,
                success: this.connect,
                error: function() {
                    if (err) {
                        console.log(err);
                    }
                }
            })
        },
        connect: function(data) {
            console.log("connect ok");
            // console.log(data.Users);
            inputUsername = $("#inputUsername").val();
            inputPassword = $("#inputPassword").val();
            app.connexion.push({ username: inputUsername, password: inputPassword });
            // console.log(app.connexion);
            $.each(data.Users, function(i) {
                if (data.Users[i].username === inputUsername && data.Users[i].password === inputPassword) {
                    // console.log(data.Users[i].color);
                    app.fontColor(data.Users[i].color);
                } else {
                    return;
                }
            });
        },
        fontColor: function(color) {
            console.log("fontColor ok");
            // console.log(color);
            $("*").css("color", color);
        }
    }
    app.init();

})();