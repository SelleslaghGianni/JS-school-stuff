const logger = require("./logger")

let log = new logger()

log.info("Dit is een info bericht");
log.warning("Dit is een warning bericht");
log.error("Dit is een error bericht")