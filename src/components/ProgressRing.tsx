interface Props {
  radius?: number
  strokeWidth?: number
  strokeLinecap?: 'round' | 'butt' | 'square' | 'inherit'
  transition?: string
  className?: string
  percent: number
}

const ProgressRing = ({
  radius = 60,
  strokeWidth = 4,
  strokeLinecap = 'round',
  transition = '0.35s',
  className,
  percent,
}: Props) => {
  const normalizedRadius = radius - strokeWidth
  const circumference = 2 * Math.PI * normalizedRadius
  const offset = circumference - (percent / 100) * circumference

  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle
        fill='transparent'
        stroke='black'
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        r={normalizedRadius}
        className={className}
        cx={radius}
        cy={radius}
        style={{
          transition: `stroke-dashoffset ${transition}`,
          transform: 'rotate(-90deg)',
          transformOrigin: '50% 50%',
        }}
      />
    </svg>
  )
}

export default ProgressRing
