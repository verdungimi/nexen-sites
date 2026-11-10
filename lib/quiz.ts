// The five-question quiz. One source for the quiz component, the lead API and the e-mail to Imi,
// so the stored values and the labels can never drift apart.

export interface QuizOption {
  value: string;
  label: string;
}

export interface QuizQuestion {
  id: "industry" | "website" | "goal" | "source" | "timeline";
  question: string;
  /** Short label used in the e-mail and the database */
  shortLabel: string;
  /** Short options sit in two columns on phones */
  twoColumns: boolean;
  options: readonly QuizOption[];
}

export const QUIZ: readonly QuizQuestion[] = [
  {
    id: "industry",
    question: "Mivel foglalkozik a céged?",
    shortLabel: "Iparág",
    twoColumns: false,
    options: [
      { value: "epitoipar", label: "Építőipar, felújítás" },
      { value: "gepeszet", label: "Épületgépészet, klíma, hőszivattyú" },
      { value: "egeszsegugy", label: "Egészségügyi magánrendelés" },
      { value: "iroda", label: "Ügyvédi, könyvelő- vagy mérnökiroda" },
      { value: "tanacsadas", label: "Tanácsadás" },
      { value: "egyeb", label: "Egyéb" },
    ],
  },
  {
    id: "website",
    question: "Van most weboldalad?",
    shortLabel: "Mostani weboldal",
    twoColumns: false,
    options: [
      { value: "nincs", label: "Nincs" },
      { value: "elavult", label: "Van, de elavult" },
      { value: "nem-hoz", label: "Van, de nem hoz megkeresést" },
    ],
  },
  {
    id: "goal",
    question: "Mi a legfontosabb cél?",
    shortLabel: "Legfontosabb cél",
    twoColumns: false,
    options: [
      { value: "hivas", label: "Több hívás és ajánlatkérés" },
      { value: "idopont", label: "Időpontfoglalás" },
      { value: "hitelesseg", label: "Hitelesség, ha rám keresnek" },
      { value: "webshop", label: "Webshop" },
    ],
  },
  {
    id: "source",
    question: "Honnan jönnek most az ügyfeleid?",
    shortLabel: "Honnan jönnek az ügyfelek",
    twoColumns: true,
    options: [
      { value: "ajanlas", label: "Ajánlás" },
      { value: "google", label: "Google" },
      { value: "hirdetes", label: "Hirdetés" },
      { value: "egyeb", label: "Egyéb" },
    ],
  },
  {
    id: "timeline",
    question: "Mikor indulnál?",
    shortLabel: "Mikor indulna",
    twoColumns: false,
    options: [
      { value: "asap", label: "Amint lehet" },
      { value: "honap", label: "Egy hónapon belül" },
      { value: "tajekozodom", label: "Csak tájékozódom" },
    ],
  },
] as const;

export type QuizAnswers = Partial<Record<QuizQuestion["id"], string>>;

export const QUIZ_STORAGE_KEY = "nexen-quiz";
export const QUIZ_EVENT = "nexen:quiz";

/** Keeps only known question ids with known option values. Used on the server; never trust the client. */
export function sanitizeQuizAnswers(input: unknown): QuizAnswers {
  const result: QuizAnswers = {};
  if (!input || typeof input !== "object") return result;
  for (const question of QUIZ) {
    const value = (input as Record<string, unknown>)[question.id];
    if (typeof value === "string" && question.options.some((option) => option.value === value)) {
      result[question.id] = value;
    }
  }
  return result;
}

export function answerLabel(id: QuizQuestion["id"], value: string | undefined): string | undefined {
  if (!value) return undefined;
  return QUIZ.find((question) => question.id === id)?.options.find((option) => option.value === value)?.label;
}

export function isQuizComplete(answers: QuizAnswers): boolean {
  return QUIZ.every((question) => Boolean(answers[question.id]));
}

export interface Recommendation {
  name: string;
  reason: string;
}

/**
 * Recommended package with a one-sentence reason.
 * [IMI: a „Webshop" cél melyik csomagot ajánlja?] Until that is decided, a webshop gets its own result,
 * because none of the three packages covers it clearly.
 */
export function recommendPackage(answers: QuizAnswers): Recommendation {
  if (answers.goal === "webshop") {
    return {
      name: "Webshop",
      reason: "Terméket adnál el online, ehhez webshop kell. A terjedelmét a termékeid száma adja.",
    };
  }
  if (answers.source === "hirdetes") {
    return {
      name: "Növekedési csomag",
      reason: "Hirdetésből jönnek az ügyfeleid, ezért minden szolgáltatásodnak saját, a hirdetéshez illő oldal kell.",
    };
  }
  if (
    answers.goal === "hitelesseg" ||
    answers.industry === "egeszsegugy" ||
    answers.industry === "iroda" ||
    answers.industry === "tanacsadas"
  ) {
    return {
      name: "Céges weboldal",
      reason: "Nálad az ügyfél több oldalt is megnéz, mielőtt dönt, ezért a céged teljes bemutatása kell.",
    };
  }
  return {
    name: "Bemutatkozó oldal",
    reason: "Az oldaladnak egy dolga van: hívást és ajánlatkérést hozni. Erre egy jól felépített oldal elég.",
  };
}

/** Urgency for the subject line of the e-mail to Imi (from question 5). */
export function urgencyLabel(answers: QuizAnswers): string {
  switch (answers.timeline) {
    case "asap":
      return "SÜRGŐS, amint lehet";
    case "honap":
      return "egy hónapon belül";
    case "tajekozodom":
      return "csak tájékozódik";
    default:
      return "nem töltötte ki a kérdéssort";
  }
}
