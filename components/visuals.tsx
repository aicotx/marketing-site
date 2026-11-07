import { FileText, Folder } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { levels } from '@/lib/content';
import { cn } from '@/lib/utils';

/**
 * The ladder, top rung first, with the rung a service starts from and the
 * one it reaches lit. Everything else recedes.
 */
export function LadderClimb({ from }: { from: string }) {
  const fromIndex = levels.findIndex((l) => l.id === from);
  const to = levels[fromIndex + 1]?.id;

  return (
    <ol className="w-full max-w-[420px] border-t border-border">
      {[...levels].reverse().map((l) => {
        const state = l.id === from ? 'from' : l.id === to ? 'to' : 'rest';
        return (
          <li
            key={l.id}
            className={cn(
              'flex items-center gap-4 border-b border-border py-3.5',
              state === 'rest' && 'opacity-30',
            )}
          >
            <Badge soft={state !== 'to'}>{l.code}</Badge>
            <span className="text-[15px] text-ink">{l.name}</span>
            <span className="ml-auto text-fine text-muted-foreground">
              {state === 'from' && 'Where you are'}
              {state === 'to' && 'Next rung'}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

/** A row of soft chips under a small label: where notes live, or what reads them. */
function ChipRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="mb-3 text-fine font-medium text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item} soft>
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

/**
 * One set of plain notes in the middle, with the places it can live above
 * and the AI tools that can use it below.
 */
export function KnowledgeBaseVisual() {
  const notes: { name: string; folder?: boolean }[] = [
    { name: 'onboarding', folder: true },
    { name: 'how-we-quote.md' },
    { name: 'month-end-close.md' },
    { name: 'safety-procedures.md' },
  ];
  return (
    <div className="w-full max-w-[420px]">
      <ChipRow
        label="Kept wherever you store files"
        items={['SharePoint', 'Google Drive', 'GitHub']}
      />
      <ul className="my-6 border-t border-border">
        {notes.map((e) => (
          <li
            key={e.name}
            className="flex items-center gap-3 border-b border-border py-3 text-[15px] text-ink"
          >
            {e.folder ? (
              <Folder className="size-4 text-muted-foreground" />
            ) : (
              <FileText className="size-4 text-muted-foreground" />
            )}
            {e.name}
          </li>
        ))}
      </ul>
      <ChipRow
        label="Used from whichever AI tool you work in"
        items={['Claude', 'ChatGPT Codex', 'Hermes Agent']}
      />
    </div>
  );
}

/** What Install Guard does with a few commands Claude might try to run. */
export function InstallGuardVisual() {
  const rows: { cmd: string; result: 'Blocked' | 'Asks first' | 'Allowed' }[] =
    [
      { cmd: 'winget install 7zip.7zip', result: 'Blocked' },
      { cmd: 'curl -O https://…/setup.exe', result: 'Blocked' },
      { cmd: 'npm install left-pad', result: 'Asks first' },
      { cmd: 'git status', result: 'Allowed' },
    ];
  return (
    <div className="w-full max-w-[420px]">
      <p className="mb-4 text-fine font-medium text-muted-foreground">
        Commands Claude tried to run
      </p>
      <ul className="border-t border-border">
        {rows.map((r) => (
          <li
            key={r.cmd}
            className="flex items-center gap-4 border-b border-border py-3.5"
          >
            <code className="min-w-0 truncate font-mono text-[13px] text-ink">
              {r.cmd}
            </code>
            <span className="ml-auto shrink-0">
              {r.result === 'Allowed' ? (
                <span className="text-fine text-muted-foreground">Allowed</span>
              ) : (
                <Badge soft={r.result === 'Asks first'}>{r.result}</Badge>
              )}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-fine text-muted-foreground">
        IT owns the exceptions. The rules hold even with permission prompts
        turned off.
      </p>
    </div>
  );
}

/** The four leaks Costlens looks for, and the evidence each is found in. */
export function CostlensVisual() {
  const leaks: { name: string; source: 'Billing telemetry' | 'Transcripts' }[] =
    [
      { name: 'Long carried context', source: 'Billing telemetry' },
      { name: 'Prompt cache expired on resume', source: 'Billing telemetry' },
      { name: 'Expensive model on simple work', source: 'Billing telemetry' },
      { name: 'Re-reading what hasn’t changed', source: 'Transcripts' },
    ];
  return (
    <div className="w-full max-w-[420px]">
      <p className="mb-4 text-fine font-medium text-muted-foreground">
        Where Claude spend leaks
      </p>
      <ul className="border-t border-border">
        {leaks.map((l) => (
          <li
            key={l.name}
            className="flex items-center gap-4 border-b border-border py-3.5"
          >
            <span className="min-w-0 text-[15px] text-ink">{l.name}</span>
            <span className="ml-auto shrink-0">
              <Badge soft={l.source === 'Billing telemetry'}>{l.source}</Badge>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-fine text-muted-foreground">
        Each finding comes with an estimated cost and a recommended fix.
      </p>
    </div>
  );
}
