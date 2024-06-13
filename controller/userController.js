import User from "../model/UserModel.js"


export const index = async (req, res) => {
	try {
		const users = await User.find();
		if (users.length === 0) {
			return res.status(404).json({message: "User is Empty."});
		}
		return res.status(200).json({
			message: "User Fetched!",
			data: users,
		});
	} catch (error) {
		res.status(500).json({error: "Internal Server Error."})
	}
}

export const store = async (req, res) => {
	try {
		const userData = new User(req.body);
		const {email} = userData;

		const userExist = await User.findOne({email});
		if (userExist) {
			return res.status(400).json({message: "User Already Exist!"});
		}
		const savedUser = await userData.save();
		return res.status(200).json({
			message: "User Created!",
			data: savedUser,
		});

	} catch (error) {
		res.status(500).json({error: "Internal Server Error"})
	}
}

export const update = async (req, res) => {
	try {
		const id = req.params.id;

		const userExist = await User.findOne({_id:id});
		if (!userExist) {
			return res.status(404).json({message: "User Not Found!"});
		}
		const updateUser = await User.findByIdAndUpdate(id, req.body, {new:true});
		return res.status(201).json({
			message: "User Updated!",
			data: updateUser
		});
	} catch (error) {
		res.status(500).json({error: "Internal Server Error."})
	}
}

export const destroy = async (req, res) => {
	try {
		const id = req.params.id;

		const userExist = await User.findOne({_id:id});
		if (!userExist) {
			return res.status(404).json({message: "User Not Found!"});
		}
		const deleteUser = await User.findByIdAndDelete(id, {new: false});
		return res.status(201).json({
			message: "User Deleted!",
			data: deleteUser
		});
	} catch (error) {
		res.status(500).json({error: "Internal Server Error."})
	}
}