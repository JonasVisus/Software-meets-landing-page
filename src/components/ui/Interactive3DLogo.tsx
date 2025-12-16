'use client';

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

// SVG-Pfade des Logos (aus logo_cut.svg)
const outerPathD = "M700.145386,1046.903076 C671.026672,1041.591797 644.648682,1029.439575 617.648193,1019.200378 C571.153625,1001.568359 525.073914,982.855225 480.423798,960.949158 C452.086029,947.046265 424.185760,932.155640 396.722290,916.591125 C363.395264,897.703552 331.518585,876.419067 301.916016,852.045166 C274.004578,829.063782 249.205933,803.092896 231.291550,771.304932 C213.747070,740.173340 207.863892,706.949768 216.513702,672.093506 C221.870956,650.505310 233.306702,631.714172 247.141312,614.256592 C262.682373,594.645752 281.417358,578.625732 300.731232,562.968384 C319.981262,547.362793 338.757050,531.108521 356.963257,514.296692 C375.675201,497.017731 393.813232,479.075134 411.529846,460.771973 C430.041779,441.647156 447.919586,421.897827 465.770813,402.146942 C487.763580,377.813843 509.130402,352.871460 534.609314,331.992340 C552.159851,317.610291 571.069397,305.301819 591.307800,294.911621 C612.294617,284.137177 634.280945,276.143005 657.116882,270.763428 C683.245056,264.608215 709.536560,262.937378 736.176392,269.256165 C768.957214,277.031647 793.730042,295.597412 813.131042,322.481598 C838.660034,357.857178 863.246765,393.831635 885.370911,431.470093 C906.140808,466.804718 925.400635,502.928467 941.415222,540.649170 C951.023926,563.281494 960.102295,586.238342 967.646362,609.621155 C975.900269,635.204346 982.863525,661.271118 988.977417,687.456665 C993.989685,708.924011 997.387695,730.805969 1000.678650,752.628174 C1005.056885,781.659973 1006.696228,811.017090 1004.740417,840.258972 C1001.914001,882.518188 992.034180,923.147888 969.333069,959.563660 C946.219421,996.641052 913.438538,1022.086731 872.164368,1036.165161 C856.477722,1041.515747 840.342834,1045.679077 824.210571,1049.541504 C816.537659,1051.378662 808.404846,1051.431519 800.458130,1051.956543 C787.898926,1052.786377 775.310242,1053.995728 762.754333,1053.791992 C752.565125,1053.626831 742.412170,1051.562988 732.231140,1050.450317 C723.981873,1049.548950 715.712524,1048.831909 707.457031,1047.984985 C705.149963,1047.748291 702.860474,1047.340698 700.145386,1046.903076 z";

const innerPathD = "M867.516113,920.386597 C859.348022,938.168884 848.858704,953.952271 834.547363,966.779907 C815.266418,984.061951 793.437561,997.269348 768.869751,1005.819824 C747.085693,1013.401306 724.625488,1016.483337 701.677856,1015.903198 C684.513916,1015.469360 667.688599,1012.264099 650.944885,1008.587585 C623.587280,1002.580383 597.083740,993.948425 571.336914,982.985291 C542.907593,970.879883 516.183838,955.740356 491.131317,937.630188 C464.833923,918.620178 441.421082,896.489807 419.859955,872.319275 C402.286102,852.618469 388.078461,830.818665 379.566986,805.721680 C373.304474,787.255920 369.070312,768.291321 369.000275,748.621155 C368.971985,740.667908 369.067413,732.713074 368.940399,724.761597 C368.646057,706.338928 371.262970,688.236572 375.873108,670.510803 C380.761871,651.713562 385.769623,632.874512 392.167389,614.557434 C406.564819,573.337097 427.290955,535.173035 451.300903,498.835602 C467.902802,473.709747 486.006226,449.628967 506.254700,427.286469 C523.345215,408.428528 540.078430,389.143402 558.383240,371.515015 C581.974060,348.795868 606.656372,327.170471 631.502747,305.811584 C643.696289,295.329559 658.274841,288.921143 674.380127,285.756592 C698.989441,280.921051 719.432678,289.709900 738.349609,303.902191 C755.039185,316.423401 766.503174,333.478333 777.390381,350.880737 C792.802856,375.516510 804.608521,401.943817 814.698914,429.092682 C824.076721,454.324402 833.234680,479.674896 841.286560,505.350342 C847.535400,525.276428 852.147949,545.730957 857.080261,566.049561 C860.880920,581.706238 864.397827,597.450623 867.387085,613.279480 C869.789612,626.001709 871.338989,638.892273 873.036377,651.738525 C874.972168,666.389404 876.731201,681.065063 878.407349,695.748169 C879.142151,702.185303 879.651733,708.659119 879.969910,715.130798 C881.308228,742.348572 882.807068,769.563110 883.676880,796.797058 C884.053101,808.576172 883.069702,820.400208 882.656189,832.202209 C882.510681,836.353516 882.033936,840.499756 882.030945,844.648499 C882.013245,869.490723 877.780457,893.539062 868.741760,916.711304 C868.319336,917.794312 868.020691,918.925598 867.516113,920.386597 z";

