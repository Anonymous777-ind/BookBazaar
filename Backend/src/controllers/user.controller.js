import {User} from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    // Fileds validation
    const { fullName, email, username, password } = req.body;
    if (
        [fullName, username, email, password].some((field) => {
            return field?.trim() === ""
        })
    ) {
        throw new ApiError(400, "All fields are required!");
    }

    // Validation for already existing user
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    });
});

export {registerUser};