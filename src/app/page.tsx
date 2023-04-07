import styles from "@styles/pages/page.module.css";
import Link from "next/link";
import Example1 from "examples/Example1";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.center}>
				<h1>React File Input</h1>
				<p></p>
			</div>
			<div className={styles.grid}>
				<Link href='/demo' className={styles.card}>
					<h2>Demo</h2>
					<p>Find in-depth information about Next.js features and API.</p>
				</Link>

				<Link href='/docs' className={styles.card}>
					<h2>Docs</h2>
					<p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
				</Link>
			</div>
		</main>
	);
}
