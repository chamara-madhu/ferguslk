import { MapPin } from "lucide-react";
import { Calendar, Compass } from "feather-icons-react";

const DestinationCard = ({ destination }) => {

  return (
    <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
      {/* Card Header with Main Image */}
      <div className="relative h-96 overflow-hidden group">
        <img
          src={destination.mainImage}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="flex items-center gap-2 text-emerald-400 mb-3">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide">
              {destination.location}
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-3">
            {destination.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {destination.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 md:p-8">
        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            {destination.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
            Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {destination.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-slate-700/30 p-3 rounded-lg"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-sm">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8 animate-fadeIn">
          {/* Photo Gallery */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-8 bg-teal-500 rounded-full"></span>
              Places
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {destination.photos.map((photo, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover transform transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 opacity-100 transition-opacity">
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-sm font-medium">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          {destination.videoUrl && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-8 bg-purple-500 rounded-full"></span>
                Video
              </h3>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl group">
                <iframe
                  src={destination.videoUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function NewNew() {
  const destinations = [
    {
      id: 1,
      name: "Negombo",
      location: "Western Province, Sri Lanka",
      mainImage:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=675&fit=crop",
      description:
        "Negombo is a lively coastal city on Sri Lanka’s west coast, known for its long sandy beach, bustling fish market, colonial-era canals and churches, and easy proximity to Bandaranaike International Airport. It’s a popular first/last-stop for travellers who want seafood, relaxed beachside stays, and a glimpse of local fishing life.",
      tags: [
        "Beaches",
        "Fishing",
        "Colonial Heritage",
        "Seafood",
        "Lagoon",
        "Watersports",
      ],
      videoUrl: "https://www.youtube.com/embed/AkFsiSCCFlo?autoplay=1",
      highlights: [
        "Negombo Beach - long sandy coastline and sunsets",
        "Negombo Fish Market - lively morning seafood trading",
        "Hamilton Canal - historic Dutch-era canal",
        "Dutch Fort & colonial-era architecture",
        "Muthurajawela Marsh - mangrove and birdlife tours",
        "Catholic churches and Portuguese-influenced heritage",
      ],
      photos: [
        {
          url: "https://blog.srilanka-villa.com/wp-content/uploads/2018/12/15841656997_6c8b77de6f_o-e1545365521228.jpg",
          caption: "Negombo Beach",
        },
        {
          url: "https://airlinescrewtours.com/wp-content/uploads/2022/09/fuish-2.jpg",
          caption: "Negombo Fish Market",
        },
        {
          url: "https://thumbs.dreamstime.com/b/boats-lagoon-negombo-sri-lanka-november-sailing-occupied-numerous-fishing-trawlers-november-negombo-86289160.jpg",
          caption: "Fishing Boats & Lagoon",
        },
        {
          url: "https://www.mewithmysuitcase.com/wp-content/uploads/2019/08/HamiltonCanalNegombo.jpg",
          caption: "Hamilton Canal",
        },
        {
          url: "https://wanderon-images.gumlet.io/blogs/new/2024/06/negombo-dutch-fort.jpg",
          caption: "Colonial Architecture",
        },
        {
          url: "https://lakpura.com/cdn/shop/products/LK75660200-01-E-1280-720.jpg?v=1626075386",
          caption: "Mangroves / Marsh Tours",
        },
        {
          url: "https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nLzA0ZTAyOTMyZTFhNzRiMTViMGY4NzljNDIzMTM1YWY1IiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19",
          caption: "Angurukaramulla Temple",
        },
        {
          url: "https://blog.srilanka-villa.com/wp-content/uploads/2018/12/44491776571_e3c023bf77_b-e1545363872880.jpg",
          caption: "St. Mary’s Church",
        },
      ],
    },
    {
      id: 2,
      name: "Kalpitiya",
      location: "North Western Province, Sri Lanka",
      mainImage:
        "https://www.srilankainstyle.com/storage/app/media/Locations/Kalpitiya-2.jpg",
      description:
        "Kalpitiya is a serene coastal town located on a peninsula in Sri Lanka’s North Western Province. Known for its stunning lagoons, kitesurfing spots, and dolphin-watching tours, Kalpitiya offers a tranquil escape surrounded by natural beauty. The area is home to the Bar Reef Marine Sanctuary and a rich biodiversity, making it a paradise for eco-tourism and adventure seekers alike.",
      tags: [
        "Kitesurfing",
        "Dolphin Watching",
        "Lagoon Safari",
        "Beaches",
        "Marine Life",
        "Eco-Tourism",
      ],
      videoUrl: "https://youtube.com/embed/LOrdl0WHANk",
      highlights: [
        "Kalpitiya Lagoon – Ideal for kitesurfing and kayaking",
        "Dolphin and Whale Watching – Morning boat tours in the Indian Ocean",
        "Bar Reef – Sri Lanka’s largest coral reef with vibrant marine life",
        "Wilpattu National Park – Safari trips from nearby Kalpitiya",
        "Mangrove Boat Tours – Explore the lagoon’s natural ecosystem",
        "Beach Camping – Scenic stays under the stars",
      ],
      photos: [
        {
          url: "https://www.windsoul.cz/UserFiles/Image/1519205365de-silva-windresort-kalpitiya.jpg",
          caption: "Kalpitiya Lagoon",
        },
        {
          url: "https://images.squarespace-cdn.com/content/v1/5b460cc131d4df15a6e88782/1540366895919-WFPGQDMJ81Z4APZC7IPR/dolphin-watching-kalpitiya-boat-trip.jpg",
          caption: "Dolphin Watching in Kalpitiya",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4WTFL0SFR-q-bzB4bPvnqQ3VQRnS0_issHg&s",
          caption: "Kitesurfing Adventure",
        },
        {
          url: "https://lakpura.com/cdn/shop/products/LK58150200-02-E-1280-720.jpg?v=1620986077&width=1445",
          caption: "Bar Reef Snorkeling",
        },
        {
          url: "https://www.attractionsinsrilanka.com/wp-content/uploads/2020/06/Wilpattu-National-Park-1.jpg",
          caption: "Wilpattu National Park",
        },
        {
          url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/1c/f8/2d.jpg",
          caption: "Mangrove Lagoon Boat Ride",
        },
      ],
    },
    {
      id: 3,
      name: "Anuradhapura",
      location: "North Central Province, Sri Lanka",
      mainImage:
        "https://travelrebels.com/wp-content/uploads/2018/06/anuradhapura-sunset.jpg",
      description:
        "Anuradhapura, one of Sri Lanka’s ancient capitals and a UNESCO World Heritage Site, is a city of timeless spirituality and history. Home to well-preserved ruins, massive stupas, ancient monasteries, and the sacred Sri Maha Bodhi tree, Anuradhapura offers a deep journey into Sri Lanka’s Buddhist heritage. The city’s tranquil surroundings and archaeological marvels make it a must-visit for culture and history enthusiasts.",
      tags: [
        "Cultural Heritage",
        "History",
        "Buddhism",
        "UNESCO Site",
        "Temples",
        "Archaeology",
      ],
      videoUrl: "https://youtube.com/embed/RQ43ASCJhYA",
      highlights: [
        "Sri Maha Bodhi – Sacred fig tree over 2,000 years old",
        "Ruwanwelisaya – Majestic white stupa built by King Dutugemunu",
        "Jetavanaramaya – One of the tallest brick structures in the ancient world",
        "Abhayagiri Monastery – Spiritual and architectural wonder",
        "Isurumuniya Temple – Famous for ‘Lovers’ rock carving",
        "Anuradhapura Museum – Artifacts and historical exhibits",
      ],
      photos: [
        {
          url: "https://www.wondersofceylon.com/content/images/2024/01/WoC-Sri-Maha-Bodhi-Featured.png",
          caption: "Sri Maha Bodhi Tree",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/RuwanwelisayaFromSky.jpg/330px-RuwanwelisayaFromSky.jpg",
          caption: "Ruwanwelisaya Stupa",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jetavanaramaya_Stupa_profile.jpg/1200px-Jetavanaramaya_Stupa_profile.jpg",
          caption: "Jetavanaramaya Stupa",
        },
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/05/26/a3/front-view.jpg?w=1200&h=-1&s=1",
          caption: "Isurumuniya Temple",
        },
        {
          url: "https://mediaim.expedia.com/localexpert/1169831/70160d89-184f-4cfc-b0c9-588564794d36.jpg?impolicy=resizecrop&rw=1005&rh=565",
          caption: "Ancient Ruins in Anuradhapura",
        },
        {
          url: "https://blogger.googleusercontent.com/img/a/AVvXsEg9Y70NPaFtjGX0-T4Jl9s8BpDLr-0ofobNmbDQopyw0Zldr4AMft4NfDP2V6LkwUEzJVZ5bLtNJqJp9AcYkxR1zxDmwZjhqhl_NIlnJct6VAM3XHE3FfvX_pQhIB9iVi9M-ltF61p5wzoiyBx1CrosVaP3GtlQaEjpeWD0vCSADfrtEM2hn768r9Gfrw=s1011-rw",
          caption: "Anuradhapura Archaeological Museum",
        },
        {
          url: "https://www.trawell.in/admin/images/upload/07208955Anuradhapura_Abhayagiri.jpg",
          caption: "Abhayagiri Monastery",
        },
        {
          url: "https://www.historyhit.com/app/uploads/2020/11/Thuparamaya.jpg",
          caption: "Thuparamaya Dagoba",
        },
        {
          url: "https://ianlockwood.blog/wp-content/uploads/2020/08/thuparama_fields_moonstone_pan_1bwmr07_20.jpg",
          caption: "Moonstone Carving at Anuradhapura",
        },
      ],
    },
    {
      id: 4,
      name: "Polonnaruwa",
      location: "North Central Province, Sri Lanka",
      mainImage:
        "https://wherethesoulswander.com/wp-content/uploads/2019/12/things-to-do-in-Polonnaruwa-1.jpg",
      description:
        "Polonnaruwa, another UNESCO World Heritage Site, served as Sri Lanka’s medieval capital from the 11th to 13th centuries. This ancient city showcases a blend of Buddhist artistry, royal architecture, and advanced irrigation systems. Visitors can explore grand palaces, rock-carved Buddha statues, and sacred stupas scattered among serene lakes and forests — a window into Sri Lanka’s golden age of civilization.",
      tags: [
        "Cultural Heritage",
        "History",
        "UNESCO Site",
        "Archaeology",
        "Temples",
        "Buddhism",
      ],
      videoUrl: "https://youtube.com/embed/RDpu0R-Xwqw",
      highlights: [
        "Gal Vihara – Rock-cut Buddha statues in perfect serenity",
        "Royal Palace of King Parakramabahu – Ancient royal residence ruins",
        "Parakrama Samudraya – Massive reservoir built for irrigation",
        "Quadrangle (Dalada Maluwa) – Sacred area with ancient shrines",
        "Rankoth Vehera – Large stupa symbolizing Buddhist devotion",
        "Lankatilaka Vihara – Towering brick temple with a standing Buddha image",
      ],
      photos: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn09Duvth67YqCsGaR0xibOMCgwZwn2LLiyToFMTmyYDLhSgscYz0DZRIL5j4ZdtIfBfU&usqp=CAU",
          caption: "Gal Vihara Buddha Statues",
        },
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/22/39/33/20181225-152637-largejpg.jpg?w=1200&h=-1&s=1",
          caption: "Rankoth Vehera Stupa",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Lankathilaka_Vhihara_-_Le_temple.JPG/1200px-Lankathilaka_Vhihara_-_Le_temple.JPG",
          caption: "Lankatilaka Vihara",
        },
        {
          url: "https://overatours.com/wp-content/uploads/2021/10/The-Sacred-Quadrangle.jpg",
          caption: "Quadrangle (Dalada Maluwa)",
        },
        {
          url: "https://www.orientalarchitecture.com/gallery/sri-lanka/polonnaruwa/parakramabahu-royal-palace/photos/parakramabahu_royal-palace03.jpg",
          caption: "Royal Palace of King Parakramabahu I",
        },
        {
          url: "https://i1.wp.com/amazinglanka.com/wp/wp-content/uploads/2013/09/parakrama_samudraya_03.jpg?ssl=1",
          caption: "Parakrama Samudraya Reservoir",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_nimKwwpXXsUioOO10q1eljjKOR72nbp_A&s",
          caption: "Reclining Buddha at Gal Vihara",
        },
        {
          url: "https://c8.alamy.com/comp/DP2KAT/asia-sri-lanka-polonnaruwa-the-ruins-of-the-medieval-capital-city-DP2KAT.jpg",
          caption: "Ruins of Polonnaruwa City",
        },
      ],
    },
    {
      id: 2,
      name: "Jaffna",
      location: "Northern Province, Sri Lanka",
      mainImage:
        "https://www.lovesrilanka.org/wp-content/uploads/2020/08/A-bucket-List-for-Exploring-Jaffna-1920.jpg",
      description:
        "Jaffna, the vibrant cultural heart of northern Sri Lanka, is a region rich in Tamil heritage, history, and spirituality. Emerging from decades of isolation, Jaffna now welcomes visitors with warm hospitality, colorful temples, delicious cuisine, and colonial-era charm. From the majestic Nallur Kandaswamy Kovil to the serene islands of the Jaffna Peninsula, it’s a destination that blends culture, history, and coastal beauty.",
      tags: ["Culture", "Temples", "History", "Islands", "Cuisine", "Beaches"],
      videoUrl: "https://www.youtube.com/embed/a9T0q-gWCLk?autoplay=1",
      highlights: [
        "Nallur Kandaswamy Kovil – Iconic Hindu temple with golden gopuram",
        "Jaffna Fort – 17th-century Dutch fort overlooking the lagoon",
        "Nagadeepa Island & Temple – Sacred Buddhist site accessible by boat",
        "Jaffna Public Library – Symbol of knowledge and resilience",
        "Casuarina Beach – Calm turquoise waters ideal for swimming",
        "Jaffna Market – Vibrant local produce and street food stalls",
      ],
      photos: [
        {
          url: "data:image/jpeg;base64,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",
          caption: "Nallur Kandaswamy Kovil",
        },
        {
          url: "data:image/jpeg;base64,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",
          caption: "Jaffna Fort",
        },
        {
          url: "https://www.consolidatedpropertiesgroup.com.au/wp-content/uploads/2022/04/Casuarina-Beach-7.jpg",
          caption: "Casuarina Beach",
        },
        {
          url: "https://www.storiesbysoumya.com/wp-content/uploads/2022/01/nagadeepa-purana-vihara.jpg",
          caption: "Nagadeepa Island & Temple",
        },
        {
          url: "data:image/jpeg;base64,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",
          caption: "Jaffna Public Library",
        },
        {
          url: "https://media.timeout.com/images/104052174/image.jpg",
          caption: "Jafna Market",
        },
      ],
    },
    {
      id: 3,
      name: "Trincomalee",
      location: "Eastern Province, Sri Lanka",
      mainImage:
        "https://digitaltravelcouple.com/wp-content/uploads/2021/08/trincomalee-places-to-visit-1.jpg",
      description:
        "Trincomalee, located on Sri Lanka’s picturesque east coast, is renowned for its pristine beaches, turquoise waters, and deep natural harbor. Blending cultural heritage with tropical beauty, Trincomalee offers a perfect mix of relaxation and exploration — from the historic Koneswaram Temple perched on a cliff to snorkeling adventures in Pigeon Island National Park. It's a paradise for beach lovers, divers, and history enthusiasts alike.",
      tags: ["Beaches", "Diving", "Snorkeling", "Temples", "History", "Nature"],
      videoUrl: "https://www.youtube.com/embed/nHDdFGAeQ74",
      highlights: [
        "Koneswaram Temple – Ancient Hindu temple with ocean views",
        "Pigeon Island National Park – Coral reefs and marine life",
        "Nilaveli Beach – Tranquil white sands and calm waters",
        "Marble Beach – Crystal-clear lagoon ideal for swimming",
        "Fort Frederick – Colonial-era fort with scenic viewpoints",
        "Trincomalee Harbour – One of the world’s finest natural harbours",
      ],
      photos: [
        {
          url: "https://lp-cms-production.imgix.net/2021-03/Uppuveli_Sri_Lanka.jpg",
          caption: "Nilaveli Beach",
        },
        {
          url: "https://nexttravelsrilanka.com/wp-content/uploads/2023/02/Koneswaram-Hindu-Temple.jpg",
          caption: "Koneswaram Temple",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Pigeon_Island_National_Park%2C_Trincomalee.jpg",
          caption: "Pigeon Island National Park",
        },
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/72/ba/a4/photo1jpg.jpg?w=1200&h=1200&s=1",
          caption: "Marble Beach",
        },
        {
          url: "https://i0.wp.com/amazinglanka.com/wp/wp-content/uploads/2013/11/20171118_074437.jpg?ssl=1",
          caption: "Fort Frederick",
        },
        {
          url: "https://www.srilanka.travel/ArrivebyaCruise/resources/images/banner3.jpg",
          caption: "Trincomalee Harbour",
        },
      ],
    },
    {
      id: 4,
      name: "Sigiriya",
      location: "Matale District, Sri Lanka",
      mainImage:
        "https://adaderanaenglish.s3.amazonaws.com/1751530386-sigiriya-6.jpg",
      description:
        "Rising dramatically from the central plains, Sigiriya Rock Fortress is an ancient palace located atop a massive 200-meter high rock column. This UNESCO World Heritage Site is one of the best-preserved examples of ancient urban planning, featuring stunning frescoes, mirror walls, and the famous Lion's Gate. The climb to the summit rewards visitors with breathtaking panoramic views and a glimpse into Sri Lanka's rich history.",
      tags: ["Ancient Ruins", "UNESCO Site", "History", "Architecture"],
      videoUrl: "https://youtube.com/embed/uJQz2uWr2E8",
      highlights: [
        "Ancient rock fortress and palace ruins",
        "Famous Sigiriya frescoes",
        "Mirror Wall with ancient graffiti",
        "Lion's Gate entrance",
        "Water gardens and fountains",
        "360-degree views from the summit",
      ],
      photos: [
        {
          url: "https://www.muchbetteradventures.com/magazine/content/images/2023/06/lion-paw-gate.jpg",
          caption: "Sigiriya Rock Fortress",
        },
        {
          url: "https://www.shutterstock.com/shutterstock/photos/399020311/display_1500/stock-photo-ancient-ruins-on-sigiriya-lion-rock-sri-lanka-399020311.jpg",
          caption: "Ancient Palace Ruins",
        },
        {
          url: "https://www.wandersmiles.com/wp-content/uploads/2020/03/Views-from-Sigiriya-Rock-Sri-Lanka.jpg",
          caption: "View from Summit",
        },
        {
          url: "https://overatours.com/wp-content/uploads/2021/09/59-1024x679-1-1024x540.jpg",
          caption: "Water Gardens",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4leMBuFZxwMdDdCPxcUG2xBg-WHJPblYng&s",
          caption: "Mirror Wall with ancient graffiti",
        },
        {
          url: "https://images.squarespace-cdn.com/content/v1/6298cb774cf3830bc9b342bf/045e0267-831a-475b-9eed-50d0755499be/Pond+Top+of+Sigiriya+Rock.jpg",
          caption: "Ancient Pathways",
        },
      ],
    },
    {
      id: 5,
      name: "Kandy",
      location: "Central Province, Sri Lanka",
      mainImage:
        "https://thatswhatshehad.com/wp-content/uploads/2018/07/chathura-anuradha-subasinghe-40uQmE9Zq8g-unsplash-1024x683.jpg",
      description:
        "Nestled among misty hills, Kandy is the cultural and spiritual capital of Sri Lanka. Famous for the sacred Temple of the Tooth Relic, this UNESCO World Heritage city blends history, religion, and scenic charm. Surrounded by tea-covered mountains and the calm waters of Kandy Lake, the city also hosts the world-renowned Esala Perahera festival, celebrating tradition and devotion in grand style.",
      tags: ["Culture", "Heritage", "Temple", "Mountains", "Tea", "Festivals"],
      videoUrl: "https://youtube.com/embed/183tLh_VPog",
      highlights: [
        "Temple of the Tooth Relic – Sacred Buddhist temple and UNESCO World Heritage site",
        "Kandy Lake – Scenic lake in the heart of the city",
        "Peradeniya Botanical Gardens – Vast gardens with exotic flora and tropical plants",
        "Pinnawala Elephant Orphanage – anctuary for rescued elephants, famous for feeding and bathing them in the river",
        "Esala Perahera – Annual cultural and religious festival featuring processions and dancers",
        "Bahirawakanda Vihara Buddha Statue – Giant hilltop Buddha with panoramic city views",
        "Knuckles Mountain Range – Popular hiking and nature spot with breathtaking landscapes",
        "Hanthana Mountain Range – Scenic hiking trails with lush greenery",
        "Lankathilaka Temple – Ancient Buddhist temple known for its architectural beauty",
        "Gadaladeniya Temple – Historic rock temple with intricate carvings",
        "University of Peradeniya – Renowned campus with colonial architecture and botanical gardens",
        "Ambuluwawa Tower – Observation tower with panoramic views and cultural exhibits",
        "Nelligala International Buddhist Center – Modern Buddhist center with meditation facilities",
      ],
      photos: [
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/31/67/5d/kandy-lake-and-the-temple.jpg?w=900&h=500&s=1",
          caption: "Temple of the Tooth Relic",
        },
        {
          url: "https://www.trawell.in/admin/images/upload/472864282Kandy_Lake.jpg",
          caption: "Kandy Lake",
        },
        {
          url: "https://www.andbeyond.com/wp-content/uploads/sites/5/Peridenya-Gardens-kandy-sri-lanka1.jpg",
          caption: "Peradeniya Botanical Gardens",
        },
        {
          url: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2021/02/11/1ac20079-2b2d-4936-b14c-69ffdd1fd55b-1613049760363-739d529db2cb400e682cbef0f14f7c30.jpg",
          caption: "Pinnawala Elephant Orphanage",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRu_kzTon5L8v_V15x6UQz2UnGUoLNlM3oZQ&s",
          caption: "Bahirawakanda Buddha Statue",
        },
        {
          url: "https://admin.myceylonadventures.com/uploads/Trekking_Tour_in_Kandy_Knuckles_Feachured_60b26beeb3.jpg",
          caption: "Knuckles Mountain Range",
        },
        {
          url: "https://www.tripslanka.com/wp-content/uploads/2016/10/Hanthana.jpg",
          caption: "Hanthana Mountain Range",
        },
        {
          url: "https://www.srilankanexpeditions.co.uk/images/main_slider/sri-lanka-guide-destinations/lankatilaka-vihara/01.jpg",
          caption: "Lankathilaka Temple",
        },
        {
          url: "https://www.lanka-excursions-holidays.com/uploads/4/0/2/1/40216937/gadaladeniya-entire-temple_orig.jpg",
          caption: "Gadaladeniya Temple",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_ouJ9fuuvuGDdmljS7NsiAo9JLXF8ajL4g&s",
          caption: "University of Peradeniya",
        },
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/35/5b/34/photo2jpg.jpg?w=900&h=-1&s=1",
          caption: "Ambuluwawa Tower",
        },
        {
          url: "https://www.attractionsinsrilanka.com/wp-content/uploads/2019/10/Nelligala-International-Buddhist-Center.jpg",
          caption: "Admire Nelligala International Buddhist Center",
        },
      ],
    },
    {
      id: 6,
      name: "Ella",
      location: "Uva Province, Sri Lanka",
      mainImage:
        "https://www.erikastravels.com/wp-content/uploads/2017/10/9-Arch-Bridge-Train.jpg",
      description:
        "Nestled in the misty hills of Sri Lanka's central highlands, Ella is a paradise for nature lovers and adventure seekers. This charming village offers breathtaking views, lush tea plantations, and some of the most iconic train journeys in the world. From the famous Nine Arch Bridge to the challenging hike up Little Adam's Peak, Ella captivates visitors with its laid-back vibe and stunning natural beauty.",
      tags: ["Mountains", "Tea Plantations", "Hiking", "Scenic Views"],
      videoUrl: "https://youtube.com/embed/wg7rr3KATi4",
      highlights: [
        "Nine Arch Bridge – Iconic railway viaduct surrounded by lush greenery",
        "Little Adam's Peak – Scenic hiking trail with panoramic views of Ella's valleys",
        "Ravana Falls – Stunning waterfall cascade and popular swimming spot",
        "Lipton's Seat – Famous viewpoint offering sweeping tea plantation vistas",
        "Ravana Pool Club – Leisure spot with pools and panoramic views",
        "Ella Train Ride – Scenic train journey through mountains and tea estates",
        "Udawalawe National Park – Wildlife sanctuary known for elephants and safari tours",
      ],
      photos: [
        {
          url: "https://adaderanaenglish.s3.amazonaws.com/1746347960-Bridge.jpg",
          caption: "Nine Arch Bridge",
        },
        {
          url: "https://mediaim.expedia.com/localexpert/44628457/b12440fc-6efb-4ade-aac9-62213d7eff1d.jpg?impolicy=resizecrop&rw=1005&rh=565",
          caption: "Ella Rock",
        },
        {
          url: "https://www.trawell.in/admin/images/upload/527735191Little_Adams_Peak.jpg",
          caption: "Little Adam's Peak",
        },
        {
          url: "https://srilankatravelbuddy.com/wp-content/uploads/2025/02/Ravana-Waterfall.jpg",
          caption: "Ravana Falls",
        },
        {
          url: "https://mediaim.expedia.com/localexpert/1051932/fc662c46-8745-4c66-a5ff-7e4ca705f3e9.jpg?impolicy=resizecrop&rw=1005&rh=565",
          caption: "Lipton's Seat viewpoint",
        },
        {
          url: "https://www.thesmoothescape.com/wp-content/uploads/2025/06/Ravana-Pool-Club.jpg",
          caption: "Ravana Pool Club",
        },
        {
          url: "https://www.thesmoothescape.com/wp-content/uploads/2025/06/Train-to-Ella.jpg",
          caption: "Famous Ella train",
        },
        {
          url: "https://res.cloudinary.com/jerrick/image/upload/v1680707599/642d900fda30c3001d9cc3fd.jpg",
          caption: "Udawalawe National Park",
        },
      ],
    },
    {
      id: 7,
      name: "Sri Pada",
      location: "Sabaragamuwa Province, Sri Lanka",
      mainImage:
        "https://www.ceylonexpeditions.com/medias/destination_places/big/110/sri-pada-adam-s-peak-sri-lanka.jpg",
      description:
        "Sri Pada, also known as Adam's Peak, is a 2,243-meter tall conical mountain that holds immense religious significance for Buddhists, Hindus, Christians, and Muslims. The pilgrimage to the summit is best undertaken at night to witness the spectacular sunrise from the peak. The sacred footprint at the summit and the pyramid-shaped shadow cast at dawn make this one of Sri Lanka's most spiritual and memorable experiences.",
      tags: ["Pilgrimage", "Hiking", "Sunrise", "Sacred Site"],
      videoUrl: "https://youtube.com/embed/uQLeM2RnaW8",
      highlights: [
        "Sacred footprint at the summit",
        "Spectacular sunrise views",
        "Night pilgrimage experience",
        "5,500 steps to the peak",
        "Triangle shadow phenomenon",
        "Multi-faith pilgrimage site",
      ],
      photos: [
        {
          url: "https://nexttravelsrilanka.com/wp-content/uploads/2021/07/Mountain-View-of-the-Illuminated-Adams-Peak.jpg",
          caption: "Sri Pada Summit",
        },
        {
          url: "https://preview.redd.it/3kojwdhpu5i61.jpg?width=640&crop=smart&auto=webp&s=c111fb3fd74a695a32483cc559dcb90c23878056",
          caption: "Sacred footprint at the summit",
        },
        {
          url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e6/6a/2d.jpg",
          caption: "Sunrise View",
        },
        {
          url: "https://www.shutterstock.com/image-photo/beautiful-mountain-landscape-adams-peak-260nw-564552430.jpg",
          caption: "Mountain Landscape",
        },
        {
          url: "https://slingadventures.com/wp-content/uploads/2017/09/Adams-peak-descent.jpg",
          caption: "Pilgrimage Trail",
        },
        {
          url: "https://withlocals-com-res.cloudinary.com/image/upload/w_480,h_270,c_fill,g_auto,q_auto,dpr_3.0,f_auto/443ef5f0b7718255afdccb56dc0c6ca9",
          caption: "Mountain Peak",
        },
      ],
    },
    {
      id: 4,
      name: "Nuwara Eliya",
      location: "Central Province, Sri Lanka",
      mainImage:
        "https://lakpura.com/cdn/shop/files/LK951R0000-10-E_4fb5ce5e-c060-481b-9ee3-429c7a3a7b72.jpg?v=1689939550&width=3840",
      description:
        "Often called ‘Little England’, Nuwara Eliya is a charming hill station nestled in Sri Lanka’s Central Highlands. Surrounded by lush tea plantations, misty mountains, and colonial-era architecture, it offers a cool climate and serene atmosphere. Visitors can enjoy scenic train rides, boating on Gregory Lake, and exploring picturesque waterfalls.",
      tags: [
        "Hill Station",
        "Tea",
        "Nature",
        "Adventure",
        "Waterfalls",
        "Colonial Heritage",
      ],
      videoUrl: "https://youtube.com/embed/ItYzgemXAXI",
      highlights: [
        "Gregory Lake – Boating, picnics, and horse rides in the heart of the town",
        "Horton Plains National Park – Home to World’s End and Baker’s Falls",
        "Pedro Tea Estate – Experience authentic Ceylon tea making",
        "Victoria Park – Beautifully landscaped gardens with rare flowers",
        "Seetha Amman Temple – Mythologically linked to the Ramayana",
        "Nuwara Eliya Golf Club – One of Asia’s oldest golf courses",
      ],
      photos: [
        {
          url: "https://www.honeymoonguidesrilanka.com/wp-content/uploads/2024/08/Lake-Gregory-Park-1200x630-1.jpg",
          caption: "Gregory Lake",
        },
        {
          url: "https://overatours.com/wp-content/uploads/2019/05/116-1024x683.jpg",
          caption: "Horton Plains National Park",
        },
        {
          url: "https://www.honeymoonguidesrilanka.com/wp-content/uploads/2024/08/Pedro-Tea-Estate-1920x600-1.jpg",
          caption: "Pedro Tea Estate",
        },
        {
          url: "https://tourmylanka.com/wp-content/uploads/2025/04/Victoria-Park-Nuwara-Eliya5.jpg",
          caption: "Victoria Park",
        },
        {
          url: "https://hummingbirdholiday.com/wp-content/uploads/2025/03/Seetha-Amman-Kovil-sri-lanka-1024x576.png",
          caption: "Seetha Amman Temple",
        },
        {
          url: "https://www.nuwaraeliyahotels.net/data/Pics/OriginalPhoto/12660/1266000/1266000802/nuwara-eliya-golf-club-nuwara-eliya-pic-2.JPEG",
          caption: "Nuwara Eliya Golf Club",
        },
        {
          url: "https://www.attractionsinsrilanka.com/wp-content/uploads/2019/07/Loversleap.jpg",
          caption: "Lover’s Leap Waterfall",
        },
        {
          url: "https://www.greatgardensoftheworld.com/wp-content/uploads/2020/02/greatgardens-hakgala-botanic-garden-02.jpg",
          caption: "Hakgala Botanical Garden",
        },
        {
          url: "https://www.beyondescapes.com/uploads/excursions/TTblnvsC4Zvd.jpg",
          caption: "Ambewela Farm",
        },
        {
          url: "https://fernandotravels.com.au/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnuwaraeliya.fcb22546.jpg&w=3840&q=75",
          caption: "Town View of Nuwara Eliya",
        },
        {
          url: "https://duqjpivknq39s.cloudfront.net/2018/12/800x750-post-office.jpg",
          caption: "The Post Office and other Colonial Buildings",
        },
      ],
    },
    {
      id: 5,
      name: "Haputale",
      location: "Uva Province, Sri Lanka",
      mainImage:
        "https://content.r9cdn.net/rimg/dimg/98/cd/1953cc01-city-304530-174bac037cf.jpg?width=1366&height=768&xhint=1631&yhint=785&crop=true",
      description:
        "Haputale is a serene mountain town perched on the southern edge of Sri Lanka’s hill country. With breathtaking views of valleys, tea estates, and misty hills, it’s a haven for nature lovers and photographers. The town is famous for Lipton’s Seat, Diyaluma Falls, and its cool, tranquil atmosphere.",
      tags: [
        "Nature",
        "Tea",
        "Mountains",
        "Hiking",
        "Waterfalls",
        "Viewpoints",
      ],
      videoUrl: "https://youtube.com/embed/NkkkjwqwD-k",
      highlights: [
        "Lipton’s Seat – Iconic viewpoint overlooking endless tea fields",
        "Dambatenne Tea Factory – Historic tea factory founded by Sir Thomas Lipton",
        "Diyaluma Falls – Sri Lanka’s second-highest waterfall",
        "Adisham Bungalow – A Benedictine monastery with English architecture",
        "Haputale Viewpoint – Panoramic view of the southern plains",
        "Idalgashinna Railway Station – One of the most scenic train stops in the world",
      ],
      photos: [
        {
          url: "https://www.lovesrilanka.org/wp-content/uploads/2020/06/LSL_B2_Dambatenne-Tea-Factory_1920x700.jpg",
          caption: "Dambatenne Tea Factory",
        },
        {
          url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/6e/f0/29.jpg",
          caption: "Diyaluma Falls",
        },
        {
          url: "https://www.travelmapsrilanka.com/destinations/destinationimages/adisham-bungalow-in-sri-lanka.webp",
          caption: "Adisham Bungalow",
        },
        {
          url: "https://www.haputalesrilanka.com/images/2019/02/17/istockphoto-658384428-612x612.jpg",
          caption: "Haputale Viewpoint",
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Idalgashinna_railway_station_2017.jpg/1200px-Idalgashinna_railway_station_2017.jpg",
          caption: "Idalgashinna Railway Station",
        },
        {
          url: "https://www.holidify.com/images/bgImages/HAPUTALE.jpg",
          caption: "Haputale Town",
        },
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/ed/14/thangamale-bird-sanctuary.jpg?w=1200&h=-1&s=1",
          caption: "Thangamale Sanctuary",
        },
        {
          url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/6a/03/2b.jpg",
          caption: "Tea Plantations around Haputale",
        },
        {
          url: "https://themanduls.com/wp-content/uploads/2024/04/Diyaluma-Falls-18-scaled.jpg",
          caption: "Diyaluma Falls Close-up",
        },
      ],
    },

    {
      id: 8,
      name: "Arugam Bay",
      location: "Eastern Province, Sri Lanka",
      mainImage:
        "https://srilankaexplorers.com/wp-content/uploads/2025/07/blog-post-photo-3-1296x700.png",
      description:
        "Arugam Bay, located on Sri Lanka’s east coast, is a world-famous surf destination known for its golden beaches, laid-back atmosphere, and warm ocean waves. Popular among surfers, backpackers, and nature lovers alike, Arugam Bay offers a blend of adventure and tranquility. From surfing at Main Point to spotting elephants at Lahugala National Park, this coastal haven perfectly captures the island’s tropical charm.",
      tags: [
        "Beaches",
        "Surfing",
        "Wildlife",
        "Relaxation",
        "Nature",
        "Adventure",
      ],
      videoUrl: "https://youtube.com/embed/pt07PvGvAZI",
      highlights: [
        "Main Point – World-class surf break for experienced surfers",
        "Whisky Point – Relaxed surf spot with beach cafés",
        "Elephant Rock – Panoramic viewpoint and surf location",
        "Lahugala National Park – Elephants and birdlife nearby",
        "Pottuvil Lagoon – Boat rides through mangroves and wildlife",
        "Local Beach Vibe – Yoga retreats, seafood, and sunset bars",
      ],
      photos: [
        {
          url: "https://www.kingsrentacar.com/wp-content/uploads/2025/06/A-Guide-to-Arugam-Bay-A-Must-Visit-Travel-Destination-in-Sri-Lanka-945x590-1-720x450.webp",
          caption: "Arugam Bay Beach",
        },
        {
          url: "https://ceylonwingtours.com/wp-content/uploads/2024/11/Arugam-Bay-Sri-Lanka-6.jpg",
          caption: "Surfer's Paradise",
        },
        {
          url: "https://blog.surabilankatravel.com/wp-content/uploads/2023/06/Kite-Surf-Sri-Lanka-9.jpg",
          caption: "Kite Surfing",
        },
        {
          url: "https://www.travelmapsrilanka.com/destinations/destinationimages/elephant-rock-point-arugam-bay.webp",
          caption: "Elephant Rock",
        },
        {
          url: "https://www.cctsrilanka.com/wp-content/uploads/2017/11/cctsrilanka.com_.ArugamBay.LahugalaNationalPark-2.jpg",
          caption: "Lahugala National Park",
        },
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/51/3a/2e/birds-at-kumana.jpg?w=1200&h=-1&s=1",
          caption: "Kumana National Park",
        },
        {
          url: "https://arugambaytours.com/wp-content/uploads/2016/11/PHOTO-2018-10-26-14-26-16.jpg",
          caption: "Pottuvil Lagoon",
        },
        {
          url: "https://media-cdn.tripadvisor.com/media/photo-s/17/23/85/6d/img20190324104015-largejpg.jpg",
          caption: "Muhudu Maha Viharaya",
        },
      ],
    },
    {
      id: 9,
      name: "Yala National Park",
      location: "Southern Province, Sri Lanka",
      mainImage:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/36/fb/cb/yala-national-park-located.jpg?w=1200&h=-1&s=1",
      description:
        "Yala National Park is Sri Lanka’s most visited and second-largest national park, renowned for its incredible biodiversity and high density of leopards. Stretching across dry forests, grasslands, and lagoons along the southeast coast, Yala offers visitors the thrill of safari adventures and breathtaking encounters with elephants, crocodiles, and exotic birds. It’s a paradise for wildlife photographers and nature enthusiasts alike.",
      tags: [
        "Wildlife",
        "Safari",
        "Nature",
        "Photography",
        "Adventure",
        "Leopards",
      ],
      videoUrl: "https://youtube.com/embed/-z5ZvyfDYPM",
      highlights: [
        "Leopard Safaris – Spot the world’s highest leopard density",
        "Elephants & Crocodiles – Frequent sightings near waterholes",
        "Birdwatching – Over 200 species including peacocks and eagles",
        "Patanangala Beach – Scenic coastal edge within the park",
        "Sithulpawwa Rock Temple – Ancient Buddhist monastery in the wilderness",
        "Yala Block 1 – Most popular region for safari drives",
      ],
      photos: [
        {
          url: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/74/b6/41.jpg",
          caption: "Yala Leopard Safari",
        },
        {
          url: "https://www.wendywutours.com/resource/upload/759/banner-elephant-orphange.jpg.webp",
          caption: "Elephants at Yala",
        },
        {
          url: "https://media.istockphoto.com/id/2172436712/photo/crocodile-going-for-an-early-morning-bite-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=vMRUp2FVwRmx6AExIxFq3wIEYewMm7PBXeVZ2JiZu_s=",
          caption: "Crocodile near Lake",
        },
        {
          url: "https://previews.123rf.com/images/sergieiev/sergieiev1202/sergieiev120200072/12565564-wild-peacock-in-yala-national-park-sri-lanka.jpg",
          caption: "Peacock in the Wild",
        },
        {
          url: "https://sun-b2b.s3.us-east-2.amazonaws.com/attraction/2023-10-18things17-34-26.jpg",
          caption: "Patanangala Beach",
        },
        {
          url: "https://theportuguesetraveler.com/wp-content/uploads/2024/11/sithulpawwa-rock-temple-yala-sri-lanka-42.jpg.webp",
          caption: "Sithulpawwa Rock Temple",
        },
      ],
    },
    {
      id: 2,
      name: "Mirissa",
      location: "Southern Province, Sri Lanka",
      mainImage:
        "https://digitaltravelcouple.com/wp-content/uploads/2020/01/mirissa-beach-sri-lanka-1.jpg",
      description:
        "Mirissa is a tropical paradise known for its crescent-shaped beach, turquoise waters, and laid-back atmosphere. It’s one of Sri Lanka’s best spots for whale watching, surfing, and beachfront dining. With palm-fringed shores and picture-perfect sunsets, Mirissa perfectly balances relaxation and adventure, making it a favorite among both locals and travelers.",
      tags: [
        "Beaches",
        "Whale Watching",
        "Surfing",
        "Relaxation",
        "Sunsets",
        "Nightlife",
      ],
      videoUrl: "https://youtube.com/embed/lgDtGXByVQM",
      highlights: [
        "Mirissa Beach – Iconic crescent-shaped golden beach",
        "Coconut Tree Hill – Scenic viewpoint over the ocean",
        "Whale Watching Tours – Spot blue and sperm whales",
        "Parrot Rock – Natural viewpoint near the shore",
        "Surfing Spots – Gentle waves for beginners",
        "Beachfront Cafés – Sunset dining and chilled vibes",
      ],
      photos: [
        {
          url: "https://destinationlesstravel.com/wp-content/uploads/2021/10/Bailey-at-Parrot-Rock-in-Mirissa-Sri-Lanka.jpg.webp",
          caption: "Mirissa Beach",
        },
        {
          url: "https://destinationlesstravel.com/wp-content/uploads/2019/07/20190424_074703.jpg.webp",
          caption: "Coconut Tree Hill",
        },
        {
          url: "https://destinationlesstravel.com/wp-content/uploads/2019/04/cramit_img_20170627_00511720170627_140924-e1519906197955.jpg.webp",
          caption: "Whale Watching Boat Tour",
        },
        {
          url: "https://www.laurewanders.com/wp-content/uploads/2023/12/Things-to-do-in-Mirissa-00005.jpg",
          caption: "Parrot Rock",
        },
        {
          url: "https://overatours.com/wp-content/uploads/2021/10/Surfing-in-Mirissa.jpg",
          caption: "Surfing at Mirissa",
        },
        {
          url: "https://worldtravelfamily.com/wp-content/uploads/2013/11/Mirissa-Beach-Sri-Lanka.jpeg",
          caption: "Sunset Dining by the Beach",
        },
      ],
    },
    {
      id: 1,
      name: "Hikkaduwa",
      location: "Southern Province, Sri Lanka",
      mainImage:
        "https://www.lovesrilanka.org/wp-content/uploads/2020/06/LSL_B2_Hikkaduwa-Beach_800x520.jpg",
      description:
        "Hikkaduwa is a vibrant coastal town on Sri Lanka’s southwest coast, famous for its coral reefs, surfing waves, and energetic beachside atmosphere. Known for its clear waters, sea turtles, and lively nightlife, Hikkaduwa offers the perfect mix of relaxation and adventure. Visitors can snorkel among tropical fish, enjoy fresh seafood, or unwind to reggae beats by the ocean.",
      tags: [
        "Beaches",
        "Surfing",
        "Snorkeling",
        "Coral Reefs",
        "Nightlife",
        "Seafood",
      ],
      videoUrl: "https://youtube.com/embed/yEVPfup4hgM",
      highlights: [
        "Hikkaduwa Beach – Long sandy stretch with surf spots",
        "Coral Sanctuary – Snorkeling with tropical marine life",
        "Turtle Hatchery – Conservation and sea turtle viewing",
        "Beachfront Restaurants – Fresh seafood and sunset dining",
        "Surfing at Main Reef – Waves for all skill levels",
        "Nightlife – Bars, cafes, and beach parties",
      ],
      photos: [
        {
          url: "https://digitaltravelcouple.com/wp-content/uploads/2020/01/hikkaduwa-beach-drone-1.jpg",
          caption: "Hikkaduwa Beach",
        },
        {
          url: "https://www.bestoflanka.com/images/slider/best-things-to-do-in-sri-lanka/under-water-diving-and-snorekeling/under-water-diving-and-snorekeling-hikkaduwa/01.jpg",
          caption: "Coral Reef Snorkeling",
        },
        {
          url: "https://www.hotelthailanka.com/images/gallery/outdoor/surfing/Surfing%202%20Hikkaduwa.jpg",
          caption: "Surfing in Hikkaduwa",
        },
        {
          url: "https://www.steuartholidays.com/wp-content/uploads/2019/02/Turtle-3-2.jpg",
          caption: "Sea Turtles Near Shore",
        },
        {
          url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/f6/9b/sea-turtle-farm-and-hatchery.jpg?w=1200&h=-1&s=1",
          caption: "Turtle Hatchery",
        },
        {
          url: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1700466746_202695918.jpg.webp",
          caption: "Beachfront Cafés",
        },
      ],
    },
    {
      id: 2,
      name: "Galle",
      location: "Southern Province, Sri Lanka",
      mainImage:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/24/05/e0/galle-fort.jpg?w=900&h=500&s=1",
      description:
        "Galle is a UNESCO World Heritage city blending colonial charm with coastal beauty. Its 17th-century Dutch Fort, cobblestone streets, and ocean views create a timeless atmosphere. Visitors can explore boutique shops, art galleries, and cafes within the Fort, or relax by the nearby beaches of Unawatuna and Jungle Beach. Galle seamlessly combines history, culture, and seaside serenity.",
      tags: [
        "History",
        "Beaches",
        "Heritage",
        "Architecture",
        "Culture",
        "Relaxation",
      ],
      videoUrl: "https://youtube.com/embed/Eq5VXhHUH0o",
      highlights: [
        "Galle Fort – UNESCO World Heritage Site with colonial charm",
        "Lighthouse – Iconic coastal landmark within the Fort",
        "Unawatuna Beach – Relaxed swimming and dining spot",
        "Jungle Beach – Hidden cove with turquoise waters",
        "Galle Fort Ramparts – Scenic sunset walks",
        "Boutique Shops & Art Galleries – Local craftsmanship and design",
      ],
      photos: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lPRtXCFpfSk27oMu8iRt4PM110o1t5VuyQ&s",
          caption: "Galle Fort Lighthouse",
        },
        {
          url: "https://previews.123rf.com/images/mathess/mathess1801/mathess180100697/92633263-fortification-walls-around-galle-fort-sri-lanka.jpg",
          caption: "Galle Fort Walls",
        },
        {
          url: "https://www.wondersofceylon.com/content/images/2024/01/WoC-Unawatuna-Beach-Featured.webp",
          caption: "Unawatuna Beach",
        },
        {
          url: "https://nerdnomads.com/wp-content/uploads/DSC1447.jpg",
          caption: "Jungle Beach",
        },
        {
          url: "https://i0.wp.com/amazinglanka.com/wp/wp-content/uploads/2014/09/2021-04-06.jpg?ssl=1",
          caption: "Rumassala Mountain",
        },
        {
          url: "https://www.tripsavvy.com/thmb/t1DdyiX9YXatBnBCpj_FYa2rvEw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-520861892-a60662be1b914d60b2325db5101c9d7e.jpg",
          caption: "Maritime Archaeology Museum",
        },
      ],
    },
    {
      id: 3,
      name: "Colombo",
      location: "Western Province, Sri Lanka",
      mainImage:
        "https://cdn.atrsafari.com/cdn/05explore/locations-and-lodges/asia/srilanka/colombo/0/stills/00page/01-1920.jpg",
      description:
        "Colombo, Sri Lanka’s bustling commercial capital, offers a fascinating mix of modern city life and colonial heritage. From the scenic Galle Face Green to vibrant Pettah markets and luxury shopping malls, Colombo provides endless variety. The city’s skyline, seaside promenades, and fusion of cultures make it a lively gateway to the island nation.",
      tags: ["City", "Culture", "Shopping", "Food", "Beaches", "Nightlife"],
      videoUrl: "https://youtube.com/embed/_iPUYi4Q-A8?si=YAO7lUdZHczsVFt2",
      highlights: [
        "Galle Face Green – Popular seaside promenade",
        "Colombo Lotus Tower – Iconic skyline landmark",
        "Pettah Market – Bustling bazaar for local goods",
        "Gangaramaya Temple – Blend of modern and traditional architecture",
        "Colombo National Museum – Island’s largest museum",
        "Colombo Port City – Modern waterfront development",
      ],
      photos: [
        {
          url: "https://www.attractionsinsrilanka.com/wp-content/uploads/2019/08/Galle-Face-Green.jpg",
          caption: "Galle Face Green",
        },
        {
          url: "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_510d745e58.jpg",
          caption: "Colombo Lotus Tower",
        },
        {
          url: "https://www.lovesrilanka.org/wp-content/uploads/2019/09/LSL_Cropped_Seema_Malakaya_800x520.jpg",
          caption: "Gangaramaya Temple",
        },
        {
          url: "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_24e3efaf49.jpg",
          caption: "Pettah Market",
        },
        {
          url: "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_c06954617e.jpg",
          caption: "Colombo Port City",
        },
        {
          url: "https://nexttravelsrilanka.com/wp-content/uploads/2023/02/Colombo-National-Museum-1.jpg",
          caption: "Colombo National Museum",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cXz4eOqfv7hmPJmmj0vdEPMDoyKFAiIwmQ&s",
          caption: "Independence Square",
        },
        {
          url: "https://airlinescrewtours.com/wp-content/uploads/2022/09/Dutch-Hospital-2.jpg",
          caption: "Old Dutch Hospital Colombo",
        },
        {
          url: "https://dreamofacity.com/wp-content/uploads/2017/10/1-cargills-york-st-built-by-walker-sons-and-co-in-1906-occupying-the-former-residence-of-captain-pieter-sluysken-dutch-military-commander-of-galle-1684.jpg",
          caption: "Colombo Fort",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7WabIzr2VdZST3HoB6k8DfR4Hj7Kp2vRGw&s",
          caption: "Royal Colombo Golf Club",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="relative h-screen overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/319892/pexels-photo-319892.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Fergus's Travels
              </h2>
              <p className="text-xs text-emerald-400 font-medium">
                Sri Lanka Adventures
              </p>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 -mt-20">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center space-x-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-md animate-fade-in">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-medium tracking-wide">
              Planning My Dream Trip
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight leading-none text-white">
            Discovering
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-gradient">
              Sri Lanka
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Join me as I explore the pearl of the Indian Ocean. From ancient
            temples to pristine beaches, tracking my journey through paradise.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-emerald-400/50 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Plan
          </h2>
        </div>

        <div className="space-y-12">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
