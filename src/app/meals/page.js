import MealsGrid from '@/components/meals/meals-grid'; // Adjust path if needed
import { getMeals } from '@/lib/meals'; // Import your meals fetching function

export default async function MealsPage() {
  const meals = await getMeals(); // Fetch meals directly in the component

  return (
    <>
      <header>
        <h1>Delicious meals, created <span>by you</span></h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun.</p>
      </header>
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
