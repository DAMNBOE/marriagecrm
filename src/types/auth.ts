export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ProfileFormData {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  location: string;
  occupation: string;
  education: string;
  about: string;
  religion?: string;
  caste?: string;
  height?: string;
  maritalStatus: string;
  imageUrl: string;
}