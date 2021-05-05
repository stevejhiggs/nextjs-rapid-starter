import isBrowser from '../isBrowser';
import serverLogger from './serverLogger';
import clientLogger from './clientLogger';

const logger = isBrowser() ? clientLogger() : serverLogger();

export default logger;
