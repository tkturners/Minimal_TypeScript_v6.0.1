import { z as zod } from 'zod';
import { isValidPhoneNumber } from 'react-phone-number-input/input';

import { fIsAfter } from 'src/utils/format-time';

import { schemaHelper } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export type FormSchemaType = zod.infer<typeof FormSchema>;

export const FormSchema = zod
  .object({
    fullName: zod
      .string()
      .min(1, { message: 'Full name is required!' })
      .min(6, { message: 'Mininum 6 characters!' })
      .max(32, { message: 'Maximum 32 characters!' }),
    email: zod
      .string()
      .min(1, { message: 'Email is required!' })
      .email({ message: 'Email must be a valid email address!' }),
    phoneNumber: schemaHelper.phoneNumber({ isValidPhoneNumber }),
    editor: schemaHelper
      .editor()
      .min(100, { message: 'Content must be at least 100 characters' })
      .max(200, { message: 'Content must be less than 200 characters' }),
    age: zod
      .number()
      .min(1, { message: 'Age is required!' })
      .min(18, { message: 'Age must be between 18 and 100' })
      .max(100, { message: 'Age must be between 18 and 100' }),
    startDate: schemaHelper.date({ message: { required_error: 'Start date is required!' } }),
    endDate: schemaHelper.date({ message: { required_error: 'End date is required!' } }),
    password: zod
      .string()
      .min(1, { message: 'Password is required!' })
      .min(6, { message: 'Password is too short!' }),
    confirmPassword: zod.string().min(1, { message: 'Confirm password is required!' }),
    autocomplete: schemaHelper.objectOrNull<{
      value: string;
      label: string;
    } | null>({ message: { required_error: 'Autocomplete is required!' } }),
    singleCountry: schemaHelper.objectOrNull({
      message: { required_error: 'Single country is required!' },
    }),
    multiCountry: zod.string().array().min(2, { message: 'Must have at least 2 items!' }),
    //
    singleSelect: zod.string().min(1, { message: 'Single select is required!' }),
    multiSelect: zod.string().array().min(2, { message: 'Must have at least 2 items!' }),
    //
    rating: zod.number().min(1, { message: 'Rating is required!' }),
    radioGroup: zod.string().min(1, { message: 'Choose at least one option!' }),
    //
    checkbox: schemaHelper.boolean({ message: { required_error: 'Checkbox is required!' } }),
    switch: schemaHelper.boolean({ message: { required_error: 'Switch is required!' } }),
    //
    multiCheckbox: zod.string().array().nonempty({ message: 'Choose at least one option!' }),
    multiSwitch: zod.string().array().nonempty({ message: 'Choose at least one option!' }),
    //
    slider: zod.number().min(10, { message: 'Mininum value is >= 10' }),
    sliderRange: zod
      .number()
      .array()
      .refine((data) => data[0] >= 20 && data[1] <= 80, {
        message: 'Range must be between 20 and 80',
      }),
    //
    singleUpload: schemaHelper.file({ message: { required_error: 'Single upload is required!' } }),
    multiUpload: schemaHelper.files({ message: { required_error: 'Multi upload is required!' } }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match!',
    path: ['confirmPassword'],
  })
  .refine((data) => !fIsAfter(data.startDate, data.endDate), {
    message: 'End date cannot be earlier than start date!',
    path: ['endDate'],
  });
