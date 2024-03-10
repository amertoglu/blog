import Container from "../components/container";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hello there! I'm A Mertoğlu, a passionate web developer with a love for creativity and innovation. Welcome to my corner of the internet, where I bring ideas to life through code.
          </h1>
          <p>
            I specialize in crafting beautiful and functional websites that not only look great but also provide seamless user experiences. With expertise in HTML, CSS, JavaScript, and various web development frameworks, I bring ideas to life in the digital world.
          </p>

          <p>Thanks for stopping by, and I hope you enjoy exploring my website!</p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/smart-1.jpg"
          alt="avatar"
          width="70"
          height="70"
        />
      </div>
    </>
  );
}

export default HomePage;
