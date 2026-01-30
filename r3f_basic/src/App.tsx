import './App.css'
import { Canvas } from '@react-three/fiber'
import ThreeElement from './ThreeElement'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          near: 1,
          far: 100,
          position: [5,5,5]
        }}
      >
        <color attach="background" args={['white']} />
        {/* Math.PI = 180 */}
        <OrbitControls
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 4}
          // minPolarAngle={Math.PI / 6}
          // maxPolarAngle={Math.PI - Math.PI / 6}
        />
        {/* args에 들어가는 기본 단위: m */}
        <axesHelper args={[6]} />
        {/* args={[그리드의 크기, 그리드를 나누는 개수]} */}
        <gridHelper args={[10, 10]} />
        <ThreeElement />
      </Canvas>
    </>
  )
}

export default App
