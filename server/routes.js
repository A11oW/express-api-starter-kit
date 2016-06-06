/* eslint-env node */
import fs from 'fs';
import path from 'path';

const endpoindsPath = path.join(__dirname, './endpoints');
const apiRest = '/api/v1';

module.exports = (router) => {
  router.get(`${apiRest}/ping`, (req, res) => {
    const filePath = `${endpoindsPath}/success.json`;

    fs.readFile(filePath, 'utf8', (err, file) => {
      if (err) throw Error(`i cant read this crap ${filePath}`);

      const result = JSON.parse(file);
      res.json(result);
    });
  });

  router.get(`${apiRest}/pong`, (req, res) => {
    const filePath = `${endpoindsPath}/error.json`;

    fs.readFile(filePath, 'utf8', (err, file) => {
      if (err) throw Error(`i cant read this crap ${filePath}`);

      const result = JSON.parse(file);
      res.json(result);
    });
  });

  return router;
};
