import { Text } from './inputs/Text';
import { Password } from './inputs/Password';
import { Select } from './inputs/Select';
import { DateInput } from './inputs/DateInput';
import { RepeatableFormField } from './inputs/RepeatableFormField';

export const Input = ({type, ...props}) => {
  switch (type) {
    case 'text':
      return <Text {...props}/>;

    case 'password':
      return <Password {...props}/>;

    case 'select':
      return <Select {...props}/>;

    case 'repeatable-form-field':
      return <RepeatableFormField {...props}/>;

    case 'date':
      return <DateInput {...props}/>;

    default:
      return null;
  }
}
