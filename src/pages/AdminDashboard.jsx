import React from 'react';
import { motion } from 'framer-motion';

const AdminDashboard = () => {
  return (
    <section className="admin-dashboard" style={{ padding: '100px 10%', minHeight: '80vh' }}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Admin Dashboard
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h3 style={{ color: 'var(--primary-color)' }}>Total Projects</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>24</p>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 style={{ color: 'var(--secondary-color)' }}>Active Clients</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>12</p>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 style={{ color: 'var(--accent-color)' }}>Pending Inquiries</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>5</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AdminDashboard;
