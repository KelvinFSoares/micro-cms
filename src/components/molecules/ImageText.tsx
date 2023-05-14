import SimpleText from '../atoms/SimpleText';
import Image from '../atoms/Image';
import { ReactNode, FunctionComponent } from 'react';

type ImageTextProps = {
  imageSource: string;
  imageAlt: string;
  children: ReactNode;
};

const ImageText: FunctionComponent<ImageTextProps> = ({
  imageSource,
  imageAlt,
  children,
}) => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-1/3">
        <Image width="full" height="full" src={imageSource} alt={imageAlt} />
      </div>
      <div className="w-2/3 p-4">
        <SimpleText size="sm" color="black">
          {children}
        </SimpleText>
      </div>
    </div>
  );
};

export default ImageText;
