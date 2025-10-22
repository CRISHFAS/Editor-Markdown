import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
import Switch from "react-switch";
import { useRouter } from "next/router";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "../styles/Editor.module.css";
import { uncheckedIcon, checkedIcon } from "../src/svg";
import Quotes from "../src/mdQuotes";

// Importación dinámica (el editor solo se carga en el cliente)
const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

function HomePage() {
  // Elegimos una cita aleatoria del archivo mdQuotes
  const randomnumber = Math.floor(
    Math.random() * (Quotes.quotes.length - 1 - 0 + 1)
  );

  // Estado del contenido del editor (texto inicial)
  const [value, setValue] = useState<string | undefined>(`
  ## Una cita inspiradora
  > ${Quotes.quotes[randomnumber].quote}

  **${Quotes.quotes[randomnumber].author}**

---

  ## Prueba rápida de Markdown

  Bienvenido al editor Markdown interactivo.  
  Podés escribir, borrar o modificar este texto para probar sus funcionalidades.

  ### Ejemplo de formato:

  **Negrita**, *cursiva*, ~~tachado~~, y [enlaces](https://www.markdownguide.org/).

  ### Listas
  - Elemento uno
  - Elemento dos
  - Elemento tres

  ### Código
  \`\`\`javascript
  function saludar() {
    console.log("¡Hola desde Markdown!");
  }
  saludar();
  \`\`\`

  ### Cita
  > “El código limpio siempre parece que fue escrito por alguien que se preocupaba.”  
  — Michael Feathers
  `);

  const [modoOscuro, setModoOscuro] = useState(false);
  const router = useRouter();

  const coloresNav = {
    oscuro:
      "flex justify-between bg-gradient-to-r from-slate-700 via-neutral-700 to-gray-800",
    claro:
      "flex justify-between bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-200",
  };

  return (
    <>
      <Head>
        <title>Editor Markdown Online</title>
        <meta
          name="description"
          content="Editor Markdown en línea con vista previa en vivo."
        />
        <meta name="author" content="Cristian Farias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Barra de navegación */}
      <nav className={modoOscuro ? coloresNav.oscuro : coloresNav.claro}>
        <div>
          <button
            type="button"
            className="m-4 px-8 py-2 font-medium border-double border-4 border-indigo-600 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            onClick={() => router.push("/")}
          >
            Inicio
          </button>
        </div>
        <div className="m-3">
          <label>
            <Switch
              uncheckedIcon={uncheckedIcon}
              checkedIcon={checkedIcon}
              onChange={() => {
                setModoOscuro(!modoOscuro);
              }}
              checked={modoOscuro}
            />
          </label>
        </div>
      </nav>

      {/* Editor principal */}
      <div data-color-mode={modoOscuro ? "dark" : "light"}>
        <MDEditor
          value={value}
          onChange={setValue}
          fullscreen={false}
          height={700}
        />
      </div>
    </>
  );
}

export default HomePage;
