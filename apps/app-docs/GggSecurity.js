// https://en.wikipedia.org/wiki/Timing_attack
// https://www.npmjs.com/package/cryptiles

// GggExample
// What's wrong with the following code snippet?
// vulnerable to timing attacks.
function checkApiKey (apiKeyFromDb, apiKeyReceived) {  
  if (apiKeyFromDb === apiKeyReceived) {
    return true
  }
  return false
}