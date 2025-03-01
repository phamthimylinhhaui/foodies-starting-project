import fs from 'fs';
import sql from 'better-sqlite3';
import slugify from 'slugify'
import xss from 'xss'

const db = sql('meals.db'); //connect with db

export async function getMeals() {

    await new Promise((resolve) => setTimeout(resolve, 500))
    // throw new Error('Loading meals fail');
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * from meals where slug = ?').get(slug);
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions)

    console.log(meal.image.name)
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), err => {
        if (err) {
            throw new Error('saving image failed');
        }
    })

    meal.image = `/images/${fileName}`;
    // meal.image = fileName;
    db.prepare(`
        INSERT INTO meals 
        (slug, title, image, summary, instructions, creator, creator_email)
        VALUES (
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
    `).run(meal)
}
