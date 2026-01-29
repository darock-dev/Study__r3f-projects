import './App.css'
import { Canvas } from '@react-three/fiber'
import ThreeElement from './ThreeElement'

function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          near: 1,
          far: 20,
          position: [3,3,0]
        }}
      >
        <ThreeElement />
      </Canvas>
    </>
  )
}

export default App
