import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-60">
      <h1 className="font-bold text-blue-600 text-9pxl">404</h1>
      <h6 className="text-5xl font-bold text-gray-600">
        <span className="text-red-500">Oops!</span> Page Not Found
      </h6>
      <p className="text-gray-500 mt-3">
        {"The page you're looking for doesn't exist."}
      </p>
      <Link href="/">
        <a classNamr="bg-blue-100 text-blue-800 mt-5 font-semibold px-6 py-2 text-sm">
          Go home
        </a>
      </Link>
    </div>
  );
}

export default NotFound;
