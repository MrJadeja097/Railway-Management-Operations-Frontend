export interface Staff{
  id: number;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  Address: string;
  password: string;
  city: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}