import { IncomingMessage, ServerResponse } from 'http';
import * as uuid from 'uuid';
export function badRequest(
  request: IncomingMessage,
  response: ServerResponse,
  code: number,
  message: string,
) {
  response.statusCode = code;
  response.statusMessage = message;
  response.end(
    JSON.stringify({
      error: message,
    }),
  );
}
export function validateUuid(id): boolean {
  return uuid.validate(id);
}
