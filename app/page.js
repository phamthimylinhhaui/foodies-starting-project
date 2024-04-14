import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
        <p>
            <Link href="/meals">meal page</Link>
        </p>
        <p>
            <Link href="/meals/share">share meal page</Link>
        </p>
        <p>
            <Link href="/community">community page</Link>
        </p>
    </main>
  );
}
