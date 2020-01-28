export class User {
  id = 0;
  name = '';
  email = '';
  address?: string;
  cameFrom: '' | 'Facebook' | 'Google' | 'Other' = '';
  workExperience?: number;
  conditions = true;
  newsLetter = true;
}
