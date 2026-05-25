type TitleProps = {
  text: string
  className?: string
}

export default function Title({ text, className = "" }: TitleProps) {
  return (
    <h1
      className={`text-[var(--c1)] font-unica text-[150px] max-lg:text-[130px] max-md:text-[120px] max-sm:text-[100px] ${className}`}
    >
      {text}
    </h1>
  )
}