import fs from 'fs';
import path from 'path';

const logFile = path.resolve('./logs/requests.log');

export function logRequest(req, res, next) {
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${method} ${url}\n`;

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) {
      console.error('Erro ao escrever no log:', err);
    }
  });

  next();
}
