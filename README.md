# AdvertOffer


Description<br/>
Creating Advertisement and Offers while Advertisement can have many offers, Backend in Laravel framework(Php) while 

Back End is a Laravel Application <br />
Ensure You have Docker Installed<br/>
https://www.docker.com/products/docker-desktop<br/>
Open Terminal<br/>
Change Directory to the Backend Folder that contains the docker file<br/>
Type docker-compose up -d<br/>
Access the command line inside in docker by entering the following command:<br/>
Type docker-compose exec app bash<br/>
Type php artisan migrate<br/>
Type docker-compose start <br/>
The above will assign a port of 8000 to our Laravel application, visit http://localhost:8000 to access app

Client Application<br/>
<br/>
navigate to the client directory<br />
On src directory, in config.js the path to the api endpoint is  "apiUrl": "http://localhost:8000/api",<br />
Save the file
<br />

Front end is a React Application <br />
<br/>
To Start Up The React Application(Front End)
Ensure You have Docker Installed<br/>
https://www.docker.com/products/docker-desktop<br/>
Open Terminal<br/>
---Change Directory to the Client folder that contains the docker file<br/>
Run the following command to build the docker image<br/>
Type docker build -t advertclient . <br/>
run the following command to start the new docker container from the image buit in the previous step <br/>
Type docker run -d -p 70:3000 --name c1 advertclient <br/>
Open you favourite web browser and load the following url <br/>
http://localhost:70 <br/>
<br />
<br />
The application should come up


