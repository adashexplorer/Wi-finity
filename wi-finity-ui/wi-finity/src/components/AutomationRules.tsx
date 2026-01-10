const rules = [
  "IF unknown device connects → Alert admin",
  "IF bandwidth spike → Throttle device",
  "IF gaming device online → Boost priority"
];

export default function AutomationRules() {
  return (
    <div>
      <h3>Automation Rules</h3>
      <ul>{rules.map(r => <li key={r}>{r}</li>)}</ul>
    </div>
  );
}