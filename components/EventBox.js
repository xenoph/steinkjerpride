import styles from "../styles/EventBox.module.css";

export default function EventBox({day, time, event, link}) {
	return (
		<section className={styles.container}>
			<div className={styles.innerWrapper}>
				<div className={styles.sideWrapper}>
					<div>{day}</div>
					<div>{time}</div>
				</div>
				<div className={styles.sideWrapper}>
					<div>{event}</div>
				</div>
			</div>
			<a href={link} className={styles.fbButton}>Gå til Facebook event</a>
		</section>
	);
}
