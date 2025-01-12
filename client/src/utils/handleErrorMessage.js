const error = (err) => {
    let errMessage = ''
    if (typeof err === 'string') {
        errMessage = err
    } else {
        errMessage = errArr.join(', ')
    }

    return errMessage
}