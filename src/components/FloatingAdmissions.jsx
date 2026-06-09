import { useState } from 'react'
import Icon from './Icon.jsx'

// Primary admissions phone numbers (click-to-call).
const PHONES = ['09686569898', '8123439659', '8123439640']
const WHATSAPP = '919686569898' // wa.me format

export default function FloatingAdmissions() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start">
      {/* Popover card */}
      {open && (
        <div className="mb-3 w-[260px] rounded-2xl bg-surface border border-surface-variant shadow-xl overflow-hidden animate-[fadeIn_0.2s_ease-out]">
          <div className="bg-primary text-on-primary px-4 py-3 flex items-center justify-between">
            <span className="font-label-lg text-label-lg font-bold tracking-wide">Admissions Open</span>
            <button onClick={() => setOpen(false)} aria-label="Close" className="opacity-80 hover:opacity-100">
              <Icon name="close" className="text-xl" />
            </button>
          </div>
          <div className="p-3">
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3 px-1">
              Science &amp; Commerce · Call now to apply
            </p>
            <div className="space-y-2">
              {PHONES.map((p) => (
                <a
                  key={p}
                  href={`tel:${p}`}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-surface-container-low hover:bg-primary hover:text-on-primary transition-colors group"
                >
                  <Icon name="call" className="text-primary group-hover:text-on-primary" />
                  <span className="font-label-lg text-label-lg font-semibold tracking-wide">{p}</span>
                </a>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi,%20I%20would%20like%20to%20know%20about%20admissions%20at%20Kayaka%20PU%20College.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-secondary text-on-secondary hover:opacity-90 transition-opacity"
              >
                <Icon name="chat" />
                <span className="font-label-lg text-label-lg font-semibold tracking-wide">WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Admissions open — call to apply"
        className="relative flex items-center gap-2 bg-primary text-on-primary rounded-full shadow-lg pl-4 pr-5 py-3 hover:bg-primary-container hover:text-on-primary-container transition-colors font-bold tracking-wide"
      >
        {/* Subtle attention pulse */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping pointer-events-none" />
        )}
        <span className="relative flex items-center gap-2">
          <Icon name={open ? 'call' : 'how_to_reg'} fill className="text-xl" />
          <span className="font-label-lg text-label-lg whitespace-nowrap">Admissions Open</span>
        </span>
      </button>
    </div>
  )
}
