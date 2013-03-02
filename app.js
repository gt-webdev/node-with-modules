/* the first of these two lines will import the express module, much
 * like "import" does in python or java. I can define multiple variables
 * by ending a line with a comma and continuing in the same line or on
 * the next. In this case, I'm using the one "var" declaration to declare
 * two variable, the first one is used to import express and the second
 * executes the newly imported module as a function. Express is designed to
 * work as such, and when invoked it will return a javascript object that we
 * use to create our app.
 */
var express = require("express"),
    app = express();

/*
 * this function defines what happens when we go to 
 * http://localhost:8080/whatley in a browser (assuming you are
 * running the code on your local computer). The second parameter
 * to this function is a new function definition that take 2 parameter.
 * This function (called a "handler function") will redirect the browser
 * to "bing.com".
 */
app.get("/whatley", function(req, res){
  res.redirect("http://bing.com");
});

/*
 * same as previous function, but works on 
 * http://localhost:8080/dekel, this function just send a simple text
 * string as a response.
 */
app.get("/dekel", function(req, res){
  res.send("hammer in a while");
});

/*
 * this path uses "*" as a wildcard for all possible paths.
 * any path that isn't specified otherwise will redirect to this handler
 * function which just prints "can't touch this" back to the user.
 */
app.get("*", function(req, res){
  res.send("can't touch this");
});

/*
 * this function works like "app.get()" but is designed to work with the POST
 * method. Rather than using the URL bar of a browser with the path, you'll
 * need to set up a POST request to this path. The easiest way is probably with
 * some sort of a REST client, which can usually be found as a browser extension.
 */
app.post("/postman", function(req, res){
  res.send("watman");
});

/*
 * this function starts the server and tells it to listen for incoming requests
 * on port 8080. Once this function is called, node will be prevented from
 * terminating and will continue to run, constantly listening for requests.
 *
 * The fact that 8080 is the parameter to this function sets up the port that
 * the server listens on to be 8080. This is why in the previous comments, I
 * instruct to go to http://localhost:8080/.
 */
app.listen(8080);
