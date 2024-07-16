import Image from "next/image";

export default function Home() {

  const imageUrls = [
    "https://utfs.io/f/29341189-10d1-4e08-a8cd-24689d2a29c9-inaiks.jpeg",
    "https://utfs.io/f/3c658983-e889-4833-898f-1a9626cfe303-k1aypg.jpeg",
    "https://utfs.io/f/ff5f4118-4f31-4f70-b2ce-82b4676a34b5-3jmj76.jpeg",
    "https://utfs.io/f/ed76884b-12f7-4356-91e7-8c1e4c95d6d4-d98apk.jpeg",
    "https://utfs.io/f/6c28ca0a-8fe2-4a03-9549-fef5ca12603e-v3qw7g.jpeg",
    "https://utfs.io/f/d8c4ce0d-9944-4a8b-9edb-11494c2d9d2a-xt04hl.jpeg",
    "https://utfs.io/f/8ec2865b-c2a0-41c6-8702-b636433620fa-d4jva1.jpeg",
    "https://utfs.io/f/8cc682af-a549-4c13-a229-db8b8cebcd75-q8rjvl.jpeg",
  ];

  const images = imageUrls.map((imageUrl, index) => ({ id: index + 1, imageUrl }))

  return (
    <main className="">
      <h1>Space Gallery</h1>
      <div className="flex flex-wrap gap-4 ml-2">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.imageUrl}
              width={300}
              height={300}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
