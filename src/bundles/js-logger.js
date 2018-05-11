import * as Logger from "js-logger";

Logger.useDefaults()
/**
    logger levels global controls go here!
*/
Logger.setLevel(Logger.LOG)

let reduxLogger = Logger.get("redux")
let viewsLogger = Logger.get("views")
let appLogger = Logger.get("app")


export {reduxLogger, viewsLogger, appLogger}
