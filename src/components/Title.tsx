type TitleProps = {
  text: string
  className?: string
}

export default function Title({ text, className = "" }: TitleProps) {
  return (
    <h1
      className={`text-[var(--c1)] font-unica text-[150px] ${className}`}
    >
      {text}
    </h1>
  )
}