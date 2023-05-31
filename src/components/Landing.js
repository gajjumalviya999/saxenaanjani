export default function Landing() {
  return (
    <>
      <div className="max-h-[100vh] w-full rounded-tl-3xl rounded-br-3xl flex justify-between fadeinout duration-100">
        <div className="w-full p-2 pt-8 mt-10 sm:mt-0  sm:w-3/5 sm:p-4   text-white font-extrabold rounded-tr-[80px] rounded-bl-[80px] ">
          <p className="text-2xl sm:text-4xl">Hii Folks !!!</p>
          <p className="text-3xl sm:text-6xl pt-8">I &#8217;m</p>
          <p className="text-6xl sm:text-9xl animate-charcter">
            <span>Anjani </span> <span>Saxena... </span>
          </p>
          <p className="text-xl pt-4">
            Assistant Professor (Biological Science Department)
          </p>
          <p className="text-xl pt-2"> SAGE University, Indore</p>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
