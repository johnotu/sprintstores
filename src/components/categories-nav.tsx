import Link from "next/link";

export default function CategoriesNav({
  categories,
  currentCategory,
}: {
  categories: string[];
  currentCategory: string;
}) {
  return (
    <div className="bg-white rounded-3xl px-5 py-6 shadow-lg w-2/3 md:w-1/2 lg:w-auto">
      <h3 className="font-semibold mb-3 text-lg text-cusblack">Categories</h3>
      <ul className="leading-10 text-xs text-gray-400">
        <li>
          <Link
            className={`${
              currentCategory == "" ? `font-semibold text-cusblack` : ``
            } cursor-pointer capitalize`}
            href="/store"
          >
            All products
          </Link>
        </li>
        {categories &&
          categories.map((category, index) => (
            <li key={index}>
              <Link
                className={`${
                  currentCategory == category
                    ? `font-semibold text-cusblack`
                    : ``
                } cursor-pointer capitalize`}
                href={`/store?category=${category}`}
              >
                {category}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
