import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react';
// import { Box } from '@react-three/drei';

export default function ThreeElement() {
  const {size, gl, scene, camera} = useThree();
  const boxRef = useRef<THREE.Mesh>(null);

  // scene에 대한 변화가 일어난 것들은 모두 useFrame 안에 넣어 다시 렌더링을 해줘야 제대로 동작을 한다.
  useFrame((state, delta) => {
    // boxRef.current.rotation.x += delta; // 지나가는 시간만큼 rotation 각도가 추가 => 상자가 일정한 속도로 x축으로 회전
    // boxRef.current.position.y -= 0.01; // 지나가는 시간만큼 position y 값이 추가 => 상자가 일정한 속도로 0.01씩 아래로 이동 
    // boxRef.current.scale.z += 0.01; // z축 스케일이 점점 커짐

    // scene.rotation.x += 0.01;
    // groupRef.current.rotation.x += delta;
  })
  
  return (
    <>
      <directionalLight position={[5,5,5]}/>
      {/* <Box position={[-2,0,0]} >
        <meshStandardMaterial color="green" />
      </Box>

      <mesh geometry={new THREE.BoxGeometry(1,1,1)}>
        <meshStandardMaterial color="red" />
      </mesh> */}

      <mesh 
        ref={boxRef} 
        position={[2,0,0]}
      >
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  )
}