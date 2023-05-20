import React, { useState } from "react";
import Layout from "@/components/Layout";
import { agregarCliente } from "@/data/clientes";

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

const Nuevo = ({ clientes }: Props) => {
  console.log(clientes);
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
  });

  const [registros, setRegistros] = useState<
    { nombre: string; telefono: string; email: string; empresa: string }[]
  >([]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formValues);

    const newRegistro = {
      nombre: formValues.name,
      telefono: formValues.phone,
      email: formValues.email,
      empresa: formValues.company,
    };

    // Actualizar la lista de registros
    setRegistros([...registros, newRegistro]);
    console.log(registros);
    try {
      console.log(process.env.API_JSON);
      const respuesta = await fetch(`http://localhost:3000/clientes`, {
        method: "POST",
        body: JSON.stringify(newRegistro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await respuesta.json();

      agregarCliente(newRegistro);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Layout title="Agregar un nuevo cliente">
        <div className="max-w-2xl w-full mx-auto">
          <h2 className="text-center py-4 text-2xl font-bold">
            Rellena todos los campos
          </h2>
          <form className="flex flex-col w-full" onSubmit={handleFormSubmit}>
            <label htmlFor="name" className="block text-sm text-blue-500">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Nombre"
              value={formValues.name}
              onChange={handleInputChange}
              className="w-full border-b py-1 leading-tight focus:outline-none focus:shadow-outline block text-lg mb-10"
            />
            <label htmlFor="phone" className="block text-sm text-blue-500">
              Telefono
            </label>
            <input
              id="phone"
              type="number"
              name="phone"
              placeholder="Telefono"
              value={formValues.phone}
              onChange={handleInputChange}
              className="w-full border-b py-1 leading-tight focus:outline-none focus:shadow-outline block text-lg mb-10"
            />
            <label htmlFor="email" className="block text-sm text-blue-500">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleInputChange}
              className="w-full border-b py-1 leading-tight focus:outline-none focus:shadow-outline block text-lg mb-10"
            />
            <label htmlFor="company" className="block text-sm text-blue-500">
              Empresa
            </label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="Empresa"
              value={formValues.company}
              onChange={handleInputChange}
              className="w-full border-b py-1 leading-tight focus:outline-none focus:shadow-outline block text-lg mb-10"
            />

            <button
              type="submit"
              className="bg-sky-100 py-4 font-xl w-full rounded-xl cursor-pointer"
            >
              Guardar
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Nuevo;
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
