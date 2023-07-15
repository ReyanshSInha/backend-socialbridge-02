const User = require("../models/User")
// importing cloudinary to upload the file to it 
const cloudinary = require("cloudinary").v2
// importing the builtin file system module to delete the temp files from the server 
const fs = require("fs")

exports.updateUserInfo = async (req, res) => {
    

    try {
        const user = await User.findByIdAndUpdate(req.userPayload.id, {

            QuestionOne: req.body.QuestionOne,
            QuestionTwo: req.body.QuestionTwo,
            QuestionThree: req.body.QuestionThree,
            QuestionFour: req.body.QuestionFour,
            QuestionFive: req.body.QuestionFive,
            QuestionSix: req.body.QuestionSix,
            QuestionSeven: req.body.QuestionSeven,
            QuestionEight: req.body.QuestionEight,
            avatar: req.body.avatar,
            dateOfBirth: req.body.dateOfBirth,
            phoneNumber: req.body.phoneNumber
    
        }, {new: true})
    
        res.status(200).json({
            success: true,
            updatedUser: user,
            message: "User profile updated successfully..."
        })
    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: "User profile could not be updated...try again later.."
        })

    }

    


}
