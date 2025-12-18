import { User } from '../model/User.js'

export const deleteall = async (req, res) => {
    try {
        const result = await User.deleteMany({});
        console.log("All users deleted successfully");
        return res.status(200).json({ message: "All users deleted successfully", deletedCount: result.deletedCount });
    }
    catch (error) {
        console.log("Error while deleting all users", error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

export const deletebyid = async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await User.findByIdAndDelete(userId);
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("User deleted by ID successfully");
        return res.status(200).json({ message: "User deleted by ID successfully", data: result });
    }
    catch (error) {
        console.log("Error while deleting user by ID", error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

