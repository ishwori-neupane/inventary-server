const express = require("express");
const router = express.Router();

// const Item = require("../models/item");
const {getAllItems,saveItem}=require("../contollers/items");
router.get("/", getAllItems);

router.post("/",saveItem);
module.exports = router;