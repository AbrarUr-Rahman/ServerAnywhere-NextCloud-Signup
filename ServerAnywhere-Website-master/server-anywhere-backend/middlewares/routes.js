const userRouter = require("../routers/userRouter");
const vpsCategoryRouter=require('../routers/vpsCategoryRouter');
const vpsProductRouter=require('../routers/vpsProductRouter');

module.exports = (app) => {
  app.use("/api/user", userRouter);
  app.use('/api/vpscategory',vpsCategoryRouter);
  app.use('/api/vpsproduct',vpsProductRouter);
 
};