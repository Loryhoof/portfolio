export default function YellowButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-400 p-4 hover:bg-yellow-500 font-bold border-b-8 border-b-yellow-500 rounded-md text-xl cursor-pointer"
    >
      {text}
    </button>
  );
}
