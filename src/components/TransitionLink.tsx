"use client";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathName === href) {
      return;
    }
    e.preventDefault();
    const main = document.querySelector("main");
    main?.classList.remove("delay-1000");
    const bulb1 = document.getElementById("bulb1");
    const bulb2 = document.getElementById("bulb2");
    main?.classList.add("main-transition");
    bulb1?.classList.add("bulb-transition");
    bulb2?.classList.add("bulb-transition");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push(href);
    await new Promise((resolve) => setTimeout(resolve, 200));
    bulb1?.classList.remove("bulb-transition");
    bulb2?.classList.remove("bulb-transition");
    main?.classList.add("delay-1000");
    main?.classList.remove("main-transition");
    await new Promise((resolve) => setTimeout(resolve, 800));
  };
  return (
    <Link
      onClick={handleTransition}
      href={href}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
