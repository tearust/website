For internal documents, we can build from the md file to html. 
it will be stored in rpi at /var/www/html/docs

First checkout the rpi branch
ssh into Rpi

cd website
cd frontend
sudo node shell/docs.cjs


the compiled html files should be inside /var/www/html/docs
Run nginx show the files in browser
