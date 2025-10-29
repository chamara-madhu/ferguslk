import React, { useState, useEffect } from "react";
import {
  MapPin,
  Camera,
  Mountain,
  Palmtree,
  Building2,
  Trees,
  ChevronRight,
  Menu,
  X,
  Play,
  Pause,
  Waves,
  Anchor,
  Ship,
} from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Ella",
    category: "Hill Country",
    description:
      "Misty mountains, tea plantations, and the iconic Nine Arch Bridge",
    image:
      "https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg",
    video: "https://www.youtube.com/embed/ua8JlaO3lv4?autoplay=1&loop=1&playlist=ua8JlaO3lv4&controls=0&mute=1",
    galleryImages: [
      "https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg",
      "https://images.unsplash.com/photo-1584715068661-c90ca0a5b0d4?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop&q=80",
    ],
    highlights: [
      "Nine Arch Bridge",
      "Little Adam's Peak",
      "Ella Rock",
      "Tea Estates",
    ],
  },
  {
    id: 2,
    name: "Sigiriya",
    category: "Ancient City",
    description:
      "The magnificent Lion Rock fortress, a UNESCO World Heritage Site",
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-ancient-temple-in-the-jungle-4987/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1598104707557-d5c0c2bfeeb8?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&h=600&fit=crop&q=80",
    ],
    highlights: [
      "Lion Rock",
      "Ancient Frescoes",
      "Royal Gardens",
      "Mirror Wall",
    ],
  },
  {
    id: 3,
    name: "Kandy",
    category: "Cultural Capital",
    description:
      "Sacred city home to the Temple of the Tooth and vibrant culture",
    image:
      "https://images.unsplash.com/photo-1611916656173-875e4277bea6?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-buddhist-temple-at-sunset-8765/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&q=80",
    ],
    highlights: [
      "Temple of the Tooth",
      "Kandy Lake",
      "Royal Botanical Gardens",
      "Cultural Dance Shows",
    ],
  },
  {
    id: 4,
    name: "Galle",
    category: "Coastal Paradise",
    description:
      "Dutch colonial fort city with charming streets and ocean views",
    image:
      "https://images.unsplash.com/photo-1584715068661-c90ca0a5b0d4?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-aerial-view-of-coastline-3401/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534759926787-89fa60f35848?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
    ],
    highlights: [
      "Galle Fort",
      "Dutch Architecture",
      "Lighthouse",
      "Ramparts Walk",
    ],
  },
  {
    id: 5,
    name: "Jaffna",
    category: "Northern Heritage",
    description: "Rich Tamil culture, ancient temples, and pristine beaches",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-temple-architecture-7654/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop&q=80",
    ],
    highlights: [
      "Nallur Temple",
      "Jaffna Fort",
      "Casuarina Beach",
      "Local Cuisine",
    ],
  },
  {
    id: 6,
    name: "Yala National Park",
    category: "Wildlife",
    description: "Home to leopards, elephants, and incredible biodiversity",
    image:
      "https://images.unsplash.com/photo-1534759926787-89fa60f35848?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-elephant-herd-walking-6543/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop&q=80",
    ],
    highlights: [
      "Leopard Safaris",
      "Elephant Herds",
      "Bird Watching",
      "Beach Lagoons",
    ],
  },
  {
    id: 7,
    name: "Mirissa Beach",
    category: "Coastal Paradise",
    description: "Golden beaches, whale watching, and vibrant beach culture",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-tropical-beach-sunset-2341/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&h=600&fit=crop&q=80",
    ],
    highlights: ["Whale Watching", "Surfing", "Beach Parties", "Coconut Hill"],
  },
  {
    id: 8,
    name: "Nuwara Eliya",
    category: "Hill Country",
    description: "Colonial charm meets rolling tea hills in Little England",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-tea-plantation-aerial-view-5432/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&h=600&fit=crop&q=80",
    ],
    highlights: [
      "Tea Plantations",
      "Gregory Lake",
      "Victoria Park",
      "Colonial Architecture",
    ],
  },
  {
    id: 9,
    name: "Unawatuna Beach",
    category: "Coastal Paradise",
    description: "Crescent-shaped bay perfect for swimming and snorkeling",
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-tropical-beach-sunset-2341/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
    ],
    highlights: ["Snorkeling", "Coral Reefs", "Beach Cafes", "Jungle Beach"],
  },
  {
    id: 10,
    name: "Trincomalee",
    category: "Coastal Paradise",
    description: "Pristine beaches, ancient temples, and world-class diving",
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-aerial-view-of-coastline-3401/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
    ],
    highlights: [
      "Nilaveli Beach",
      "Pigeon Island",
      "Koneshwaram Temple",
      "Whale Watching",
    ],
  },
  {
    id: 11,
    name: "Arugam Bay",
    category: "Coastal Paradise",
    description: "World-renowned surf destination on the east coast",
    image:
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-tropical-beach-sunset-2341/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
    ],
    highlights: [
      "World-Class Surfing",
      "Lagoon Safaris",
      "Beach Vibes",
      "Seafood",
    ],
  },
  {
    id: 12,
    name: "Bentota Beach",
    category: "Coastal Paradise",
    description: "Water sports paradise with luxurious beach resorts",
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-tropical-beach-sunset-2341/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
    ],
    highlights: [
      "Water Sports",
      "River Safaris",
      "Turtle Hatchery",
      "Luxury Resorts",
    ],
  },
  {
    id: 13,
    name: "Hikkaduwa",
    category: "Coastal Paradise",
    description: "Vibrant coral reefs and exciting marine life encounters",
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-tropical-beach-sunset-2341/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
    ],
    highlights: [
      "Coral Gardens",
      "Snorkeling",
      "Sea Turtles",
      "Beach Nightlife",
    ],
  },
  {
    id: 14,
    name: "Tangalle",
    category: "Coastal Paradise",
    description: "Secluded beaches and tranquil coastal charm",
    image:
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-tropical-beach-sunset-2341/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80",
    ],
    highlights: ["Secluded Bays", "Rock Pools", "Blow Holes", "Peaceful Vibes"],
  },
  {
    id: 15,
    name: "Pasikuda",
    category: "Coastal Paradise",
    description: "Shallow turquoise waters perfect for families",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=80",
    video:
      "https://cdn.coverr.co/videos/coverr-tropical-beach-sunset-2341/1080p.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=800&h=600&fit=crop&q=80",
    ],
    highlights: [
      "Shallow Waters",
      "Family Friendly",
      "Water Sports",
      "Calm Seas",
    ],
  },
];

