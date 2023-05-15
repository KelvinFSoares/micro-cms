import React, { FunctionComponent } from 'react';
import Image from '../atoms/Image';

export type ImageRowObject = {
  imageSource: string;
  alt: string;
};

export interface ImageRowProps extends React.ComponentPropsWithoutRef<'div'> {
  imagesData: ImageRowObject[];
}

const ImageRow: FunctionComponent<ImageRowProps> = ({
  imagesData,
  ...rest
}) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      {...rest}
    >
      {imagesData.map((img, index) => (
        <Image
          key={'image-row-' + index}
          width="full"
          height="full"
          src={img.imageSource}
          alt={img.alt}
        />
      ))}
    </div>
  );
};

export default ImageRow;
