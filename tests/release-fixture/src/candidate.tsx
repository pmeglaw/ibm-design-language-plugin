import { useState } from "react";
import { Notification, User } from "@carbon/icons-react";
import {
  Button,
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  Search,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TextInput,
  Theme,
} from "@carbon/react";

export type ReleasePattern = "corrected" | "miss";
export type ReleaseTheme = "white" | "g100";

const ROWS = [
  { name: "Billing export", open: "12" },
  { name: "Quarterly platform access review for the Northline billing workspace", open: "3" },
  { name: "Tax window", open: "1" },
];

export function Candidate({ pattern, theme }: { pattern: ReleasePattern; theme: ReleaseTheme }) {
  const miss = pattern === "miss";
  const [query, setQuery] = useState("billing");

  return (
    <Theme theme={theme}>
      <div className="release-frame">
      <div className={miss ? "release-stage release-miss" : "release-stage release-corrected"} data-release-stage>
        {miss ? <MissHeader /> : <CorrectedHeader />}
        <div className="release-body">
          {miss ? null : (
            <div className="release-pagehead">
              <div>
                <h2>October release</h2>
              </div>
              <Button kind="primary" data-release-page-action>
                Publish release
              </Button>
            </div>
          )}

          <div className="release-search" data-release-search>
            <Search
              labelText="Search releases"
              size="md"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <ul className="release-collection" data-release-collection>
            <li>Billing export</li>
            <li>October statements</li>
            <li>Tax window</li>
          </ul>

          <div className="release-table-block">
            {miss ? (
              <div className="release-detached" data-release-toolbar>
                <Button kind="primary" size="md">
                  Export
                </Button>
              </div>
            ) : null}
            <TableContainer title="Statements" description="Open items in this release">
              {miss ? null : (
                <TableToolbar data-release-toolbar>
                  <TableToolbarContent>
                    <TableToolbarSearch persistent labelText="Filter statements" placeholder="Filter statements" />
                  </TableToolbarContent>
                </TableToolbar>
              )}
              <Table size="md" data-release-table>
                <TableHead>
                  <TableRow>
                    <TableHeader data-release-col="name">
                      <span data-release-text>Statement</span>
                    </TableHeader>
                    <TableHeader data-release-col="count">
                      <span data-release-text className="release-end">
                        Open
                      </span>
                    </TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ROWS.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell data-release-col="name" data-release-long={row.open === "3" ? "" : undefined}>
                        <span data-release-text>{row.name}</span>
                      </TableCell>
                      <TableCell data-release-col="count">
                        <span data-release-text className={miss ? undefined : "release-end"}>
                          {row.open}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <form className="release-form" data-release-form onSubmit={(event) => event.preventDefault()}>
            <h2>File a note</h2>
            {miss ? <FormActions miss /> : null}
            <div className="release-pair" data-release-pair>
              <Field miss={miss} id="project-name" label="Project name" help="Shown on the release." />
              <Field miss={miss} id="project-id" label="Project ID" help="Used in the URL." />
            </div>
            <Field miss={miss} id="project-note" label="Note" help="Optional context for reviewers." />
            {miss ? null : <FormActions />}
          </form>
        </div>
      </div>
      </div>
    </Theme>
  );
}

function CorrectedHeader() {
  return (
    <Header aria-label="Northline" data-release-header>
      <HeaderMenuButton aria-label="Open menu" />
      <HeaderName href="/" prefix="" onClick={(event) => event.preventDefault()}>
        Northline
      </HeaderName>
      <HeaderNavigation aria-label="Northline">
        <HeaderMenuItem href="/" onClick={(event) => event.preventDefault()}>
          Releases
        </HeaderMenuItem>
        <HeaderMenuItem href="/" onClick={(event) => event.preventDefault()}>
          Statements
        </HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Notifications" data-release-utility onClick={() => undefined}>
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Account" data-release-utility onClick={() => undefined}>
          <User size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  );
}

function MissHeader() {
  return (
    <header className="release-header-miss" data-release-header>
      <Button kind="ghost" size="sm" hasIconOnly renderIcon={Notification} iconDescription="Notifications" data-release-utility />
      <p className="release-miss-name">Northline</p>
      <Button kind="primary" size="md" data-release-page-action>
        Publish release
      </Button>
      <Button kind="ghost" size="sm" hasIconOnly renderIcon={User} iconDescription="Account" data-release-utility />
    </header>
  );
}

function Field({ miss, id, label, help }: { miss: boolean; id: string; label: string; help: string }) {
  return (
    <div className={miss ? "release-card" : undefined} data-release-field>
      <TextInput
        id={id}
        labelText={label}
        helperText={help}
        hideLabel={miss}
        placeholder={miss ? label : undefined}
        defaultValue=""
      />
    </div>
  );
}

function FormActions({ miss = false }: { miss?: boolean }) {
  return (
    <div className="release-form-actions">
      <Button kind="secondary" type="button">
        Cancel
      </Button>
      <Button kind="primary" type="submit" data-release-primary>
        Create project
      </Button>
      {miss ? (
        <Button kind="primary" type="button">
          Save draft
        </Button>
      ) : null}
    </div>
  );
}
