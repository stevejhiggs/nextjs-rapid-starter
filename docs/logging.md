# logging

Both client and server side logging are taken care of via [pino](https://github.com/pinojs/pino) and you can pretty much treat it the same way you would use console logging.

## log levels

By default the loggers are set up to log anything with a level of INFO or above. You can configure the log level by adding the following variables to a created .env.local file

- `NEXT_PUBLIC_LOGS_LEVEL=[LOGLEVEL]` - set the logging level, default is info. Values can be `error`, `warn`, `info` `debug`
