/**
 * Created by USER on 28/05/2017.
 */
(function () {

    activate();
    /**
     * Activate root function
     */
    function activate() {
        mainPageElements();
    }

    /**
     * Main Page html elements runtime creation
     */
    function mainPageElements() {
        var ele = document.getElementById('dynamic');
        ele.innerHTML = '';
        ele.innerHTML += '<section style="margin-top: 100px">' +
            '<button id="btn1" onclick="">Login</button>' + ' ' +
            '<button id="btn2">SignUp</button>' +
            '</section>';
        var loginbtnElement = document.getElementById('btn1');
        loginbtnElement.addEventListener("click", LoginPageElements, false);
        var signupbtnElement = document.getElementById('btn2');
        signupbtnElement.addEventListener("click", SignUpPageElements, false);
    }

    /**
     *
     * Login Page html elements runtime creations
     */

    function LoginPageElements() {
        var ele = document.getElementById('dynamic');
        ele.innerHTML = '';
        ele.innerHTML += '<section style="text-align: center">' +
            '<p>Login</p>' +
            '<input name="name" type="text" placeholder="Name"/>' + '<br>' +
            '<input name="password" type="password" placeholder="Password"/>' + '<br>' + '<br>' +
            '<button id="submitUpBtn">Submit Query</button>' + '<br>' + '<br>' +
            '<button id="backBtn" style="float:right">Back</button>' + '<br>' +
            '<div id="LoginStatus"></div>'
        '</section>';
        var submitBtnElement = document.getElementById('submitUpBtn');
        submitBtnElement.addEventListener("click", loginClick, false);
        var backtBtnElement = document.getElementById('backBtn');
        backtBtnElement.addEventListener("click", mainPageElements, false);
    }

    /**
     *
     * SignUp page html elements runtime creations
     */

    function SignUpPageElements() {
        var ele = document.getElementById('dynamic');
        ele.innerHTML = '';
        ele.innerHTML += '<section style="text-align: center">' +
            '<p>SignUp</p>' +
            '<input name="name" type="text" placeholder="Name"/>' + '<br>' +
            '<input name="email" type="email" placeholder="Email"/>' + '<br>' +
            '<input name="password" type="password" placeholder="Password"/>' + '<br>' + '<br>' +
            '<button id="submitUpBtn">Submit Query</button>' + '<br>' + '<br>' +
            '<button id="backBtn" style="float:right">Back</button>' + '<br>' +
            '</section>';
        var submitBtnElement = document.getElementById('submitUpBtn');
        submitBtnElement.addEventListener("click", insertData, false);
        var backtBtnElement = document.getElementById('backBtn');
        backtBtnElement.addEventListener("click", mainPageElements, false);
    }

    /**
     * Welcome page html elements runtime creations
     * @param username
     *
     */

    function WelcomePageElements(username) {
        var ele = document.getElementById('dynamic');
        ele.innerHTML = '';
        ele.innerHTML += '<section style="text-align: center">' +
            '<p>Welcome ' + username + '</p>' +
            '<button id="backBtn" style="float:right">Logout</button>' + '<br>' +
            '</section>';
        var backtBtnElement = document.getElementById('backBtn');
        backtBtnElement.addEventListener("click", mainPageElements, false);
    }

    /**
     * Login Validation Checking
     */

    function loginClick() {
        var name = document.getElementsByName('name')[0].value;
        var password = document.getElementsByName('password')[0].value;
        if (name !== '' && password !== '') {
            if (localStorage.getItem('users') !== null) {
                var users = JSON.parse((localStorage.getItem('users')));
                console.log(JSON.stringify(users));
                for (var i = 0; i < users.length; i++) {
                    console.log(users[i].username);
                    if (name === users[i].username && password === users[i].password) {
                        WelcomePageElements(users[i].username);
                        return;
                    } else {
                        var ele = document.getElementById('LoginStatus');
                        ele.innerHTML = '';
                        ele.innerHTML = '<p style="color: red;">Invalid username or password</p>'
                    }
                }
            } else {
                alert('Data not available');
            }
        }


    }

    //Storing user data in local storage memory

    function insertData() {
        var name = document.getElementsByName('name')[0].value;
        var email = document.getElementsByName('email')[0].value;
        var password = document.getElementsByName('password')[0].value;
        if (!email && !email && !password) {
            alert('fill the required details');
            return;
        } else {
            var user = {
                username: name,
                email: email,
                password: password
            };
            if (localStorage.getItem('users') === null) {
                var usersNewData = [];
                usersNewData.push(user);
                localStorage.setItem('users', JSON.stringify(usersNewData));
            } else {
                var usersOldData = JSON.parse(localStorage.getItem('users'));
                usersOldData.push(user);
                localStorage.setItem('users', JSON.stringify(usersOldData));
            }
        }
        alert('Done !!!');
        document.getElementsByName('name')[0].value = '';
        document.getElementsByName('email')[0].value = '';
        document.getElementsByName('password')[0].value = '';
    }


})();
