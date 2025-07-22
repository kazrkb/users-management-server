/**
 * 1. create a post api in the srever side
 * 2. client side send data via post api
 * 3. set fetch method inside the fetch options(second parameter of fetch)
 * 4. option will have 3 things: method, headers,body
 * 5. method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify
 * 6. on the server side dont forget to use express.json() middleware
 */