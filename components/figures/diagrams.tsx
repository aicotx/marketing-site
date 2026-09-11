// Inline SVG diagrams used in the catalog, services, approach and products pages.
// Stroke/fill roles (ln, lnk, dash, acc, acc-ln, dot, text) are styled by .mini-fig in globals.css.

export function AuditGrid() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true">
    <g className="ln">
    <rect x="14" y="24" width="26" height="18"/><rect x="46" y="24" width="26" height="18"/><rect x="110" y="24" width="26" height="18"/><rect x="142" y="24" width="26" height="18"/><rect x="174" y="24" width="12" height="18"/>
    <rect x="14" y="50" width="26" height="18"/><rect x="78" y="50" width="26" height="18"/><rect x="110" y="50" width="26" height="18"/><rect x="142" y="50" width="26" height="18"/><rect x="174" y="50" width="12" height="18"/>
    <rect x="46" y="76" width="26" height="18"/><rect x="78" y="76" width="26" height="18"/><rect x="110" y="76" width="26" height="18"/><rect x="142" y="76" width="26" height="18"/><rect x="174" y="76" width="12" height="18"/>
    <rect x="14" y="102" width="26" height="18"/><rect x="78" y="102" width="26" height="18"/><rect x="110" y="102" width="26" height="18"/><rect x="142" y="102" width="26" height="18"/><rect x="174" y="102" width="12" height="18"/>
    </g>
    <g className="acc">
    <rect x="78" y="24" width="26" height="18"/>
    <rect x="46" y="50" width="26" height="18"/>
    <rect x="14" y="76" width="26" height="18"/>
    <rect x="46" y="102" width="26" height="18"/>
    </g>
    </svg>
  );
}

export function SetupPolicy() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true">
    <rect className="lnk" x="56" y="14" width="88" height="112"/>
    <g className="ln">
    <line x1="70" y1="36" x2="130" y2="36"/>
    <line x1="70" y1="50" x2="122" y2="50"/>
    <line x1="70" y1="64" x2="130" y2="64"/>
    <line x1="70" y1="78" x2="112" y2="78"/>
    </g>
    <circle className="lnk" cx="128" cy="104" r="15" fill="none"/>
    <path className="acc" d="M128 94l2.7 7.8 8.2.17-6.5 5 2.3 7.9-6.7-4.7-6.7 4.7 2.3-7.9-6.5-5 8.2-.17z"/>
    </svg>
  );
}

export function PilotBars() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true">
    <line className="ln" x1="16" y1="118" x2="184" y2="118"/>
    <line className="dash" x1="16" y1="48" x2="184" y2="48"/>
    <g className="ln">
    <rect x="28" y="92" width="16" height="26"/>
    <rect x="54" y="80" width="16" height="38"/>
    <rect x="80" y="68" width="16" height="50"/>
    <rect x="106" y="58" width="16" height="60"/>
    </g>
    <g className="acc">
    <rect x="132" y="42" width="16" height="76"/>
    <rect x="158" y="34" width="16" height="84"/>
    </g>
    <text x="16" y="38">EVAL THRESHOLD</text>
    </svg>
  );
}

export function MarketplaceTree() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true">
    <rect className="lnk" x="70" y="12" width="60" height="34"/>
    <line className="ln" x1="80" y1="24" x2="120" y2="24"/>
    <line className="ln" x1="80" y1="34" x2="108" y2="34"/>
    <g className="ln">
    <line x1="100" y1="46" x2="40" y2="82"/>
    <line x1="100" y1="46" x2="80" y2="82"/>
    <line x1="100" y1="46" x2="120" y2="82"/>
    <line x1="100" y1="46" x2="160" y2="82"/>
    </g>
    <g className="dot">
    <circle cx="40" cy="88" r="4"/><circle cx="80" cy="88" r="4"/><circle cx="120" cy="88" r="4"/><circle cx="160" cy="88" r="4"/>
    <circle cx="40" cy="106" r="4"/><circle cx="80" cy="106" r="4"/><circle cx="160" cy="106" r="4"/>
    <circle cx="80" cy="124" r="4"/><circle cx="120" cy="124" r="4"/><circle cx="160" cy="124" r="4"/>
    </g>
    <g className="acc">
    <circle cx="120" cy="106" r="4"/><circle cx="40" cy="124" r="4"/>
    </g>
    </svg>
  );
}

export function AgentGates() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true">
    <rect className="dash" x="14" y="52" width="42" height="30"/>
    <rect className="lnk" x="79" y="52" width="42" height="30"/>
    <rect className="acc" x="144" y="52" width="42" height="30"/>
    <line className="ln" x1="56" y1="67" x2="79" y2="67"/>
    <line className="ln" x1="121" y1="67" x2="144" y2="67"/>
    <line className="lnk" x1="67.5" y1="46" x2="67.5" y2="88"/>
    <line className="lnk" x1="132.5" y1="46" x2="132.5" y2="88"/>
    <text x="18" y="106">DRAFT</text>
    <text x="80" y="106">APPROVE</text>
    <text x="153" y="106">ACT</text>
    </svg>
  );
}

