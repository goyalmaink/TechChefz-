import { User } from '../model/User.js'
export const updaetfull = async (req, res) => {
    const userId = req.params.id
    const updatedData = req.body
    try {
        const result = await User.findByIdAndUpdate(userId, updatedData, { new: true, runValidators: true });
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("User updated successfully");
        return res.status(200).json({ message: "User updated successfully", data: result });
    }
    catch (error) {
        console.log("Error while updating user", error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }

}

export const updatepartial = async (req, res) => {
    const userId = req.params.id
    const updatedData = req.body
    try {
        const result = await User.findByIdAndUpdate(userId, { $set: updatedData }, { new: true, runValidators: true });
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("User partially updated successfully");
        return res.status(200).json({ message: "User partially updated successfully", data: result });
    }
    catch (error) {
        console.log("Error while partially updating user", error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }

}