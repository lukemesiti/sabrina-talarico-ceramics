import Image from 'next/image';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center md:p-16 p-2">
      <div className="grid md:grid-cols-2 gap-4" style={{ maxWidth: '64rem' }}>
        <div className="flex justify-center">
          <div>
            <Image
              src="/sabri.jpg"
              alt="Sabrina Talarico"
              width="400"
              height="400"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="space-y-8">
          <p>
            Sabrina Talarico Ceramics blends functionality and sculpture in her
            pieces, crafted in her Melbourne/Naarm studio. Her work explores the
            dynamics of opposites, juxtaposing traditional pottery techniques,
            like exposed coil building or wheel work for the main forms, with
            modern slip-casting methods for the attached objects.
          </p>
          <p>
            Using Terracotta clay, commonly found in the Mediterranean Basin,
            Sabrina's work reflects her Italian heritage. She contrasts this
            with blue porcelain elements, symbolizing the influences of her
            travels.
          </p>
          <p>
            Her creations serve (perhaps) as a commentary on contemporary
            lifestyles. By merging traditional vessels with modern domestic
            objects, she presents a duality that encourages reflection on these
            themes bringing attention to the embodiment of traditional heritage
            and the new domestic objects. They represent an invitation to look
            at domestic objects, that are everyone's lived experience, and
            relate to them differently.
          </p>
          <p>
            Since 2014, Sabrina has managed the Slow Clay Centre, a ceramics
            school in Collingwood. She holds a Bachelor's degree in Cinema and
            Performing Arts and Art Therapy, which deeply informs her artistic
            research , art practice and teaching method. She loves teaching and
            supporting students, creating a safe space for them to develop
            confidence and to express thoughts and feelings in creative ways.
          </p>
        </div>
      </div>
    </main>
  );
}
