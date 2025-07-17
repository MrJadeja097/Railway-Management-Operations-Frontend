import { z } from "zod";

export const StaffSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: " First Name should have at least 3 characters!" })
    .max(15, {
      message: " First Name should have a maximum of 15 characters!",
    })
    .regex(/^[A-Za-z]+$/, {
      message: " First Name should contain only alphabets and no spaces!",
    }),

  lastName: z
    .string()
    .min(3, { message: " Last Name should have at least 3 characters!" })
    .max(15, {
      message: " Last Name should have a maximum of 15 characters!",
    })
    .regex(/^[A-Za-z]+$/, {
      message: " Last Name should contain only alphabets and no spaces!",
    }),

  email: z
    .string()
    .email({ message: " Email is not valid!" })
    .min(1, { message: " Email cannot be empty!" }),

  mobileNumber: z.string().regex(/^[0-9]{10}$/, {
    message: " Mobile Number must be exactly 10 digits!",
  }),

  Address: z
    .string()
    .min(3, { message: " Address should have at least 3 characters!" })
    .max(50, { message: " Address should have at most 50 characters!" }),

  city: z
    .string()
    .min(2, { message: " City should have at least 2 characters!" }),

  password: z
    .string()
    .min(8, { message: " Password must be at least 8 characters long!" })
    .max(32, { message: " Password must not exceed 32 characters!" })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]/, {
      message: " Password must contain at least one letter and one number!",
    }),

  role: z
    .string()
    .min(2, { message: " Role  should have at least 2 characters!" }),
});

// TypeScript helper
export type StaffFormData = z.infer<typeof StaffSchema>;
