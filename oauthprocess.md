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

https://rahulguptachatapp.herokuapp.com/?code=AQBi1FSk6pN2JP8z5lHi_PHqvN6GB80amaKJ4VYbswr0V9g7BTWOYEwPsMSF7uPm80pgOBgrJm3arkbcEFJFw63EfyaeHiPi-U3LlnDKz6ECuMTU5WFygXdZomdZHctIqaVJKNpjOJh59NqIj1idYgpRfeDkAy1celoAZ9EXdv8oFYJ0xk22R0lfmQCQR2jMXv9l6QWeACgKbsVGwMyrzCnmnp-c04D4xP1gPIdRYEpH1s2h9u-CBz0IJLqRKJMC7BNupUGqGqt88kJvblFUU2dPGEFreqlGAr6dHZuIGU08T0P1NwAL9IMtu_NFTUrN9pHv7b_T0Wfc8fqaF_zTAw_3#_=_

3. 
     to reconfirm this code is sent by facebook or not. we get access token

https://graph.facebook.com/v2.8/oauth/access_token?
   client_id={app-id}
   &redirect_uri={redirect-uri}
   &client_secret={app-secret}
   &code={code-parameter}

https://graph.facebook.com/v2.8/oauth/access_token?client_id=226544714462643&redirect_uri=https://rahulguptachatapp.herokuapp.com/
&client_secret=95a417b38596a821f9507099cc6c2bfd&code=AQBi1FSk6pN2JP8z5lHi_PHqvN6GB80amaKJ4VYbswr0V9g7BTWOYEwPsMSF7uPm80pgOBgrJm3arkbcEFJFw63EfyaeHiPi-U3LlnDKz6ECuMTU5WFygXdZomdZHctIqaVJKNpjOJh59NqIj1idYgpRfeDkAy1celoAZ9EXdv8oFYJ0xk22R0lfmQCQR2jMXv9l6QWeACgKbsVGwMyrzCnmnp-c04D4xP1gPIdRYEpH1s2h9u-CBz0IJLqRKJMC7BNupUGqGqt88kJvblFUU2dPGEFreqlGAr6dHZuIGU08T0P1NwAL9IMtu_NFTUrN9pHv7b_T0Wfc8fqaF_zTAw_3#_=_


4. after hitting above url you will get the access token. 

{"access_token":"EAADOCgfdgfo07NbMBADI9S4h3FUeuVVfy6633mZC4qLBKZB4yzLHdyGFiH2ZAoy52DVoiNqX25ctbCvGJtP6HCmdWEjRkWMZAevsuUQ0n1dsduM6xSPAxu3uEs1Lj8T68gj2xFYBCZAaAnQYRWHzcDt8SVPZAPsyeFPJCAZD",
"token_type":"bearer",
"expires_in":5182179}    


5. obtain id by this url 

https://graph.facebook.com/me?access_token=EAADOCo07NbMBALTlMNgWQyWPfcvgelfpxmlV2bJjiJUaMDdrZBa3ffxofddhjJfs2VQxddbgF8gVQeKw5NikaKTZC9ZCPmyVfZAhAgWDHlsdQ2oJZBa9B3sFo139qVgbyLaQ33ldlNMTw8HcrBgpKosdj3PbcXZBYZD

{
   "name": "Rahul Gupta",
   "id": "752443924904662"
}

6. 

GET /v2.8/{user-id}/picture HTTP/1.1
Host: graph.facebook.com

graph.facebook.com/v2.8/752443924904662/picture

refer to this
https://developers.facebook.com/docs/graph-api/using-graph-api/


me/bgolub?fields=id,name,picture
