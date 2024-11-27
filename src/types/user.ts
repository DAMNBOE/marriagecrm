export interface UserProfile {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  location: string;
  occupation: string;
  education: string;
  about: string;
  imageUrl: string;
  religion?: string;
  caste?: string;
  height?: string;
  maritalStatus: string;
  contactDetails?: {
    phone: string;
    email: string;
  };
}