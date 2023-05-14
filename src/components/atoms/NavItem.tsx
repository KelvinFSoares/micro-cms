import { FunctionComponent } from 'react';

interface NavItemProps extends React.ComponentPropsWithoutRef<'a'> {
  label: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({ label, ...rest }) => {
  return (
    <a
      className="text-black font-bold hover:text-gray-400 px-4 text-lg"
      {...rest}
    >
      {label}
    </a>
  );
};

export default NavItem;
