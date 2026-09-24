import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  const path = '/' + slug.join('/');
  const title = path === '/' ? 'Overview' : path === '/reports' ? 'Reports' :
    path === '/reports/quarterly' ? 'Quarterly report' : path === '/reports-old' ? 'Archived reports' :
    path === '/assets' ? 'Assets' : 'Settings';
  return <>
    <h1>{title}</h1>
    <p>This isolated fixture exercises product navigation and supporting utility panels.</p>
    <div className="fixture-links">
      <Link href="/reports/quarterly">Quarterly report</Link>
      <Link href="/reports-old">Archived reports</Link>
    </div>
    <label htmlFor="notes">Page notes</label>
    <input id="notes" type="text" />
    <p>Notes are local to this fixture page and are not saved.</p>
  </>;
}
