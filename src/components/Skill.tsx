export default function Skill({ text }: { text: string }) {
  return (
    <div className="px-4 sm:px-6 sm:py-3 bg-background/50 backdrop-blur-sm rounded-full border-2 border-blue w-fit duration-150 transition-colors hover:border-pink hover:bg-pink">
      <p className="text-[16px] sm:text-2xl">{text}</p>
    </div>
  );
}
