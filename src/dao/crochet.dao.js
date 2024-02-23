import Crochet from "../models/crochet.model.js";

const crochetDao = {};

crochetDao.getAll = async () => {
    return await Crochet.find();
};

crochetDao.getOne = async (barcode) => {
    return await Crochet.findOne({ barcode: barcode });
};

crochetDao.insertOne = async (crochet) => {
    const crochetSaved = new Crochet(crochet);
    await crochetSaved.save();
    return true;
};

crochetDao.updateOne = async (barcode, crochet) => {
    try {
        const updatedCrochet = await Crochet.findOneAndUpdate({ barcode: barcode }, crochet, { new: true });
        return updatedCrochet !== null;
    } catch (error) {
        console.error("Error updating crochet:", error);
        return false;
    }
};


crochetDao.deleteOne = async (barcode) => {
    try {
        const deletedCrochet = await Crochet.findOneAndDelete({ barcode: barcode });
        return deletedCrochet !== null;
    } catch (error) {
        console.error("Error deleting crochet:", error);
        return false;
    }
};

export default crochetDao;
