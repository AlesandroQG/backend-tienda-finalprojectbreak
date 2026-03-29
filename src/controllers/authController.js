const { User } = require("../models/User.js");

const userController = {
    createUser: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(501).json({message: "There was a problem trying to create the user"});
        }
    },
    login: async (req, res) => {
        const username = req.body?.username;
        const password = req.body?.password;
        try {
            const user = await User.find({username: username});
            if (user.length === 0) {
                return res.status(404).json({message: "That user does not exist", access: false});
            }
            if (user[0].password === password) {
                return res.status(201).json({message: "Correct login", access: true});
            }
            return res.status(403).json({message: "Incorrect login", access: false});
        } catch (error) {
            console.error(error);
            res.status(501).json({message: "There was a problem trying to login", access: false});
        }
    },
    updateUser: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await User.findByIdAndUpdate(id, req.body);
            if (!user) {
                return res.status(404).json({message: "There is no user with that id"});
            }
        } catch (error) {
            console.error(error);
            res.status(501).json({message: "There was a problem trying to update the user"});
        }
    },
};

module.exports = userController;