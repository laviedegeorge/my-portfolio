"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, RotateCcw, Leaf } from "lucide-react";
import { SectionHeader } from "@/components/ui/primitives";

const questions = [
  {
    q: "How many servings of fruits and vegetables do you eat daily?",
    options: ["0–1 servings", "2–3 servings", "4–5 servings", "5+ servings"],
    scores: [0, 1, 2, 3],
  },
  {
    q: "How often do you engage in physical activity?",
    options: ["Rarely / Never", "1–2 times/week", "3–4 times/week", "Daily"],
    scores: [0, 1, 2, 3],
  },
  {
    q: "Do you currently use tobacco or vaping products?",
    options: ["Yes, regularly", "Occasionally", "I've quit", "Never"],
    scores: [0, 1, 2, 3],
  },
  {
    q: "When did you last check your blood pressure?",
    options: ["Never", "Over a year ago", "6–12 months ago", "Within 6 months"],
    scores: [0, 1, 2, 3],
  },
  {
    q: "How would you describe your stress level most days?",
    options: ["Very high", "High", "Moderate", "Low / Managed"],
    scores: [0, 1, 2, 3],
  },
];

const results = [
  {
    range: [0, 4],
    label: "Needs Attention",
    color: "#ef4444",
    bar: "bg-red-500",
    message:
      "Your lifestyle may be putting you at higher risk for chronic disease. Our NCD prevention programs are designed exactly for you. Let's start your journey today.",
    cta: "Join NCD Prevention Program",
  },
  {
    range: [5, 9],
    label: "Room to Grow",
    color: "#f59e0b",
    bar: "bg-amber-400",
    message:
      "You're making some healthy choices, but there's meaningful room for improvement. Our health literacy workshops can give you the tools and community support you need.",
    cta: "Explore Health Literacy Workshops",
  },
  {
    range: [10, 12],
    label: "On Track",
    color: "#22a049",
    bar: "bg-forest-500",
    message:
      "Great work — you're making healthy choices! Help spread the knowledge by joining our community as a health champion or volunteer.",
    cta: "Become a Health Champion",
  },
  {
    range: [13, 15],
    label: "Health Champion",
    color: "#34c45e",
    bar: "bg-forest-400",
    message:
      "Outstanding! You're living a health-conscious lifestyle. Your community needs your example and energy — consider volunteering with ComHealth Nigeria.",
    cta: "Volunteer with ComHealth",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HealthQuiz() {
  const [step, setStep] = useState<number>(-1); // -1 = intro
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const total = questions.length;
  const isDone = step === total;
  const score = answers.reduce((a, b) => a + b, 0);
  const maxScore = total * 3;

  const result =
    results.find((r) => score >= r.range[0] && score <= r.range[1]) ??
    results[results.length - 1];

  const handleSelect = (scoreVal: number) => setSelected(scoreVal);

  const handleNext = () => {
    if (selected === null) return;
    const next = [...answers, selected];
    setAnswers(next);
    setSelected(null);
    setStep((s) => s + 1);
  };

  const handleReset = () => {
    setStep(-1);
    setAnswers([]);
    setSelected(null);
  };

  const progress = step < 0 ? 0 : (step / total) * 100;

  return (
    <section className="relative bg-forest-900 py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(34,160,73,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <SectionHeader
            eyebrow="Self-Check Tool"
            title={
              <>
                How healthy are
                <br />
                <span className="text-forest-300">your habits?</span>
              </>
            }
            description="Answer 5 quick questions and get a personalised health snapshot with tailored program recommendations."
            light
          />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          {step >= 0 && !isDone && (
            <div className="mb-8">
              <div className="flex justify-between font-mono text-[10px] text-white/30 mb-2">
                <span>
                  Question {step + 1} of {total}
                </span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-1 bg-white/8 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-linear-to-r from-forest-500 to-amber-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* ── INTRO ── */}
            {step === -1 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 text-center"
              >
                <div className="w-16 h-16 bg-linear-to-br from-forest-500 to-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-xl">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-3">
                  Your Personal Health Check
                </h3>
                <p className="font-mono text-xs text-white/50 leading-relaxed mb-8 max-w-sm mx-auto">
                  5 simple questions · 2 minutes · Personalised recommendations.
                  No sign-up required.
                </p>
                <button
                  onClick={() => setStep(0)}
                  className="inline-flex items-center gap-2 font-mono text-[12px] tracking-wider uppercase bg-forest-500 text-white px-8 py-3.5 rounded-xl hover:bg-forest-400 transition-all duration-200 shadow-lg shadow-forest-500/25 hover:-translate-y-0.5"
                >
                  Start the Quiz
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* ── QUESTIONS ── */}
            {step >= 0 && step < total && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease }}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 lg:p-9"
              >
                <p className="font-serif text-lg lg:text-xl font-light text-white leading-relaxed mb-7">
                  {questions[step].q}
                </p>

                <div className="flex flex-col gap-3 mb-8">
                  {questions[step].options.map((opt, oi) => {
                    const val = questions[step].scores[oi];
                    const isSelected = selected === val;
                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelect(val)}
                        className={`group text-left px-5 py-3.5 rounded-xl border transition-all duration-200 font-sans text-sm ${
                          isSelected
                            ? "border-forest-500 bg-forest-500/15 text-white"
                            : "border-white/10 bg-white/3 text-white/60 hover:border-forest-500/40 hover:bg-forest-500/8 hover:text-white"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`w-4 h-4 rounded-full border-2 shrink-0 transition-colors duration-200 ${
                              isSelected
                                ? "border-forest-400 bg-forest-400"
                                : "border-white/25 group-hover:border-forest-400"
                            }`}
                          />
                          {opt}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/25">
                    {step + 1}/{total}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={selected === null}
                    className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase bg-forest-500 disabled:bg-forest-900 disabled:text-white/25 disabled:border disabled:border-white/10 text-white px-5 py-2.5 rounded-xl hover:bg-forest-400 transition-all duration-200 disabled:cursor-not-allowed hover:enabled:-translate-y-0.5"
                  >
                    {step === total - 1 ? "See Results" : "Next"}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── RESULT ── */}
            {isDone && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 lg:p-9"
              >
                <div className="text-center mb-8">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/35 mb-2">
                    Your Result
                  </p>
                  <h3
                    className="font-serif text-3xl font-bold mb-1"
                    style={{ color: result.color }}
                  >
                    {result.label}
                  </h3>
                  <p className="font-mono text-xs text-white/40">
                    Score: {score} / {maxScore}
                  </p>
                </div>

                {/* Score bar */}
                <div className="h-2 bg-white/8 rounded-full overflow-hidden mb-6">
                  <motion.div
                    className={`h-full rounded-full ${result.bar}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(score / maxScore) * 100}%` }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>

                <p className="font-mono text-xs text-white/55 leading-relaxed mb-8 text-center">
                  {result.message}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#programs"
                    className="flex-1 inline-flex items-center justify-center gap-2 font-mono text-[11px] tracking-wider uppercase bg-forest-500 text-white px-5 py-3 rounded-xl hover:bg-forest-400 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {result.cta}
                  </a>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 font-mono text-[11px] tracking-wider uppercase border border-white/15 text-white/50 px-5 py-3 rounded-xl hover:border-white/30 hover:text-white transition-all duration-200"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Retake
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
