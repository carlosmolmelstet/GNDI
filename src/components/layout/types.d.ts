export interface MenuItem {
  title: string;
  icon: ReactNode;
  path: string;
  isActive?: boolean;
}

export interface NavgationItem {
  title: string;
  path: string;
}

export interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
  navgationItems?: NavgationItem[];
}

interface HeaderItemnProps {
  navgationItem: NavgationItem;
  isLast?: boolean;
}

interface HeaderProps {
  navgationItems: NavgationItem[];
  layoutSize: string;
}

interface MenuItem {
  title: string;
  icon: ReactNode;
  path: string;
  isActive?: boolean;
}
interface MenuProps {
  layoutSize: string;
}
