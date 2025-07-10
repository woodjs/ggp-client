/* eslint-disable import/no-cycle */
import LinkItem from '@/components/layout/Cabinet/Sidebar/LinkItem';
import CategoryItem from '@/components/layout/Cabinet/Sidebar/CategoryItem';

export default function NavItem({ name, link, submenu, icon, menuOpen }) {
  if (submenu)
    return (
      <CategoryItem
        icon={icon}
        name={name}
        submenu={submenu}
        menuOpen={menuOpen}
      />
    );

  return <LinkItem icon={icon} name={name} link={link} menuOpen={menuOpen} />;
}
