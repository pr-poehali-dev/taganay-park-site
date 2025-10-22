import { useState } from 'react';
import Header from '@/components/Header';
import Icon from '@/components/ui/icon';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://cdn.poehali.dev/projects/e9c7c0f4-e5d7-4a4d-a916-12ec04a439cf/files/98d9c12c-d70a-4da0-9a44-80e101ccd899.jpg',
      alt: 'Величественные горные вершины',
      category: 'Горы',
    },
    {
      id: 2,
      src: 'https://cdn.poehali.dev/projects/e9c7c0f4-e5d7-4a4d-a916-12ec04a439cf/files/e0edb735-44b4-4ac8-a110-c95b40cb4b2b.jpg',
      alt: 'Лесная тропа в сосновом бору',
      category: 'Леса',
    },
    {
      id: 3,
      src: 'https://cdn.poehali.dev/projects/e9c7c0f4-e5d7-4a4d-a916-12ec04a439cf/files/e558e63f-66a2-4705-a76c-bf65ba944c3a.jpg',
      alt: 'Панорама с каменной вершины',
      category: 'Горы',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = ['Все', 'Горы', 'Леса'];

  const filteredImages =
    selectedCategory === 'Все'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Фотогалерея</h1>
            <p className="text-xl text-muted-foreground">
              Красота Таганая в каждом снимке
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="Expand" size={32} className="text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm opacity-80">
            © 2024 Национальный парк Таганай. Все права защищены.
          </p>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;