website for teaproject.org
In the document section, it reads from tea-docs repo and convert to HTML
# Run local website
## clone repo
git clone this repo to your local file system

## Confirm the tea-docs folder
Make sure that the tea-docs repo is also cloned and is the sibling with this website repo. 
that means they are at the same level in local folder structure. This is important, otherwise, the website cannot read tea-docs and won't show the documents on website.

## run backend
```
# assume you are in the root of repo
cd backend
npm i
npm start
```

## run frontend
```
# assume you are in the root of repo
cd frontend
npm i
npm start
```
Now the frontend should run at your http://localhost:3002
Please go to localhost:3002 in your browser, you should see the website.

Check the documents to make sure that the tea-docs repo also works fine.

## Compiling ../tea-docs md file to static html
The tea-docs repo contains all documents. Run the following command can compile all md files in tea-docs repo and stored in frontend/docs folder
```
cd frontend
node shell/docs.cjs

```
Check the static html files under frontend/docs
those static html is google bot friendly. 


### Local run for landing page
- make sure you have **docker** and **docker-compose** in local.

```
cd frontend
docker-compose -f local.yml up
```

- After docker image running. open browser and visit [http://127.0.0.1:3000/landingpage/preview_1/index.html](http://127.0.0.1:3000/landingpage/preview_1/index.html) to the landingpage.

- The landing page source code path is **frontend/landingpage/preview_1**. 
- After edit html or css. just refresh the browser to view the chaning.
