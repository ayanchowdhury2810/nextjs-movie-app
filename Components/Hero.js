import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <div className="pb-10 text-center bg-white">
      <div className="mx-auto w-60">
        <Image src={'/pic1.png'} width={200} height={200} layout="responsive" />
      </div>
      <h1 className="text-2xl font-bold text-gray-700 uppercase">
        Welcome to Movie-Website
      </h1>
      <p className="text-gray-500">
        Produce FILM featurer, TELEVISION and GAME
      </p>

      <Link href="/contact">
        <button className="px-6 py-3 mt-4 text-white bg-gray-700 rounded-text-sm">
          CONTACT US
        </button>
      </Link>
    </div>
  );
}

export default Hero;

// https://undraw.co/search
