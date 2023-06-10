import jwt from 'jsonwebtoken'

export const authMiddleware = async (req, res, next) => {
    const authorization = req.headers.authorization;
    // Bearer token
    const token = authorization?.split(' ')[1]

    if (!token){
        res.status(401).send('No token')
        return
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId = decoded.id;

        next()
    } catch (err) {
        res.status(401).send('Invalid token')
    }
}