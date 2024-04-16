import Link from "next/link";
import classes from "./page.module.css"
import MealGrid from "@/components/meals/meal-grid";
import burgerImg from "@/assets/burger.jpg";

export default function MealsPage() {
    const meals = [
        {
            title: 'mon 1',
            slug: 'mon-1',
            image: burgerImg,
            summary: 'summary',
            creator: 'creator',
        }
    ];
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created {''}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share your favorite recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealGrid meals={meals}/>
            </main>
        </>
    )
}
