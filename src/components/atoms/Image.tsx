import { FunctionComponent } from 'react';

export interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {
  width: string;
  height: string;
}

const Image: FunctionComponent<ImageProps> = ({ width, height, ...rest }) => {
  return <img className={`w-${width} h-${height} object-cover`} {...rest} />;
};

export default Image;
