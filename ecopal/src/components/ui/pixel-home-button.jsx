import Link from "next/link";

const PixelHomeButton = () => {
  return (
    <Link href="/" className="group relative inline-block">
      {/* Outer border effect */}
      <span className="absolute inset-0 border-4 border-black bg-white translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />

      {/* Inner button */}
      <span className="relative block border-4 border-black bg-main px-6 py-3 text-lg font-bold text-black shadow-[4px_4px_0px_0px_black] transition-all group-hover:shadow-[2px_2px_0px_0px_black]">
        HOME
      </span>
    </Link>
  );
};

export default PixelHomeButton;