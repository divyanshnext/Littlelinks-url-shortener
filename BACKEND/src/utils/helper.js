import { nanoid } from 'nanoid';

const DEFAULT_LENGTH = 7;

export const generateNanoId = (length = DEFAULT_LENGTH) => {
    return nanoid(length);
}
