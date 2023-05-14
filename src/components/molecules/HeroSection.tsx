import SimpleText from '../atoms/SimpleText';
import Image from '../atoms/Image';
import { FunctionComponent } from 'react';

interface HeroSectionProps extends React.ComponentPropsWithoutRef<'div'> {
  classNames: string;
}

const HeroSection: FunctionComponent<HeroSectionProps> = ({
  classNames,
  ...rest
}) => {
  return (
    <div className={classNames} {...rest}>
      <Image
        width="full"
        height="full"
        src="https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2022/10/tosn_homepage-hero_2485x700_black-adam_v2.webp?resize=860%2C280&ssl=1"
        alt="Hero Image"
      />
      <div className="absolute right-0 bottom-0 p-10 w-110">
        <SimpleText size="lg" color="white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </SimpleText>
      </div>
    </div>
  );
};

export default HeroSection;
