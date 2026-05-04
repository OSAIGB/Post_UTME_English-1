/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle } from 'lucide-react';

interface AntiCheatGuardProps {
  warnings: number;
  onWarning: () => void;
  children: React.ReactNode;
}

export const AntiCheatGuard: React.FC<AntiCheatGuardProps> = ({ warnings, onWarning, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (warnings > 0) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [warnings]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        onWarning();
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable copy, cut, paste, and certain inspect shortcuts
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'v' || e.key === 'x' || e.key === 'u' || e.key === 'i' || e.key === 'j')) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onWarning]);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded shadow-lg flex items-start gap-4">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="text-red-800 font-bold">Anti-Cheat Warning</h3>
                <p className="text-red-700 text-sm">
                  Switching tabs or unauthorized actions detected. This event has been logged. 
                  Warning count: <span className="font-bold">{warnings}</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
