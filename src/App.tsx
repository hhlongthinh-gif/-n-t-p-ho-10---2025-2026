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

// Simulation Component
function ChemicalSimulation({ type }: { type: Question['simulationType'] }) {
  if (!type) return null;

  return (
    <div className="w-full aspect-video bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Simulation active</span>
      </div>

      {type === 'litmus-bleach' && (
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-24 h-48 bg-white/50 border-2 border-gray-200 rounded-b-full p-2 flex items-center justify-center">
             <motion.div 
               initial={{ backgroundColor: '#60a5fa' }} // Blue
               animate={{ 
                 backgroundColor: ['#60a5fa', '#f87171', '#ffffff'],
               }}
               transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.8] }}
               className="w-8 h-32 rounded-sm shadow-sm"
             />
          </div>
          <p className="text-xs font-medium text-gray-500">Mất màu quỳ tím ẩm</p>
        </div>
      )}

      {type === 'precipitate-cloudy' && (
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-48 bg-white/20 border-2 border-gray-200 rounded-b-full overflow-hidden">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: [0, 0.3, 0.8, 1], scale: 1 }}
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute inset-0 bg-[#FFFBEB]"
             />
             <div className="absolute inset-x-0 bottom-0 h-4/5 bg-blue-100/30" />
          </div>
          <p className="text-xs font-medium text-gray-500">Dung dịch trở nên đục</p>
        </div>
      )}

      {type === 'starch-iodine' && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-32 bg-[#FDE68A] rounded-3xl relative overflow-hidden flex items-center justify-center">
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-[#1E3A8A] rounded-full blur-xl"
            />
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1], opacity: 0.8 }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
              className="absolute top-1/4 right-1/4 w-12 h-12 bg-[#1E3A8A] rounded-full blur-lg"
            />
          </div>
          <p className="text-xs font-medium text-gray-500">Màu xanh tím trên khoai lang</p>
        </div>
      )}

      {type === 'litmus-red' && (
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-24 h-48 bg-white/50 border-2 border-gray-200 rounded-b-full p-2 flex items-center justify-center">
             <motion.div 
               initial={{ backgroundColor: '#60a5fa' }} // Blue
               animate={{ backgroundColor: '#f87171' }} // Red
               transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
               className="w-8 h-32 rounded-sm shadow-sm"
             />
          </div>
          <p className="text-xs font-medium text-gray-500">Quỳ tím hóa đỏ</p>
        </div>
      )}

      {type === 'gas-evolution' && (
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-48 bg-white/20 border-2 border-gray-200 rounded-b-full overflow-hidden">
             <div className="absolute inset-x-0 bottom-0 h-4/5 bg-blue-100/30" />
             {[...Array(8)].map((_, i) => (
               <motion.div
                 key={i}
                 initial={{ y: 150, x: 20 + Math.random() * 20, opacity: 0, scale: 0.5 }}
                 animate={{ y: [150, 0], opacity: [0, 1, 0], scale: [0.5, 1.2] }}
                 transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: i * 0.2 }}
                 className="absolute w-2 h-2 bg-white rounded-full border border-blue-200"
               />
             ))}
          </div>
          <p className="text-xs font-medium text-gray-500">Sủi bọt khí</p>
        </div>
      )}

      {type === 'solution-color-change' && (
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-48 bg-white/20 border-2 border-gray-200 rounded-b-full overflow-hidden">
             <motion.div 
               initial={{ backgroundColor: 'rgba(219, 234, 254, 0.3)' }}
               animate={{ backgroundColor: '#3b82f6' }}
               transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
               className="absolute inset-x-0 bottom-0 h-4/5"
             />
             {[...Array(5)].map((_, i) => (
               <motion.div
                 key={i}
                 initial={{ y: 150, x: 20 + Math.random() * 20, opacity: 0 }}
                 animate={{ y: [150, 0], opacity: [0, 1, 0] }}
                 transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                 className="absolute w-2 h-2 bg-white/50 rounded-full"
               />
             ))}
          </div>
          <p className="text-xs font-medium text-gray-500">Dung dịch chuyển màu xanh</p>
        </div>
      )}

      {type === 'smoke-evolution' && (
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-64 h-32 flex justify-between items-center px-12">
            <div className="w-12 h-4 bg-gray-300 rounded-full" />
            <div className="w-12 h-4 bg-gray-300 rounded-full" />
            
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  scale: 0.5, 
                  opacity: 0, 
                  x: i % 2 === 0 ? -40 : 40,
                  y: 0 
                }}
                animate={{ 
                  scale: [0.5, 2, 4], 
                  opacity: [0, 0.6, 0], 
                  x: 0,
                  y: [0, -40, -80] 
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                className="absolute left-1/2 top-1/2 w-8 h-8 bg-white rounded-full blur-md"
              />
            ))}
          </div>
          <p className="text-xs font-medium text-gray-500">Khói trắng (NH4Cl)</p>
        </div>
      )}

      {type === 'precipitate-yellow' && (
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-48 bg-white/20 border-2 border-gray-200 rounded-b-full overflow-hidden">
             <div className="absolute inset-x-0 bottom-0 h-4/5 bg-blue-50/20" />
             <motion.div 
               initial={{ height: 0 }}
               animate={{ height: ['0%', '20%'] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute bottom-0 inset-x-0 bg-yellow-400 opacity-80"
             />
             {[...Array(10)].map((_, i) => (
               <motion.div
                 key={i}
                 initial={{ y: 20, x: 10 + Math.random() * 30, opacity: 0 }}
                 animate={{ y: [20, 160], opacity: [0, 1, 0] }}
                 transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                 className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full"
               />
             ))}
          </div>
          <p className="text-xs font-medium text-gray-500">Kết tủa vàng</p>
        </div>
      )}
    </div>
  );
}

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
                  Bấm bắt đầu để làm bài kiểm tra {QUESTIONS.length} câu hỏi. Tùy chỉnh thời gian làm bài bên dưới.
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
                  <p className="text-gray-600">{QUESTIONS.length} câu hỏi trắc nghiệm kiến thức môn Hóa học 10.</p>
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

                  {currentQuestion.simulationType ? (
                    <ChemicalSimulation type={currentQuestion.simulationType} />
                  ) : currentQuestion.image && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="rounded-2xl overflow-hidden border border-gray-100 bg-white"
                    >
                      <img 
                        src={currentQuestion.image} 
                        alt="Question illustration" 
                        className="w-full h-auto object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  )}
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

                          {q.simulationType ? (
                            <div className="max-w-md">
                              <ChemicalSimulation type={q.simulationType} />
                            </div>
                          ) : q.image && (
                            <div className="rounded-xl overflow-hidden border border-gray-100 max-w-md">
                              <img 
                                src={q.image} 
                                alt="Question illustration" 
                                className="w-full h-auto"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          )}
                          
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
