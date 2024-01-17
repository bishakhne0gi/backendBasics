
## We have to work with

1. Data
2. File
3. Third Party (API)
Everything inside src folder

## Files

1. index:
    DB concepts
2. App:
    config, cookie, urlencode
3. constants:
     enums, DB-name

## Folder

1. DB
2. Models
3. Controllers
4. Routes
5. Middlewares
6. Utils

## Request give and take is done using Express

When we go to website and listen then the route is known as '/' --> Home Route

## Steps

1. Make a folder server
2. npm init
3. make index.js inside server
4. install express

## Hot Reloading --->

    We need to run the server again after making the changes

## Types of invoking frameworks in Js

1. Module import --> "type" : "module" in package.json
2. Require import

## ToolChain or Bundler

## CORS --> Cross Origin

## Proxy

## Steps

1. What data we need to store?

## Object modelling is done by

1. Mongoose
2. Prisma

## Install mongoose

1. Create folder named mongoose
2. Naming ---> user.models.js

## Steps for model

1. import mongoose from "mongoose";
2. const userSchema = new mongoose.Schema({})
3. export const User = mongoose.model("User", userSchema);
//mongoose model takes (which model is to be made, based on what model is to be made)
4. Data in mongodb is saved in plural and in lowercase --> users

## For referencing from a model in a type

1. type: mongoose.Schema.Types.ObjectId
2. ref:"name of exported"

Note: Generally Buffer data(eg: pdf, images, videos) are not store in db
