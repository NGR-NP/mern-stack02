const bcrypt = require("bcryptjs");
const User = require("../models/user.models");
const ERROR = require("../utils/Error")

const createUser = async (req, res, next) => {
    const { fullName, email, phone, password, role } = req.body;

    if (!fullName || !email || !phone || !password) {
        return next(ERROR(400, "All feilds are Required"));
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
        }
        const salt = bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(password, salt);
        const newObj = { email, phone, password: hash, role };
        if (newObj) {
            const newUser = await User.create(newObj);
            const { password, ...otherDetails } = newUser._doc;
            res
                .status(201)
                .json({ message: `New user ${username} Created`, ...otherDetails });
        } else {
            res.status(400).json({ message: "Invalid DATA" });
        }
    } catch (err) {
        next(err);
    }
};

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find().select("-password");
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};


const getUser = async (req, res, next) => {
    const id = req.id
    try {
        const user = await User.findById({_id: id}).select("-password");
        if (!user) {
            return next(ERROR(401, "User not found."));

        }

        res.status(200).json({
            userInfo: user,
        });
    } catch (err) {
        next(err);
        }
};
const deleteUser = async (req, res, next) => {
    const id = req.id
    try {
        const deletedUser = await User.findByIdAndDelete({ _id: id });
        if (!deletedUser) {
            return next(ERROR(400, "User not Found"));
        }
        res.status(200).json({ message: `${deletedUser.username} Account is Deleted successfully` });
    } catch (err) {
        next(err);
    }
};
module.exports = { createUser, getUsers, getUser, deleteUser }