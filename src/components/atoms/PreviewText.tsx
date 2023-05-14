import { FunctionComponent } from 'react';

interface PreviewTextProps extends React.ComponentPropsWithoutRef<'p'> {
  text: string;
  charLimit: number;
  size: string;
  color: string;
}

const PreviewText: FunctionComponent<PreviewTextProps> = ({
  text,
  charLimit,
  size,
  color,
  ...rest
}) => {
  const trimmedText = text.substring(0, charLimit) + '...';
  return (
    <p
      className={`text-${size} mb-4 ${
        color ? `text-${color}` : 'text-black'
      } break-words`}
      {...rest}
    >
      {trimmedText}
    </p>
  );
};

export default PreviewText;
