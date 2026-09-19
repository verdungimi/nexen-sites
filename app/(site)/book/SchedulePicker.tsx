"use client";

import { forwardRef } from "react";
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from "framer-motion";
import { CalendarCheck, Check, Sun, Sunset } from "lucide-react";
import { TIME_SLOTS } from "@/lib/booking-options";
import { cn } from "@/lib/utils";

const WEEKDAYS = [
  { short: "H", long: "Hétfő" },
  { short: "K", long: "Kedd" },
  { short: "Sze", long: "Szerda" },
  { short: "Cs", long: "Csütörtök" },
  { short: "P", long: "Péntek" },
];

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
const monthName = (day: Date) => day.toLocaleDateString("hu-HU", { month: "long" });

/** Puts the weekdays into Monday–Friday rows; days before the first available one stay empty. */
function groupIntoWeeks(days: Date[]): (Date | null)[][] {
  const weeks: (Date | null)[][] = [];
  let current: (Date | null)[] = [];
  let currentMonday = "";
  for (const day of days) {
    const column = (day.getDay() + 6) % 7;
    const monday = new Date(day);
    monday.setDate(day.getDate() - column);
    if (monday.toDateString() !== currentMonday) {
      currentMonday = monday.toDateString();
      current = Array<Date | null>(5).fill(null);
      weeks.push(current);
    }
    current[column] = day;
  }
  return weeks;
}

function weekLabel(week: (Date | null)[]) {
  const dates = week.filter((day): day is Date => day !== null);
  const first = dates[0];
  const last = dates[dates.length - 1];
  if (monthName(first) === monthName(last)) {
    return `${capitalize(monthName(first))} ${first.getDate()}–${last.getDate()}.`;
  }
  return `${capitalize(monthName(first))} ${first.getDate()}. – ${monthName(last)} ${last.getDate()}.`;
}

const SLOT_GROUPS = [
  { label: "Délelőtt", Icon: Sun, slots: TIME_SLOTS.filter((slot) => Number(slot.slice(0, 2)) < 12) },
  { label: "Délután", Icon: Sunset, slots: TIME_SLOTS.filter((slot) => Number(slot.slice(0, 2)) >= 12) },
];

interface SchedulePickerProps {
  days: Date[];
  selectedDate: Date | null;
  selectedTime: string | null;
  onSelectDate: (day: Date) => void;
  onSelectTime: (time: string) => void;
  error?: string;
  describedBy?: string;
}

/**
 * Consultation scheduler: a Monday–Friday calendar, time slots grouped by part of the day and a summary bar.
 * The selection marker slides between choices (shared layout animation); reduced-motion users get instant changes.
 */
