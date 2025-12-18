import { User } from '../model/User.js'

export const getall = async (req, res) => {
    try {
        const users = await User.find({});
        console.log("Get all users successfully");
        return res.status(200).json({ message: "Get all users successfully", data: users });
    }
    catch (error) {
        console.log("Error while getting all users", error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

export const getbyid = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("Get user by ID successfully");
        return res.status(200).json({ message: "Get user by ID successfully", data: user });
    }
    catch (error) {
        console.log("Error while getting user by ID", error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
// export default getall;