import { Link as Anchor } from "react-router-dom";
export function ErrorPage() {
  return (
    <div className="text-white">
      <h1 className="mb-4 text-4xl  font-bold mt-4 md:mb-2">
        <span className="text-red-400">ERROR 404:</span> Pagina No encontrada
      </h1>
      <Anchor
        to={``}
        className="hover:text-red-400 hover:shadow-2xl text-lg hover:text-2xl"
      >
        Volver a Inicio
      </Anchor>
    </div>
  );
}
