export default function InfoGrid({ items, icon }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4"
        >
          <div className="flex items-start gap-3">
            {icon && <span>{icon}</span>}
            <div>
              <p className="font-medium text-slate-900">{item.name}</p>
              {item.detail && <p className="text-sm text-slate-500">{item.detail}</p>}
            </div>
          </div>
          <span className="whitespace-nowrap rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
            {item.time}
          </span>
        </li>
      ))}
    </ul>
  )
}
