import { REACT_QUERY_KEYS } from '@/constants';
import { userService } from '@/services/example/user.service';
import { useQuery } from '@tanstack/react-query';

// Note: Example of react-query hooks for calling endpoints

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: [REACT_QUERY_KEYS.USERS_COLLECTION],
    queryFn: async () => await userService.getAllUsers(),
    retry: 10,
  });
};

export const useGetUserByID = (id: number) => {
  return useQuery({
    queryKey: [REACT_QUERY_KEYS.USERS_COLLECTION, id],
    queryFn: async () => await userService.getUserByID(id),
    retry: 10,
  });
};
