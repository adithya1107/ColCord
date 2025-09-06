import React from 'react';
import { Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Mail className="h-4 w-4 text-white/60" />
            <span className="text-sm text-white/60">team@colcord.co.in</span>
          </div>
          <p className="text-white/40 text-xs">
            © 2025 ColCord. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};