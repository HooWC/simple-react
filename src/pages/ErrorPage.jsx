import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1>糟糕！</h1>
      <p>抱歉，发生了一个错误。</p>
      <p style={{ color: 'red' }}>
        {error.statusText || error.message}
      </p>
    </div>
  );
}

export default ErrorPage;