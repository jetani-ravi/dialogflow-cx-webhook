const { QUESTIONS, MESSAGES } = require("../config/constant/messages");
const dialogflowService = require("../services/dialogflowTelephonyService");

class DialogflowController {
	constructor(req, res) {
		this.req = req;
		this.res = res;
	}

	async processRequest() {
		try {
			const userQuery = this.req.body.userQuery; // Assuming user query is sent in the request body
			const response = await dialogflowService.detectIntent(userQuery);
		
			// Handle the response as needed
			res.status(200).json({ response });
		} catch (error) {
			console.error("Something went wrong processing Incoming request", error);
		}
	}
}
module.exports = DialogflowController;
