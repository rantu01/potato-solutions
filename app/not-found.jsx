import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-6 bg-[#c9cbcf]">
      <div className="flex flex-col items-center text-center max-w-2xl w-full">
        
        {/* Image Container */}
        <div className="w-full max-w-lg">
          <Image
            src="/img/404-bg.png"
            alt="404 - Potato Not Found"
            width={720}
            height={480}
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 480px"
            className="mx-auto block max-w-full h-auto object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="mt-4">
          <h1 className="text-4xl font-bold text-gray-800">Oops! Page Mashing...</h1>
          <p className="mt-3 text-lg text-gray-600 max-w-md mx-auto">
            We couldn't find the page you're looking for. It might have been peeled or mashed into oblivion.
          </p>

          {/* Button */}
          <Link 
            href="/" 
            className="inline-block mt-8 bg-primary hover:bg-black text-white font-semibold px-8 py-3 rounded-full transition-all shadow-lg"
          >
            Go back to the Home Patch
          </Link>
        </div>
        
      </div>
    </main>
  );
}