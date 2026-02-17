import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00E5FF] focus:ring-offset-2 focus:ring-offset-[#0B0F1A]";
  const variants = {
    primary:
      "bg-[#00E5FF] text-[#0B0F1A] hover:bg-[linear-gradient(90deg,#00E5FF,#B9FF00)] glow-duo-hover",
    secondary:
      "border-2 border-[#00E5FF] text-[#00E5FF] hover:border-[#B9FF00] hover:text-[#B9FF00] hover:bg-[#B9FF00]/10",
    accent:
      "bg-[#7C3AED] text-white hover:bg-[#6D28D9]",
  };
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
