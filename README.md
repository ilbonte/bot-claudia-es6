## Prerequisites
1. AWS account enabled and configured
2. Verify IAM Permissions
    - AWSLambdaFullAccess
    - IAMFullAccess
    - AmazonAPIGatewayAdministration
    
   
## Usage

### Setup
1. Clone this repo `git clone https://github.com/ilbonte/claudia-bot-es6.git`
2. Install the dependencies `npm install`
3. Deploy the bot to AWS: `npm run create`
4. Connect with your favourite platform: see the list of supported platforms and related commands here: https://claudiajs.com/tutorials/hello-world-chatbot.html (*Note*: if you have installed `claudia` as a local dependency (default for this project) you should use the command `npm run claudia your-options-here` so if you what connect your bot with telegram you'll need to use `npm run claudia update --configure-telegram-bot` and then follow the promped steps.)

### Development 

You should write your ES6 code in the file `bot.source.js` located in the `src` folder. This file will be later traspiled in the file `bot.js`. 

Use `npm run transpile` to transpile the code to the `bot.js` file
Use `npm run update` to traspile and push the updated code to the lambda 


## Suggestions

If you plan to use the bot only in few platforms add an object containing an array with the platforms. This will improve deploy performances!
Eg:

```javascript
const botBuilder = require('claudia-bot-builder')

module.exports = botBuilder((request, originalApiRequest) => {
  const prettyResponse = JSON.stringify(request,null, 1)
  return prettyResponse
}, {
  platforms: ['telegram']
})

```