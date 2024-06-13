export const fetch = async (req, res) => {
	try {
		res.json("hello World")
	} catch (error) {
		res.status(500).json({error: "Internal Server Error"})
	}
}