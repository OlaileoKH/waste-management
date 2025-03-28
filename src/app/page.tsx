import Image from "next/image";

export default function Home() {
  return (
    <div>

      <Image
            aria-hidden
            src="/back.jpeg"
            alt="environment"
            width={16}
            height={16}
          />
    </div>
  );
}
