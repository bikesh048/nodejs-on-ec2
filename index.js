var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('A Monk in Cloud'); //write a response to the client
  let result = 0;
  for (let i = 1; i <= 1000000; i++) {
    result += i;
  }
  // Introduce a 10-second delay to control CPU utilization rate
  sleep(10000); // Sleep for 10 seconds
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
