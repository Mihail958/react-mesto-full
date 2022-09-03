const allowedCors = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://domainname.mikhail.nomoredomains.sbs',
  'http://domainname.mikhail.bac.nomoredomains.sbs',
];

const cors = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  // Значение для заголовка Access-Control-Allow-Methods по умолчанию (разрешены все типы запросов)
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];
  console.log(req);

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.status(200).send();
    return;
  }
  next();
};

module.exports = cors;
