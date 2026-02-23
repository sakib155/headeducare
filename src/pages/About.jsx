import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

const FALLBACK_TEAM = [
    { id: '1', name: 'Dr. Aminul Haque', role: 'Founder & CEO', photo_url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300', bio: 'With over 15 years in international education consulting, Dr. Haque founded Head Edu Care to bridge the gap between aspiring students and world-class institutions.' },
    { id: '2', name: 'Tasfia Rahman', role: 'Head of Counseling', photo_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300', bio: 'Certified education counselor with expertise in Australian and Canadian university admissions. Has helped over 3,000 students.' },
    { id: '3', name: 'Karim Uddin', role: 'Migration Specialist', photo_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300', bio: 'MARA-registered migration agent specializing in skilled worker visas and permanent residency applications.' },
    { id: '4', name: 'Sanjida Akter', role: 'Visa Processing Lead', photo_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300', bio: 'Expert in visa documentation and processing with a 98% success rate across 20+ countries.' },
]

const milestones = [
    { year: '2013', title: 'Founded', desc: 'Head Edu Care was established with a mission to make global education accessible.' },
    { year: '2015', title: 'First 500 Students', desc: 'Crossed the milestone of 500 successful student placements internationally.' },
    { year: '2018', title: 'Expanded to 30+ Countries', desc: 'Partnered with universities across 30 countries spanning 4 continents.' },
    { year: '2020', title: 'Digital Transformation', desc: 'Launched online counseling platform for remote students during the pandemic.' },
    { year: '2023', title: '15,000+ Alumni', desc: 'Celebrated 15,000 successful student placements with a 98% visa success rate.' },
    { year: '2025', title: 'New Horizons', desc: 'Expanded to 50+ countries with integrated migration and career services.' },
]

export default function About() {
    const [team, setTeam] = useState(FALLBACK_TEAM)

    useEffect(() => {
        async function fetchTeam() {
            try {
                const { data } = await supabase.from('team_members').select('*').order('display_order')
                if (data?.length) setTeam(data)
            } catch (e) { /* use fallback */ }
        }
        fetchTeam()
    }, [])

    return (
        <div>
            {/* Hero */}
            <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 to-blue-50 dark:from-background-dark dark:to-surface-dark overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">About Us</h2>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0d121b] dark:text-white mb-6 leading-tight">
                            Empowering Dreams,{' '}
                            <span className="text-primary">Globally</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Head Edu Care is a premier education and migration consultancy dedicated to helping students
                            achieve their dreams of studying and building careers abroad. With over 12 years of experience and
                            partnerships with 500+ universities worldwide, we are your trusted guide to global education.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: 'visibility', title: 'Our Vision', text: 'To be the most trusted global education partner, transforming lives through quality international education and career opportunities.' },
                            { icon: 'flag', title: 'Our Mission', text: 'To provide comprehensive, transparent, and personalized education consulting services that empower students to make informed decisions about their future.' },
                            { icon: 'favorite', title: 'Our Values', text: 'Integrity, student-first approach, excellence in service delivery, and continuous innovation in education consulting for every student we serve.' },
                        ].map((item, i) => (
                            <div key={i} className="bg-background-light dark:bg-gray-800 p-10 rounded-2xl border border-gray-100 dark:border-gray-700">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#0d121b] dark:text-white">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-background-light dark:bg-background-dark/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Our Journey</h2>
                        <h3 className="text-3xl sm:text-4xl font-black text-[#0d121b] dark:text-white">Milestones That Define Us</h3>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />
                        <div className="space-y-10">
                            {milestones.map((m, i) => (
                                <div key={i} className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                                        <span className="text-primary font-black text-2xl">{m.year}</span>
                                        <h4 className="text-xl font-bold text-[#0d121b] dark:text-white mt-1">{m.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mt-2">{m.desc}</p>
                                    </div>
                                    <div className="w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-background-dark shadow-lg z-10 shrink-0 hidden md:block" />
                                    <div className="md:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Meet Our Team</h2>
                        <h3 className="text-3xl sm:text-4xl font-black text-[#0d121b] dark:text-white">Expert Counselors at Your Service</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <div key={member.id} className="group text-center">
                                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[3/4]">
                                    <img
                                        src={member.photo_url}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h4 className="text-lg font-bold text-[#0d121b] dark:text-white">{member.name}</h4>
                                <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
