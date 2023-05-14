import { FunctionComponent } from 'react';

const TextArea: FunctionComponent<
  React.ComponentPropsWithoutRef<'textarea'>
> = ({ ...rest }) => {
  return (
    <textarea
      className="w-full border border-gray-300 p-2 rounded-lg h-40 lg:h-80"
      {...rest}
    />
  );
};

export default TextArea;
