const addData = async(req, res) => {
    res.send('add data');
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