in oauth2 process we first get code from facebook in callback url(url mentioned by us)

refer to this URL 
https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2

1.

https://www.facebook.com/v2.8/dialog/oauth?
 client_id={app-id}
  &redirect_uri={redirect-uri}
client_id = 226544714462643
 &redirect_uri = https://www.facebook.com/connect/login_success.html

make sure this url is set to ur facebooklogin callback url( App Dashboard, clicking Facebook Login in the right-hand menu, 
and checking the Valid OAuth redirect URIs in the Client OAuth Settings section)
https://rahulguptachatapp.herokuapp.com/


hit this url 
https://www.facebook.com/v2.8/dialog/oauth?client_id=226544714462643&redirect_uri=https://rahulguptachatapp.herokuapp.com/


2. 

You can confirm that this URL is set for your app by going to the App Dashboard, clicking Facebook Login in the right-hand menu, 
and checking the Valid OAuth redirect URIs in the Client OAuth Settings section.

if user logged in successfully you will get tgis URL

https://rahulguptachatapp.herokuapp.com/?code=AQAakt2EPERrCrUMuUkbNJeI2SXkeS_8oSmbkwGQHDGOlsC2unBOF1sPGV_PPXIsyVbfOlWHho89YshkCYA9y3ottw7Wy9L8Op37yf6mksxq4nRMy7gbzfIU54jJGO3UqLQRt_UDnVS70MfVfMxg1L_2cs4oUoIpC2pIQNdLCQF1QnICsDew8X3ClHsRzIWOTVS342w5lWsdq_RXPwDYSNlRIBc29CCQK0oFV6Pc5jovTeaVEzVMeM6B9uQdB2smxgY7gnRu99-mT_f32XKCmg0J0G-X3rAJSLTtACQ159DNUNLeQ8wNRJsMr28dOfCJo7VwQ68HD0GM1ivWvtYUAA71#_=_

3. 
     to reconfirm this code is sent by facebook or not. we get access token

https://graph.facebook.com/v2.8/oauth/access_token?
   client_id={app-id}
   &redirect_uri={redirect-uri}
   &client_secret={app-secret}
   &code={code-parameter}

https://graph.facebook.com/v2.8/oauth/access_token?client_id=226544714462643&redirect_uri=https://rahulguptachatapp.herokuapp.com/
&client_secret=9fgfgd17bfgdg596a821f9507099cc6c2bfd&code=AQA6oONucbbMTONHxcC709XVxF0BpdW5Ns5ltwPGfsQ8GFsGx2o6UmIWo6y2MD3rhuJx79oM2ByjW7A8nlqK0YbMLL1_bqXz7dkofiSJU3ZxygDFMGcJwx0RpUbW4b5ESq_AKddn0d5LhMzCN9DmTU3OWhjLW5zIhP39R7veJT79ynOMYTUNms-nXIm82PLRnm7ky8VKYBoEWVMb8dFvTqQgGeSD0D8e1tSUufGrGpeHhbMjEMkaxBiroEdl2H1hHWc8OR13TWG4eJZo1e7ZYeeTO9Qo7_W3mfTq4mWpqdhVpY1VKh5adOg-oNPRh4gveMCagWzFg3-3OPA8NEIFMDpN#_=_


4. after hitting above url you will get the access token. 

{"access_token":"EAADOCgfdgfo07NbMBADI9S4h3FUeuVVfy6633mZC4qLBKZB4yzLHdyGFiH2ZAoy52DVoiNqX25ctbCvGJtP6HCmdWEjRkWMZAevsuUQ0n1dsduM6xSPAxu3uEs1Lj8T68gj2xFYBCZAaAnQYRWHzcDt8SVPZAPsyeFPJCAZD",
"token_type":"bearer",
"expires_in":5182179}    


5. 

GET /v2.8/{user-id}/picture HTTP/1.1
Host: graph.facebook.com

refer to this
https://developers.facebook.com/docs/graph-api/using-graph-api/

