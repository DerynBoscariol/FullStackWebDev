//OBJECT LITERAL SYNTAX (OLD-SCHOOL WAY--DON'T USE IT)
var logger = {
  message: "How's it going?",
  logMessage: function() {
    console.log(logger.message)
  }
}

logger.logMessage();
logger.message = "Hello!";
logger.logMessage();