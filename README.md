<h1>Server Challenge <i>made by Arian Cejas  </i> </h1> 


 ```
 Hello world! here you have the whole information to run and test this App (made with Typescript, Node, and the ❤)  
```


<details>
<summary>
<label><b>What this App does? 🤔📋</b> </label>
</summary>
<br/>
<p>
👉 its a basic RESTApi with endpoints that allows you to register, login and get a list of users (only if you have a login token) 
</p>
<br/>
</details>
<br/>
<details>
<summary>
<b>How I 🏃 this application?</b>
</summary>
<br/>
<br/>

```
yarn
```
or
```
npm install 
```

<h2><b>then</b></h2>
<br/>

```
yarn start
```
or
```
npm start
```
<br/>
<p> if everything its all right, in the terminal you will see "Running on port <i> 4000 </i>"</p>

```
after of running the app, you have to you have to be sure that the application connected correctly with the Mongo database
```

## If you have any trouble, please be sure that the port in the DB_DEV_URI env variable matchs with the port that you have established in your MongoDB local

`by default, the port is 27017`

</details>
<br/>
<details>
<summary>
<b> The routes </b>

</summary>
<br/>

### /api/v1

   |Method|Route|Description|required Data|   
|----|-----|-------|  -------|    
|POST|_/auth/signin_|**its responds with a success or a failure**| userName, email, password en _req.body_
|POST|_/auth/login_|**its responds with public info about your account, and a JWT token**| email, password in _req.body_
|GET|_/users_|**A list with all the users**|Bearer token in authorization header _of /auth/login endpoint_


</details>
