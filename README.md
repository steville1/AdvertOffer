# AdvertOffer


Description<br/>
Creating Advertisement and Offers while Advertisement can have many offers, Backend in Laravel framework(Php) while Front end is a React Application <br />
<br/>
<br/>
<br/>

Requirements<br/>
node >= 12 <br/>
npm >= 6 <br/>
PHP >= 7.4.23<br/>
Laravel >= 8.58.0<br/>
<br />
Laravel Installation<br/>
Install Composer
<br/>
Clone the project, navigate to the Backend directory<br />
Database Configuration<br/>
The application uses Mysql Database for storage<br/>
Change the .env file to your Mysql Settings<br/>
DB_CONNECTION=mysql<br/>
DB_HOST=localhost<br/>
DB_PORT=3306<br/>
DB_DATABASE=advertApp<br/>
DB_USERNAME=root<br/>
DB_PASSWORD=<br/>
<br/>
Save the file<br/>
In the command window on the backend directory, run (php artisan migrate)<br/>
Then run (php artisan serve) in the command window to start the application<br />
To run test (php artisan test) in the command window to run test<br />

Client Application<br/>
<br/>
navigate to the client directory<br />
On src directory, in config.js the path to the api endpoint is  "apiUrl": "http://127.0.0.1:8000/api", change it if the api is not running on that same url<br />
Save the file
<br />
On the command line in the client directory run (npm install) to install dependencies<br/>
On the command window in the client director run (npm start) to start the client application

