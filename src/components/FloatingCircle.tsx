"use client";
import { usePathname } from "next/navigation";
import React from "react";

const FloatingCircle = () => {
  // change color based on route
  const pathname = usePathname();
  let color1 = "#F4817C";
  let color2 = "#F18E4B";
  if (pathname === "/projects") {
    color1 = "#68D7D9";
    color2 = "#BFD1D7";
  } else if (pathname === "/contact" || pathname === "/projects/vestra") {
    color1 = "#F18E4B";
    color2 = "#F7BD96";
  }
  return (
    <div className="fixed inset-0 w-full h-screen overflow-hidden -z-50">
      <div className="absolute w-full h-full mobile-container">
        <svg
          className="absolute rounded-full"
          style={{
            width: "min(150vw, 1000px)",
            height: "min(150vw, 1000px)",
            //29s duration not 5s fyrir float og 23s fyrir horizontalFloats
            animation: `
              float 29s ease-in-out infinite,
              horizontalFloat 23s ease-in-out infinite
            `,
          }}
          viewBox="0 0 845 944"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_141_77)" id="bulb1">
            <rect
              x="482"
              y="180"
              width="398.764"
              height="398.764"
              transform="rotate(44.8074 482 180)"
              fill={color1}
            />
          </g>
          <g filter="url(#filter1_f_141_77)" id="bulb2">
            <rect
              x="482"
              y="306"
              width="220.479"
              height="220.479"
              transform="rotate(44.8074 482 306)"
              fill={color2}
            />
          </g>
          <defs>
            <filter
              id="filter0_f_141_77"
              x="0.980957"
              y="-20"
              width="963.934"
              height="963.934"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_141_77"
              />
            </filter>
            <filter
              id="filter1_f_141_77"
              x="126.623"
              y="106"
              width="711.802"
              height="711.802"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_141_77"
              />
            </filter>
            <filter
              id="filter2_f_141_77"
              x="198.077"
              y="177"
              width="569.372"
              height="569.372"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_141_77"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <style jsx>{`
        /* Mobile-specific positioning with safer values */
        @media (max-width: 640px) {
          .mobile-container {
            left: 0%; /* Base position more centered */
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(-30vh) translateX(-30vw);
            }
            20% {
              transform: rotate(15deg) translateY(-10vh) translateX(-30vw);
            }
            40% {
              transform: translateY(30vh) translateX(-80vw);
            }
            60% {
              transform: rotate(15deg) translateY(60vh) translateX(40vw);
            }
            80% {
              transform: translateY(10vh) translateX(-15vw);
            }
            90% {
              transform: rotate(15deg) translateY(-10vh) translateX(-70vw);
            }
          }

          @keyframes horizontalFloat {
            0%,
            100% {
              left: 25%;
            }
            50% {
              left: 15%;
            }
          }
        }

        /* Desktop animations */
        @media (min-width: 641px) {
          @keyframes float {
            0%,
            100% {
              transform: translateY(-100px);
            }
            10% {
              transform: rotate(45deg);
            }
            30% {
              transform: translateY(-400px);
            }
            50% {
              transform: rotate(45deg);
            }
            70% {
              transform: translateY(calc(100% - 600px));
            }
            90% {
              transform: rotate(45deg);
            }
          }

          @keyframes horizontalFloat {
            0%,
            100% {
              left: 30%;
            }
            30% {
              left: -20%;
            }
            70% {
              left: 60%;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingCircle;
