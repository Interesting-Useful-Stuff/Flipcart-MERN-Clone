const Category = require('../models/category')
const slugify = require('slugify')

exports.addCategory = (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId
    }
    const cat = Category(categoryObj)
    cat.save((err, category) => {
        if (err) return res.status(400).json({ err })
        if (category) {
            return res.status(200).json({ category })
        }
    })
}

exports.getCategory = (req, res) => {
    Category.find({})
        .exec((err, category) => {
            if (err) return res.status(400).json({ err })
            if (category) {
                return res.status(200).json({ category })
            }
        })

}