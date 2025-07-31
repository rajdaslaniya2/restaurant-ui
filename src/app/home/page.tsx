"use client";
import React, { useState } from "react";
import { Search, Menu, Bell, Heart, Plus, X } from "lucide-react";
import NotificationMuteModal from "../components/NotificationMuteModal";
import LunchMenuBottomSheet from "../components/LunchMenuBottomSheet";

const categories = [
  { name: "Breakfast", emoji: "🥞" },
  { name: "Lunch", emoji: "🍛" },
  { name: "Evening Snacks", emoji: "🍿" },
  { name: "Sides", emoji: "🍟" },
];

const menuItems = [
  {
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=200&h=200&fit=crop&crop=center",
    title: "Masala Tea",
    price: 15,
    available: true
  },
  {
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200&h=200&fit=crop&crop=center",
    title: "Poha",
    price: 40,
    available: true
  },
  {
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200&h=200&fit=crop&crop=center",
    title: "Idli Sambhaar",
    price: 40,
    available: false,
    note: "Not available in Jain"
  },
  {
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=200&fit=crop&crop=center",
    title: "Khaman Dhokla",
    price: 55,
    available: false,
    note: "Not available in Jain"
  },
  {
    img: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=200&h=200&fit=crop&crop=center",
    title: "Masala Dosa",
    price: 60,
    available: false,
    note: "Not available in Jain"
  },
];

export default function HomeMenu() {
  const [selectedCategory, setSelectedCategory] = useState("Breakfast");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showMuteModal, setShowMuteModal] = useState(false);
  const [showLunchMenu, setShowLunchMenu] = useState(false);
  const [showMenuTooltip, setShowMenuTooltip] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleFavorite = (title: string) => {
    setFavorites(favs => favs.includes(title) ? favs.filter(f => f !== title) : [...favs, title]);
  };

  return (
    <div className="min-h-screen ">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 pt-3 pb-1 bg-white">
        <span className="font-semibold text-lg">9:41</span>
        <div className="flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
          </div>
          <div className="w-6 h-3 border border-black rounded-sm">
            <div className="w-4 h-2 bg-black rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Top Bar */}
      <div className="bg-white px-4 pb-4">
        <div className="flex items-center justify-between mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
          <div className="flex-1 mx-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="relative">
              <button
                className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors"
                onMouseEnter={() => !menuClicked && setShowMenuTooltip(true)}
                onMouseLeave={() => setShowMenuTooltip(false)}
                onClick={() => {
                  setMenuClicked(true);
                  setShowMenuTooltip(false);
                  setShowLunchMenu(true);
                }}
              >
                <Menu className="w-5 h-5 text-green-600" />
              </button>
              {showMenuTooltip && !menuClicked && (
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gray-900 text-white px-4 py-2 rounded-2xl shadow-lg whitespace-nowrap">
                    <button
                      onClick={() => setShowLunchMenu(true)}
                      className="flex items-center space-x-2"
                    >
                      <span className="text-sm font-medium">Today's Menu</span>
                    </button>
                    {/* Arrow pointing down */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 rotate-180">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => setShowMuteModal(true)}
              className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center relative hover:bg-green-200 transition-colors"
            >
              <Bell className="w-5 h-5 text-green-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white px-4">
        <div className="flex justify-between items-center space-x-4">
          {categories.map((cat, index) => (
            <div key={cat.name} className="relative">
              <button
                className="flex flex-col items-center p-2 rounded-lg"
                onClick={() => setSelectedCategory(cat.name)}
              >
                <div className={`text-2xl mb-1 p-2 rounded-lg ${selectedCategory === cat.name ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                  {cat.emoji}
                </div>
                <span className={`text-xs font-medium ${selectedCategory === cat.name ? 'text-green-600' : 'text-gray-600'
                  }`}>
                  {cat.name}
                </span>
              </button>
              {/* Green underline for active category */}
              {selectedCategory === cat.name && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-green-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="mx-4 mb-4">
        <div className="bg-green-200 px-4 py-3 flex items-center justify-between">
          <span className="text-green-800 font-medium flex items-center">
            Buy Bulk Meal Pass on Discounted Rates
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          <X className="w-5 h-5 text-green-800" />
        </div>
      </div>


      {/* Menu Items */}
      <div className="px-4 space-y-4">
        {menuItems.map(item => (
          <div key={item.title} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 rounded-xl object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                <p className="text-gray-600 font-medium">₹{item.price}</p>
                {item.note && (
                  <p className="text-xs text-gray-400 mt-1">{item.note}</p>
                )}
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleFavorite(item.title)}
                  className="p-1"
                >
                  <Heart
                    className={`w-6 h-6 ${favorites.includes(item.title)
                      ? 'fill-green-500 text-green-500'
                      : 'text-gray-300'
                      }`}
                  />
                </button>
                <button className="bg-white border-2 border-green-500 text-green-600 px-4 py-2 rounded-xl font-semibold hover:bg-green-50 transition-colors">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      <NotificationMuteModal
        isOpen={showMuteModal}
        onClose={() => setShowMuteModal(false)}
        onOk={(duration) => {
          console.log('Muted for:', duration);
          setShowMuteModal(false);
        }}
      />

      <LunchMenuBottomSheet
        isOpen={showLunchMenu}
        onClose={() => {
          setShowLunchMenu(false);
          setMenuClicked(false); // Reset so tooltip can show again
        }}
        onAdd={() => {
          console.log('Added lunch item');
          setShowLunchMenu(false);
          setMenuClicked(false); // Reset so tooltip can show again
        }}
      />
    </div>
  );
}
