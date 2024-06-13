import styles from '../header.module.css'

interface props {
    titulo: String;
}

export default function Header({ titulo }: props) {
    return (
        <header className={styles.header}>
            <h1>{titulo}</h1>
        </header>
    )
}