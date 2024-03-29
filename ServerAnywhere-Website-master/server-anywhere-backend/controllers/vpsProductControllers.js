const _ = require("lodash");
const formidable = require("formidable");
const fs = require("fs");
const { vpsProduct, validate } = require("../models/vpsProduct");

module.exports.createProduct = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    console.log(err);
    if (err) return res.status(400).send("Something went wrong!");
    const { error } = validate(
      _.pick(fields, [
        "category",
        "price",
        "processor",
        "RAM",
        " diskspace",
        "dedicatedIP",
        "bandwidth",
        "windowsserver",
        "support",
        "RAID",
        "cloudlinux",
        "cpanelsupport",
        "intelversion",
        "parkdomain",
        "subdomain",
        "email",
        "mysqlDB",
        "OS",
        "connection",
        "location",
        "KVM",
        "vpspanel",
        "cpanelsololisense",
        "other",
      ])
    );
    if (error) return res.status(400).send(error.details[0].message);

    const product = new vpsProduct(fields);

    product.save((err, result) => {
      if (err) res.status(500).send("Internal Server error!");
      else
        return res.status(201).send({
          message: "Product Created Successfully!",
          data: _.pick(result, [
            "category",
            "price",
            "processor",
            "RAM",
            "diskspace",
            "dedicatedIP",
            "bandwidth",
            "windowsserver",
            "support",
            "RAID",
            "cloudlinux",
            "cpanelsupport",
            "intelversion",
            "parkdomain",
            "subdomain",
            "email",
            "mysqlDB",
            "OS",
            "connection",
            "location",
            "KVM",
            "vpspanel",
            "cpanelsololisense",
            "other",
          ]),
        });
    });
  });
};

// Query Parameter
// api/product?order=desc&sortBy=name&limit=10
module.exports.getProducts = async (req, res) => {
  // console.log(req.query);
  // let order = req.query.order === "desc" ? -1 : 1;
  // let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  // // // let limit = req.query.limit ? parseInt(req.query.limit) : 10;
  const products = await vpsProduct.find({});
  // .select({ photo: 0 })
  // .sort({ [sortBy]: order })
  // .limit(limit)
  // .populate("category", "name");
  return res.status(200).send(products);
};

module.exports.getProductById = async (req, res) => {
  const productId = req.params.id;
  const product = await vpsProduct.findById(productId);
  // .select({ photo: 0 })
  // .populate("category");

  if (!product) return res.status(404).send("Not Found");
  else return res.status(200).send(product);
};

// module.exports.getPhoto = async (req, res) => {
//   const productId = req.params.id;
//   const product = await vpsProduct.findById(productId).select({
//     photo: 1,
//     _id: 0,
//   });
//   res.set("Content-Type", product.photo.contentType);

//   return res.status(200).send(product.photo.data);
// };

module.exports.updateProductById = async (req, res) => {
  //Get Product by Id
  //Collect from data
  //Update Provide Form Fields
  //Update Photo(If required)

  const productId = req.params.id;
  const product = await vpsProduct.findById(productId);

  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) return res.status(400).send("Something wrong!!");

    const updatedFields = _.pick(fields, [
      "category",
      "price",
      "processor",
      "RAM",
      " diskspace",
      "dedicatedIP",
      "bandwidth",
      "windowsserver",
      "support",
      "RAID",
      "cloudlinux",
      "cpanelsupport",
      "intelversion",
      "parkdomain",
      "subdomain",
      "email",
      "mysqlDB",
      "OS",
      "connection",
      "location",
      "KVM",
      "vpspanel",
      "cpanelsololisense",
      "other",
    ]);
    _.assignIn(product, updatedFields);

    product.save((err, result) => {
      if (err) return res.status(500).send("Something Failed!!!");
      else
        return res.status(200).send({
          message: "Product Updated Successfully!!!",
          result: result,
        });
    });
  });
};

module.exports.filterProducts = async (req, res) => {
  let order = req.body.order === "desc" ? -1 : 1;
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 10;
  let skip = parseInt(req.body.skip);

  let filters = req.body.filters;
  let args = {};

  for (let key in filters) {
    if (filters[key].length > 0) {
      if (key === "price") {
        //{price:{$gte:0, $lte:1000}}
        args["price"] = {
          $gte: filters["price"][0],
          $lte: filters["price"][1],
        };
        console.log("args1", args);
      }

      if (key === "category") {
        //category:{$in:['']}

        args["category"] = {
          $in: filters["category"],
        };
        console.log("args2", args);
      }
    }
  }

  const products = await vpsProduct
    .find(args)
    .select({ photo: 0 })
    .populate("category")
    .sort({ [sortBy]: order })
    .skip(skip)
    .limit(limit);

  return res.status(200).send(products);
};

module.exports.deleteById = async (req, res) => {
  const id = req.params.id;

  const product = await vpsProduct.findById(id);

  await product.remove();

  return res.status(200).send({
    message: "Delete Successfully!!",
  });
};
