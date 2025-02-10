import Skill from "./Skill";

export default function Skills() {
  return (
    <div className="grid grid-cols-12">
      <ul className="col-span-12 md:col-span-6 md:col-start-4 flex flex-col justify-center my-0 gap-4">
        <div className="flex gap-4 justify-center">
          <li>
            <Skill text="Figma"></Skill>
          </li>
          <li>
            <Skill text="UI design"></Skill>
          </li>
        </div>
        <div className="flex gap-4 justify-center">
          <li>
            <Skill text="React"></Skill>
          </li>
          <li>
            <Skill text="Mobile design"></Skill>
          </li>

          <li>
            <Skill text="Next.js"></Skill>
          </li>
        </div>
        <div className="flex gap-4 justify-center">
          <li>
            <Skill text="Photoshop"></Skill>
          </li>
          <li>
            <Skill text="Slack"></Skill>
          </li>
          <li>
            <Skill text="UX design"></Skill>
          </li>

          <li>
            <Skill text="CSS/SCSS"></Skill>
          </li>
        </div>
        <div className="flex gap-4 justify-center">
          <li>
            <Skill text="TypeScript"></Skill>
          </li>
          <li>
            <Skill text="SQLLite"></Skill>
          </li>
          <li>
            <Skill text="Illustrator"></Skill>
          </li>
        </div>
        <div className="flex gap-4 justify-center">
          <li>
            <Skill text="Tailwind CSS"></Skill>
          </li>
          <li>
            <Skill text="VS Code"></Skill>
          </li>
        </div>
        <div className="flex gap-4 justify-center">
          <li>
            <Skill text="Web design"></Skill>
          </li>
        </div>
      </ul>
    </div>
  );
}
