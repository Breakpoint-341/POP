import React, { useRef } from 'react';
import { useDrag, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const DragAndDropBox = () => {
  const [{ isDragging }, drag] = useDrag({
    type: 'box',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        width: '50%',  // Ocupa inicialmente el 50%
        height: '50%',  // Ocupa inicialmente el 50%
        border: '1px solid #ccc',
        backgroundColor: '#f0f0f0',
        opacity: isDragging ? 0.5 : 1,
        boxSizing: 'border-box',
        margin: '2%',  // Margen del 2%
        alignSelf: 'flex-start',  // Evitar que toque el borde inferior
        marginLeft: '20%',  // Dejar espacio del 20% en el lado izquierdo
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Contenido del área de arrastrar y soltar */}
      <h2 style={{ textAlign: 'center', margin: 0 }}>Arrastra y suelta aquí</h2>
    </div>
  );
};

const App = () => {
  const fileInputRef = useRef(null);

  const handleChoosePictureClick = () => {
    // Simular clic en el input de tipo file al hacer clic en "Choose Picture"
    fileInputRef.current.click();
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', height: '100vh', margin: '4%' }}>
        {/* Área de arrastrar y soltar */}
        <DragAndDropBox />

        {/* Contenido fuera del área de arrastrar y soltar */}
        <div style={{ flex: 1, padding: '2%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>Otro contenido</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
            {/* Otros elementos fuera del área de arrastrar y soltar */}
            <label>
              <input type="checkbox" value="location" style={{ margin: '2px' }} /> Location
            </label>
            <label>
              <input type="checkbox" value="wallet" style={{ margin: '2px' }} /> Wallet
            </label>
            <label>
              <input type="checkbox" value="evidence" style={{ margin: '2px' }} /> Evidence
            </label>
            {/* Input para seleccionar imagen oculto */}
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={(e) => {
                // Manejar la lógica de carga de imágenes aquí
                const selectedFile = e.target.files[0];
                if (selectedFile) {
                  console.log(`Imagen seleccionada: ${selectedFile.name}`);
                  // Aquí puedes agregar lógica para cargar la imagen
                }
              }}
            />
            {/* Botón "Choose Picture" */}
            <button style={{ margin: '10px' }} onClick={handleChoosePictureClick}>
              Choose Picture
            </button>
            {/* Botón "Save Image" */}
            <button style={{ margin: '10px' }}>Save Image</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px' }}>
          Estas imagenes no se guardan en blockchain. Y no tienen validez como evidencia porque se puede cambiar la imagen, si se mintea con los datos guardados, PUEDE poseer validez dependiendo del tiempo pasado.
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;