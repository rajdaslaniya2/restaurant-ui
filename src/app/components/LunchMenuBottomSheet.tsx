"use client";
import React from "react";
import { X } from "lucide-react";

interface LunchMenuBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: () => void;
}

const items = [
  { name: "Butter Roti", qty: 4 },
  { name: "Sev Tamatar", qty: 1 },
  { name: "Mix Kathol", qty: 1 },
  { name: "Dal", qty: 1 },
  { name: "Rice", qty: 1 },
];

export default function LunchMenuBottomSheet({ isOpen, onClose, onAdd }: LunchMenuBottomSheetProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 !backdrop-blur">
      <div className="relative w-full max-w-md">
        {/* Close button positioned above the modal */}
        <button
          onClick={onClose}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-60 bg-white rounded-full p-2 shadow-lg text-gray-600 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        <div className="bg-white rounded-t-3xl w-full shadow-xl animate-slide-up">
          {/* Header */}
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-semibold text-gray-900">
                Today's Lunch Menu
              </h3>
              <span className="text-sm text-gray-500 font-medium">
                11<span className="text-xs align-super">th</span> July 25, Monday
              </span>
            </div>
          </div>

          {/* Main Item */}
          <div className="px-6 pb-6">
            <div className="flex items-center bg-gray-50 rounded-2xl p-4">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=80&h=80&fit=crop&crop=center"
                alt="Regular Thali"
                className="w-16 h-16 rounded-xl object-cover mr-4"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900">Regular Thali</h4>
              </div>
              <span className="text-xl font-bold text-gray-900">₹80</span>
            </div>
          </div>

          {/* Items List */}
          <div className="px-6 pb-8">
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-800 text-base font-medium">{item.name}</span>
                  <span className="text-gray-900 font-semibold text-lg">{item.qty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add Button */}
          <div className="px-6 pb-8">
            <button
              onClick={onAdd}
              className="w-full bg-white text-green-600 border-2 border-green-500 rounded-2xl py-4 font-semibold text-lg hover:bg-green-50 transition-colors"
            >
              Add item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
