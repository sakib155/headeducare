import { useState } from 'react'

export default function ChatWidget() {
    const [open, setOpen] = useState(false)

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 pointer-events-none">
            {/* Chat bubble popup */}
            {open && (
                <div className="pointer-events-auto max-w-[280px] bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-br-none shadow-2xl border border-gray-100 dark:border-gray-700 chat-bubble-shadow animate-popIn">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="flex -space-x-1.5">
                            <div className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 bg-primary/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-xs text-primary">person</span>
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 bg-green-500 flex items-center justify-center text-[10px] text-white font-bold">
                                H
                            </div>
                        </div>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                            Live Community
                        </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 leading-snug">
                        "Just got accepted to University of Melbourne! Anyone else heading to Australia? 🎉🇦🇺"
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                        <span className="text-[10px] text-gray-400 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">forum</span> 18 replies
                        </span>
                        <span className="text-[10px] text-gray-400 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">favorite</span> 32
                        </span>
                    </div>
                </div>
            )}

            {/* FAB button */}
            <button
                onClick={() => setOpen(!open)}
                className="pointer-events-auto group relative w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 chat-bubble-shadow overflow-hidden"
                aria-label="Community chat"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="material-symbols-outlined text-3xl relative z-10">
                    {open ? 'close' : 'forum'}
                </span>
                {!open && (
                    <span className="absolute top-4 right-4 w-3 h-3 bg-red-500 border-2 border-white rounded-full z-20 animate-pulse" />
                )}
            </button>
        </div>
    )
}
