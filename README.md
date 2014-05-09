Forth Exercise (Data Serving & Long Running Operations)
=================================================

Please complete the following steps:
 
1. Create an HTTP server named **"sentigator"** which receives input term, query twitter for the given term and uses the **"sentiment"** module to parse the returned tweets. Do it by:
 * Creating a directory named **"sentigator"**
 * Creating a file named **"sentigator.js"** inside the **"sentigator"** directory
 * Creating a package.json for **"sentigator"**
 * Creating HTTP server which receives **"term=xxx"** query parameter
 * Using the **"request"** module for querying **"twitxy"** (twitter proxy) in the following format: "http://twitxy.itkoren.com/?lang=en&count=5&term=xxx"
 * The returned structure will include the following {"statuses":[{"id":0,"id_str":"0","text":"xxx"}]} - Using the **"sentiment"** module from the previous exercise for parsing the text of the statuses received
 * Making sure not to starve IO by blocking the event loop (**HINT: You'll have to use the long running loops technique we talked about**)
 * Returning the result in JSON format to the client and print it - No fancy UI for now :-)

#####Use the **"sentiment"** module in this repository as a starting point for your "sentiment" code
#####*You can also use the boilerplate server.js as a staring point for your server code*