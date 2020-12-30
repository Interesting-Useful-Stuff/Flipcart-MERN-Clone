const User = require('../../models/user')
const jwt = require('jsonwebtoken')

exports.signup = (req, res) => {

    User.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (user) return res.status(400).json({
                message: "Admin already registered"
            })

            const { firstName, lastName, email, password } = req.body

            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString(),
                role: 'admin'
            })

            _user.save((err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: "Something went wrong"
                    })
                }
                if (data) {
                    return res.status(201).json({
                        message: "Admin created successfully"
                    })
                }
            })
        })
}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((err, user) => {
            if (err) return res.status(400).json({ err })
            if (user) {
                if (user.authenticate(req.body.password) && user.role === "admin") {
                    const token = jwt.sign(
                        { _id: user._id },
                        process.env.JWT_SECRET_KEY,
                        { expiresIn: '1h' }
                    )
                    const { _id, firstName, lastName, email, role, fullName } = user
                    res.status(200).json({
                        token,
                        user: { _id, firstName, lastName, email, role, fullName }
                    })
                } else {
                    res.status(400).json({
                        message: 'Invalid password'
                    })
                }
            } else {
                res.status(400).json({ message: "Admin not registered" })
            }
        })
}

exports.requireSignin = (req, res, next) => {
    const token = req.headers.autherization.split(" ")[1]
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = user
    next()
}