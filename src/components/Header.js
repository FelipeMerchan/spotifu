import React from 'react'
import Link from 'next/link'

import Input from './Input'
import Icon from './icons/Icon'
import styles from '../assets/styles/components/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__navContainer}>
        <Link href="/">
          <a className={styles.Header__link}>
            <Icon icon="Chevron-left" size={30} color="white" />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.Header__link}>
            <Icon icon="Chevron-right" size={30} color="white" />
          </a>
        </Link>
      </div>
      <Input />
    </header>
  )
}

export default Header