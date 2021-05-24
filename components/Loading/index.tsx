import React from 'react'
// styles
import styles from '@stylesComponents/Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.Loading}>
      <div className={styles.lds__spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

  )
}

export default Loading
