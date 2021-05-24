import React from 'react'
import Link from 'next/link';
// Styles
import styles from '@stylesComponents/Navbar.module.scss';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <menu className={styles.menu}>
        <Link href="/"><a><FontAwesomeIcon icon={faHome}/></a></Link>
        <Link href="/cart"><a><FontAwesomeIcon icon={faShoppingCart}/></a></Link>
      </menu>
    </nav>
  )
}

export default Navbar
