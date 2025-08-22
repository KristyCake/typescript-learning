type BadgeProps = {
  variant: "primary" | "success" | "warning",
  rounded?: boolean,
  label: string
}

export const Badge = ({ variant = "primary", label, rounded }: BadgeProps) => {
  return <span className={`badge ${variant} ${rounded}`}>
    {label}
  </span>
}