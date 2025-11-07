"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Close } from "@mui/icons-material";

const ColorMatchGame = ({ isOpen, onClose, mode }) => {
  const [gameState, setGameState] = useState("menu"); // menu, playing, ended
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [difficulty, setDifficulty] = useState(3); // number of dots
  const [targetColor, setTargetColor] = useState("");
  const [dots, setDots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(30);

  const colors = [
    { name: "Red", value: "#EF4444", points: 10 },
    { name: "Blue", value: "#3B82F6", points: 10 },
    { name: "Green", value: "#10B981", points: 10 },
    { name: "Yellow", value: "#F59E0B", points: 10 },
    { name: "Purple", value: "#A855F7", points: 15 },
    { name: "Pink", value: "#EC4899", points: 15 },
    { name: "Orange", value: "#F97316", points: 15 },
    { name: "Cyan", value: "#06B6D4", points: 15 },
    { name: "Indigo", value: "#6366F1", points: 20 },
    { name: "Teal", value: "#14B8A6", points: 20 },
    { name: "Lime", value: "#84CC16", points: 20 },
    { name: "Rose", value: "#F43F5E", points: 20 },
  ];

  const generateDots = useCallback(() => {
    const availableColors = colors.slice(0, Math.min(difficulty + 2, colors.length));
    const newDots = [];

    for (let i = 0; i < difficulty; i++) {
      const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
      newDots.push({
        id: i,
        color: randomColor,
        x: Math.random() * 80 + 10,
        y: Math.random() * 70 + 10,
      });
    }

    setDots(newDots);
    const randomTarget = availableColors[Math.floor(Math.random() * availableColors.length)];
    setTargetColor(randomTarget);
  }, [difficulty]);

  useEffect(() => {
    if (gameState === "playing") {
      generateDots();
    }
  }, [gameState, generateDots]);

  useEffect(() => {
    if (gameState === "playing" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameState("ended");
    }
  }, [timeLeft, gameState]);

  useEffect(() => {
    if (gameState === "playing" && score > 0) {
      if (score % 50 === 0 && difficulty < 8) {
        setDifficulty((prev) => prev + 1);
      }
    }
  }, [score, gameState, difficulty]);

  const handleDotClick = (clickedDot) => {
    if (clickedDot.color.name === targetColor.name) {
      setScore((prev) => prev + clickedDot.color.points);
      generateDots();
    } else {
      setScore((prev) => Math.max(0, prev - 5));
    }
  };

  const startGame = (time) => {
    setSelectedTime(time);
    setTimeLeft(time);
    setScore(0);
    setDifficulty(3);
    setGameState("playing");
  };

  const resetGame = () => {
    setGameState("menu");
    setScore(0);
    setTimeLeft(selectedTime);
    setDifficulty(3);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`relative w-full max-w-4xl h-[600px] rounded-3xl shadow-2xl overflow-hidden ${
            mode === "Dark"
              ? "bg-gradient-to-br from-slate-900 to-slate-800"
              : "bg-gradient-to-br from-white to-gray-50"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            <Close />
          </motion.button>

          {/* Menu State */}
          {gameState === "menu" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center h-full p-8"
            >
              <motion.h2
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`text-4xl md:text-6xl font-bold mb-6 ${
                  mode === "Dark" ? "text-cyan-400" : "text-cyan-600"
                }`}
              >
                Color Match Game
              </motion.h2>

              <div className={`text-center mb-8 max-w-md ${mode === "Dark" ? "text-gray-300" : "text-gray-700"}`}>
                <p className="text-lg mb-4">Click the color that matches the name shown at the top!</p>
                <p className="text-sm">✓ Correct click = Points</p>
                <p className="text-sm">✗ Wrong click = -5 points</p>
                <p className="text-sm">Difficulty increases as you score!</p>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => startGame(30)}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg text-lg"
                >
                  Quick Game (30s)
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => startGame(120)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg text-lg"
                >
                  Long Game (2min)
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Playing State */}
          {gameState === "playing" && (
            <div className="h-full flex flex-col">
              {/* Game Header */}
              <div className={`p-6 border-b ${mode === "Dark" ? "border-slate-700 bg-slate-800/50" : "border-gray-200 bg-gray-100/50"}`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className={`text-2xl font-bold ${mode === "Dark" ? "text-cyan-400" : "text-cyan-600"}`}>
                      Score: {score}
                    </div>
                    <div className={`text-sm ${mode === "Dark" ? "text-purple-400" : "text-purple-600"}`}>
                      Level: {difficulty - 2}
                    </div>
                  </div>

                  <div className={`text-2xl font-bold ${timeLeft <= 10 ? "text-red-500 animate-pulse" : mode === "Dark" ? "text-gray-300" : "text-gray-700"}`}>
                    Time: {timeLeft}s
                  </div>
                </div>

                <motion.div
                  key={targetColor.name}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-4 text-center"
                >
                  <div className={`text-sm ${mode === "Dark" ? "text-gray-400" : "text-gray-600"}`}>
                    Click this color:
                  </div>
                  <div
                    className="text-5xl font-extrabold mt-2"
                    style={{ color: targetColor.value }}
                  >
                    {targetColor.name}
                  </div>
                </motion.div>
              </div>

              {/* Game Area */}
              <div className="flex-1 relative">
                <AnimatePresence>
                  {dots.map((dot) => (
                    <motion.button
                      key={dot.id}
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      exit={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      onClick={() => handleDotClick(dot)}
                      className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg cursor-pointer transform hover:shadow-2xl transition-shadow"
                      style={{
                        left: `${dot.x}%`,
                        top: `${dot.y}%`,
                        backgroundColor: dot.color.value,
                      }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border-4 border-white/30"
                      />
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* End State */}
          {gameState === "ended" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center h-full p-8"
            >
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h2 className={`text-5xl font-bold mb-6 ${mode === "Dark" ? "text-cyan-400" : "text-cyan-600"}`}>
                  Congratulations!
                </h2>

                <div className={`text-3xl font-bold mb-8 ${mode === "Dark" ? "text-yellow-400" : "text-yellow-600"}`}>
                  Final Score: {score}
                </div>

                <div className={`text-xl mb-8 ${mode === "Dark" ? "text-gray-300" : "text-gray-700"}`}>
                  {score >= 200 ? "🏆 Amazing! You're a Color Master!" :
                   score >= 100 ? "⭐ Great job! Keep practicing!" :
                   score >= 50 ? "👍 Good effort! Try again!" :
                   "💪 Keep trying! You'll get better!"}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetGame}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg"
                  >
                    Play Again
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className={`px-8 py-4 font-bold rounded-xl shadow-lg ${
                      mode === "Dark"
                        ? "bg-slate-700 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ColorMatchGame;
