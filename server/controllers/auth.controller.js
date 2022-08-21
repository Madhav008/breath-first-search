const UserDto = require("../dtos/userDto");
const hashService = require("../services/hash.service");
const tokenService = require("../services/token.service");
const userService = require("../services/user.service");


class AuthController {
    verifyMail() {

    }

    async createUser(req, res) {
        let user;
        const { username, fullname, email, password } = req.body;
        console.log(req.body);
        //Hash the password
        const hashPass = hashService.hashPassword(password);
        try {
            user = await userService.findUser(email);
            if (!user) {
                user = await userService.createUser(username, fullname, email, hashPass)
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }

        const { accessToken, refreshToken } = tokenService.generateTokens({
            id: user.id,
            activated: false,
        });

        res.cookie('refreshToken', refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 30,
            httpOnly: true,
        });

        userService.updateUser(email, { token:accessToken, refreshToken })
        res.json({ user });

    }


}

module.exports = new AuthController()