import Link from "next/link";

export default function Meals() {
    return (
        <main>
            <h1>LIST MEALS</h1>
            <ul>
                <li>
                    <Link href="">meal 1</Link>
                </li>
                <li>
                    <Link href="">meal 2</Link>
                </li>
            </ul>
        </main>
    )
}
