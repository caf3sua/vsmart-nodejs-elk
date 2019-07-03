let winston = require('winston')
require('winston-logstash');


// Clear the default transports
winston.clear()

winston.add(winston.transports.Console, { 
    level: 'debug', 
    colorize: true,
    timestamp: true
})

// configure Logstash connection
winston.add(winston.transports.Logstash, {
	level: 'debug',
	port: 5000,
	node_name: 'exampleApp',
	host: '34.67.20.170',
	app_name: 'XXX',
	test_message: 'aaaaaaaaaa'
});

module.exports = winston