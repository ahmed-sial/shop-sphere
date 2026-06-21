import { ValidationException } from '../../../../packages/error-handler';
import { User } from '../types/user.type';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validateRegistrationData = (
  data: User,
  userType: 'user' | 'seller',
) => {
  const { name, email, password, phoneNumber, country } = data;
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
