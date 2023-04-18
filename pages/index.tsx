export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex ">
        <span className="text-sky-500 font-bold">Test deploy nextjs to vercel</span>
      </div>
      <p className="text-lg font-thin">
        Hello{' '}
        <span className="text-blue-400 hover:text-blue-900 hover:font-bold cursor-pointer">
          Cảnh
        </span>
      </p>
    </div>
  );
}
