import { PHONE_DISPLAY } from '../data'

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8 text-center text-sm text-slate-400">
      <p>Plot No. 108, Shankarapuram, Sithalapakkam, Chennai – 600 073</p>
      <p className="mt-1">Direct Owner · No Brokerage · {PHONE_DISPLAY}</p>
    </footer>
  )
}