export function RetainerOrchestration() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true">
    <circle className="acc" cx="34" cy="70" r="9"/>
    <g className="ln">
    <line x1="42" y1="65" x2="120" y2="26"/>
    <line x1="43" y1="70" x2="120" y2="70"/>
    <line x1="42" y1="75" x2="120" y2="114"/>
    </g>
    <g className="lnk">
    <circle cx="128" cy="24" r="6" fill="none"/>
    <circle cx="128" cy="70" r="6" fill="none"/>
    <circle cx="128" cy="116" r="6" fill="none"/>
    </g>
    <g className="dash">
    <path d="M134 29 Q 158 47 134 65"/>
    <path d="M134 75 Q 158 93 134 111"/>
    <path d="M122 29 Q 98 47 122 65"/>
    </g>
    </svg>
  );
}

export function FractionalCalendar() {
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true">
    <g className="ln">
    <rect x="14" y="22" width="28" height="22"/><rect x="50" y="22" width="28" height="22"/><rect x="86" y="22" width="28" height="22"/><rect x="122" y="22" width="28" height="22"/>
    <rect x="14" y="52" width="28" height="22"/><rect x="86" y="52" width="28" height="22"/><rect x="122" y="52" width="28" height="22"/><rect x="158" y="52" width="28" height="22"/>
    <rect x="14" y="82" width="28" height="22"/><rect x="50" y="82" width="28" height="22"/><rect x="122" y="82" width="28" height="22"/><rect x="158" y="82" width="28" height="22"/>
    <rect x="14" y="112" width="28" height="22"/><rect x="50" y="112" width="28" height="22"/><rect x="86" y="112" width="28" height="22"/><rect x="158" y="112" width="28" height="22"/>
    </g>
    <g className="acc">
    <rect x="158" y="22" width="28" height="22"/>
    <rect x="50" y="52" width="28" height="22"/>
    <rect x="86" y="82" width="28" height="22"/>
    <rect x="122" y="112" width="28" height="22"/>
    </g>
    </svg>
  );
}

export function OrchestratedOps() {
  return (
    <svg viewBox="0 0 520 200" aria-hidden="true">
    <circle className="acc" cx="60" cy="100" r="10"/>
    <text x="34" y="132">POLICY</text>
    <g className="ln">
    <line x1="70" y1="94" x2="196" y2="38"/>
    <line x1="70" y1="100" x2="196" y2="100"/>
    <line x1="70" y1="106" x2="196" y2="162"/>
    </g>
    <g className="lnk">
    <circle cx="204" cy="36" r="7" fill="none"/>
    <circle cx="204" cy="100" r="7" fill="none"/>
    <circle cx="204" cy="164" r="7" fill="none"/>
    </g>
    <g className="dash">
    <path d="M212 42 Q 240 68 212 94"/>
    <path d="M212 106 Q 240 132 212 158"/>
    <path d="M196 42 Q 168 68 196 94"/>
    </g>
    <text x="182" y="16">AGENTS · CROSS-VERIFY</text>
    <g className="ln">
    <line x1="211" y1="36" x2="330" y2="76"/>
    <line x1="211" y1="100" x2="330" y2="88"/>
    <line x1="211" y1="164" x2="330" y2="100"/>
    </g>
    <rect className="lnk" x="334" y="70" width="92" height="44"/>
    <text x="346" y="96">EXCEPTIONS</text>
    <line className="acc-ln" x1="426" y1="92" x2="470" y2="92"/>
    <path className="acc" d="M470 86l10 6-10 6z"/>
    <text x="452" y="122">A HUMAN</text>
    </svg>
  );
}

export function ClearanceConsole() {
  return (
    <svg viewBox="0 0 200 150" aria-hidden="true">
    <rect className="lnk" x="30" y="8" width="140" height="20"/>
    <line className="ln" x1="70" y1="28" x2="52" y2="46"/>
    <line className="ln" x1="130" y1="28" x2="148" y2="46"/>
    <g className="ln">
    <rect x="14" y="46" width="76" height="16"/>
    <rect x="14" y="68" width="76" height="16"/>
    <rect x="14" y="90" width="76" height="16"/>
    </g>
    <g className="acc">
    <rect x="14" y="112" width="76" height="16"/>
    </g>
    <g className="ln">
    <rect x="110" y="46" width="76" height="16"/>
    <rect x="110" y="68" width="76" height="16"/>
    </g>
    <g className="dash">
    <rect x="110" y="90" width="76" height="16"/>
    <rect x="110" y="112" width="76" height="16"/>
    </g>
    <text x="14" y="142">HR DIRECTOR</text>
    <text x="110" y="142">ENGINEER</text>
    </svg>
  );
}
