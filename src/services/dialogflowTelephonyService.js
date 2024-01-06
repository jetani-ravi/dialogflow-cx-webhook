const { SessionsClient } = require('@google-cloud/dialogflow-cx');

// Set the variables for your Dialogflow CX agent
const projectId = process.env.PROJECT_ID;
const location = process.env.LOCATION_ID;
const agentId = process.env.AGENT_ID;
const sessionPath = `projects/${projectId}/locations/${location}/agents/${agentId}/sessions/session-id`;

// Create a new session client
const sessionClient = new SessionsClient();

async function detectIntent(query) {
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
      },
      languageCode: 'en', // Specify the language code as needed
    },
  };

  const [response] = await sessionClient.detectIntent(request);

  console.log('Detected intent:');
  const intent = response.queryResult.intent;
  console.log(`  Intent Name: ${intent.displayName}`);
  console.log(`  Confidence: ${intent.detectionConfidence}`);

  // You can customize responses based on the detected intent name
  switch (intent.displayName) {
    case 'your_intent_name_1':
      console.log('Responding to intent 1...');
      // Perform actions or return a specific response for this intent
      return 'Response for intent 1';

    case 'your_intent_name_2':
      console.log('Responding to intent 2...');
      // Perform actions or return a specific response for this intent
      return 'Response for intent 2';

    // Add more cases for additional intents

    default:
      console.log('Unknown intent, handle accordingly...');
      // Handle unknown or unexpected intents
      return 'Unknown intent';
  }
}

module.exports = {
  detectIntent,
};
