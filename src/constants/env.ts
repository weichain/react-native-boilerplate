import { nonNull } from '../utils/utils';

export const API_URL = nonNull(process.env.EXPO_PUBLIC_API_URL, `env of "apiUrl" is not defined. Did you forget a definition in ".env.*"?`);
