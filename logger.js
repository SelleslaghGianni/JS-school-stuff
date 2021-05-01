class Logger{
    info(message){
        console.log("INFO: " + message)
    }

    warning(message){
        console.log("WARNING: " + message)
    }

    error(message){
        console.log("ERROR: " + message)
    }
}

module.exports = Logger