# Prerender Angular App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0.




## Scripts

Use schematics to add the Angular Universal module in our project
```
ng add @nguniversal/express-engine
```
 


 ##  Prerender

Open angular.json, and go to the new prerender build options

```
"prerender": {
    "builder": "@nguniversal/builders:prerender",
    "options": {
    "browserTarget": "ssr:build:production",
    "serverTarget": "ssr:server:production",
    "routesFile": "./routes.txt" // <-- Here you should put the file routes  
    },
    "configurations": {
    "production": {}
    }
}
```

routes.txt
```
/1
/2
/3
/4
/5
/6
/7
/8
/9
...

```

Run the command
```
npm run prerender
```