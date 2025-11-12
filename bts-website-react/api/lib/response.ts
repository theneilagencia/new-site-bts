import { VercelResponse } from '@vercel/node';

export function success(res: VercelResponse, data: any, status = 200) {
  return res.status(status).json({
    success: true,
    data,
  });
}

export function error(res: VercelResponse, message: string, status = 400) {
  return res.status(status).json({
    success: false,
    error: message,
  });
}

export function unauthorized(res: VercelResponse, message = 'Unauthorized') {
  return error(res, message, 401);
}

export function forbidden(res: VercelResponse, message = 'Forbidden') {
  return error(res, message, 403);
}

export function notFound(res: VercelResponse, message = 'Not found') {
  return error(res, message, 404);
}

export function serverError(res: VercelResponse, message = 'Internal server error') {
  return error(res, message, 500);
}
