import menuItemsLocal from "./components/menu/Menus";
import Link from "next/link";
export default function Home() {
  const menu = menuItemsLocal
  return (
    <div className=" ">
      <div className="fundoTexto">
        {menu.map((e) => (
          <div key={e.name} className="mb-3"  > <div> {e.name}
            {e.submenu?.map((i) => (
              <Link className="hover:text-gray-800" href={i.link} key={i.name}>
              <li >
               { i.name}
              </li>
              </Link>
            ))}
            </div> 
          </div>
        ))}
        <p className="text-center font-bold">HUB DE FERRAMENTAS</p>  <br />
        <p className="text-center font-extrabold">EM CONSTRUÇÃO</p>
      </div>
    </div>
  );
}
