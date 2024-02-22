import { model } from 'mongoose';
import crochetDAO from '../dao/crochet.dao.js'

export const getAll = (req, res) => {
    crochetDAO.getAll()
        .then((crochet) => {
            res.render('../src/views/index',{crochet});
        })
        .catch((err) => {
            res.json(err);
        });
};

export const getOne = (req, res) => {
   crochetDAO.getOne(req.params.code)
        .then((crochet) => {
            if (crochet != null)
            res.render('../src/views/edit',{crochet});
            else
                res.json({ status: "Product not found" })
        })
        .catch(err => res.json({ status: "Server unaivalible",message:err }))
}

export const insertOne = (req, res) => {
    crochetDAO.insertOne(req.body)
        .then(result => {
            if (result)
            res.redirect('/')
        })
        .catch(err => res.json({ status: "Servidor no disponible" }));
};


export const updateOne = (req, res) => {
    crochetDAO.updateOne(req.params.barcode, req.body)

        .then(crochet => {
            if (crochet)
            res.redirect('/');
                else
                res.json({
                    status: "server unavailable"
                });
        })
        .catch(err => {
            res.json({
                status: "server unavailable"
            });
        })
};


export const deleteOne = (req, res) => {
    crochetDAO.deleteOne(req.params.barcode)

        .then(crochet => {
            if (crochet)
            res.redirect('/');
                else
                res.json({
                    status: "server unavailable"
                });
        })
        .catch(err => {
            res.json({
                status: "server unavailable"
            });
        })
};

