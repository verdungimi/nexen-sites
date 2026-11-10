"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { QUIZ, QUIZ_EVENT, QUIZ_STORAGE_KEY, recommendPackage, type QuizAnswers } from "@/lib/quiz";
import { trackQuiz } from "@/lib/track";
import { cn } from "@/lib/utils";
import DemoForm from "./DemoForm";

/**
 * The five-question quiz: one question per screen, large tappable cards, a progress bar.
 * At the end it names the recommended package with a one-sentence reason and shows the demo request form;
 * the answers travel with the form automatically.
 */
interface QuizProps {
  surface?: "mist" | "white";
  idPrefix?: string;
  /** Use "h2" where the quiz sits directly under the page's h1, so the heading order stays correct */
  headingLevel?: "h2" | "h3";
}

export default function Quiz({ surface = "mist", idPrefix = "kerdessor", headingLevel: Heading = "h3" }: QuizProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [picked, setPicked] = useState<string | null>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const moved = useRef(false);

  const done = step >= QUIZ.length;
  const question = QUIZ[Math.min(step, QUIZ.length - 1)];
  const recommendation = done ? recommendPackage(answers) : null;

  // Move focus to the new question (or the result) so keyboard and screen-reader users follow along
  useEffect(() => {
    if (moved.current) headingRef.current?.focus({ preventScroll: true });
  }, [step]);

  const store = (next: QuizAnswers) => {
    try {
      window.sessionStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // storage blocked: the answers still travel with this form
    }
    window.dispatchEvent(new Event(QUIZ_EVENT));
  };

  const choose = (value: string) => {
    if (picked) return;
    const next = { ...answers, [question.id]: value };
    if (step === 0 && !moved.current) trackQuiz("quiz_start");
    moved.current = true;
    setPicked(value);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Short pause so the chosen card visibly reacts before the next question arrives
    window.setTimeout(
      () => {
        setAnswers(next);
        store(next);
        setPicked(null);
        setStep(step + 1);
        if (step + 1 >= QUIZ.length) trackQuiz("quiz_complete", { recommended_package: recommendPackage(next).name });
      },
      reduced ? 0 : 260
    );
  };

  const back = () => {
    moved.current = true;
    setStep((current) => Math.max(0, current - 1));
  };

  const restart = () => {
    moved.current = true;
    setAnswers({});
    store({});
    setStep(0);
  };

  return (
    <div
      data-hide-sticky
      className={cn(
        "rounded-[1.75rem] p-5 text-navy sm:p-8",
        surface === "mist" ? "bg-mist" : "border-[1.5px] border-line-strong bg-white shadow-[0_30px_70px_-40px_rgba(11,30,63,0.35)]"
      )}
    >
      {!done ? (
        <div key={step} className="quiz-step">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[0.9375rem] font-semibold text-mid">
              {step + 1}. kérdés az {QUIZ.length}-ből
            </p>
            <div
              role="progressbar"
              aria-label="Haladás a kérdéssorban"
              aria-valuemin={1}
              aria-valuemax={QUIZ.length}
              aria-valuenow={step + 1}
              className="flex gap-1.5"
            >
              {QUIZ.map((item, index) => (
                <span
                  key={item.id}
                  className={cn("h-1.5 w-6 rounded-full transition-colors duration-300 sm:w-8", index <= step ? "bg-navy" : "bg-line-strong")}
                />
              ))}
            </div>
          </div>

          <Heading ref={headingRef} tabIndex={-1} className="type-h3 mt-4 !text-[1.625rem] outline-none sm:!text-[1.875rem]">
            {question.question}
          </Heading>

          <div className={cn("mt-5 grid gap-2.5", question.twoColumns ? "grid-cols-2 sm:grid-cols-1" : "grid-cols-1")}>
            {question.options.map((option) => {
              const selected = picked === option.value || (!picked && answers[question.id] === option.value);
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => choose(option.value)}
                  className={cn(
                    "group flex min-h-[3.75rem] items-center justify-between gap-3 rounded-2xl border-[1.5px] px-4 py-3 text-left text-base font-medium leading-snug transition-[border-color,background-color,transform] duration-200 ease-out active:scale-[0.98] sm:px-5 sm:text-[1.0625rem]",
                    selected ? "border-navy bg-navy text-white" : "border-line-strong bg-white hover:border-navy",
                    surface === "white" && !selected && "bg-mist/60 hover:bg-mist"
                  )}
                >
                  <span>{option.label}</span>
                  {selected ? (
                    <Check aria-hidden="true" strokeWidth={3} className="h-5 w-5 flex-none text-sky" />
                  ) : (
                    <ChevronRight aria-hidden="true" className="hidden h-5 w-5 flex-none text-mid transition-transform duration-200 group-hover:translate-x-0.5 sm:block" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex min-h-11 items-center justify-between gap-4">
            <p className="text-[0.9375rem] text-muted">Öt kérdés, kb. 30 másodperc</p>
            {step > 0 && (
              <button type="button" onClick={back} className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-mid hover:text-navy">
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                Vissza
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="quiz-step">
          <p className="text-[0.9375rem] font-semibold text-mid">Neked ezt ajánljuk</p>
          <Heading ref={headingRef} tabIndex={-1} className="type-h2 mt-2 outline-none">
            {recommendation?.name}
          </Heading>
          <p className="mt-3 text-lg leading-snug">{recommendation?.reason}</p>
          <div className="mt-6 border-t border-line-strong pt-6">
            <p className="mb-4 font-semibold">Kérd el ingyen a demót, és egy napon belül megmutatjuk, hogyan nézne ki a te cégedre.</p>
            <DemoForm answers={answers} idPrefix={idPrefix} />
          </div>
          <button type="button" onClick={restart} className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-semibold text-mid hover:text-navy">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Újrakezdem a kérdéseket
          </button>
        </div>
      )}
    </div>
  );
}
