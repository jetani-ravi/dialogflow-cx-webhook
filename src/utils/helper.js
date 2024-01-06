const querystring = require('querystring');
const { MESSAGES } = require('../config/constant/messages');

const getMessageForIntent = (collectionName = [], templateMapValues = {}) => {
  
  console.log(`collectionName : ${collectionName}`);
  console.log(`templateMapValues : ${Object.entries(templateMapValues)}`);


  const randomValue = Math.floor(
    Math.random() * MESSAGES[collectionName].length,
  );
  let message = MESSAGES[collectionName]?.[randomValue] ?? '';
  for (const [key, value] of Object.entries(templateMapValues)) {
    console.log(key, value);
    message = message.replace(new RegExp(`<${key}>`, 'g'), value);
  }
  console.log('message :', message);
  return [message];
};

const formatResponseForDialogflow = (texts, sessionInfo, targetFlow, targetPage) => {

  messages = []

  texts.forEach(text => {
      messages.push(
          {
              ssml: {
                ssml: [text],
              },
          }
      );
  });

  let responseData = {
      fulfillment_response: {
          messages: messages
      }
  };

  if (sessionInfo !== '') {
      responseData['sessionInfo'] = sessionInfo;
  }

  if (targetFlow !== '') {
      responseData['targetFlow'] = targetFlow;
  }

  if (targetPage !== '') {
      responseData['targetPage'] = targetPage;
  }

  return responseData
};
module.exports = {
  getMessageForIntent,
  formatResponseForDialogflow,
};
