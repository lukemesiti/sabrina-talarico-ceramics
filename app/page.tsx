'use client';

import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function Home() {
  const images = [
    '/cups.jpeg',
    '/cups2.jpeg',
    '/coil.jpeg',
    '/pot.jpeg',
    '/vaso.jpeg',
    '/blueLemon.jpeg',
    '/clay.jpeg',
    '/fruit.jpeg',
    '/nechlace.jpeg',
    '/uterus.jpeg',
    '/wolf.jpeg',
  ];
  return (
    <main
      className="md:p-16 p-2"
      style={{ maxWidth: '100rem', margin: '0 auto' }}
    >
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images.map((image) => (
            <div key={image} className="p-4">
              <Image
                src={image}
                alt="Description of Image 1"
                width={1024}
                height={1024}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </main>
  );
}
