const User = require('../../models/personalMedico');

async function userPersonalMedico(req, res, next) {

    try {
        const user = await User.find({ id: 1 });

        res.status(200).json({
            user
        })
    } catch (error) {
        next(error);
    }


}

module.exports = [userPersonalMedico];