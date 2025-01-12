const error = (err) => {
    let errMessage = ''
    if (typeof err === 'string') {
        errMessage = err
    } else {
        errMessage = err.join(', ')
    }

    return errMessage
}

export default error