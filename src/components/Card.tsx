import styles from './card.module.css'
import Image from 'next/image';

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/card.jpg'}
                alt='Venue Picture'
                fill={true}
                style={{ objectFit: "cover" }}
                />
            </div>
            <div className={styles.cardtext}>
                <div style={{fontSize:"14px", fontWeight:"bold", color:"seagreen"}}>Impact Arena Muangthongthani</div>
                <div style={{fontSize:"10px",fontWeight:"bold", marginTop:"2px"}}>Host Unforgettable Events at Impact Arena, Muang Thong Thani — Thailand’s Premier Venue for Maximum Revenue and Unmatched Experiences!</div>
            </div>
        </div>
    );
}