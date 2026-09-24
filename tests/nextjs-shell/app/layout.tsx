import '@carbon/styles/css/styles.css';
import '../components/shell/shell.scss';
import './fixture.css';
import GlobalHeader from '../components/shell/GlobalHeader';
import { cookies } from 'next/headers';

export const metadata = { title: 'Carbon shell verification' };
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  const theme = jar.get('fixture-theme')?.value === 'g100' ? 'g100' : 'white';
  const name = jar.get('fixture-long-name')?.value === 'true'
    ? 'WorkspaceAdministrationAndReportingWithAnUnbrokenProductName' : 'Workspace';
  return <html lang="en"><body className={`cds--${theme}`}>
    <GlobalHeader productName={name}>{children}</GlobalHeader>
  </body></html>;
}
