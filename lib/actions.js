'use server';
import { saveMeal } from '@/lib/meals'
import { redirect } from 'next/navigation'

function invalidText(text) {
  return text || text.trim();
}

export async function shareMeal(pre, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instruction: formData.get('instruction'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  if (invalidText(meal.title) ||
    invalidText(meal.summary) ||
    invalidText(meal.instruction) ||
    !meal.image ||
    meal.image.size == 0 ||
    invalidText(meal.creator) ||
    invalidText(meal.creator_email) ||
    !meal.creator_email.includes('@')
  ) {
    return {
      message: 'invalid input'
    };
  }

  await saveMeal(meal);
  redirect(('/meals'))
}
