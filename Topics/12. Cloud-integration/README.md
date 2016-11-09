<!-- section start -->
<!-- attr: { id:'', class:'slide-title', showInPresentation:true, hasScriptWrapper:true } -->
# App deployment in Cloud
## Heroku NodeJS Cloud Server
<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic00.png" style="top:59.17%; left:57.20%; width:46.60%; z-index:-1" /> -->
<article class="signature">
	<p class="signature-course">Learning & Development</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</article>




<!-- section start -->
<!-- attr: { id:'', showInPresentation:true, hasScriptWrapper:true } -->
# App Deployment in Cloud
- Register in http://heroku.com
- Install from https://toolbelt.heroku.com/
  - **Heroku** **Toolbelt**
  - Gives you **"****heroku****"**command
- User **"node --version"**and **"****npm****--version"**
  - And put them in **"engines"**– **"****package.json****"**
- Add **"****Procfile****"**to the project
  - Write **"web: node****{file}****.****js****"**


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# App Deployment in Cloud
- Change port to **process.env.PORT**
  - You can configure it for every environment
- Create **database** in **MongoDb** Cloud
  - **MongoLab** for example
  - Create **users** too
  - Get the **connection string**
- Set the **MongoDb** connection
    - You can configure it for every environment


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# App Deployment in Cloud
- Set local "**NODE_ENV"**
- Initialize new git repository, add files, commit
- Login to heroku with **"****heroku****login"**
- Create app with **"****heroku****create****{name}****"**
- Configure environment with**"****heroku** **config:set****NODE_ENV={****env****}"**
- Deploy with **"****git****push****heroku****master"**
- Use **"****heroku****logs"** and **"****heroku****open"** for help


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# App Deployment in Cloud
- If troubles:
  - Try to add the public keys - **"****heroku** **keys:add****"**
  - If you do not have public key – **"****ssh-keygen****"**
  - Check out keys with **"****heroku****keys"**
  - Try to clear them first with **"****heroku** **keys:clear****"**
  - Try copying the keys into **git****repository**
  - Try the same procedure through **git****bash**


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# App Deployment in Cloud
- http://academy.telerik.com




