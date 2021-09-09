# Shortly

Shortly is a simple URL shortener that allows users to enter any URL 
and have a shortened version returned. Allowing the user to use
the shortened url on their social media bios.

## Tech Stack
Svelte, Node.js, Express, and MongoDB.

## How It Works
The Process is actually pretty simple. 

After the user enters their url they want shorted, it is then sent
to the backend were a random short url is generated and stored in the 
database.

The shortened url is then sent back to the user
to start using right away.

Once the user enters the short url in their browser, it will hit the 
backend server, where it will look up the actual url in the database.
If found it will send the url to the browser and redirect them to it. If
it does not exist. They are redirected to the home page.

## Production Link

https://stly.us
