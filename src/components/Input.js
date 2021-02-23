import { Text } from './inputs/Text';
import { Password } from './inputs/Password';
import { Select } from './inputs/Select';
import { RepeatableFormField } from './inputs/RepeatableFormField';

export const Input = ({type, ...props}) => {
  switch (type) {
    case 'text':
      return <Text {...props}></Text>;

    case 'password':
      return <Password {...props}></Password>;

    case 'select':
      return <Select {...props}></Select>;

    case 'repeatable-form-field':
      return <RepeatableFormField {...props}></RepeatableFormField>;


    default:
      return null;
  }
}
