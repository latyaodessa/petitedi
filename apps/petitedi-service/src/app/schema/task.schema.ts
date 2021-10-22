import { object, string } from 'yup';

export const createUserSchema = object({
  incoming: string(),
  outgoing: string()
});

