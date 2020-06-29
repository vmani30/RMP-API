# RMP-API
Scrapped https://www.ratemyprofessors.com for fetching data of professors on this website. Created a simple API to use with this data

## Getting Started

### Prerequisites
Node.js and npm

### Installing
For running on your local machine or any hosting server for development and testing purpose follow the below steps.

1) Clone this repo with ```git clone https://github.com/vmani273/RMP-API.git```
2) Run ```Change Directory``` to change directory
3) Run ```npm install``` to install all neccesary packages

### Running the Server
```node index.js```


## APIs Endpoints

#### /
intro URL `http://localhost:3000/`

#### /professor
* `fname` : first name of professor
* `lname` : last name of professor
* `university` : university of professor

professor URL: ```http://localhost:3000/professor?fname=<first_name>&lname=<last_name>&university=<university>```

## Example Output

