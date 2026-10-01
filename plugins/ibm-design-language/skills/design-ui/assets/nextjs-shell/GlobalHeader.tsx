'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Button, Content, Header, HeaderGlobalAction, HeaderGlobalBar, HeaderMenuButton,
  HeaderMenuItem, HeaderName, HeaderNavigation, HeaderPanel, HeaderSideNavItems,
  SideNav, SideNavItems, SideNavLink, SkipToContent, Switcher, SwitcherItem,
} from '@carbon/react';
import { Notification, Switcher as SwitcherIcon, UserAvatar } from '@carbon/icons-react';
import { currentLocation, inSection, primaryRoutes } from './navigation';

type Panel = 'notifications' | 'account' | 'switcher';
const panelLabels: Record<Panel, string> = {
  notifications: 'Notifications', account: 'Account', switcher: 'Switch products',
};

// Example composition: non-modal overlay navigation, no unsaved form inside it.
// Supply actual product destinations and identity in the consuming application.
export default function GlobalHeader({ children, productName = 'Workspace' }: {
  children: ReactNode; productName?: string;
}) {
  const pathname = usePathname();
  const [sideOpen, setSideOpen] = useState(false);
  const [panel, setPanel] = useState<Panel | null>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const sideRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const utilitiesRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const actionRefs = useRef<Partial<Record<Panel, HTMLButtonElement | null>>>({});

  function dismissPanel(restoreFocus: boolean) {
    setPanel(null);
    if (restoreFocus) openerRef.current?.focus();
  }
  function dismissSide(restoreFocus: boolean) {
    setSideOpen(false);
    if (restoreFocus) menuRef.current?.focus();
  }

  // Focusing after render makes newly opened content reachable. These regions
  // are deliberately non-modal: do not trap Tab or mark the page inert.
  useEffect(() => {
    if (sideOpen) {
      const links = sideRef.current?.querySelectorAll<HTMLElement>('a[href]');
      Array.from(links ?? []).find((link) => link.getClientRects().length > 0)?.focus();
    }
  }, [sideOpen]);
  useEffect(() => {
    if (panel) panelRef.current?.focus();
  }, [panel]);
  useEffect(() => {
    if (!panel) return;
    function outside(event: PointerEvent) {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !utilitiesRef.current?.contains(target)) {
        // Keep focus where the user clicked; do not steal it back.
        setPanel(null);
      }
    }
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, [panel]);

  // The shared layout persists across App Router navigation. On an actual route
  // change, close shell overlays and give the new content a stable focus target.
  const previousPath = useRef(pathname);
  useEffect(() => {
    if (previousPath.current !== pathname) {
      previousPath.current = pathname;
      setSideOpen(false);
      setPanel(null);
      document.getElementById('main-content')?.focus();
    }
  }, [pathname]);

  function navigate() {
    setSideOpen(false);
    setPanel(null);
    // Also handles selecting the current route, when pathname does not change.
    document.getElementById('main-content')?.focus();
  }

  return <div className="shell-example" onKeyDownCapture={(event) => {
    if (event.key !== 'Escape') return;
    if (panel) { event.preventDefault(); dismissPanel(true); }
    else if (sideOpen) { event.preventDefault(); dismissSide(true); }
  }}>
    <Header aria-label={productName}>
      <SkipToContent href="#main-content" onClick={() => {
        setSideOpen(false); setPanel(null);
        document.getElementById('main-content')?.focus();
      }} />
      <HeaderMenuButton ref={menuRef} isCollapsible
        aria-label={sideOpen ? 'Close navigation' : 'Open navigation'}
        aria-controls={sideOpen ? 'product-navigation' : undefined} aria-expanded={sideOpen} isActive={sideOpen}
        onClick={() => { setPanel(null); setSideOpen((open) => !open); }} />
      <HeaderName as={Link} href="/" prefix="" onClick={navigate}
        className="shell-example__name" title={productName}>{productName}</HeaderName>
      <HeaderNavigation aria-label="Primary">
        {primaryRoutes.map(({ href, label }) => <HeaderMenuItem key={href}
          as={Link} href={href} isActive={inSection(pathname, href)}
          aria-current={currentLocation(pathname, href)} onClick={navigate}>
          {label}
        </HeaderMenuItem>)}
      </HeaderNavigation>
      <div ref={utilitiesRef} className="shell-example__utilities">
        <HeaderGlobalBar>
          {(['notifications', 'account', 'switcher'] as const).map((id) => {
            const Icon = id === 'notifications' ? Notification : id === 'account' ? UserAvatar : SwitcherIcon;
            return <HeaderGlobalAction key={id} aria-label={panelLabels[id]}
              ref={(element) => { actionRefs.current[id] = element; }}
              aria-controls={panel === id ? 'shell-utility-panel' : undefined}
              aria-expanded={panel === id} isActive={panel === id}
              onClick={() => {
                setSideOpen(false);
                openerRef.current = actionRefs.current[id] ?? null;
                if (panel === id) dismissPanel(true);
                else setPanel(id);
              }}><Icon size={20} aria-hidden="true" /></HeaderGlobalAction>;
          })}
        </HeaderGlobalBar>
      </div>
    </Header>
    {sideOpen && <div className="shell-example__navigation">
    <SideNav ref={sideRef} id="product-navigation" aria-label="Product navigation"
      expanded={sideOpen} isPersistent={false}
      onToggle={(_event: unknown, expanded?: boolean) => {
        if (expanded !== false || typeof _event !== 'object' || _event === null) return;
        if ('type' in _event && _event.type === 'keydown') dismissSide(true);
        if ('type' in _event && _event.type === 'blur' && 'relatedTarget' in _event) {
          // Use the destination from the event: activeElement can still be body
          // during blur. Preserve an overlay click or menu-trigger toggle.
          const target = _event.relatedTarget;
          if (target && target !== menuRef.current) setSideOpen(false);
        }
      }}
      onOverlayClick={() => dismissSide(true)}>
      <HeaderSideNavItems hasDivider>
          {primaryRoutes.map(({ href, label }) => <HeaderMenuItem key={href}
            as={Link} href={href} isActive={inSection(pathname, href)}
            aria-current={currentLocation(pathname, href)} onClick={navigate}>
            {label}
          </HeaderMenuItem>)}
      </HeaderSideNavItems>
      <SideNavItems>
        <SideNavLink as={Link} href="/settings" isActive={inSection(pathname, '/settings')}
          aria-current={currentLocation(pathname, '/settings')} onClick={navigate}>Settings</SideNavLink>
      </SideNavItems>
    </SideNav></div>}
    {panel && <HeaderPanel expanded addFocusListeners={false}>
      <div ref={panelRef} id="shell-utility-panel" role="region" aria-label={panelLabels[panel]}
        onBlur={(event) => {
          const target = event.relatedTarget;
          if (target && !event.currentTarget.contains(target) && !utilitiesRef.current?.contains(target)) {
            setPanel(null);
          }
        }}
        className="shell-example__panel" tabIndex={-1}>
        <h2>{panelLabels[panel]}</h2>
        {panel === 'notifications' && <p>No notifications.</p>}
        {panel === 'account' && <Link href="/settings" onClick={navigate}>Account settings</Link>}
        {panel === 'switcher' && <Switcher aria-label="Products">
          <SwitcherItem aria-label="Analytics" href="https://example.com/products/analytics">Analytics</SwitcherItem>
          <SwitcherItem aria-label="Catalog" href="https://example.com/products/catalog">Catalog</SwitcherItem>
        </Switcher>}
        <Button kind="ghost" size="sm" onClick={() => dismissPanel(true)}>Dismiss panel</Button>
      </div>
    </HeaderPanel>}
    <Content id="main-content" tabIndex={-1}>{children}</Content>
  </div>;
}
