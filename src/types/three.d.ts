
import '@react-three/fiber'
import * as THREE from 'three'

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshStandardMaterial: {
      color?: THREE.ColorRepresentation
      roughness?: number
      metalness?: number
      transparent?: boolean
      opacity?: number
      [key: string]: any
    }
    meshBasicMaterial: {
      color?: THREE.ColorRepresentation
      transparent?: boolean
      opacity?: number
      [key: string]: any
    }
  }
}
