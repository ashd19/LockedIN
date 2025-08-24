// // Stopwatch.jsx
// "use client";
// import { useState, useEffect } from 'react';

// const Stopwatch = () => {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [laps, setLaps] = useState<number[]>([]);

//   useEffect(() => {
//     let intervalId: NodeJS.Timeout | undefined;
//     if (isRunning) {
//       intervalId = setInterval(() => {
//         setTime(prevTime => prevTime + 1);
//       }, 10);
//     }
//     return () => {
//       if (intervalId) clearInterval(intervalId);
//     };
//   }, [isRunning]);

//   const hours = Math.floor(time / 360000);
//   const minutes = Math.floor((time % 360000) / 6000);
//   const seconds = Math.floor((time % 6000) / 100);
//   const milliseconds = time % 100;

//   const startAndPause = () => {
//     setIsRunning(prev => !prev);
//   };

//   const reset = () => {
//     setTime(0);
//     setIsRunning(false);
//     setLaps([]);
//   };

//   const recordLap = () => {
//     setLaps(prevLaps => [...prevLaps, time]);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex flex-col items-center justify-center p-4">
//       <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20">
//         <h1 className="text-4xl font-bold text-center text-white mb-8">Elegant Stopwatch</h1>
        
//         {/* Time display */}
//         <div className="bg-gray-900 rounded-2xl p-6 mb-8 shadow-inner">
//           <div className="text-5xl font-mono font-bold text-center text-green-400 mb-2">
//             {hours.toString().padStart(2, "0")}:
//             {minutes.toString().padStart(2, "0")}:
//             {seconds.toString().padStart(2, "0")}
//           </div>
//           <div className="text-2xl font-mono text-center text-green-300">
//             {milliseconds.toString().padStart(2, "0")}
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="flex justify-center space-x-4 mb-8">
//           <button
//             onClick={startAndPause}
//             className={`px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-200 ${
//               isRunning
//                 ? "bg-red-500 hover:bg-red-600"
//                 : "bg-green-500 hover:bg-green-600"
//             }`}
//           >
//             {isRunning ? "Pause" : "Start"}
//           </button>
//           <button
//             onClick={reset}
//             className="px-6 py-3 rounded-full bg-gray-600 text-white font-semibold shadow-lg hover:bg-gray-700 transition-colors duration-200"
//           >
//             Reset
//           </button>
//           <button
//             onClick={recordLap}
//             disabled={!isRunning}
//             className={`px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-200 ${
//               isRunning
//                 ? "bg-blue-500 hover:bg-blue-600"
//                 : "bg-blue-400 opacity-50 cursor-not-allowed"
//             }`}
//           >
//             Lap
//           </button>
//         </div>

//         {/* Laps */}
//         {laps.length > 0 && (
//           <div className="bg-gray-800/50 rounded-2xl p-4 max-h-60 overflow-y-auto">
//             <h2 className="text-white text-xl font-semibold mb-3 text-center">Lap Times</h2>
//             <div className="space-y-2">
//               {laps.map((lap, index) => {
//                 const lapHours = Math.floor(lap / 360000);
//                 const lapMinutes = Math.floor((lap % 360000) / 6000);
//                 const lapSeconds = Math.floor((lap % 6000) / 100);
//                 const lapMilliseconds = lap % 100;
                
//                 return (
//                   <div
//                     key={index}
//                     className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg"
//                   >
//                     <span className="text-white font-medium">Lap {index + 1}</span>
//                     <span className="font-mono text-green-300">
//                       {lapHours.toString().padStart(2, "0")}:
//                       {lapMinutes.toString().padStart(2, "0")}:
//                       {lapSeconds.toString().padStart(2, "0")}.
//                       <span className="text-sm">{lapMilliseconds.toString().padStart(2, "0")}</span>
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
      
//       <p className="text-white/70 mt-6 text-center">Click Start to begin timing</p>
//     </div>
//   );
// };

// export default Stopwatch;


export default function streak() {

  return (
    <>
     This is the og ???   
    
    </>

  )

};