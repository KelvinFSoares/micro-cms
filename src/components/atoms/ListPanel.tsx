import { FunctionComponent, ReactNode } from 'react';

interface ListPanelProps extends React.ComponentPropsWithoutRef<'ul'> {
  children: ReactNode;
}

const ListPanel: FunctionComponent<ListPanelProps> = ({
  children,
  ...rest
}) => {
  return (
    <ul
      className="absolute top-0 left-0 w-full z-10 mt-1 border border-gray-300 rounded-md shadow-lg"
      {...rest}
    >
      {children}
    </ul>
  );
};

export default ListPanel;
