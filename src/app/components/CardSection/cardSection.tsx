import styles from '../cardSection.module.css'

interface props {
    titulo: String;
    children: React.ReactNode;
}

export default function CardSection({ titulo, children}: props){
    return (
        <section className={styles.cardSection}>
            <h2>{titulo}</h2>
            {children}
        </section>    
)
}