import { ReactNode, FunctionComponent } from 'react';

type ListPanelItemProps = {
  key: string;
  children: ReactNode;
};

const ListPanel: FunctionComponent<ListPanelItemProps> = ({
  key,
  children,
  ...rest
}) => {
  return (
    <li
      key={key}
      className="flex items-center bg-orange-50 px-4 py-2 hover:bg-gray-100"
      {...rest}
    >
      {children}
    </li>
  );
};

export default ListPanel;
