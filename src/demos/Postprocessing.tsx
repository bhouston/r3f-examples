import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  LensFlare,
  Vignette,
  Bloom,
} from "@react-three/postprocessing";
import { BackSide } from "three";
import { Box, useTexture } from "@react-three/drei";

import { Vector3 } from 'three'
import { Props as CanvasProps } from '@react-three/fiber'

import { CameraControls } from '@react-three/drei'

type Props = React.PropsWithChildren<
  CanvasProps & {
    cameraFov?: number
    cameraPosition?: Vector3
    controls?: boolean
    lights?: boolean
  }
>

export const Setup = ({
  children,
  cameraFov = 75,
  cameraPosition = new Vector3(-5, 5, 5),
  controls = true,
  lights = true,
  ...restProps
}: Props) => (
  <div style={{ height: '100%' }}>
    <Canvas shadows camera={{ position: cameraPosition, fov: cameraFov }} {...restProps}>
      {children}
      {lights && (
        <>
          <ambientLight intensity={0.8} />
          <pointLight intensity={1} position={[0, 6, 0]} />
        </>
      )}
      {controls && <CameraControls makeDefault />}
    </Canvas>
  </div>
)


function SkyBox() {
  const texture = useTexture("/digital_painting_golden_hour_sunset.jpg");

  return (
    <mesh
      userData={{ lensflare: "no-occlusion" }}
      scale={[-1, 1, 1]}
      castShadow={false}
      receiveShadow={false}
    >
      <sphereGeometry args={[50, 32, 32]} />
      <meshBasicMaterial toneMapped={false} map={texture} side={BackSide} />
    </mesh>
  );
}

export default function App() {
  return (
    <Setup
    cameraPosition={new Vector3(8, 1, 10)} cameraFov={50}
    >
      <color attach="background" args={["#303035"]} />
      <directionalLight intensity={3} position={[-25, 60, -60]} />
      <Box />
      <SkyBox />
      <EffectComposer multisampling={0} disableNormalPass>
        <LensFlare  />
      </EffectComposer>
    </Setup>
  );
}
