import React from "react";
import Image from "next/image";

const FoodStoryLayoutPages: React.FC = () => {
  // Replace these with your actual image paths
  const images = [
    { src: "/projects/foodstory/login.png", alt: "Login Screen" },
    { src: "/projects/foodstory/home.png", alt: "My Recipes Screen" },
    { src: "/projects/foodstory/newRecipe.png", alt: "Add Recipe Screen" },
    { src: "/projects/foodstory/recipe.png", alt: "Recipe Detail Screen" },
    { src: "/projects/foodstory/modal.png", alt: "Menu Screen" },
    { src: "/projects/foodstory/myRecipes.png", alt: "My Recipes List Screen" },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1 - vertical stack of images 1 and 4 */}
        <div className="flex flex-col justify-between h-full">
          <div className="mb-6 md:mb-0">
            <div className="w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={300}
                height={650}
                layout="responsive"
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-auto">
            <div className="w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                width={300}
                height={650}
                layout="responsive"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Column 2 - vertical stack of images 2 and 5 */}
        <div className="flex flex-col justify-between h-full">
          <div className="mb-6 md:mb-0">
            <div className="w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                width={300}
                height={650}
                layout="responsive"
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-auto">
            <div className="w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={images[4].src}
                alt={images[4].alt}
                width={300}
                height={650}
                layout="responsive"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Column 3 - vertical stack of images 3 and 6 */}
        <div className="flex flex-col gap-10 h-full">
          <div className="mb-6 md:mb-0">
            <div className="w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                width={300}
                height={650}
                layout="responsive"
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-auto">
            <div className="w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={images[5].src}
                alt={images[5].alt}
                width={300}
                height={650}
                layout="responsive"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodStoryLayoutPages;
