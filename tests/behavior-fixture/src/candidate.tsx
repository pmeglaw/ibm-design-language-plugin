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

export type BehaviorPattern = "corrected" | "miss";
export type BehaviorTheme = "white" | "g100";
export type BehaviorDirection = "ltr" | "rtl";

const LONG = "Quarterly platform access review for the Northline billing workspace, including the October export and the tax window";

export function Candidate({
  pattern,
  theme,
  direction,
}: {
  pattern: BehaviorPattern;
  theme: BehaviorTheme;
  direction: BehaviorDirection;
}) {
  const miss = pattern === "miss";
  return (
    <Theme theme={theme}>
      <div
        className={miss ? "behavior-root behavior-miss" : "behavior-root behavior-corrected"}
        data-behavior-root
        data-behavior-pattern={pattern}
        lang={miss && direction === "rtl" ? "ar" : "en"}
        dir={direction}
        tabIndex={-1}
      >
        {miss ? <Missed /> : <Corrected />}
        <div tabIndex={-1} data-behavior-sink className="behavior-sink" />
      </div>
    </Theme>
  );
}

function Corrected() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [note, setNote] = useState("");

  function closeMenu() {
    setOpen(false);
    queueMicrotask(() => document.querySelector<HTMLElement>("[data-behavior-menu]")?.focus());
  }

  return (
    <>
      <div
        data-behavior-header
        onKeyDown={(event) => {
          if (event.key !== "Escape" || !open) return;
          event.preventDefault();
          closeMenu();
        }}
      >
      <Header aria-label="Northline">
        <HeaderMenuButton
          isCollapsible
          data-behavior-menu
          aria-label="Open menu"
          aria-controls="behavior-menu"
          aria-expanded={open}
          isActive={open}
          onClick={() => setOpen((value) => !value)}
        />
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
          <HeaderGlobalAction aria-label="Notifications" onClick={() => undefined}>
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Account" onClick={() => undefined}>
            <User size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
      </div>
      <nav id="behavior-menu" data-behavior-panel hidden={!open} className="behavior-panel">
        <a href="#releases" onClick={(event) => event.preventDefault()}>
          Releases
        </a>
      </nav>
      <div className="behavior-body">
        <div className="behavior-pagehead">
          <h2>October release</h2>
          <Button kind="primary">Publish release</Button>
        </div>
        <div data-behavior-search>
          <Search labelText="Search releases" size="md" value={query} onChange={(event) => setQuery(event.target.value)} />
        </div>
        <TableContainer title="Statements" description="Open items in this release">
          <TableToolbar>
            <TableToolbarContent>
              <div data-behavior-toolbar>
                <TableToolbarSearch persistent labelText="Filter statements" placeholder="Filter statements" />
              </div>
            </TableToolbarContent>
          </TableToolbar>
          <Table size="md">
            <TableHead>
              <TableRow>
                <TableHeader>Statement</TableHeader>
                <TableHeader>Open</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Billing export</TableCell>
                <TableCell>12</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div data-behavior-scroll tabIndex={0} dir="ltr">
                    <span data-behavior-long>{LONG}</span>
                  </div>
                </TableCell>
                <TableCell>3</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <form
          className="behavior-form"
          data-behavior-form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h2>File a note</h2>
          <div className="behavior-pair">
            <TextInput
              id="project-name"
              data-behavior-field
              labelText="Project name"
              helperText="Shown on the release."
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextInput
              id="project-id"
              labelText="Project ID"
              helperText="Used in the URL."
              value={projectId}
              onChange={(event) => setProjectId(event.target.value)}
            />
          </div>
          <TextInput id="project-note" labelText="Note" helperText="Optional context for reviewers." value={note} onChange={(event) => setNote(event.target.value)} />
          <div className="behavior-actions">
            <Button
              type="submit"
              kind="primary"
              data-behavior-submit
              onClick={(event) => {
                const form = event.currentTarget.form;
                if (!form || form.checkValidity()) return;
                form.querySelector<HTMLInputElement>("[data-behavior-field]")?.focus();
              }}
            >
              Save note
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

function focusSink() {
  document.querySelector<HTMLElement>("[data-behavior-sink]")?.focus();
}

function Missed() {
  return (
    <>
      <header
        className="behavior-miss-header"
        data-behavior-header
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " " || event.key === "Escape") focusSink();
        }}
      >
        <a href="#notes" data-behavior-decoy onClick={(event) => event.preventDefault()}>
          Notes
        </a>
        <div role="button" tabIndex={-1} data-behavior-menu aria-expanded="false" aria-label="Open menu">
          Menu
        </div>
        <p>Northline</p>
      </header>
      <div className="behavior-body">
        <h2>October release</h2>
        <a href="#export" data-behavior-outside onClick={(event) => event.preventDefault()}>
          Export
        </a>
        <div data-behavior-search className="behavior-fake-search">
          <span>Search releases</span>
          <input aria-label="Search releases" readOnly value="billing" />
          <button type="button" onClick={focusSink}>
            Clear search input
          </button>
        </div>
        <div data-behavior-toolbar>
          <input aria-label="Filter statements" tabIndex={-1} readOnly value="" />
        </div>
        <p data-behavior-long className="behavior-spill">
          {LONG}
        </p>
        <form className="behavior-form" onSubmit={(event) => event.preventDefault()}>
          <h2>File a note</h2>
          <span>Project name</span>
          <input data-behavior-field aria-label="Name" />
          <button type="button" data-behavior-submit onClick={focusSink}>
            Save note
          </button>
        </form>
      </div>
    </>
  );
}
