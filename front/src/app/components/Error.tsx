export default function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="border border-red-500 bg-red-200 text-red-700 p-3 px-4 rounded-lg text-xs text-center max-w-lg mx-auto">
      {message}
    </p>
  );
}
