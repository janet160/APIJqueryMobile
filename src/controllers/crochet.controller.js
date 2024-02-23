import { model } from 'mongoose';
import crochetDAO from '../dao/crochet.dao.js';

export const getAll = (req, res) => {
    crochetDAO.getAll()
        .then((crochet) => {
            res.render('../src/views/index', { crochet });
        })
        .catch((err) => {
            res.status(500).json({ status: "Server error", error: err });
        });
};

export const getOne = (req, res) => {
    crochetDAO.getOne(req.params.barcode)
        .then((crochet) => {
            if (crochet != null)
                res.render('../src/views/edit.ejs', { crochet });
            else
                res.status(404).json({ status: "Product not found" });
        })
        .catch(err => res.status(500).json({ status: "Server error", error: err }));
};

export const insertOne = (req, res) => {
    crochetDAO.insertOne(req.body)
        .then(result => {
            res.redirect('/');
        })
        .catch(err => res.status(500).json({ status: "Server error", error: err }));
};

export const updateOne = async (req, res) => {
    crochetDAO.updateOne(req.params.barcode, req.body)
        .then(crochet => {
            if (crochet)
                res.redirect('/#pedidos');
            else
                res.status(404).json({ status: "Product not found" });
        })
        .catch(err => res.status(500).json({ status: "Server error", error: err }));
};


export const deleteOne = (req, res) => {
    crochetDAO.deleteOne(req.params.barcode)
        .then(crochet => {
            if (crochet)
                res.redirect('/#pedidos');
            else
                res.status(404).json({ status: "Product not found" });
        })
        .catch(err => res.status(500).json({ status: "Server error", error: err }));
};
