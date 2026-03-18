import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [dark, setDark] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setMobileOpen(false)
    }, [location])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
    }, [dark])

    const navLinks = [
        { to: '/countries', label: 'Countries' },
        { to: '/services', label: 'Services' },
        { to: '/about', label: 'About Us' },
        { to: '/contact', label: 'Contact' },
    ]

    return (
        <>
            <header className={`glass-header ${scrolled ? 'shadow-lg' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                           <img 
                           src='/HEAD_horizontal.png'
                           className='h-12 w-40'/>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map(link => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`text-sm font-semibold transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all ${location.pathname === link.to
                                            ? 'text-primary after:w-full'
                                            : 'hover:text-primary after:w-0 hover:after:w-full'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Right side */}
                        <div className="flex items-center gap-3">
                            {/* Dark mode toggle */}
                            <button
                                onClick={() => setDark(!dark)}
                                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                aria-label="Toggle dark mode"
                            >
                                <span className="material-symbols-outlined text-xl">
                                    {dark ? 'light_mode' : 'dark_mode'}
                                </span>
                            </button>

                            {/* CTA */}
                            <Link
                                to="/contact"
                                className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20 active:scale-95"
                            >
                                Free Consultation
                            </Link>

                            {/* Mobile hamburger */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300"
                                aria-label="Toggle menu"
                            >
                                <span className="material-symbols-outlined text-2xl">
                                    {mobileOpen ? 'close' : 'menu'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile menu overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-black/50 mobile-menu-overlay"
                        onClick={() => setMobileOpen(false)}
                    />
                    <div className="absolute top-20 left-0 right-0 bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-700 shadow-xl mobile-menu-drawer">
                        <nav className="flex flex-col p-6 space-y-4">
                            {navLinks.map(link => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`text-lg font-semibold py-3 px-4 rounded-xl transition-colors ${location.pathname === link.to
                                            ? 'bg-primary/10 text-primary'
                                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="bg-primary text-white text-center py-3 px-4 rounded-xl font-bold text-lg mt-2"
                            >
                                Free Consultation
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}
