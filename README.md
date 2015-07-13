### canvara-responser

common module for canvara, to send response to the client.
This module is added after the routing logic, i.e, requests are routed to the controllers
after controllers finish, this middleware is invoked, which will serialize the data to JSON and respond to client