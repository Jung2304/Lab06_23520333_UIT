import SettingsToggle from './SettingsToggle';

// Mock API function
async function getUserProfile() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return {
    name: 'Nguyen Minh Dung',
    email: '23520333@gm.uit.edu.vn',
    role: 'Administrator',
    joinDate: '2026-01-01',
    lastLogin: new Date().toLocaleString(),
    stats: {
      totalProjects: 12,
      activeTasks: 8,
      completedTasks: 145
    }
  };
}

export default async function DashboardPage() {
  // This is a Server Component - data fetching happens on the server
  const userProfile = await getUserProfile();

  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h1 style={{
          fontSize: '2rem',
          color: '#333',
          margin: 0
        }}>
          Welcome back, {userProfile.name}
        </h1>
        
        {/* Client Component for dark/light mode toggle */}
        <SettingsToggle />
      </div>

      <div style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '30px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: '20px',
          color: '#0070f3'
        }}>
          User Profile
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <div>
            <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '0.9rem' }}>Email</p>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>{userProfile.email}</p>
          </div>
          <div>
            <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '0.9rem' }}>Role</p>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>{userProfile.role}</p>
          </div>
          <div>
            <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '0.9rem' }}>Join Date</p>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>{userProfile.joinDate}</p>
          </div>
          <div>
            <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '0.9rem' }}>Last Login</p>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '500' }}>{userProfile.lastLogin}</p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px'
      }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '0.9rem' }}>Total Projects</p>
          <p style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold', color: '#0070f3' }}>
            {userProfile.stats.totalProjects}
          </p>
        </div>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '0.9rem' }}>Active Tasks</p>
          <p style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold', color: '#ff9800' }}>
            {userProfile.stats.activeTasks}
          </p>
        </div>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '0.9rem' }}>Completed</p>
          <p style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold', color: '#4caf50' }}>
            {userProfile.stats.completedTasks}
          </p>
        </div>
      </div>
    </div>
  );
}
