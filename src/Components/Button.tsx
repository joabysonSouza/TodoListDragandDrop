export default function Button({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="bg-red-500 ml-4 mb-3  rounded-md px-6 h-14 text-white font-medium"
      onClick={onClick}
    >
      deletar
    </button>
  );
}
