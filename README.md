# Integrating Google Sign In with React application

Sample repo showing how to use Google's GAPI client with React

- Before you can integrate Google Sign-In into your website, you must create a *client ID*, which you need to call the sign-in API.(https://developers.google.com/identity/sign-in/web/sign-in)
- Create new project, wait... and open project
- Go to: Apis and services -> Credentials
- Create credentials -> OAuth client ID -> Configure consent screen (add required field) -> Select Web Application type
- Add http://localhost:3000 to Authorised Javascript origins
- Copy clientId to the app
- clear browser cache (in DevTools)