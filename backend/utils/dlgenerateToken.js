// dlgenerateToken.js

import jwt from 'jsonwebtoken'

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Token valid for 30 days
    })
}
