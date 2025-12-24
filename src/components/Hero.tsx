import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <img
        src="/avatar.jpg"
        alt="Sarthak Bhandari"
        className="w-64 h-64 rounded-full mb-12 shadow-lg"
      />
      <TextAnimate
        animation="blurInUp"
        by="word"
        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 max-w-4xl"
      >
        Hi, I'm Sarthak.
      </TextAnimate>
      <Button asChild size="lg" className="mt-4">
        <a
          href="/Bhandari_Sarthak_Resume_Web.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </Button>
    </section>
  );
}
