import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

export default function NavBar() {
  return (
    <header className="flex">
      <nav className="screen-max-width flex w-full flex-row justify-between p-5">
        <img src={appleImg} height={18} width={14}></img>
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((el) => (
            <div
              key={el}
              className="px-5 text-gray hover:text-white hover:transition-all"
            >
              {el}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} height={18} width={18}></img>
          <img src={bagImg} height={18} width={18}></img>
        </div>
      </nav>
    </header>
  );
}
