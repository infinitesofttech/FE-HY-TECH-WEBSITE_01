import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('hyTechUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (id, password) => {
    // Basic mock login simulation
    // Using a fake timeout to simulate network request
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!id || !password) {
          reject(new Error("ID and Password are required"));
          return;
        }

        // Mock role determination based on input (e.g. 'admin' -> Admin, else User)
        let role = 'User';
        if (id.toLowerCase() === 'admin') role = 'Admin';
        if (id.toLowerCase().startsWith('emp')) role = 'Employee';

        const userData = { id, role, name: id };
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem('hyTechUser', JSON.stringify(userData));
        resolve(userData);
      }, 500);
    });
  };

  const signup = async (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!data.name || !data.mobile || !data.password) {
          reject(new Error("Missing required fields"));
          return;
        }
        
        // Auto-login the new user
        const userData = { id: data.mobile, role: 'User', name: data.name };
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem('hyTechUser', JSON.stringify(userData));
        resolve(userData);
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('hyTechUser');
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