const SchedulePicker = forwardRef<HTMLDivElement, SchedulePickerProps & { timeRef?: React.Ref<HTMLDivElement> }>(
  function SchedulePicker({ days, selectedDate, selectedTime, onSelectDate, onSelectTime, error, describedBy, timeRef }, dayRef) {
    const weeks = groupIntoWeeks(days);
    const selectedKey = selectedDate?.toDateString();
    const summary =
      selectedDate && selectedTime
        ? `${capitalize(selectedDate.toLocaleDateString("hu-HU", { weekday: "long" }))}, ${selectedDate.toLocaleDateString("hu-HU", { year: "numeric", month: "long", day: "numeric" })}, ${selectedTime}`
        : null;

    return (
      <MotionConfig reducedMotion="user">
        <LayoutGroup id="schedule">
          <div>
            <p id="day-label" className="font-medium text-bone">
              Válassz napot
            </p>

            <div ref={dayRef} role="group" aria-labelledby="day-label" aria-describedby={describedBy} className="mt-3 min-h-[12rem]">
              {days.length > 0 && (
                <div className="grid grid-cols-5 gap-x-1.5 pb-2 text-center text-[0.8125rem] text-fog sm:gap-x-2" aria-hidden="true">
                  {WEEKDAYS.map((weekday) => (
                    <span key={weekday.long}>
                      <span className="sm:hidden">{weekday.short}</span>
                      <span className="hidden sm:inline">{weekday.long}</span>
                    </span>
                  ))}
                </div>
              )}

              <div className="space-y-4">
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex}>
                    <p className="mb-1.5 text-[0.8125rem] text-fog">{weekLabel(week)}</p>
                    <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                      {week.map((day, column) => {
                        if (!day) return <span key={column} aria-hidden="true" className="min-h-14 rounded-xl border border-dashed border-rule/60" />;
                        const isSelected = selectedKey === day.toDateString();
                        return (
                          <button
                            key={day.toISOString()}
                            type="button"
                            aria-pressed={isSelected}
                            aria-label={capitalize(day.toLocaleDateString("hu-HU", { weekday: "long", month: "long", day: "numeric" }))}
                            onClick={() => onSelectDate(day)}
                            className={cn(
                              "relative flex min-h-14 items-center justify-center rounded-xl border text-lg font-semibold tabular-nums transition-colors duration-200",
                              isSelected
                                ? "border-brass text-graphite"
                                : "border-rule bg-graphite text-bone hover:border-fog/60 hover:bg-graphite-strong"
                            )}
                          >
                            {isSelected && (
                              <motion.span
                                layoutId="day-selected"
                                aria-hidden="true"
                                className="absolute inset-0 rounded-[calc(0.75rem-1px)] bg-brass"
                                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                              />
                            )}
                            <span className="relative">{day.getDate()}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <AnimatePresence initial={false}>
              {selectedDate && (
                <motion.div
                  key="times"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-7"
                >
                  <p id="time-label" className="font-medium text-bone">
                    Válassz kezdést
                    <span className="font-normal text-fog"> (magyar idő szerint)</span>
                  </p>
                  <div ref={timeRef} role="group" aria-labelledby="time-label" className="mt-3 space-y-4">
                    {SLOT_GROUPS.map(({ label, Icon, slots }) => (
                      <div key={label}>
                        <p className="mb-2 flex items-center gap-2 text-[0.8125rem] text-fog">
                          <Icon aria-hidden="true" className="h-4 w-4" />
                          {label}
                        </p>
                        {/* Re-keyed per day so the pills stagger in again when another day is picked */}
                        <motion.div
                          key={`${selectedKey}-${label}`}
                          initial="hidden"
                          animate="shown"
                          variants={{ shown: { transition: { staggerChildren: 0.05 } } }}
                          className="flex flex-wrap gap-2"
                        >
                          {slots.map((slot) => {
                            const isSelected = selectedTime === slot;
                            return (
                              <motion.button
                                key={slot}
                                type="button"
                                aria-pressed={isSelected}
                                variants={{ hidden: { opacity: 0, y: 8 }, shown: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                onClick={() => onSelectTime(slot)}
                                className={cn(
                                  "relative min-h-11 min-w-[5.75rem] rounded-full border px-5 font-semibold tabular-nums transition-colors duration-200",
                                  isSelected
                                    ? "border-brass text-graphite"
                                    : "border-rule bg-graphite text-bone hover:border-fog/60 hover:bg-graphite-strong"
                                )}
                              >
                                {isSelected && (
                                  <motion.span
                                    layoutId="time-selected"
                                    aria-hidden="true"
                                    className="absolute inset-0 rounded-full bg-brass"
                                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                                  />
                                )}
                                <span className="relative">{slot}</span>
                              </motion.button>
                            );
                          })}
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Summary bar: shows exactly what will be booked */}
            <div className="mt-7" aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                {summary ? (
                  <motion.div
                    key="chosen"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 rounded-xl border border-brass/70 bg-graphite-strong px-4 py-3.5"
                  >
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brass text-graphite">
                      <Check aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                    <span>
                      <span className="block text-[0.8125rem] text-fog">A kiválasztott időpont</span>
                      <span className="block font-semibold text-bone">{summary}</span>
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border border-dashed px-4 py-3.5 text-fog",
                      error ? "border-rust" : "border-rule"
                    )}
                  >
                    <CalendarCheck aria-hidden="true" className="h-5 w-5 flex-none" />
                    <span>{selectedDate ? "Már csak a kezdési időpont hiányzik." : "Az időpontot e-mailben vagy telefonon visszaigazoljuk."}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {error && (
              <p id="timeslot-error" className="mt-3 text-[0.9375rem] text-rust">
                {error}
              </p>
            )}
          </div>
        </LayoutGroup>
      </MotionConfig>
    );
  }
);

export default SchedulePicker;
