"use client";
import React from "react";
import { Wifi } from "lucide-react";

const crowdData = [
  { label: "12:00 PM (24%)", value: 24, color: "#22c55e", time: "12:00" },
  { label: "12:30 PM (20%)", value: 20, color: "#a78bfa", time: "12:30" },
  { label: "01:00 PM (12%)", value: 12, color: "#38bdf8", time: "01:00" },
  { label: "01:30 PM (10%)", value: 10, color: "#a3e635", time: "01:30" },
  { label: "02:00 PM (09%)", value: 9, color: "#c4b5fd", time: "02:00" },
  { label: "02:30 PM (11%)", value: 11, color: "#fca5a5", time: "02:30" },
  { label: "03:00 PM (08%)", value: 8, color: "#fde68a", time: "03:00" },
  { label: "03:30 PM (06%)", value: 6, color: "#d1bfa3", time: "03:30" },
];

function DonutChart({ data }: { data: typeof crowdData }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let cumulativePercentage = 0;

  const createPath = (percentage: number, cumulativePercentage: number) => {
    const startAngle = cumulativePercentage * 3.6;
    const endAngle = (cumulativePercentage + percentage) * 3.6;

    const startAngleRad = (startAngle - 90) * (Math.PI / 180);
    const endAngleRad = (endAngle - 90) * (Math.PI / 180);

    const largeArcFlag = percentage > 50 ? 1 : 0;
    const outerRadius = 110;
    const innerRadius = 55;

    const x1 = 150 + outerRadius * Math.cos(startAngleRad);
    const y1 = 150 + outerRadius * Math.sin(startAngleRad);
    const x2 = 150 + outerRadius * Math.cos(endAngleRad);
    const y2 = 150 + outerRadius * Math.sin(endAngleRad);

    const x3 = 150 + innerRadius * Math.cos(endAngleRad);
    const y3 = 150 + innerRadius * Math.sin(endAngleRad);
    const x4 = 150 + innerRadius * Math.cos(startAngleRad);
    const y4 = 150 + innerRadius * Math.sin(startAngleRad);

    return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
  };

  const getTextPosition = (percentage: number, cumulativePercentage: number) => {
    const midAngle = (cumulativePercentage + percentage / 2) * 3.6;
    const midAngleRad = (midAngle - 90) * (Math.PI / 180);
    const textRadius = 90;

    const x = 150 + textRadius * Math.cos(midAngleRad);
    const y = 150 + textRadius * Math.sin(midAngleRad);

    return { x, y };
  };

  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 300 300"
      className="drop-shadow-sm w-full h-auto"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
        </filter>
      </defs>
      {data.map((item, index) => {
        const percentage = (item.value / total) * 100;
        const path = createPath(percentage, cumulativePercentage);
        const textPos = getTextPosition(percentage, cumulativePercentage);
        cumulativePercentage += percentage;

        return (
          <g key={index}>
            <path
              d={path}
              fill={item.color}
              stroke="white"
              strokeWidth="1"
              strokeLinejoin="round"
              strokeLinecap="round"
              filter="url(#shadow)"
            />
            <text
              x={textPos.x}
              y={textPos.y - 3}
              textAnchor="middle"
              className="fill-gray-900 text-sm font-bold"
              style={{ fontSize: '14px' }}
            >
              {item.value.toString().padStart(2, '0')}%
            </text>
            <text
              x={textPos.x}
              y={textPos.y + 12}
              textAnchor="middle"
              className="fill-gray-700 text-xs font-medium"
              style={{ fontSize: '11px' }}
            >
              {item.time}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function LunchCrowdChart() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Status Bar */}
      <div className="w-full max-w-sm mx-auto">
        <div className="flex justify-between items-center pt-3 pb-2 text-black">
          <span className="font-semibold text-lg">9:41</span>
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
            </div>
            <Wifi className="w-4 h-4 text-black" />
            <div className="w-6 h-3 border border-black rounded-sm">
              <div className="w-4 h-2 bg-black rounded-sm m-0.5"></div>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="flex justify-center mb-6 px-6">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>

        {/* Welcome Text */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center px-6">
          Welcome Dhiren Devganiya
        </h1>

        {/* Main Content Container */}
        <div className="bg-white rounded-t-3xl px-6 pt-8 pb-8 shadow-lg">
          {/* Description */}
          <p className="text-center text-gray-700 text-base leading-relaxed mb-8">
            Let's check how crowded it gets during lunch hours.
            <br />
            Select your preferred lunch time before using Aaharam.
          </p>

          {/* Donut Chart */}
          <div className="flex justify-center mb-8">
            <DonutChart data={crowdData} />
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8 text-sm">
            {crowdData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-800 font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="px-4">
            <button className="w-full bg-gray-900 text-white py-2 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-colors">
              Select Your Preferred Lunch Time
            </button>

            {/* Bottom Indicator */}
            <div className="flex justify-center mt-6">
              <div className="w-32 h-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
