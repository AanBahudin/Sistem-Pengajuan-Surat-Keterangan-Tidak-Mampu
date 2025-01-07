import bcrypt from 'bcrypt'

export const hashPassword = async(incomingPassword) => {
    const hashedPassword = await bcrypt.hash(incomingPassword, 12)
    return hashedPassword
}

export const comparePassword = async(plainPassword, hashPassword) => {
    const isMatchPassword = await bcrypt.compare(plainPassword, hashPassword)
    return isMatchPassword
}


