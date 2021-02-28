import React from 'react'
import Icon from './icons/Icon'

import styles from '../assets/styles/components/BottomPlayer.module.scss'

const BottomPlayer = () => {
  return (
    <div className={styles.BottomPlayer}>
      <div className={styles.BottomPlayer__song}>
        <p>
          <span>Enough Of You</span><Icon icon="heart" size={16} color="white" />
        </p>
        <span>Tujamo</span>
      </div>
      <div className={styles.BottomPlayer__player}>
        <div>
          <span>
            <Icon icon="skip-left" size={14} />
          </span>
          <span>
            <Icon icon="Play" size={14} color="white" />
          </span>
          <span>
            <Icon icon="skip-right" size={14} />
          </span>
        </div>
        <div>
          <span>01:12</span>
          <div><div></div></div>
          <span>02:27</span>
        </div>
      </div>
    </div>
  )
}

export default BottomPlayer