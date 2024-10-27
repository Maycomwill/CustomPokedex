export interface SideBarProps {
  title: string;
  url: string;
  items: NavMainProps[];
}

export interface NavMainProps {
  title: string;
  url: string;
  isActive?: boolean;
  target?: string;
}
