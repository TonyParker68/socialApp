## 1 Routing in NodeJs

- install express package
- create a server with express
- create a route with express
- split routes into different files
- write a middleware function

## 2 Connect Mongo to NodeJs app

- create database service

```
Approach 1:
- write file database.services.js and export function connectDatabase
- import function connectDatabase to file index.ts and call it
```

```
Approach 2:
- write file database.services.ts and export class DatabaseServices
- import class DatabaseServices to file index.ts and call it
```

- Separate sensitive information into a .env file because there are different environments, and each environment (dev, prod) will have different databases and parameters.

```
- create .env file
- install dotenv package
- import and configure dotenv in your files
```
