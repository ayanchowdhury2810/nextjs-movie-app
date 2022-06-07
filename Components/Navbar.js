import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <div className="container p-4 mx-auto font-bold tracking-widest text-neutral-100 max-w-7xl font-neue">
        <Link href="/">
          <a className="text-base md:text-2xl">
            Watch <span className="text-red-600">Me</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
