import { WORKS, WORK_PLACEHOLDER_COUNT } from "@/lib/works";
import { BrowserFrame, PhoneFrame } from "./DeviceFrame";

/**
 * Finished client sites in device frames. While lib/works.ts is empty the frames are marked
 * placeholders, so nothing invented is ever shown as real work.
 */
export default function WorksGrid({ limit }: { limit?: number }) {
  const works = limit ? WORKS.slice(0, limit) : WORKS;

  if (works.length === 0) {
    const count = limit ? Math.min(limit, WORK_PLACEHOLDER_COUNT) : WORK_PLACEHOLDER_COUNT;
    return (
      <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }, (_, index) => (
          <li key={index} data-reveal style={{ "--i": index } as React.CSSProperties}>
            <BrowserFrame placeholder="[IMI: elkészült munka képernyőképe]" />
            <p className="mt-4 font-display text-xl font-semibold">[IMI: az ügyfél neve]</p>
            <p className="mt-1 text-muted">[IMI: mivel foglalkozik, és mi volt az oldal dolga]</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
      {works.map((work, index) => (
        <li key={work.domain} data-reveal style={{ "--i": index % 2 } as React.CSSProperties}>
          <div className="relative pb-6 pl-8">
            <BrowserFrame image={work.desktopImage} alt={`${work.name} weboldala asztali nézetben`} domain={work.domain} />
            {work.mobileImage && (
              <PhoneFrame image={work.mobileImage} alt={`${work.name} weboldala mobilon`} className="absolute bottom-0 left-0 w-[26%]" />
            )}
          </div>
          <h3 className="type-h3 mt-5">{work.name}</h3>
          <p className="mt-1 font-semibold text-mid">{work.field}</p>
          <p className="mt-2 text-muted">{work.summary}</p>
        </li>
      ))}
    </ul>
  );
}
