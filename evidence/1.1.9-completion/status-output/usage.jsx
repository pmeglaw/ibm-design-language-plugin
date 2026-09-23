// Integration example; requires the host's existing React + Carbon setup.
import { Checkmark, WarningAlt, Close, Time, Subtract } from '@carbon/icons-react';
import './status-legend.css';

const states = {
  healthy: { label: 'Healthy', Icon: Checkmark },
  warning: { label: 'Warning', Icon: WarningAlt },
  critical: { label: 'Critical', Icon: Close },
  'in-progress': { label: 'In progress', Icon: Time },
  'not-started': { label: 'Not started', Icon: Subtract },
};

export function Status({ state }) {
  const { label, Icon } = states[state];
  return (
    <span className={`ops-status ops-status--${state}`}>
      <span className="ops-status__dot" aria-hidden="true">
        <Icon size={16} focusable="false" />
      </span>
      <span>{label}</span>
    </span>
  );
}

export function StatusLegend() {
  return (
    <ul className="ops-status-legend" aria-label="Status legend">
      {Object.keys(states).map(state => <li key={state}><Status state={state} /></li>)}
    </ul>
  );
}

// Add className="ops-status-scope" to the host region containing both uses.
// In your existing Carbon table's status cell:
// <TableCell><Status state={row.status} /></TableCell>
// Keep the text label in each cell; do not rely on the legend alone.
