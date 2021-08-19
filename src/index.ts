import { IncomingMessage } from 'http';

const parseHeader = (request: IncomingMessage): string[] => {
  if (typeof request.headers.forwarded === 'string') {
    return request.headers.forwarded
      .split(';')
      .filter(value => value.match(/^for=/))
      .map(value => value.replace('for=', '').trim());
  }

  if (typeof request.headers['x-forwarded-for'] === 'string') {
    return request.headers['x-forwarded-for'].split(',').map(value => value.trim());
  }

  if (typeof request.headers['forwarded-for'] === 'string') {
    return request.headers['forwarded-for'].split(',').map(value => value.trim());
  }

  if (typeof request.headers['x-real-ip'] === 'string') {
    return request.headers['x-real-ip'].split(',').map(value => value.trim());
  }

  return [];
};

const remoteAddress = (request: IncomingMessage): string => {
  if (!request.socket.remoteAddress) {
    return '127.0.0.1';
  }
  return request.socket.remoteAddress;
};

export default (request: IncomingMessage): string[] => {
  return [
    ...parseHeader(request),
    remoteAddress(request),
  ].map(ipAddress => {
    if (ipAddress.substr(0, 7) === '::ffff:') return ipAddress.substr(7);
    return ipAddress;
  });
};
