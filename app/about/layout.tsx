import React from 'react'
import styles  from './styles.module.css'
import Head from './head'

export default function  AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
  <>
  <Head/>
<nav>
    About Navbar
    </nav> 
<main className={styles.main}>
    {children}
</main>
     </>
  )
}
