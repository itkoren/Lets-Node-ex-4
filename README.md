Forth Exercise (Data Serving & Long Running Operations)
=================================================

Please complete the following steps:
 
1. Create an HTTP server named **"sentigator"** which receives input term, query twitter and google for the given term and uses the **"sentiment"** module to parse the returned results. Do it by:
 * Creating a directory named **"sentigator"**
 * Creating a file named **"sentigator.js"** inside the **"sentigator"** directory
 * Creating a package.json for **"sentigator"**
 * Creating HTTP server which receives **"term=xxx"** query parameter
 * Using the **"[request](https://github.com/mikeal/request)"** module for querying **"[twitxy](https://github.com/itkoren/twitxy)"** (twitter proxy) in the following format: "http://twitxy.itkoren.com/?lang=en&count=5&term=xxx"
 * The returned structure will include the following {"statuses":[{"id":0,"id_str":"0","text":"xxx"}]} - Using the **"sentiment"** module from the previous exercise for parsing the text of the statuses received
 * Using the **"[request](https://github.com/mikeal/request)"** module for querying google API in the following format: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&language=en&q=xxx"
 * The returned structure will include the following {"responseData": {"results":[{"title":"xxx"}]} } - Using the **"sentiment"** module from the previous exercise for parsing the text of the search results received
 * Making sure not to starve IO by blocking the event loop (**HINT: You'll have to use the long running loops technique we talked about**)
 * Returning the combined parsed result in JSON format to the client and printing it - No fancy UI for now :-). The structure of the JSON result should look like the following:
      
      ```
      [{
        src: "Twitter",
        text: "Text of the tweet",
        score: 3
      }, {
        src: "Google",
        text: "Text of the search result",
        score: 2
      }]
      ```
      
#####Use the **"sentiment"** module in this repository as a starting point for your "sentiment" code
#####*You can also use the boilerplate server.js as a starting point for your server code*