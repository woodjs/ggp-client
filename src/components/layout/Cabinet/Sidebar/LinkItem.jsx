import NextLink from 'next/link';
import LinkCard from '@/components/layout/Cabinet/Sidebar/LinkCard';

export default function LinkItem({ name, link, icon, menuOpen }) {
  return (
    <NextLink href={link}>
      <LinkCard link={link} menuOpen={menuOpen} name={name} icon={icon} />
    </NextLink>
  );
}
