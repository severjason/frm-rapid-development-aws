import { FormFieldTypes } from '@aws-amplify/ui-components/dist/types/components/amplify-auth-fields/amplify-auth-fields-interface';

export const formFields: FormFieldTypes = [
  {
    type: 'username',
    placeholder: 'Username',
    required: true,
    hint: 'Some hint'
  },
  {
    type: 'password',
    placeholder: 'Password',
    required: true,
    hint: 'Some password hint'
  },
  {
    type: 'email',
    placeholder: 'Email',
    required: true,
    hint: 'Some email hint'
  },
]
