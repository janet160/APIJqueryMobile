import Crochet from "../models/crochet.model.js";
const crochetDao = {}
crochetDao.getAll = async (req, res) => {
    const crochet = await Crochet.find();
    return crochet;
}

crochetDao.getOne =  async (barcode) => {
    const crochet = await Crochet.findOne({barcode:barcode});
    return crochet;
}

crochetDao.insertOne = async(crochet)=>{
    const crochetSaved = new Crochet(crochet);
    await crochetSaved.save(); 
    return true;  
}

crochetDao.updateOne = async(barcode, crochet)=>{
const updateOne = await Crochet.findOneAndUpdate({barcode:barcode},crochet);
if(updateOne != null){ 
    return true;
}
else{
    return false
} 
}

crochetDao.deleteOne = async(barcode)=>{
const deleteOne = await Crochet.findOneAndDelete({barcode:barcode});
if(deleteOne != null){ 
    return true;

}
else{
    return false
} 
}

export default crochetDao;