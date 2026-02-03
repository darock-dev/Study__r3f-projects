import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber'
import { useRef } from 'react';

export default function ThreeElement() {
  const {size, gl, scene, camera} = useThree();
  const boxRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // scene에 대한 변화가 일어난 것들은 모두 useFrame 안에 넣어 다시 렌더링을 해줘야 제대로 동작을 한다.
  useFrame((state, delta) => {
    // console.log('state: ', state);
    // console.log('delta: ', delta); // 렌더링 프레임 간의 시간 간격
    // console.log('boxRef: ', boxRef);
    
    // boxRef.current.rotation.x += delta; // 지나가는 시간만큼 rotation 각도가 추가 => 상자가 일정한 속도로 x축으로 회전
    // boxRef.current.position.y -= 0.01; // 지나가는 시간만큼 position y 값이 추가 => 상자가 일정한 속도로 0.01씩 아래로 이동 
    // boxRef.current.scale.z += 0.01; // z축 스케일이 점점 커짐

    // scene.rotation.x += 0.01;
    // groupRef.current.rotation.x += delta;
  })

  // scene.rotation.x = THREE.MathUtils.degToRad(45)
  
  return (
    <>
      <directionalLight position={[5,5,5]} />
      <group
        ref={groupRef}
        position={[0,0,0]}
        rotation={[
          THREE.MathUtils.degToRad(0),
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(0),
        ]}
      >
        <axesHelper args={[5]} />
        <mesh 
          ref={boxRef} 
          position={[0,0,0]}
          // position-x={[2]}
          // position-z={[2]}
          // position-y={[2]}
          scale={[1,1,1]}
          // scale-x={[5]}
          rotation={[
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
          ]}
          // rotation-y={[THREE.MathUtils.degToRad(45)]}
        >
          {/* geometry: 모양
          material: 색상 */}
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh 
          ref={boxRef} 
          position={[0,2,0]}
          scale={[1,1,1]}
          rotation={[
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
          ]}
        >
          <boxGeometry />
          <meshStandardMaterial color="green" />
        </mesh>
        <mesh 
          ref={boxRef} 
          position={[2,0,0]}
          scale={[1,1,1]}
          rotation={[
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
          ]}
        >
          <axesHelper args={[3]} />
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
      </group>

    </>
  )
}