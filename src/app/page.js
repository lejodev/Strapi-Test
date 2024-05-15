import { Button, Card } from "flowbite-react";
import { getCoverImage, getGames } from "./services/videogames";
import Link from "next/link";

export default async function Home() {
  const games = await getGames();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      {games.map(({ attributes, id }) => (
        <Link
          key={id}
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={getCoverImage({ attributes })}
            alt="adfd"
          ></img>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {attributes.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </Link>
        // <Card
        //   classNameName="max-w-sm"
        //   imgAlt="Meaningful alt text for an image that is not purely decorative"
        //   imgSrc={getCoverImage({ attributes })}
        // >
        //   <h5 classNameName="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        //     {attributes.title}
        //   </h5>
        //   <p classNameName="font-normal text-gray-700 dark:text-gray-400">
        //     Here are the biggest enterprise technology acquisitions of 2021 so
        //     far, in reverse chronological order.
        //   </p>
        // </Card>
      ))}
    </main>
  );
}
