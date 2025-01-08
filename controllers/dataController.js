import { StatusCodes } from "http-status-codes";
import { promises as fs } from 'fs'
import cloudinary from 'cloudinary'

const addData = async(req, res) => {

    // if(req.file) {
    //     const response = await cloudinary.v2.uploader.upload(req.file.path);
    //     await fs.unlink(req.file.path)
    //     req.body.photo = response.secure_url
    //     req.body.photoPublicId = response.public_id
    // }

    console.log(req.body);
    console.log(req.file);
    
    return res.status(StatusCodes.OK).json({msg: 'success'})
};

const getAllData = async(req, res) => {
    res.send('get all data');
};

const getSingleData = async(req, res) => {
    res.send('get single data');
};

const updateData = async(req, res) => {
    res.send('update data');
};

const deleteData = async(req, res) => {
    res.send('delete data');
};

export {
    addData,
    getAllData,
    getSingleData,
    updateData,
    deleteData
}