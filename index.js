require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const DialogflowController = require("./src/controllers/dialogflow.controller");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hey Buddy, How are you?");
});
app.post("/dialogflow/webhook", async (req, res) => {
	try {
		return new DialogflowController(req, res).processRequest();
	} catch (err) {
		const errorMessage = "Something went wrong while processing request.";
		console.error(errorMessage, err.message);
		res
			.status(500)
			.json({ error: "Something went wrong while processing request." });
	}
});

app.get("/api/v1/health-check", async (req, res) => {
	res.status(200).send("ok")
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}.`);
});
