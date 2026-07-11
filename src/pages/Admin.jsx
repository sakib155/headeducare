import { useState, useEffect } from "react";
import { api } from "../lib/apiClient";

export default function Admin() {
  const [auth, setAuth] = useState({ loading: true, authenticated: false, user: null });
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  // Data States
  const [leads, setLeads] = useState([]);
  const [services, setServices] = useState([]);
  const [countries, setCountries] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [settings, setSettings] = useState({});

  // Loading/Saving states
  const [actionLoading, setActionLoading] = useState(false);
  const [leadsFilter, setLeadsFilter] = useState("all");
  const [leadsSearch, setLeadsSearch] = useState("");

  // Modal / Form States
  const [activeModal, setActiveModal] = useState(null); // 'service', 'country', 'testimonial', 'lead_details'
  const [selectedItem, setSelectedItem] = useState(null);

  // Verification & Auth check on mount
  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const res = await api.checkAuth();
      if (res.authenticated) {
        setAuth({ loading: false, authenticated: true, user: res.user });
        loadDashboardData();
      } else {
        setAuth({ loading: false, authenticated: false, user: null });
      }
    } catch {
      setAuth({ loading: false, authenticated: false, user: null });
    }
  };

  const loadDashboardData = async () => {
    try {
      const [leadsData, servicesData, countriesData, testimonialsData, settingsData] = await Promise.all([
        api.fetchLeads().catch(() => []),
        api.fetchServices(),
        api.fetchCountries(),
        api.fetchTestimonials(),
        api.fetchSettings()
      ]);
      setLeads(leadsData);
      setServices(servicesData);
      setCountries(countriesData);
      setTestimonials(testimonialsData);
      setSettings(settingsData);
    } catch (err) {
      console.error("Error loading admin dashboard data:", err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setAuth(prev => ({ ...prev, loading: true }));
    try {
      const res = await api.login(usernameInput, passwordInput);
      setAuth({ loading: false, authenticated: true, user: res.user });
      loadDashboardData();
    } catch (err) {
      setLoginError(err.message || "Invalid credentials or database connection failed");
      setAuth({ loading: false, authenticated: false, user: null });
    }
  };

  const handleLogout = async () => {
    if (confirm("Are you sure you want to log out?")) {
      await api.logout();
      setAuth({ loading: false, authenticated: false, user: null });
      // Reset state variables
      setLeads([]);
    }
  };

  // Lead status updater
  const handleUpdateLeadStatus = async (id, newStatus) => {
    setActionLoading(true);
    try {
      await api.updateLeadStatus(id, newStatus);
      setLeads(prev => prev.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
      if (selectedItem && selectedItem.id === id) {
        setSelectedItem(prev => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      alert("Failed to update status: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Lead deleter
  const handleDeleteLead = async (id) => {
    if (confirm("Are you sure you want to delete this lead? This cannot be undone.")) {
      setActionLoading(true);
      try {
        await api.deleteLead(id);
        setLeads(prev => prev.filter(lead => lead.id !== id));
        if (selectedItem && selectedItem.id === id) {
          setActiveModal(null);
          setSelectedItem(null);
        }
      } catch (err) {
        alert("Failed to delete lead: " + err.message);
      } finally {
        setActionLoading(false);
      }
    }
  };

  // Generic Save Handler for CRUD lists
  const handleSaveItem = async (type, data) => {
    setActionLoading(true);
    try {
      if (type === 'service') {
        const res = await api.saveService(data);
        const savedItem = { ...data, id: data.id || res.id };
        if (data.id) {
          setServices(prev => prev.map(item => item.id === data.id ? savedItem : item));
        } else {
          setServices(prev => [...prev, savedItem]);
        }
      } else if (type === 'country') {
        const res = await api.saveCountry(data);
        const savedItem = { ...data, id: data.id || res.id };
        if (data.id) {
          setCountries(prev => prev.map(item => item.id === data.id ? savedItem : item));
        } else {
          setCountries(prev => [...prev, savedItem]);
        }
      } else if (type === 'testimonial') {
        const res = await api.saveTestimonial(data);
        const savedItem = { ...data, id: data.id || res.id };
        if (data.id) {
          setTestimonials(prev => prev.map(item => item.id === data.id ? savedItem : item));
        } else {
          setTestimonials(prev => [...prev, savedItem]);
        }
      }
      setActiveModal(null);
      setSelectedItem(null);
    } catch (err) {
      alert(`Failed to save ${type}: ` + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Generic Delete Handler for CRUD lists
  const handleDeleteItem = async (type, id) => {
    if (confirm(`Are you sure you want to delete this ${type}?`)) {
      setActionLoading(true);
      try {
        if (type === 'service') {
          await api.deleteService(id);
          setServices(prev => prev.filter(item => item.id !== id));
        } else if (type === 'country') {
          await api.deleteCountry(id);
          setCountries(prev => prev.filter(item => item.id !== id));
        } else if (type === 'testimonial') {
          await api.deleteTestimonial(id);
          setTestimonials(prev => prev.filter(item => item.id !== id));
        }
      } catch (err) {
        alert(`Failed to delete ${type}: ` + err.message);
      } finally {
        setActionLoading(false);
      }
    }
  };

  // Save general site settings
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    try {
      await api.saveSettings(settings);
      alert("Site settings statistics saved successfully!");
    } catch (err) {
      alert("Failed to save settings: " + err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Loading Screen
  if (auth.loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white">
        <span className="material-symbols-outlined text-5xl text-primary animate-spin mb-4">
          progress_activity
        </span>
        <p className="text-gray-400 font-semibold">Loading Admin Session...</p>
      </div>
    );
  }

  // --- LOGIN VIEW ---
  if (!auth.authenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

        <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl relative z-10">
          <div className="text-center mb-8">
            <span className="material-symbols-outlined text-4xl text-primary mb-2 block">
              admin_panel_settings
            </span>
            <h1 className="text-2xl font-black text-white tracking-tight">Admin Console</h1>
            <p className="text-gray-400 text-sm mt-1">Connect to your cPanel database</p>
          </div>

          {loginError && (
            <div className="mb-6 bg-red-950/50 border border-red-500/30 text-red-200 p-4 rounded-xl text-sm flex items-center gap-2">
              <span className="material-symbols-outlined shrink-0 text-red-400">warning</span>
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">
                Username
              </label>
              <input
                type="text"
                required
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                placeholder="Enter administrator username"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">login</span>
              Authenticate Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- DASHBOARD ANALYTICS ---
  const newLeadsCount = leads.filter(l => l.status === 'new').length;
  const contactedLeadsCount = leads.filter(l => l.status === 'contacted').length;
  const inProgressLeadsCount = leads.filter(l => l.status === 'in_progress').length;
  const completedLeadsCount = leads.filter(l => l.status === 'completed').length;
  const conversionRate = leads.length > 0 ? Math.round((completedLeadsCount / leads.length) * 100) : 0;

  // Filter & Search Leads
  const filteredLeads = leads.filter(l => {
    const matchesStatus = leadsFilter === 'all' || l.status === leadsFilter;
    const searchLower = leadsSearch.toLowerCase();
    const matchesSearch = 
      l.name.toLowerCase().includes(searchLower) ||
      l.email.toLowerCase().includes(searchLower) ||
      l.phone.includes(searchLower) ||
      (l.country_interest && l.country_interest.toLowerCase().includes(searchLower)) ||
      (l.service_interest && l.service_interest.toLowerCase().includes(searchLower));
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between shrink-0">
        <div>
          {/* Admin Header */}
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-800">
            <span className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg border border-primary/30">
              A
            </span>
            <div>
              <p className="font-bold text-sm text-white">Administrator</p>
              <p className="text-xs text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live (cPanel DB)
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="space-y-1">
            {[
              { id: "overview", label: "Overview", icon: "dashboard" },
              { id: "leads", label: "Leads Manager", icon: "contacts", badge: newLeadsCount },
              { id: "services", label: "Services", icon: "school" },
              { id: "countries", label: "Destinations", icon: "public" },
              { id: "testimonials", label: "Testimonials", icon: "reviews" },
              { id: "settings", label: "Site Settings", icon: "settings" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </div>
                {tab.badge > 0 && (
                  <span className="bg-emerald-500 text-slate-950 text-xs px-2 py-0.5 rounded-full font-bold">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-950/20 rounded-xl text-sm font-semibold transition-colors mt-8 cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">logout</span>
          Sign Out
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-7xl mx-auto w-full">
        {/* TAB: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <h2 className="text-3xl font-black text-white">Dashboard Overview</h2>
              <p className="text-slate-400 text-sm mt-1">Summary of statistics from your cPanel database</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Total Leads", val: leads.length, color: "text-blue-400", bg: "bg-blue-950/40 border-blue-500/20", icon: "contacts" },
                { label: "New Leads", val: newLeadsCount, color: "text-emerald-400", bg: "bg-emerald-950/40 border-emerald-500/20", icon: "mark_chat_unread" },
                { label: "In Progress", val: inProgressLeadsCount, color: "text-amber-400", bg: "bg-amber-950/40 border-amber-500/20", icon: "hourglass_top" },
                { label: "Conversion Rate", val: `${conversionRate}%`, color: "text-purple-400", bg: "bg-purple-950/40 border-purple-500/20", icon: "check_circle" },
              ].map((card, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${card.bg} flex flex-col justify-between h-32`}>
                  <div className="flex justify-between items-start">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{card.label}</span>
                    <span className={`material-symbols-outlined ${card.color}`}>{card.icon}</span>
                  </div>
                  <span className={`text-3xl font-black ${card.color}`}>{card.val}</span>
                </div>
              ))}
            </div>

            {/* Leads status progress */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-6">
              <h3 className="font-bold text-lg text-white">Leads Pipeline</h3>
              <div className="space-y-4">
                {[
                  { label: "New", count: newLeadsCount, color: "bg-emerald-400", barColor: "#34d399" },
                  { label: "Contacted", count: contactedLeadsCount, color: "bg-blue-400", barColor: "#60a5fa" },
                  { label: "In Progress", count: inProgressLeadsCount, color: "bg-amber-400", barColor: "#fbbf24" },
                  { label: "Completed", count: completedLeadsCount, color: "bg-purple-400", barColor: "#c084fc" },
                ].map((item, i) => {
                  const pct = leads.length > 0 ? (item.count / leads.length) * 100 : 0;
                  return (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center gap-2 font-medium">
                          <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                          {item.label}
                        </span>
                        <span className="font-bold text-slate-300">{item.count} ({Math.round(pct)}%)</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: item.barColor }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB: LEADS MANAGER */}
        {activeTab === "leads" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black text-white">Leads Manager</h2>
                <p className="text-slate-400 text-sm mt-1">Manage consultation requests and applicant data</p>
              </div>

              {/* Status Filters */}
              <div className="flex bg-slate-900 border border-slate-800 p-1.5 rounded-xl self-start">
                {['all', 'new', 'contacted', 'in_progress', 'completed'].map(status => (
                  <button
                    key={status}
                    onClick={() => setLeadsFilter(status)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                      leadsFilter === status
                        ? "bg-primary text-white shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {status.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Search bar */}
            <div className="flex gap-4">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3 top-3.5 text-slate-500 text-lg">search</span>
                <input
                  type="text"
                  value={leadsSearch}
                  onChange={(e) => setLeadsSearch(e.target.value)}
                  placeholder="Search leads by name, email, phone, country, service..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider bg-slate-900/50">
                      <th className="p-4 pl-6">Client</th>
                      <th className="p-4">Contact</th>
                      <th className="p-4">Preferences</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 pr-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-sm text-slate-300">
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="p-8 text-center text-slate-500">
                          No leads matching filters found.
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map(lead => (
                        <tr key={lead.id} className="hover:bg-slate-800/20 transition-colors">
                          <td className="p-4 pl-6">
                            <p className="font-bold text-white text-base">{lead.name}</p>
                            <span className="text-xs text-slate-500">ID: {lead.id}</span>
                          </td>
                          <td className="p-4">
                            <p className="text-slate-300">{lead.phone}</p>
                            <p className="text-slate-500 text-xs">{lead.email}</p>
                          </td>
                          <td className="p-4">
                            <p className="text-slate-300">Service: {lead.service_interest || 'N/A'}</p>
                            <p className="text-slate-500 text-xs">Country: {lead.country_interest || 'N/A'}</p>
                          </td>
                          <td className="p-4">
                            <p className="text-slate-300">{lead.preferred_date || 'N/A'}</p>
                            <p className="text-slate-500 text-xs">{lead.preferred_time || 'N/A'}</p>
                          </td>
                          <td className="p-4">
                            <select
                              value={lead.status}
                              disabled={actionLoading}
                              onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value)}
                              className={`px-3 py-1.5 rounded-full text-xs font-extrabold border-0 outline-none text-slate-950 capitalize cursor-pointer transition-colors ${
                                lead.status === 'new' ? 'bg-emerald-400 hover:bg-emerald-500' :
                                lead.status === 'contacted' ? 'bg-blue-400 hover:bg-blue-500' :
                                lead.status === 'in_progress' ? 'bg-amber-400 hover:bg-amber-500' :
                                'bg-purple-400 hover:bg-purple-500'
                              }`}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="in_progress">In Progress</option>
                              <option value="completed">Completed</option>
                            </select>
                          </td>
                          <td className="p-4 pr-6 text-right space-x-2">
                            <button
                              onClick={() => {
                                setSelectedItem(lead);
                                setActiveModal("lead_details");
                              }}
                              className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-all cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-lg">visibility</span>
                            </button>
                            <button
                              onClick={() => handleDeleteLead(lead.id)}
                              disabled={actionLoading}
                              className="text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-950/20 transition-all cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-lg">delete</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB: SERVICES */}
        {activeTab === "services" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black text-white">Services Manager</h2>
                <p className="text-slate-400 text-sm mt-1">Add, update, or remove services from the homepage</p>
              </div>
              <button
                onClick={() => {
                  setSelectedItem({ title: "", icon: "school", description: "", display_order: services.length + 1 });
                  setActiveModal("service");
                }}
                className="bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-primary/95 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined text-base">add</span>
                Add Service
              </button>
            </div>

            {/* Services Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <div key={service.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                      </div>
                      <span className="text-slate-500 font-bold text-xs">Order: {service.display_order}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{service.title}</h4>
                      <p className="text-slate-400 text-sm mt-2 line-clamp-3 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 border-t border-slate-800/60 pt-4">
                    <button
                      onClick={() => {
                        setSelectedItem(service);
                        setActiveModal("service");
                      }}
                      className="flex-1 bg-slate-800 text-white py-2 rounded-lg text-xs font-bold hover:bg-slate-750 transition-all cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem("service", service.id)}
                      className="px-3 bg-red-950/20 text-red-400 border border-red-500/10 py-2 rounded-lg text-xs font-bold hover:bg-red-950/40 hover:text-red-300 transition-all cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: COUNTRIES (DESTINATIONS) */}
        {activeTab === "countries" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black text-white">Study Destinations</h2>
                <p className="text-slate-400 text-sm mt-1">Manage countries, flag icons, visa costs, and courses</p>
              </div>
              <button
                onClick={() => {
                  setSelectedItem({ name: "", flag_url: "🗺️", image_url: "", route: "/destination/new", description: "", cost_info: "", visa_info: "", popular_courses: [], is_active: true, display_order: countries.length + 1 });
                  setActiveModal("country");
                }}
                className="bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-primary/95 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined text-base">add</span>
                Add Country
              </button>
            </div>

            {/* Countries Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {countries.map(country => (
                <div key={country.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col md:flex-row h-72">
                  <div className="w-full md:w-40 shrink-0 bg-slate-800 relative">
                    <img src={country.image_url} alt={country.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 text-3xl bg-slate-950/50 p-1 rounded backdrop-blur">{country.flag_url}</span>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-xl text-white flex items-center gap-2">
                          {country.name}
                          {!country.is_active && (
                            <span className="text-[10px] bg-red-950/50 border border-red-500/20 text-red-400 px-2 py-0.5 rounded-full uppercase">Inactive</span>
                          )}
                        </h4>
                        <span className="text-slate-500 text-xs">Order: {country.display_order}</span>
                      </div>
                      <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">{country.description}</p>
                      
                      <div className="mt-3 grid grid-cols-2 gap-2 text-slate-500 text-xs border-t border-slate-800/60 pt-3">
                        <div>
                          <p className="font-semibold text-slate-400">Cost:</p>
                          <p className="line-clamp-1">{country.cost_info || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-400">Visa:</p>
                          <p className="line-clamp-1">{country.visa_info || 'N/A'}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSelectedItem(country);
                          setActiveModal("country");
                        }}
                        className="flex-1 bg-slate-800 text-white py-2 rounded-lg text-xs font-bold hover:bg-slate-750 transition-all cursor-pointer"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteItem("country", country.id)}
                        className="px-3 bg-red-950/20 text-red-400 border border-red-500/10 py-2 rounded-lg text-xs font-bold hover:bg-red-950/40 hover:text-red-300 transition-all cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: TESTIMONIALS */}
        {activeTab === "testimonials" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-black text-white">Testimonials</h2>
                <p className="text-slate-400 text-sm mt-1">Review student quotes and success stories</p>
              </div>
              <button
                onClick={() => {
                  setSelectedItem({ student_name: "", photo_url: "", university: "", country: "", quote: "", is_featured: true });
                  setActiveModal("testimonial");
                }}
                className="bg-primary text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-primary/95 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined text-base">add</span>
                Add Review
              </button>
            </div>

            {/* Testimonials List */}
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img src={testimonial.photo_url} alt={testimonial.student_name} className="w-12 h-12 rounded-full object-cover border border-slate-750" />
                        <div>
                          <h4 className="font-bold text-base text-white">{testimonial.student_name}</h4>
                          <span className="text-xs text-slate-500">{testimonial.university}, {testimonial.country}</span>
                        </div>
                      </div>
                      {testimonial.is_featured && (
                        <span className="text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded-full font-bold uppercase">Featured</span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                  
                  <div className="flex gap-2 border-t border-slate-800/60 pt-4">
                    <button
                      onClick={() => {
                        setSelectedItem(testimonial);
                        setActiveModal("testimonial");
                      }}
                      className="flex-1 bg-slate-800 text-white py-2 rounded-lg text-xs font-bold hover:bg-slate-750 transition-all cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem("testimonial", testimonial.id)}
                      className="px-3 bg-red-950/20 text-red-400 border border-red-500/10 py-2 rounded-lg text-xs font-bold hover:bg-red-950/40 hover:text-red-300 transition-all cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: SITE SETTINGS */}
        {activeTab === "settings" && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <h2 className="text-3xl font-black text-white">Site Settings</h2>
              <p className="text-slate-400 text-sm mt-1">Configure global statistics cards featured on the homepage</p>
            </div>

            <form onSubmit={handleSaveSettings} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-2xl space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Partner Universities</label>
                  <input
                    type="text"
                    required
                    value={settings.partner_universities || ""}
                    onChange={(e) => setSettings(prev => ({ ...prev, partner_universities: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="e.g. 500+"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Visa Success Rate</label>
                  <input
                    type="text"
                    required
                    value={settings.visa_success_rate || ""}
                    onChange={(e) => setSettings(prev => ({ ...prev, visa_success_rate: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="e.g. 98%"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Students Placed</label>
                  <input
                    type="text"
                    required
                    value={settings.students_placed || ""}
                    onChange={(e) => setSettings(prev => ({ ...prev, students_placed: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="e.g. 15K+"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Years of Experience</label>
                  <input
                    type="text"
                    required
                    value={settings.years_experience || ""}
                    onChange={(e) => setSettings(prev => ({ ...prev, years_experience: e.target.value }))}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="e.g. 12+"
                  />
                </div>
              </div>

              <div className="border-t border-slate-850 pt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="bg-primary text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-primary/20"
                >
                  <span className="material-symbols-outlined text-base">save</span>
                  Save Settings Statistics
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* --- MODAL DIALOGS --- */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" onClick={() => setActiveModal(null)} />
          
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl max-h-[85vh] overflow-y-auto z-10 shadow-2xl p-6 md:p-8 animate-popIn">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer">
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* MODAL: LEAD DETAILS */}
            {activeModal === "lead_details" && selectedItem && (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] bg-primary/20 text-primary border border-primary/30 px-2.5 py-0.5 rounded-full font-bold uppercase">Lead File</span>
                  <h3 className="text-2xl font-black text-white mt-2">{selectedItem.name}</h3>
                  <p className="text-slate-400 text-xs">Received: {new Date(selectedItem.created_at).toLocaleString()}</p>
                </div>

                <div className="grid grid-cols-2 gap-6 text-sm border-t border-b border-slate-800 py-6">
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">Email</p>
                    <p className="text-white mt-1 select-all">{selectedItem.email}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">Phone</p>
                    <p className="text-white mt-1 select-all">{selectedItem.phone}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">Country Interest</p>
                    <p className="text-white mt-1">{selectedItem.country_interest || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">Service Interest</p>
                    <p className="text-white mt-1">{selectedItem.service_interest || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">Contact Preference</p>
                    <p className="text-white mt-1">{selectedItem.preferred_contact || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">Session Slot</p>
                    <p className="text-white mt-1">
                      {selectedItem.preferred_date ? `${selectedItem.preferred_date} @ ` : ''}
                      {selectedItem.preferred_time || 'Any slot'}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-slate-500 font-bold uppercase tracking-wider text-xs">Message</p>
                  <p className="text-slate-300 mt-2 bg-slate-950 p-4 rounded-xl text-sm leading-relaxed border border-slate-850 max-h-40 overflow-y-auto">
                    {selectedItem.message || 'No custom message.'}
                  </p>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Pipeline Status:</span>
                    <select
                      value={selectedItem.status}
                      disabled={actionLoading}
                      onChange={(e) => handleUpdateLeadStatus(selectedItem.id, e.target.value)}
                      className="px-3 py-1.5 bg-slate-950 text-white rounded-lg text-xs font-bold border border-slate-800 outline-none capitalize cursor-pointer"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>

                  <button
                    onClick={() => handleDeleteLead(selectedItem.id)}
                    className="bg-red-950/20 text-red-400 border border-red-500/10 px-4 py-2 rounded-xl text-xs font-bold hover:bg-red-950/40 hover:text-red-300 transition-all cursor-pointer"
                  >
                    Delete Lead
                  </button>
                </div>
              </div>
            )}

            {/* MODAL: SERVICE FORM */}
            {activeModal === "service" && selectedItem && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveItem('service', selectedItem);
                }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-black text-white">{selectedItem.id ? "Edit Service" : "Add Service"}</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Service Title</label>
                    <input
                      type="text"
                      required
                      value={selectedItem.title}
                      onChange={(e) => setSelectedItem(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="e.g. Study Abroad Guidance"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Icon ID (Material Icon)</label>
                      <input
                        type="text"
                        required
                        value={selectedItem.icon}
                        onChange={(e) => setSelectedItem(prev => ({ ...prev, icon: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g. school, public, work"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Display Order</label>
                      <input
                        type="number"
                        required
                        value={selectedItem.display_order}
                        onChange={(e) => setSelectedItem(prev => ({ ...prev, display_order: parseInt(e.target.value) }))}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Description</label>
                    <textarea
                      required
                      rows="4"
                      value={selectedItem.description}
                      onChange={(e) => setSelectedItem(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      placeholder="Enter a brief description of this service..."
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 border-t border-slate-850 pt-6">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-750 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="px-5 py-2.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}

            {/* MODAL: COUNTRY FORM */}
            {activeModal === "country" && selectedItem && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveItem('country', selectedItem);
                }}
                className="space-y-5"
              >
                <h3 className="text-2xl font-black text-white">{selectedItem.id ? "Edit Destination" : "Add Destination"}</h3>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Country Name</label>
                      <input
                        type="text"
                        required
                        value={selectedItem.name}
                        onChange={(e) => setSelectedItem(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g. Australia"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Flag Emoji</label>
                      <input
                        type="text"
                        required
                        value={selectedItem.flag_url}
                        onChange={(e) => setSelectedItem(prev => ({ ...prev, flag_url: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-center text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g. 🇦🇺"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Slug Route</label>
                      <input
                        type="text"
                        required
                        value={selectedItem.route}
                        onChange={(e) => setSelectedItem(prev => ({ ...prev, route: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g. /destination/australia"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Display Order</label>
                      <input
                        type="number"
                        required
                        value={selectedItem.display_order}
                        onChange={(e) => setSelectedItem(prev => ({ ...prev, display_order: parseInt(e.target.value) }))}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Banner Image URL</label>
                    <input
                      type="url"
                      required
                      value={selectedItem.image_url}
                      onChange={(e) => setSelectedItem(prev => ({ ...prev, image_url: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Cost Info</label>
                      <input
                        type="text"
                        value={selectedItem.cost_info}
                        onChange={(e) => setSelectedItem(prev => ({ ...prev, cost_info: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g. 20k - 40k AUD/yr"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Visa Info</label>
                      <input
                        type="text"
                        value={selectedItem.visa_info}
                        onChange={(e) => setSelectedItem(prev => ({ ...prev, visa_info: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g. Subclass 500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Popular Courses (Comma-separated)</label>
                    <input
                      type="text"
                      value={Array.isArray(selectedItem.popular_courses) ? selectedItem.popular_courses.join(", ") : selectedItem.popular_courses}
                      onChange={(e) => setSelectedItem(prev => ({ ...prev, popular_courses: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="e.g. IT, Business, Arts"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Short Description</label>
                    <textarea
                      required
                      rows="3"
                      value={selectedItem.description}
                      onChange={(e) => setSelectedItem(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      placeholder="Provide brief details on study environment..."
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="is_active"
                      checked={selectedItem.is_active}
                      onChange={(e) => setSelectedItem(prev => ({ ...prev, is_active: e.target.checked }))}
                      className="w-4 h-4 rounded border-slate-800 bg-slate-950 accent-primary"
                    />
                    <label htmlFor="is_active" className="text-sm font-semibold text-slate-300 cursor-pointer">Active Study Destination</label>
                  </div>
                </div>

                <div className="flex justify-end gap-2 border-t border-slate-850 pt-6">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-750 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="px-5 py-2.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}

            {/* MODAL: TESTIMONIAL FORM */}
            {activeModal === "testimonial" && selectedItem && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveItem('testimonial', selectedItem);
                }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-black text-white">{selectedItem.id ? "Edit Testimonial" : "Add Testimonial"}</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Student Name</label>
                    <input
                      type="text"
                      required
                      value={selectedItem.student_name}
                      onChange={(e) => setSelectedItem(prev => ({ ...prev, student_name: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="e.g. Rahim Ahmed"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">University Name</label>
                      <input
                        type="text"
                        required
                        value={selectedItem.university}
                        onChange={(e) => setSelectedItem(prev => ({ ...prev, university: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g. University of Melbourne"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Destination Country</label>
                      <input
                        type="text"
                        required
                        value={selectedItem.country}
                        onChange={(e) => setSelectedItem(prev => ({ ...prev, country: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g. Australia"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Photo URL</label>
                    <input
                      type="url"
                      required
                      value={selectedItem.photo_url}
                      onChange={(e) => setSelectedItem(prev => ({ ...prev, photo_url: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Quote (Review Text)</label>
                    <textarea
                      required
                      rows="4"
                      value={selectedItem.quote}
                      onChange={(e) => setSelectedItem(prev => ({ ...prev, quote: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      placeholder="Paste student review text here..."
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="is_featured"
                      checked={selectedItem.is_featured}
                      onChange={(e) => setSelectedItem(prev => ({ ...prev, is_featured: e.target.checked }))}
                      className="w-4 h-4 rounded border-slate-800 bg-slate-950 accent-primary"
                    />
                    <label htmlFor="is_featured" className="text-sm font-semibold text-slate-300 cursor-pointer">Featured (Show on Homepage)</label>
                  </div>
                </div>

                <div className="flex justify-end gap-2 border-t border-slate-850 pt-6">
                  <button
                    type="button"
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-750 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="px-5 py-2.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary/90 transition-all cursor-pointer"
                  >
                    Save Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
