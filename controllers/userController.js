const getCurrentUser = async(req, res) => {
    res.send('get current user');
};

const updateUser = async(req, res) => {
    res.send('update user');
};

export {
    getCurrentUser,
    updateUser
}