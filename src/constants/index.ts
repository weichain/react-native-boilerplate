// Note: Keys defined for react query cache
export enum ReactQueryKeys {
  USERS_COLLECTION = 'usersCollection',
}

// Note: Convention is: <SERVICE_NAME>_<METHOD>_<IDENTIFIER>
// All error messages should be here
export enum ErrorMessage {
  USER_GET_ALL = 'Could not fetch user information list!',
  USER_GET_BY_ID = 'Could not fetch user information!',
  USER_DELETE_BY_ID = 'Could not delete user!',
}

export const APP_ENV = process.env.NODE_ENV;
