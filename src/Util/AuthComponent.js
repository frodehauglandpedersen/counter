import React from 'react';
let loggedIn = false;
    
class AuthComponent extends React.Component {
    

    componentDidMount() {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '556953864649624',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.11'
            });

            window.FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                  // the user is logged in and has authenticated your
                  // app, and response.authResponse supplies
                  // the user's ID, a valid access token, a signed
                  // request, and the time the access token 
                  // and signed request each expire
                  var uid = response.authResponse.userID;
                  var accessToken = response.authResponse.accessToken;
                  console.log("Logged in");
                    loggedIn=true;
                    console.log(loggedIn);
                  return loggedIn;
                } else if (response.status === 'not_authorized') {
                  // the user is logged in to Facebook, 
                  // but has not authenticated your app
                  console.log("Not authenticated");
                } else {
                  console.log("not logged in");
                  return loggedIn=false;
                }
               });
        }.bind(this);

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    renderAction(){
        if (loggedIn === true){
            console.log(loggedIn);
            return <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
         }  
         return <div>testFrode</div>;
    }

    render() {
        return this.renderAction();
    }

}

export default AuthComponent;