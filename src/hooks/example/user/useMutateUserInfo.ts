import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ReactQueryKeys } from '@/constants';
import { userService } from '@/services/example/user.service';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  return useMutation({
    mutationFn: userService.deleteUser,
    onError: (error, id, context) => {
      console.log(`error for ${id} is: `, error);
      console.log('context is: ', context);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ReactQueryKeys.USERS_COLLECTION],
      });
    },
  });
};

export const useSimulateError = () => {
  return useMutation({
    mutationFn: userService.simulateError,
    onError: (error) => {
      console.log('error is: ', error);
    },
    // Note: Usually we should rarely want to switch this to true, but it's good to know we can
    throwOnError: true,
  });
};
