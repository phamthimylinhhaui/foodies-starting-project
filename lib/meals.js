import sql from 'better-sqlite3';

const db = sql('meals.db'); //connect with db

export async function getMeals() {

    await new Promise((resolve) => setTimeout(resolve, 5000))
    // throw new Error('Loading meals fail');
    return db.prepare('SELECT * FROM meals').all();
}
