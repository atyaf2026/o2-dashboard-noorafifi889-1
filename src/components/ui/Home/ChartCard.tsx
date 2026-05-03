"use client";
import React from "react";

export const ChartCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 w-full h-full flex flex-col">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-[14px] font-medium text-zinc-500">System Performance</h3>
          <p className="text-2xl  text-zinc-900">99.9% Uptime</p>
        </div>
        <div className="flex items-center bg-zinc-50 p-1 rounded-lg">
          <button className="px-3 py-1.5 text-[11px] font-bold bg-white shadow-sm rounded-md text-zinc-900">
            24h
          </button>
          <button className="px-3 py-1.5 text-[11px] font-medium text-zinc-400">
            7d
          </button>
        </div>
      </div>

      {/* SVG Chart Section */}
      <div className="flex-1 w-full mt-4 flex items-end">
        <svg 
          viewBox="0 0 418 80" 
          preserveAspectRatio="none" 
          className="w-full h-[80px]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bar 1 */}
          <path d="M4 34C4 32.8954 4.89543 32 6 32H32.5C33.6046 32 34.5 32.8954 34.5 34V80H4V34Z" fill="#E0E7FF"/>
          {/* Bar 2 */}
          <path d="M38.5 18C38.5 16.8954 39.3954 16 40.5 16H67C68.1046 16 69 16.8954 69 18V80H38.5V18Z" fill="#E0E7FF"/>
          {/* Bar 3 */}
          <path d="M73 50C73 48.8954 73.8954 48 75 48H101.5C102.605 48 103.5 48.8954 103.5 50V80H73V50Z" fill="#C7D2FE"/>
          {/* Bar 4 - Primary Highlight */}
          <path d="M107.5 6C107.5 4.89543 108.395 4 109.5 4H136C137.105 4 138 4.89543 138 6V80H107.5V6Z" fill="#6366F1"/>
          {/* Bar 5 */}
          <path d="M142 26C142 24.8954 142.895 24 144 24H170.5C171.605 24 172.5 24.8954 172.5 26V80H142V26Z" fill="#C7D2FE"/>
          {/* Bar 6 */}
          <path d="M176.5 42C176.5 40.8954 177.395 40 178.5 40H205C206.105 40 207 40.8954 207 42V80H176.5V42Z" fill="#E0E7FF"/>
          {/* Bar 7 */}
          <path d="M211 14C211 12.8954 211.895 12 213 12H239.5C240.605 12 241.5 12.8954 241.5 14V80H211V14Z" fill="#A5B4FC"/>
          {/* Bar 8 */}
          <path d="M245.5 58C245.5 56.8954 246.395 56 247.5 56H274C275.105 56 276 56.8954 276 58V80H245.5V58Z" fill="#E0E7FF"/>
          {/* Bar 9 - Secondary Highlight */}
          <path d="M280 10C280 8.89543 280.895 8 282 8H308.5C309.605 8 310.5 8.89543 310.5 10V80H280V10Z" fill="#6366F1"/>
          {/* Bar 10 */}
          <path d="M314.5 30C314.5 28.8954 315.395 28 316.5 28H343C344.105 28 345 28.8954 345 30V80H314.5V30Z" fill="#C7D2FE"/>
          {/* Bar 11 */}
          <path d="M349 38C349 36.8954 349.895 36 351 36H377.5C378.605 36 379.5 36.8954 379.5 38V80H349V38Z" fill="#E0E7FF"/>
          {/* Bar 12 - Final Highlight */}
          <path d="M383.5 2C383.5 0.895429 384.395 0 385.5 0H412C413.105 0 414 0.895431 414 2V80H383.5V2Z" fill="#4F46E5"/>
        </svg>
      </div>
    </div>
  );
};