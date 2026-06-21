import { ValidationException } from '../../../../packages/error-handler';
import { User } from '../types/user.type';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validateRegistrationData = (
  data: User,
  userType: 'user' | 'seller',
) => {
  const name = data.name?.trim();
  const email = data.email?.trim();
  const password = data.password?.trim();
  const phoneNumber = data.phoneNumber?.trim();
  const country = data.country?.trim();
  if (
    !name ||
    !email ||
    !password ||
    !phoneNumber ||
    (userType === 'seller' && !country)
  ) {
    throw new ValidationException('Missing required fields!');
  }
  if (!emailRegex.test(email))
    throw new ValidationException('Invalid email format');
};
