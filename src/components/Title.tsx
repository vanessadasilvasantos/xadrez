type TitleProps = {
  text: string
  className?: string
  'data-aos'?: string
  'data-aos-duration'?: string
}

export default function Title({ text, className = "", ...dataProps }: TitleProps) {
  return (
    <h1
      {...dataProps}
      className={`text-[var(--c1)] font-unica text-[150px] max-lg:text-[130px] max-md:text-[120px] max-sm:text-[100px] max-xs:text-[80px] ${className}`}
    >
      {text}
    </h1>
  )
}