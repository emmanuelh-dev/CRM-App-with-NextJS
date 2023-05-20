import { Cliente } from "@/components/Cliente";
import Layout from "@/components/Layout";

interface Cliente {
  id: number;
  nombre: string;
  telefono: number;
  email: string;
  empresa: string;
}

interface Props {
  clientes: Cliente[];
}

export default function Home({ clientes }: Props) {
  return (
    <Layout title="Administra tus clientes">
      <div>
        {clientes.length ? (
          <table className="w-full">
            <thead className="border-b border-neutral-300 text-left">
              <tr>
                <th className="px-6 py-3">Nombre</th>
                <th className="px-6 py-3">Telefono</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Empresa</th>
                <th className="px-6 py-3">{"  "}</th>
              </tr>
            </thead>
            <tbody className="">
              {clientes.map((cliente) => (
                <Cliente
                  key={cliente.id}
                  id={cliente.id}
                  telefono={cliente.telefono}
                  email={cliente.email}
                  empresa={cliente.empresa}
                  nombre={cliente.nombre}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center mt-10 table-auto">No hay clientes</p>
        )}
      </div>
    </Layout>
  );
}

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<Props> = async ({}) => {
  const respuesta = await fetch(`${process.env.API_JSON}/clientes`);
  const resultado = await respuesta.json();
  console.log(resultado);

  return {
    props: {
      clientes: resultado || null,
    },
  };
};