const categories = [
  { name: "All", icon: MapPin },
  { name: "Coastal Paradise", icon: Waves },
  { name: "Hill Country", icon: Mountain },
  { name: "Ancient City", icon: Building2 },
  { name: "Wildlife", icon: Trees },
];

export default function SriLankaTourism() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [currentGalleryImage, setCurrentGalleryImage] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryImage((prev) => {
        const newState = {};
        destinations.forEach((dest) => {
          const currentIndex = prev[dest.id] || 0;
          newState[dest.id] = (currentIndex + 1) % dest.galleryImages.length;
        });
        return newState;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredDestinations =
    selectedCategory === "All"
      ? destinations
      : destinations.filter((d) => d.category === selectedCategory);

  const toggleHeroVideo = () => {
    const video = document.getElementById("hero-video");
    if (video) {
      if (videoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl"
            : "bg-gradient-to-b from-blue-900/80 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1
                  className={`text-2xl font-bold ${
                    scrolled
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  Discover Sri Lanka
                </h1>
                <p
                  className={`text-xs ${
                    scrolled ? "text-gray-600" : "text-cyan-100"
                  }`}
                >
                  Pearl of the Indian Ocean
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#destinations"
                className={`${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-cyan-400 transition-colors font-medium`}
              >
                Destinations
              </a>
              <a
                href="#beaches"
                className={`${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-cyan-400 transition-colors font-medium`}
              >
                Beaches
              </a>
              <a
                href="#plan"
                className={`${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-cyan-400 transition-colors font-medium`}
              >
                Plan Trip
              </a>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
                Book Now
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    scrolled ? "text-gray-800" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    scrolled ? "text-gray-800" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#destinations"
                className="block text-gray-700 hover:text-cyan-600 py-2"
              >
                Destinations
              </a>
              <a
                href="#beaches"
                className="block text-gray-700 hover:text-cyan-600 py-2"
              >
                Beaches
              </a>
              <a
                href="#plan"
                className="block text-gray-700 hover:text-cyan-600 py-2"
              >
                Plan Trip
              </a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-2.5 rounded-full">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Video */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          id="hero-video"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-aerial-view-of-sri-lankan-coastline-8901/1080p.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-cyan-900/40 to-teal-900/60 z-10"></div>

        <button
          onClick={toggleHeroVideo}
          className="absolute top-24 right-8 z-30 bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
        >
          {videoPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>

        <div className="relative z-20 text-center text-white px-4 max-w-5xl">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 animate-[fadeInUp_1s_ease-out] drop-shadow-2xl">
            Welcome to
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
              Sri Lanka
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white drop-shadow-lg animate-[fadeInUp_1s_ease-out_0.2s_both]">
            Paradise beaches, ancient wonders, misty mountains, and vibrant
            marine life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_1s_ease-out_0.4s_both]">
            <a
              href="#destinations"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Explore Destinations
            </a>
            <a
              href="#beaches"
              className="bg-cyan-600/80 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-600 transform hover:scale-105 transition-all duration-300 border-2 border-white/50"
            >
              Discover Beaches
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronRight className="w-8 h-8 text-white transform rotate-90" />
        </div>
      </div>

      {/* Featured Coastal Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <Waves className="w-16 h-16 mx-auto mb-4 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              1,340 KM of Pristine Coastline
            </h2>
            <p className="text-xl md:text-2xl text-cyan-100 mb-6">
              From golden beaches to turquoise waters - explore Sri Lanka's
              stunning coastal paradise
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center space-x-2">
                <Ship className="w-6 h-6" />
                <span className="font-semibold">Whale Watching</span>
              </div>
              <div className="flex items-center space-x-2">
                <Anchor className="w-6 h-6" />
                <span className="font-semibold">Diving & Snorkeling</span>
              </div>
              <div className="flex items-center space-x-2">
                <Waves className="w-6 h-6" />
                <span className="font-semibold">World-Class Surfing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div
        id="destinations"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Explore Amazing Destinations
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Discover the breathtaking beauty of Sri Lanka
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat.name
                    ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:scale-105 shadow-md border border-blue-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-96 overflow-hidden">
                {selectedDestination === destination.id ? (
                  // <video
                  //   autoPlay
                  //   loop
                  //   muted
                  //   playsInline
                  //   className="w-full h-full object-cover"
                  // >
                  //   <source src={destination.video} type="video/mp4" />
                  // </video>
                  <iframe
                    width="100%"
                    height="100%"
                    // src="https://www.youtube.com/embed/ua8JlaO3lv4?autoplay=1&loop=1&playlist=ua8JlaO3lv4&controls=0&mute=1"
                    src={destination.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="autoplay; loop; fullscreen; picture-in-picture"
                    allowfullscreen
                    class="w-full h-full object-cover"
                  ></iframe>
                ) : (
                  //                   <video autoplay loop muted playsinline class="w-full h-full object-cover">
                  //   <source src={destination.video} type="video/mp4" />
                  // </video>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-blue-600 shadow-lg">
                  {destination.category}
                </div>

                <button
                  onClick={() =>
                    setSelectedDestination(
                      selectedDestination === destination.id
                        ? null
                        : destination.id
                    )
                  }
                  className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm p-3 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg"
                >
                  <Play className="w-5 h-5 text-white" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-4xl font-bold mb-2 drop-shadow-lg">
                    {destination.name}
                  </h3>
                  <p className="text-white/90 text-lg drop-shadow-md">
                    {destination.description}
                  </p>
                </div>
              </div>

              <div className="relative h-32 overflow-hidden">
                <img
                  src={
                    destination.galleryImages[
                      currentGalleryImage[destination.id] || 0
                    ]
                  }
                  alt={`${destination.name} gallery`}
                  className="w-full h-full object-cover transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center text-lg">
                  <Camera className="w-5 h-5 mr-2 text-blue-600" />
                  Must-See Highlights
                </h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {destination.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center text-gray-700 text-sm bg-white rounded-lg px-3 py-2 shadow-sm border border-blue-100"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg">
                  <span>Explore {destination.name}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-4 text-white">
            Experience Sri Lanka
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Immerse yourself in stunning visuals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-80 object-cover"
              >
                <source
                  src="https://cdn.coverr.co/videos/coverr-scenic-train-ride-through-tea-plantations-9012/1080p.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Scenic Train Journeys
                  </h3>
                  <p className="text-white/90">
                    Through misty mountains and tea country
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-80 object-cover"
              >
                <source
                  src="https://cdn.coverr.co/videos/coverr-beach-sunset-paradise-7821/1080p.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Paradise Beaches
                  </h3>
                  <p className="text-white/90">
                    Crystal clear waters and golden sands
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Ready for Your Sri Lankan Adventure?
          </h2>
          <p className="text-xl text-white/95 mb-10 drop-shadow-md">
            Let us help you create unforgettable memories in paradise
          </p>
          <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            Start Planning Your Journey
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
