import type { Comparison } from "@/lib/content";

/** Two-option comparison. On phones the table scrolls sideways inside its own box. */
export default function ComparisonTable({ comparison }: { comparison: Comparison }) {
  const [, first, second] = comparison.columns;
  return (
    <div className="table-scroll rounded-2xl border-[1.5px] border-line bg-white" data-reveal>
      <table className="w-full min-w-[40rem] border-collapse text-left text-base leading-snug">
        <caption className="sr-only">{comparison.caption}</caption>
        <thead>
          <tr className="bg-mist">
            <td className="w-[22%] px-5 py-4" />
            <th scope="col" className="w-[39%] px-5 py-4 font-display text-lg font-semibold">
              {first}
            </th>
            <th scope="col" className="w-[39%] px-5 py-4 font-display text-lg font-semibold">
              {second}
            </th>
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map(([label, a, b]) => (
            <tr key={label} className="border-t border-line align-top">
              <th scope="row" className="px-5 py-4 font-bold">
                {label}
              </th>
              <td className="px-5 py-4">{a}</td>
              <td className="px-5 py-4 text-muted">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
