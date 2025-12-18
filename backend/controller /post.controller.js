import { User } from '../model/User.js'

const posting = async (req, res) => {
    try {
        const userdetails = req.body;
       
        const user = new User(userdetails);
        await user.save();
        console.log("Post created successfully");
        return res.status(201).json({ message: "Post created successfully", user });
    }
    catch (error) {
        console.log("Error while creating a post", error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
export default posting;
