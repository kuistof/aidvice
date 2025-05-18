export interface AnswerOption {
  id: string; // A, B, C...
  text: string;
  score: number;
}

export interface OnboardingQuestion {
  id: string; // e.g., 'headcount', 'revenue', 'product'
  title: string;
  subtitle?: string;
  answerOptions: AnswerOption[];
  categoryForScore: 'headcount' | 'revenue' | 'product' | 'marketing' | 'sales' | 'recruiting'; // To map answers correctly
}

export const onboardingQuestions: OnboardingQuestion[] = [
  {
    id: "headcount",
    title: "Anzahl Mitarbeitende",
    subtitle: "Um dir eine präzise Analyse zu schicken, brauchen wir ein paar Rahmendaten zu deinem Unternehmen.",
    categoryForScore: "headcount",
    answerOptions: [
      { id: "A", text: "0 (Solopreneur)", score: 1 },
      { id: "B", text: "1–9", score: 2 },
      { id: "C", text: "10–19", score: 3 },
      { id: "D", text: "20–49", score: 4 },
      { id: "E", text: "50+", score: 5 },
    ],
  },
  {
    id: "revenue",
    title: "Jahresumsatz",
    subtitle: "Um deine Situation realistisch bewerten zu können, brauchen wir einen ungefähren Richtwert zu deinem Jahresumsatz.\n(Netto vor Steuern)",
    categoryForScore: "revenue",
    answerOptions: [
      { id: "A", text: "unter 500.000€", score: 1 },
      { id: "B", text: "500.000€ – 1 Mio.€", score: 2 },
      { id: "C", text: "1–3 Mio€", score: 3 },
      { id: "D", text: "3–9 Mio€", score: 4 },
      { id: "E", text: "über 10 Mio€", score: 5 },
    ],
  },
  {
    id: "product",
    title: "Positionierung / Angebotsgestaltung",
    subtitle: "Was ist dein größter Engpass aktuell in der Positionierung / Angebotsgestaltung?",
    categoryForScore: "product",
    answerOptions: [
      { id: "A", text: "Du hast kein klar definiertes Produkt", score: 1 },
      { id: "B", text: "Dein Angebot ist zu schwach bepreist oder nicht wertig genug", score: 2 },
      { id: "C", text: "Deine Kunden haben hohe Erwartungen und sind oft unzufrieden", score: 3 },
      { id: "D", text: "Du kommst nicht dazu, dein Produkt richtig zu optimieren", score: 4 },
      { id: "E", text: "Du sprichst zu viele unterschiedliche Zielgruppen an", score: 5 },
      { id: "F", text: "Kunden kaufen nur einmal – kein Folgegeschäft", score: 6 },
      { id: "G", text: "Du arbeitest an zu vielen Produkten gleichzeitig", score: 7 },
      { id: "H", text: "Dein Produkt ist nicht mehr zeitgemäß oder überladen", score: 8 },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    subtitle: "Was ist aktuell dein größter Engpass im Marketing?",
    categoryForScore: "marketing",
    answerOptions: [
      { id: "A", text: "Dein Offer wird nicht verstanden oder gekauft", score: 1 },
      { id: "B", text: "Du bekommst zu wenig oder unregelmäßige Leads", score: 2 },
      { id: "C", text: "Die Leads sind zu kalt – sie kaufen nicht oder erst sehr spät", score: 3 },
      { id: "D", text: "Du ziehst zu viele unqualifizierte oder irrelevante Leads an", score: 4 },
      { id: "E", text: "Qualifizierte Leads werden zunehmend teurer", score: 5 },
      { id: "F", text: "Deine Ads performen nicht – der CAC im Cold Traffic ist zu hoch", score: 6 },
      { id: "G", text: "Der Leadflow ist volatil | du bist von einem Kanal abhängig", score: 7 },
      { id: "H", text: "Zu breitere Creatives schwächen deine Marke – deine Qualität sinkt", score: 8 },
    ],
  },
  {
    id: "sales",
    title: "Vertrieb",
    subtitle: "Was ist aktuell dein größter Engpass im Vertrieb?",
    categoryForScore: "sales",
    answerOptions: [
      { id: "A", text: "Du weißt nicht genau, wie du effektiv verkaufst", score: 1 },
      { id: "B", text: "Deine Conversion ist unregelmäßig und nicht reproduzierbar", score: 2 },
      { id: "C", text: "Du verschwendest zu viel Zeit mit ungeeigneten Leads", score: 3 },
      { id: "D", text: "Du meldest dich zu spät – Leads springen ab", score: 4 },
      { id: "E", text: "Kunden erhalten falsche Erwartungen – schlechte Reviews sind die Folge", score: 5 },
      { id: "F", text: "Deine Close-Rate ist zu niedrig", score: 6 },
      { id: "G", text: "Du nutzt vorhandene Leads nicht – sie versanden", score: 7 },
      { id: "H", text: "Du hast zu viele verschiedene Produkte und Lead-Typen für ein kleines Vertriebsteam", score: 8 },
    ],
  },
  {
    id: "recruiting",
    title: "Recruiting / Teamaufbau",
    subtitle: "Was ist deine größte Herausforderung im Recruiting / Aufbau eines A-Player Teams?",
    categoryForScore: "recruiting",
    answerOptions: [
      { id: "A", text: "Die Nachfrage übersteigt deine Kapazität – du kommst nicht hinterher", score: 1 },
      { id: "B", text: "Teilzeitkräfte oder Freelancer reichen nicht mehr aus", score: 2 },
      { id: "C", text: "Es bewerben sich kaum qualifizierte Leute", score: 3 },
      { id: "D", text: "Du verlierst zu viel Zeit mit ungeeigneten Bewerbern", score: 4 },
      { id: "E", text: "Du findest keine passenden Führungskräfte", score: 5 },
      { id: "F", text: "Dein Netzwerk ist ausgeschöpft", score: 6 },
      { id: "G", text: "Es dauert zu lange, gute Leute zu finden", score: 7 },
      { id: "H", text: "Recruiter liefern Kandidaten, die nicht zur Firma passen", score: 8 },
      { id: "I", text: "Top-Talente reagieren nicht auf klassische Recruiting-Maßnahmen", score: 9 },
    ],
  },
];

export interface UserStage {
  product?: number;
  marketing?: number;
  sales?: number;
  recruiting?: number;
  headcount?: string; // Store the text of the answer for headcount
  revenue?: string;   // Store the text of the answer for revenue
} 