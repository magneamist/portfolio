export default function Skill({ text }: { text: string }) {
  return (
    <div className="px-6 py-1 rounded-full border-2 border-blue w-fit duration-150 transition-colors hover:border-pink hover:bg-pink">
      <p>{text}</p>
    </div>
  );
}
