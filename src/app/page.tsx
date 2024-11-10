import Link from "next/link";
import Image from "next/image";
import { galleryImages, heroImage } from "./data/images";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-black">
        <Image
          src={heroImage.url}
          alt={heroImage.alt}
          fill
          className="object-cover opacity-40"
          priority
          unoptimized
        />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-6xl font-bold mb-6 text-center text-white">
            Discover New Talent
          </h1>
          <p className="text-xl text-center text-white mb-12">
            Your Gateway to Professional Modeling Opportunities
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="/login"
              className="inline-block bg-pink-500 text-white px-8 py-4 rounded-lg hover:bg-pink-600 transition-colors text-lg font-semibold shadow-lg"
            >
              Join as Model
            </Link>
            <Link
              href="/browse"
              className="inline-block bg-purple-500 text-white px-8 py-4 rounded-lg hover:bg-purple-600 transition-colors text-lg font-semibold shadow-lg"
            >
              Browse Models
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Featured Models
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-[3/4]"
              >
                <Image
                  src={`${image.url}?w=800&fit=crop`}
                  alt={`Model ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold">{image.name}</h3>
                    <p className="text-sm">{image.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