// Konvertiert SVG-Pfad zu Three.js Shape
function svgPathToShape(pathD: string): THREE.Shape {
  const loader = new SVGLoader();
  const svgData = loader.parse(`<svg><path d="${pathD}"/></svg>`);
  const path = svgData.paths[0];
  const shapes = SVGLoader.createShapes(path);
  return shapes[0];
}

// Kamera-Controller der zur Ursprungsposition zurückkehrt (nur Richtung, nicht Distanz)
const CameraReset = ({ isInteracting }: { isInteracting: boolean }) => {
  const { camera } = useThree();
  const targetPosition = useMemo(() => new THREE.Vector3(0, 0, 3.5), []);
  
  useFrame(() => {
    if (!isInteracting) {
      // Nur die Richtung interpolieren, Distanz bleibt bei 3.5 (durch minDistance/maxDistance fixiert)
      camera.position.lerp(targetPosition, 0.015);
      camera.lookAt(0, 0, 0);
    }
  });
  
  return null;
};

// Das 3D Logo als extrudierte Form
const Logo3D = () => {
  const meshRef = useRef<THREE.Group>(null);

  // Erstelle die 3D-Geometrie aus den SVG-Pfaden
  const geometry = useMemo(() => {
    const outerShape = svgPathToShape(outerPathD);
    const innerShape = svgPathToShape(innerPathD);
    
    // Inneren Pfad als "Loch" hinzufügen
    outerShape.holes.push(innerShape);
    
    // Extrudiere die Form mit Tiefe
    const extrudeSettings = {
      depth: 80,
      bevelEnabled: true,
      bevelThickness: 20,   // Größere Abrundung in der Tiefe
      bevelSize: 18,        // Größere Abrundung an den Kanten
      bevelOffset: 0,
      bevelSegments: 16,    // Viele Segmente für sehr glatte Rundungen
      curveSegments: 32,    // Noch mehr Segmente für glattere SVG-Kurven
      steps: 2,
    };
    
    return new THREE.ExtrudeGeometry(outerShape, extrudeSettings);
  }, []);

  // Animation
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.2;
    // Leichtes Schwanken
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
  });

  // Zentriere und skaliere das Logo
  // Das SVG hat Bounds ca. 200-1000 auf X und 260-1050 auf Y
  // Mittelpunkt ist ca. (610, 660)
  const scale = 0.0026;
  const centerX = -610 * scale;
  const centerY = 660 * scale; // Positiv weil Y invertiert wird

  return (
    <group ref={meshRef}>
      <mesh 
        geometry={geometry} 
        scale={[scale, -scale, scale]} 
        position={[centerX, centerY, -0.1]}
      >
        <meshStandardMaterial
          color="#067a3a"
          metalness={0.2}
          roughness={0.5}
          side={THREE.DoubleSide}
          emissive="#002d15"
          emissiveIntensity={0.15}
        />
      </mesh>
    </group>
  );
};

interface Interactive3DLogoProps {
  size?: number;
  className?: string;
}

// Die Hauptkomponente mit der 3D-Szene
const Interactive3DLogo = ({ size = 300, className = '' }: Interactive3DLogoProps) => {
  const [isInteracting, setIsInteracting] = useState(false);
  
  // Größerer Canvas-Bereich für Rotation ohne Clipping
  const canvasSize = size * 1.4;
  
  return (
    <div
      className={`cursor-grab active:cursor-grabbing ${className}`}
      style={{ width: canvasSize, height: canvasSize }}
    >
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
        {/* Beleuchtung */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, 5]} intensity={0.5} />
        <pointLight position={[0, 0, 5]} intensity={0.3} color="#00ff88" />

        {/* Das echte Logo als 3D-Objekt */}
        <Logo3D />
        
        {/* Kamera-Reset Controller */}
        <CameraReset isInteracting={isInteracting} />

        {/* OrbitControls für Maus-Interaktion */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minDistance={3.5}
          maxDistance={3.5}
          minPolarAngle={-Infinity}
          maxPolarAngle={Infinity}
          onStart={() => setIsInteracting(true)}
          onEnd={() => setIsInteracting(false)}
        />
      </Canvas>
    </div>
  );
};

export default Interactive3DLogo;
