// Importamos a nuestro proveedor quien sera el encargado de englobar todos los estados
// globales para ser ocupado en cada uno de los componentes que esten dentro de este
import { BlogProvider } from '../BlogContext';
import { Blog } from '../Blog';

function App() {
  return (
    // Encerramos el componente principal que engloba nuestro citio para que trabaje con nuestro proveedor(provider)
    <BlogProvider>
      {/* Componente que engloba todo nuestro blog */}
      <Blog/>
    </BlogProvider>
  );
}

export default App;
