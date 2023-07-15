// importing database model to interact with database and give the info of all the users 
const User = require("../models/User")


exports.explore = async (req, res) => {

    const Data = (await User.find({}))

    res.status(200).json({
        success: true,
        response: Data
    })

}
