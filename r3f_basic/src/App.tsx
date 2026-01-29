import './App.css'
import { Canvas } from '@react-three/fiber'
import ThreeElement from './ThreeElement'
import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'

function App() {
  const color = useControls({
    value: 'white',
  })

  const grid = useControls({
    segmant: {value: 10, min: 2, max: 100, step: 1}
  })

  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          near: 1,
          far: 100,
          position: [3,3,0]
        }}
      >
        <color attach="background" args={[color.value]} />
        {/* Math.PI = 180 */}
        <OrbitControls
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 4}
          // minPolarAngle={Math.PI / 6}
          // maxPolarAngle={Math.PI - Math.PI / 6}
        />
        {/* args에 들어가는 기본 단위: m */}
        <axesHelper args={[6]} />
        <gridHelper args={[10, grid.segmant]} />
        <ThreeElement />
      </Canvas>
    </>
  )
}

export default App
