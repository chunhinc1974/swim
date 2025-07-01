'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/schedule", label: "Schedule" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex gap-8 text-sm font-medium">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              color: isActive ? '#111827' : '#64748b',
              fontWeight: isActive ? '700' : '500',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              position: 'relative' as const,
            }}
            onMouseOver={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = '#111827';
              }
            }}
            onMouseOut={(e) => {
              if (!isActive) {
                e.currentTarget.style.color = '#64748b';
              }
            }}
          >
            {item.label}
            {isActive && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0',
                  right: '0',
                  height: '2px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '1px',
                }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation; 