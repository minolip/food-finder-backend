const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const productModel = require('../models/product');
const categoryModel = require('../models/category');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/add-product", async (request, response) => {
//   const product = new productModel(request.body);

//   try {
//     await product.save();
//     response.send(product);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// //storage for products
// const uniqueSuffix = Date.now()
// const productStorage = multer.diskStorage({
//   destination: "static/images",
//   filename: (req, file, cb) =>{
//     cb(null, uniqueSuffix+file.originalname);
//   }
// });
// const productUpload = multer({
//   storage: productStorage
// }).single('img');

// app.post("/add-product", (request, response) => {
//   productUpload(request, response, (error) => {
//   console.log("1", productStorage.filename);

//     if (error instanceof multer.MulterError){
//       console.log("A Multer error occurred when uploading", error);
//     } else if (error) {
//       console.log("An unknown error occurred when uploading", error);
//     } else {
//       const newImage = new productModel({
//         name: request.body.name,
//         categoryId: request.body.categoryId,
//         price: request.body.price,
//         producer: request.body.producer,
//         img: {
//           data: uniqueSuffix+request.file.originalname
//         } 
//       });
//       newImage
//       .save()
//       .then(() => response.send('succesfully uploaded'))
//       .catch((error) => console.log(error));
//     }
//   })
// })


// //storage for categories
// const storage = multer.diskStorage({
//   destination: "static/images",
//   filename: (req, file, cb) =>{
//     cb(null, file.originalname);
//   }
// });
// const upload = multer({
//   storage: storage
// }).single('img');

// app.post("/add-category", (request, response) => {
//   upload(request, response, (error) => {
//     if (error instanceof multer.MulterError){
//       console.log("A Multer error occurred when uploading", error);
//     } else if (error) {
//       console.log("An unknown error occurred when uploading", error);
//     } else {
//       console.log("1", request);
//       const newImage = new categoryModel({
//         name: request.body.name,
//         img: {
//           data: request.file.originalname
//         } 
//       });
//       newImage
//       .save()
//       .then(() => response.send('succesfully uploaded'))
//       .catch((error) => console.log(error));
//     }
//   })
// })


app.get("/products", async (request, response) => {
  const products = await productModel.find({});
  response.set({
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  try {
    response.send(products);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/categories", async (request, response) => {
  const categories = await categoryModel.find({});
  // response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  response.set({
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  try {
    response.status(200).send(categories);
  } catch (error) {
    response.status(500).send(error);
  }
});

// function categories(request, response ) {
//   const categories = await categoryModel.find({});
//   response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

//   try {
//     response.status(200).send(categories);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// };

// function products(request, response) {
//   const products = await productModel.find({});
//   response.set({
//     'Access-Control-Allow-Origin': 'http://localhost:3000',
//     'Access-Control-Allow-Methods': 'GET',
//     'Access-Control-Allow-Headers': 'Content-Type'
//   });
//   try {
//     response.send(products);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// };

// function productList(request, response) {
//   const products = await productModel.find({
//     categoryId: request.params.id
//   });
//   response.set({
//     'Access-Control-Allow-Origin': 'http://localhost:3000',
//     'Access-Control-Allow-Methods': 'GET',
//     'Access-Control-Allow-Headers': 'Content-Type'
//   });

//   try {
//     response.status(200).send(products);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// };

// export { 
//   categories, 
//   products, 
//   productList 
// };

app.get("/categories/:id/products", async (request, response) => {
  const products = await productModel.find({
    categoryId: request.params.id
  });
  response.set({
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type'
  });

  try {
    response.status(200).send(products);
  } catch (error) {
    response.status(500).send(error);
  }
});

// app.get("/product/name", async (request, response) => {
//   //read all the products from products collection
//   const products = await productModel.find({});

//   //reading product name from request
//   const product_name = request.body.name

//   try {
//     for (let product of products) {
//       if (product_name == product.name) {
//         response.status(200).send(product)
//       }
//     }
//   } catch (error) {
//     response.status(500).send(error)
//   }
// });

module.exports = app;