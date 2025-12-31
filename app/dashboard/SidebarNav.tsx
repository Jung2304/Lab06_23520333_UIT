'use client';

import Link from 'next/link';

export default function SidebarNav() {
  const navLinkStyle = {
    display: 'block',
    padding: '12px 16px',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '6px',
    transition: 'background-color 0.2s'
  };

  return (
    <nav>
      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        <li style={{ marginBottom: '10px' }}>
          <Link 
            href="/dashboard" 
            style={navLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Home
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link 
            href="/dashboard/analytics" 
            style={navLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Analytics
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link 
            href="/dashboard/users" 
            style={navLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Users
          </Link>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <Link 
            href="/" 
            style={navLinkStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Back to Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
