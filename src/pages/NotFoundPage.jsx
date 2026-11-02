import Module from '../components/Module';

// Solo se ve en desarrollo: en el servidor, Nginx muestra public/404.html
export default function NotFoundPage() {
  return (
    <Module id="inicio" code="ERR-404" label="Puerto sin conexión">
      <h1 className="title-lg">Página no encontrada</h1>
      <p className="lead page-lead">La página que buscas no existe o cambió de dirección.</p>
      <div className="actions">
        <a className="btn btn-panel" href="/">
          Volver al inicio
        </a>
      </div>
    </Module>
  );
}
