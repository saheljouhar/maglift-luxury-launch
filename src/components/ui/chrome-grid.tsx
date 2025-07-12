
"use client"

import React, { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ExtrudeGeometry, Shape } from 'three'
import * as THREE from 'three'

interface BoxProps {
  position: [number, number, number]
  hovered: Set<string>
  setHovered: React.Dispatch<React.SetStateAction<Set<string>>>
  id: string
}

const Box = ({ position, hovered, setHovered, id }: BoxProps) => {
  const mesh = useRef<THREE.Mesh>(null!)
  const [active, setActive] = useState(false)
  
  const isHovered = hovered.has(id)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01
      mesh.current.rotation.y += 0.01
    }
  })

  const boxColor = isHovered ? '#4338ca' : active ? '#06b6d4' : '#374151'

  return (
    <mesh
      ref={mesh}
      position={position}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(prev => new Set(prev).add(id))}
      onPointerOut={() => setHovered(prev => {
        const newSet = new Set(prev)
        newSet.delete(id)
        return newSet
      })}
    >
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial 
        color={boxColor}
        transparent 
        opacity={0.8}
      />
    </mesh>
  )
}

const GridBackground = () => {
  const { scene } = useThree()
  
  const gridGeometry = useMemo(() => {
    const shape = new Shape()
    const size = 20
    const divisions = 40
    const step = size / divisions

    // Create grid lines
    for (let i = 0; i <= divisions; i++) {
      const pos = -size / 2 + i * step
      
      // Horizontal lines
      shape.moveTo(-size / 2, pos)
      shape.lineTo(size / 2, pos)
      
      // Vertical lines  
      shape.moveTo(pos, -size / 2)
      shape.lineTo(pos, size / 2)
    }

    const extrudeSettings = {
      depth: 0.01,
      bevelEnabled: false,
    }

    return new ExtrudeGeometry(shape, extrudeSettings)
  }, [])

  useEffect(() => {
    return () => {
      gridGeometry.dispose()
    }
  }, [gridGeometry])

  return (
    <mesh 
        geometry={gridGeometry} 
        position={[0, -2, 0]} 
        rotation={[Math.PI / 2, 0, 0]}
    >
        <meshPhysicalMaterial 
            color={0x232323}
            roughness={0.5} 
            metalness={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent={true}
            opacity={0.3}
        />
    </mesh>
  )
}

export const ChromeGrid = () => {
  const [hovered, setHovered] = useState<Set<string>>(new Set())

  const boxes = useMemo(() => {
    const result = []
    for (let x = -3; x <= 3; x += 2) {
      for (let z = -3; z <= 3; z += 2) {
        result.push({
          position: [x, 0, z] as [number, number, number],
          id: `${x}-${z}`
        })
      }
    }
    return result
  }, [])

  return (
    <div className="w-full h-96 bg-background">
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GridBackground />
        {boxes.map(({ position, id }) => (
          <Box 
            key={id}
            position={position} 
            hovered={hovered}
            setHovered={setHovered}
            id={id}
          />
        ))}
      </Canvas>
    </div>
  )
}
