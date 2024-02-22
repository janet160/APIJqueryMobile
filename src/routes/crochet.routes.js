import { Router } from "express";
import { getAll, insertOne, getOne, updateOne, deleteOne } from '../controllers/crochet.controller.js';

const router = Router();

router.get('/', getAll);
router.get('/:barcode', getOne);
router.post('/', insertOne);
router.post('/:barcode', updateOne);
router.get('/delete/:barcode', deleteOne);

export default router;

