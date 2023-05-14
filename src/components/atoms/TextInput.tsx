import { FunctionComponent } from 'react';

interface TextInputProps extends React.ComponentPropsWithoutRef<'input'> {
  placeholder: string;
  innerRef: React.LegacyRef<HTMLInputElement>;
}

const TextInput: FunctionComponent<TextInputProps> = ({
  placeholder,
  innerRef,
  ...rest
}) => {
  return (
    <input
      type="text"
      className="bg-black text-white p-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
      placeholder={placeholder}
      ref={innerRef}
      {...rest}
    />
  );
};

export default TextInput;
