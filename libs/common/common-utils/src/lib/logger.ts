import lg from 'pino';
import dayjs from 'dayjs';

export const logger = lg({
  prettyPrint: true,
  base: {
    pid: false
  },
  timestamp: () => `,"time":"${dayjs().format()}"`
});

