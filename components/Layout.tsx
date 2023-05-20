import { ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
type Props = {
  title: string;
  children: ReactNode; // El tipo debe ser ReactNode, no reactNode.children
};

const Layout = ({ title, children }: Props) => {
  const router = useRouter();
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  return (
    <div className="bg-sky-50/50 h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex">
        <div className="w-72 ">
          <div className="mr-14 rounded-xl w-full min-h-full ">
            <div className=""></div>
            <div className="py-8 px-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span className="font-bold text-2xl">CRM React</span>
            </div>
            <nav>
              <Link
                href="/clientes/nuevo"
                className={`block rounded-r-3xl py-2 pl-4 mr-6 ${
                  router.pathname === "/clientes/nuevo" ? "bg-sky-200" : ""
                }`}
              >
                Nuevo Cliente
              </Link>
              <Link
                href="/"
                className={`block rounded-r-3xl py-2 pl-4 mr-6 ${
                  router.pathname === "/" ? "bg-sky-200" : ""
                }`}
              >
                Clientes
              </Link>
            </nav>
          </div>
        </div>
        <div className="w-10/12 items-center ">
          <div className="py-6 flex justify-between items-center w-92">
            <div>
              <h2 className="font-bold text-2xl">{title}</h2>
            </div>
            <div className="flex w-96 bg-sky-100 rounded-3xl py-2 px-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                placeholder="Buscar"
                className="bg-sky-100 w-full border-b py-2 px-3 leading-tight focus:outline-none focus:shadow-outline block"
              />
            </div>
          </div>
          <div className="mr-14 bg-white rounded-3xl w-11/12 h-11/12 p-4 shadow-md">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
