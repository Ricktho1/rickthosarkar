import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, MapPin, Calendar } from "lucide-react";

// Gallery images
import galleryLab from "@/assets/gallery-lab.jpg";
import galleryCampus from "@/assets/gallery-campus.jpg";
import galleryCompetition from "@/assets/gallery-competition.jpg";
import galleryKorea from "@/assets/gallery-korea.jpg";
import galleryRobocon from "@/assets/gallery-robocon.jpg";
import galleryVaranasi from "@/assets/gallery-varanasi.jpg";

const galleryItems = [
  {
    image: galleryLab,
    title: "Late Night in the Lab",
    description: "Building the next generation of autonomous systems",
    location: "Robotics Lab, IIT BHU",
    date: "2024",
    span: "tall",
  },
  {
    image: galleryCampus,
    title: "Home Away From Home",
    description: "The beautiful IIT BHU campus at golden hour",
    location: "IIT BHU, Varanasi",
    date: "2023",
    span: "wide",
  },
  {
    image: galleryCompetition,
    title: "Inter-IIT Tech Meet",
    description: "Presenting our AI solutions on the big stage",
    location: "Tech Competition",
    date: "2024",
    span: "normal",
  },
  {
    image: galleryKorea,
    title: "Research in South Korea",
    description: "Changwon cityscape during my research internship",
    location: "Changwon, South Korea",
    date: "2023",
    span: "tall",
  },
  {
    image: galleryRobocon,
    title: "Robocon Arena",
    description: "The thrill of robotics competition",
    location: "ABU Robocon",
    date: "2023",
    span: "wide",
  },
  {
    image: galleryVaranasi,
    title: "Spiritual Varanasi",
    description: "Peaceful mornings by the Ganges",
    location: "Varanasi, India",
    date: "2024",
    span: "normal",
  },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">GALLERY</span>
          <h2 className="section-title mb-6">
            A Sneak Peek Into <span className="gradient-text">My Life</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Beyond the code — moments that define the journey from lab sessions to global adventures.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                item.span === "tall" ? "row-span-2" : ""
              } ${item.span === "wide" ? "col-span-2" : ""}`}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full glass-card rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Image */}
            <div className="relative h-64 md:h-96">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {selectedImage.description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  {selectedImage.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-primary" />
                  {selectedImage.date}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
