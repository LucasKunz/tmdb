export type MenuContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export type MenuProviderPropsType = {
  children: React.ReactNode;
};
