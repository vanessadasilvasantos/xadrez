import Image from "next/image";

type ItemType = {
  text: string;
  highlights?: string[];
};

type PartProps = {
  img: string;
  alt: string;
  title: string;
  items?: ItemType[];
};

function highlightText(
  text: string,
  highlights: string[] = []
) {
  const regex = new RegExp(
    `(${highlights.join("|")})`,
    "gi"
  );

  const parts = text.split(regex);

  return parts.map((part, index) =>
    highlights.some(
      (word) =>
        word.toLowerCase() === part.toLowerCase()
    ) ? (
      <span
        key={index}
        className="font-bold text-[var(--l2)]"
      >
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function Part({
  img,
  alt,
  title,
  items = [],
}: PartProps) {
  return (
    <div className="bg-[var(--c7)] flex rounded-[50px] w-[480px] p-[10px] gap-5">
      <Image
        className="rounded-[50px] object-cover"
        src={img}
        alt={alt}
        width={200}
        height={200}
      />

      <div className="flex flex-col">
        <h2 className="font-unica text-[var(--c1)] pb-[10px] text-[40px]">
          {title}
        </h2>

        <ul className="list-disc text-inter pl-[20px] text-[var(--c1)] flex flex-col gap-4">
          {items.map((item, index) => (
            <li key={index}>
              {highlightText(
                item.text,
                item.highlights
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}