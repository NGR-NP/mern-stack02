const ERROR = require('../utils/Error')
const User = require('../models/user.models')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const { REFRESH_SEC, JWT_SEC } = require('../config/secrets')
const clgMsg = (msg) => {
    console.log(`something went wrong ${msg}`)
}
const register = async (req, res, next) => {
    const { fullName, email, password, phone } = req.body

    if (!fullName) {
        return next(ERROR(403, "enter your full name!!!"))
    }
    if (!email) {
        return next(ERROR(403, "email is required!!!"))

    }
    if (!phone) {
        return next(ERROR(403, "enter your Phone Number!!!"))
    }
    if (!password) {
        return next(ERROR(403, "enter strong password!!!"))
    }
    try {
        const userFound = await User.findOne({
            $or: [
                { email },
                { phone }
            ]
        });

        if (userFound) {
            return next(ERROR(409, "Email or phone number is already registered!"));
        } else if (!userFound) {
            const salt = bcrypt.genSaltSync(5);
            const hash = bcrypt.hashSync(password, salt);
            const createUser = new User({
                fullName,
                email,
                phone,
                password: hash
            })
            await createUser.save()
            res.status(201).json({
                message: " 🎇 🎇 🎉 Account created successfully!"
            })
        }

    } catch (err) {
        next(err)
    }
}
const login = async (req, res, next) => {
    const { email, password } = req.body

    if (!email) {
        return next(ERROR(403, "enter your email!!"))
    }
    if (!password) {
        return next(ERROR(403, "enter your password!!"))
    }
    try {
        const userFound = await User.findOne({ email })
        if (!userFound) {
            return next(ERROR(403, "Wrong Credentials!!!"))
        }
        else if (userFound) {
            const matchPassword = await bcrypt.compare(
                password,
                userFound.password
            );
            if (!matchPassword) {
                return next(ERROR(403, "Wrong Credentials!!!"))
            } else if (matchPassword) {

                const accessToken = jwt.sign(
                    {
                        id: userFound._id,
                        fullName: userFound.fullName,
                        email: userFound.email,
                        phone: userFound.phone,
                        role: userFound.role
                    },
                    JWT_SEC,
                    { expiresIn: "1m", }
                )
                const refreshToken = jwt.sign(
                    {
                        id: userFound._id,
                        role: userFound.role
                    },
                    REFRESH_SEC,
                    { expiresIn: "2m" }
                )
                userFound.refreshToken = refreshToken;
                const result = await userFound.save()
                const name = result.fullName

                res
                    .cookie("jwt", refreshToken, {
                        httpOnly: true,
                    })
                    .status(200)
                    .json({
                        message: `welcome Back ${name}`,
                        accessToken
                    })
            }
        }
    } catch (err) {
        next(err)
    }
}

module.exports = { register, login }