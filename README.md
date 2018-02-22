# Cee Logger using winston
This is a custom formatter for winston logger to produce logs in cee format

## Usage
```javascript
  const log = require('cee-logger');
  const logger = log.setupLogger({name: 'my-project'});    
  logger.info('A plain message');  // @cee: {"severity":"INFO","name":"my-project","host":"local","pid":10234,"msg":"A plain message"}
  logger.log('emerg', 'Uh oh'); // @cee: {"severity":"EMERG","name":"my-project","host":"local","pid":10234,"msg":"Uh oh"}
  logger.info({ data: 'valid JSON' }); // @cee: {"severity":"INFO","name":"my-project","host":"local","pid":10234,"data":"valid JSON"}
  logger.info('This gets saved to a "msg" field', { data: 'valid JSON' }); // @cee: {"severity":"INFO","name":"my-project","host":"local","pid":10234,"data":"valid JSON","msg":"This gets saved to a \"msg\" field"}
  logger.crit('All levels specified below work'); // @cee: {"severity":"CRIT","name":"my-project","host":"local","pid":10234,"msg":"All levels specified below work"}
```

For more information on winston see https://github.com/winstonjs/winston

## Development
Feel free to create issues or pull requests for extending the potential default logged items. 
