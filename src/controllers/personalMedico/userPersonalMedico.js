function userPersonalMedico(req, res, next) {

    res.status(200).json({
        ok: "funciona"
    })
}

module.exports = [userPersonalMedico];