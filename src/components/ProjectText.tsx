interface Props {
  color: string;
  title: string;
  year: number;
  duration: string;
  role: string[];
  description: string;
}

export default function ProjectText(props: Props) {
  return (
    <div className="flex flex-col gap-6 py-6 sm:py-14 w-full">
      <div className="w-full">
        <h1
          className="text-[clamp(2rem,14vw,6rem)] w-full font-bold leading-tight sm:leading-normal whitespace-nowrap overflow-hidden"
          style={{ color: props.color }}
        >
          {props.title}
        </h1>
        <hr className="hidden sm:block border-[1px] sm:border-2 rounded-full border-foreground mt-2" />
      </div>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
        <div className="flex flex-col items-start justify-center sm:justify-start gap-8 w-full">
          <div className="flex flex-col gap-3">
            <p
              className="font-alexandria font-semibold leading-6"
              style={{ color: props.color }}
            >
              Year
            </p>
            <p className="leading-6">{props.year}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p
              className="font-alexandria font-semibold leading-6 whitespace-nowrap"
              style={{ color: props.color }}
            >
              Project duration
            </p>
            <p className="leading-6">{props.duration}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p
              className="font-alexandria font-semibold leading-6"
              style={{ color: props.color }}
            >
              Role
            </p>
            {props.role.map((role, index) => (
              <p key={index} className="leading-6">
                {role}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p
            className="sm:hidden font-alexandria font-semibold leading-6"
            style={{ color: props.color }}
          >
            About the project
          </p>
          <p className="max-sm:leading-relaxed">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
