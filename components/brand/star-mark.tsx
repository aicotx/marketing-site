/** The five-point star used in the header wordmark and footer seal. */
export function StarMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden="true">
      <path fill="#C48254" d="M256 60.3L214.5 216.5L256 276Z M461.7 209.8L297.5 216.5L256 276Z M383.2 451.6L323.1 295.4L256 276Z M128.8 451.6L256 344.2L256 276Z M50.3 209.8L188.9 295.4L256 276Z" />
      <path fill="#73301A" d="M256 60.3L297.5 216.5L256 276Z M461.7 209.8L323.1 295.4L256 276Z M383.2 451.6L256 344.2L256 276Z M128.8 451.6L188.9 295.4L256 276Z M50.3 209.8L214.5 216.5L256 276Z" />
      <path fill="none" stroke="#D6AF6A" strokeWidth="6" strokeLinejoin="round" d="M256 60.3L297.5 216.5L461.7 209.8L323.1 295.4L383.2 451.6L256 344.2L128.8 451.6L188.9 295.4L50.3 209.8L214.5 216.5Z" />
      <path fill="none" stroke="#D6AF6A" strokeWidth="3" strokeLinecap="round" opacity="0.85" d="M256 60.3L256 276 M461.7 209.8L256 276 M383.2 451.6L256 276 M128.8 451.6L256 276 M50.3 209.8L256 276" />
    </svg>
  );
}
