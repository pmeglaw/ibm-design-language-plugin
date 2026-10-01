export const primaryRoutes = [
  { href: '/', label: 'Overview' },
  { href: '/reports', label: 'Reports' },
  { href: '/assets', label: 'Assets' },
] as const;

// Section selection is not the same as claiming an ancestor is the current page.
export function inSection(pathname: string, href: string) {
  return pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));
}

export function currentLocation(pathname: string, href: string) {
  return pathname === href ? 'page' as const :
    inSection(pathname, href) ? 'true' as const : undefined;
}
