import User from "../../models/user-model";

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const { name, email, password} = req.body
        const existingUser = await User.findOne({ email })

        if (existingUser){
            res.status(409).send("Email is already in use!")
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({ name, email, password: hashedPassword })

        res.sendStatus(201)
    } catch (err) {
        console.err(err)
    }
}

