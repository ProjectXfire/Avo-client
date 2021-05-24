import React from 'react'
// Components
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
// Styles
import styles from '@stylesComponents/Layout.module.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
      <style jsx>{`
        .menu {
          background: white;
        }
      `}</style>
    </div>
  )
}

export default Layout
