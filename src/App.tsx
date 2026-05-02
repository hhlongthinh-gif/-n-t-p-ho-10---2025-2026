/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { 
  Timer, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCcw, 
  Trophy,
  Layout,
  BookOpen
} from 'lucide-react';
import { QUESTIONS, Question } from './constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DURATION_OPTIONS = [15, 30, 45, 60, 90];

export default function App() {
  const [currentStep, setCurrentStep] = useState<'landing' | 'quiz' | 'result'>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [durationMinutes, setDurationMinutes] = useState(45);
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
  const [score, setScore] = useState(0);
  const [showNav, setShowNav] = useState(false);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (currentStep === 'quiz' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && currentStep === 'quiz') {
      finishQuiz();
    }
    return () => clearInterval(interval);
  }, [currentStep, timeLeft]);

  const startQuiz = () => {
    setCurrentStep('quiz');
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setTimeLeft(durationMinutes * 60);
  };

  const finishQuiz = useCallback(() => {
    let finalScore = 0;
    QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        finalScore++;
      }
    });
    setScore(finalScore);
    setCurrentStep('result');
  }, [selectedAnswers]);

  const handleSelectAnswer = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const hasAnsweredCurrent = selectedAnswers[currentQuestionIndex] !== undefined;

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-orange-100 italic-serif-headers">
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <AnimatePresence mode="wait">
          {currentStep === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">Kiểm tra Hóa học 10</p>
                <h1 className="text-5xl md:text-7xl font-sans font-medium tracking-tight leading-[0.9] text-gray-900 border-l-4 border-orange-500 pl-6">
                  Ôn tập <br/> Tổng hợp
                </h1>
                <p className="text-xl text-gray-500 font-light max-w-xl leading-relaxed">
                  Bấm bắt đầu để làm bài kiểm tra 40 câu hỏi. Tùy chỉnh thời gian làm bài bên dưới.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-gray-700">Chọn thời gian làm bài (Phút):</p>
                <div className="flex flex-wrap gap-2">
                  {DURATION_OPTIONS.map((min) => (
                    <button
                      key={min}
                      onClick={() => setDurationMinutes(min)}
                      className={cn(
                        "px-6 py-2 rounded-xl text-sm font-bold transition-all",
                        durationMinutes === min
                          ? "bg-orange-500 text-white shadow-lg shadow-orange-200 scale-105"
                          : "bg-white border border-gray-200 text-gray-500 hover:border-orange-200"
                      )}
                    >
                      {min} Phút
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-orange-600">
                    <Timer size={18} />
                    <span className="font-medium">Thời gian đã chọn</span>
                  </div>
                  <p className="text-gray-600">{durationMinutes} phút đếm ngược. Bài thi tự nộp khi hết giờ.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-blue-600">
                    <BookOpen size={18} />
                    <span className="font-medium">Cấu trúc</span>
                  </div>
                  <p className="text-gray-600">40 câu hỏi trắc nghiệm kiến thức môn Hóa học 10.</p>
                </div>
              </div>

              <button
                id="start-quiz-btn"
                onClick={startQuiz}
                className="group flex items-center gap-4 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-orange-600 hover:scale-105 active:scale-95"
              >
                Bắt đầu làm bài
                <ChevronRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          )}

          {currentStep === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8 relative"
            >
              {/* Question Navigation Drawer */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setShowNav(!showNav)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
                  >
                    <Layout size={16} className="text-orange-500" />
                    {showNav ? "Ẩn danh sách câu hỏi" : "Xem danh sách câu hỏi"}
                  </button>
                </div>

                <AnimatePresence>
                  {showNav && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white border border-gray-100 rounded-2xl p-4 shadow-xl"
                    >
                      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
                        {QUESTIONS.map((_, idx) => {
                          const isAnswered = selectedAnswers[idx] !== undefined;
                          const isCurrent = currentQuestionIndex === idx;
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                setCurrentQuestionIndex(idx);
                                if (window.innerWidth < 768) setShowNav(false);
                              }}
                              className={cn(
                                "h-10 flex items-center justify-center rounded-lg font-mono text-sm font-bold transition-all",
                                isCurrent 
                                  ? "bg-orange-500 text-white ring-4 ring-orange-100" 
                                  : isAnswered 
                                    ? "bg-green-100 text-green-700 border border-green-200"
                                    : "bg-gray-50 text-gray-400 border border-gray-100 hover:bg-gray-100"
                              )}
                            >
                              {idx + 1}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Header Fixed Info */}
              <div className="flex items-center justify-between py-4 border-b border-gray-100 sticky top-0 bg-[#FDFCFB]/80 backdrop-blur-md z-10">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-mono text-sm">
                    {currentQuestionIndex + 1}
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-gray-400">Câu hỏi</p>
                    <p className="font-medium">{currentQuestionIndex + 1} / {QUESTIONS.length}</p>
                  </div>
                </div>

                <div className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full transition-colors",
                  timeLeft < 60 ? "bg-red-50 text-red-600 animate-pulse" : "bg-gray-100 text-gray-700"
                )}>
                  <Timer size={18} />
                  <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Content */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-orange-500 bg-orange-50 px-2 py-1 rounded">
                    {currentQuestion.section}
                  </span>
                  <div className="text-2xl md:text-3xl font-sans font-medium text-gray-900 leading-tight markdown-content">
                    <ReactMarkdown 
                      remarkPlugins={[remarkMath]} 
                      rehypePlugins={[rehypeKatex]}
                    >
                      {currentQuestion.text}
                    </ReactMarkdown>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectAnswer(currentQuestionIndex, idx)}
                      className={cn(
                        "flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-200 group relative overflow-hidden",
                        selectedAnswers[currentQuestionIndex] === idx
                          ? "border-orange-500 bg-orange-50/50 shadow-md transform scale-[1.02]"
                          : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98]"
                      )}
                    >
                      <div className="flex items-center gap-4 z-10">
                        <span className={cn(
                          "w-8 h-8 flex items-center justify-center rounded-lg font-mono font-bold transition-colors",
                          selectedAnswers[currentQuestionIndex] === idx
                            ? "bg-orange-500 text-white"
                            : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                        )}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <div className="text-lg text-gray-700 markdown-content">
                          <ReactMarkdown 
                            remarkPlugins={[remarkMath]} 
                            rehypePlugins={[rehypeKatex]}
                          >
                            {option}
                          </ReactMarkdown>
                        </div>
                      </div>
                      {selectedAnswers[currentQuestionIndex] === idx && (
                        <CheckCircle2 className="text-orange-500 z-10 shrink-0" size={24} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-8 flex justify-between items-center">
                <button
                  onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                  disabled={currentQuestionIndex === 0}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all",
                    currentQuestionIndex === 0
                      ? "opacity-0 pointer-events-none"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                  )}
                >
                  <ChevronRight size={20} className="rotate-180" />
                  Câu trước
                </button>

                <button
                  id="next-question-btn"
                  disabled={!hasAnsweredCurrent}
                  onClick={nextQuestion}
                  className={cn(
                    "flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300",
                    hasAnsweredCurrent
                      ? "bg-gray-900 text-white hover:bg-orange-600 shadow-xl shadow-gray-200 translate-y-0"
                      : "bg-gray-100 text-gray-300 cursor-not-allowed translate-y-2 opacity-50"
                  )}
                >
                  {currentQuestionIndex === QUESTIONS.length - 1 ? "Hoàn thành" : "Câu tiếp theo"}
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12 py-8"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-100 text-orange-600 mb-4">
                  <Trophy size={48} />
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold italic tracking-tight text-gray-900">
                  Kết quả bài làm
                </h2>
                <div className="flex justify-center gap-12 py-10">
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-gray-400">Điểm số</p>
                    <p className="text-6xl font-sans font-bold text-gray-900">{(score / QUESTIONS.length * 10).toFixed(1)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-gray-400">Số câu đúng</p>
                    <p className="text-6xl font-sans font-bold text-orange-500">{score}/{QUESTIONS.length}</p>
                  </div>
                </div>
              </div>

              {/* Question Map Header */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Layout className="text-gray-400" size={20} />
                    Sơ đồ câu hỏi
                  </h3>
                  <div className="flex gap-4 text-xs font-medium">
                    <div className="flex items-center gap-1.5 text-green-600">
                      <div className="w-3 h-3 bg-green-500 rounded-sm"></div> Đúng
                    </div>
                    <div className="flex items-center gap-1.5 text-red-600">
                      <div className="w-3 h-3 bg-red-500 rounded-sm"></div> Sai
                    </div>
                  </div>
                </div>

                {/* Grid Question Map */}
                <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
                  {QUESTIONS.map((_, idx) => {
                    const isCorrect = selectedAnswers[idx] === QUESTIONS[idx].correctAnswer;
                    return (
                      <a
                        key={idx}
                        href={`#question-${idx + 1}`}
                        className={cn(
                          "h-10 flex items-center justify-center rounded-lg font-mono text-sm font-bold transition-all hover:scale-110 active:scale-95",
                          isCorrect 
                            ? "bg-green-500 text-white shadow-sm shadow-green-100" 
                            : "bg-red-500 text-white shadow-sm shadow-red-100"
                        )}
                      >
                        {idx + 1}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center justify-between border-b pb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <BookOpen className="text-gray-400" size={20} />
                    Chi tiết bài làm
                  </h3>
                </div>

                <div className="space-y-6">
                  {QUESTIONS.map((q, idx) => {
                    const selected = selectedAnswers[idx];
                    const isCorrect = selected === q.correctAnswer;
                    
                    return (
                      <div 
                        key={idx}
                        id={`question-${idx + 1}`}
                        className={cn(
                          "p-6 rounded-2xl border flex items-start gap-5 transition-all hover:shadow-md",
                          isCorrect ? "border-green-100 bg-white" : "border-red-100 bg-white"
                        )}
                      >
                        <div className={cn(
                          "w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-xs font-bold",
                          isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
                        )}>
                          {idx + 1}
                        </div>
                        <div className="flex-1 space-y-4">
                          <div className="text-lg font-medium text-gray-900 markdown-content leading-relaxed">
                            <ReactMarkdown 
                              remarkPlugins={[remarkMath]} 
                              rehypePlugins={[rehypeKatex]}
                            >
                              {q.text}
                            </ReactMarkdown>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className={cn(
                              "p-3 rounded-xl border text-sm",
                              isCorrect ? "bg-green-50 border-green-100 text-green-700" : "bg-red-50 border-red-100 text-red-700"
                            )}>
                              <p className="font-bold mb-1 opacity-60">Bạn chọn:</p>
                              <div className="markdown-content font-medium">
                                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                  {selected !== undefined ? q.options[selected] : "Chưa chọn"}
                                </ReactMarkdown>
                              </div>
                            </div>
                            {!isCorrect && (
                              <div className="p-3 rounded-xl border border-green-100 bg-green-50 text-green-700 text-sm">
                                <p className="font-bold mb-1 opacity-60">Đáp án đúng:</p>
                                <div className="markdown-content font-medium">
                                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                    {q.options[q.correctAnswer]}
                                  </ReactMarkdown>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm italic text-gray-600 leading-relaxed">
                            <p className="font-bold text-gray-700 not-italic mb-1">Giải thích:</p>
                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                              {q.explanation}
                            </ReactMarkdown>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <button
                  id="restart-btn"
                  onClick={startQuiz}
                  className="flex items-center gap-3 px-10 py-5 rounded-full bg-gray-900 text-white font-bold hover:bg-orange-600 border-none transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gray-200"
                >
                  <RefreshCcw size={20} />
                  Làm lại bài thi
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global CSS for markdown content and italics */}
      <style>{`
        .markdown-content p {
          margin: 0;
          display: inline;
        }
        .markdown-content .katex {
          font-size: 1.1em;
        }
        .italic-serif-headers h1, .italic-serif-headers h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
