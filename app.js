let logger = require('./logger')

let interval = 1000 * 2

var i = 0;
log = () => {
    logger.debug('test aaaaa', 
        { 
            'someMeta': 'someData',
            'bigol': 'doinks',
            'array': [ 1, 2, 3 ],
            'counter': ++i
        }
	)
}

setInterval(log, interval)