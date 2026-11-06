// Solo se ve en desarrollo: en el servidor, Nginx muestra public/404.html
export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">Error 404</p>
        <h1 className="page-title">Página no encontrada</h1>
        <p className="page-lead">La página que busca no existe o cambió de dirección.</p>
        <div className="actions">
          <a className="btn btn-primary" href="/">
            Volver al inicio
          </a>
        </div>
      </div>
    </section>
  );
}
