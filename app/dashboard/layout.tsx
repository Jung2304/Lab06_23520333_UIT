import SidebarNav from './SidebarNav';

export default function DashboardLayout({ 
  children 
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Static Sidebar Navigation */}
      <aside style={{
        width: '250px',
        backgroundColor: '#1a1a2e',
        color: '#fff',
        padding: '20px',
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: '30px',
          color: '#0070f3'
        }}>
          Dashboard
        </h2>
        
        <SidebarNav />


      </aside>

      {/* Main Content Area */}
      <main style={{
        flex: 1,
        padding: '40px',
        backgroundColor: '#f5f5f5'
      }}>
        {children}
      </main>
    </div>
  );
}
