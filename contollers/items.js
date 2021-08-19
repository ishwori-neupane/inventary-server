const Item=require("../models/item")

const getAllItems=async (req, res) => {
    
    try {
        const items = await Item.find();
        res.status(200).json({
            data: items,
        })
    } catch (error) {
        res.status(500).send(error)
    }
}
const saveItem=async(req, res) => {
    const { name, price, description } = req.body;
    const item = new Item({ name, price, description });
    
    try {
        const saveItem = await item.save();
        res.status(200).json({
            message: "Saved items",
            data:saveItem
        })
    }
    catch (error) {
        res.status(500).send(err)
        // console.log(error,"err")
    }
}
module.exports={getAllItems,saveItem};