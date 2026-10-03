"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import type { Destination } from "./island-experience";
type Props = {
  active: Destination;
  reduced: boolean;
  onVisit: (id: Destination) => void;
  onError: () => void;
};
function Box({
  p,
  s,
  color,
  rotation = 0,
  glow = false,
}: {
  p: [number, number, number];
  s: [number, number, number];
  color: string;
  rotation?: number;
  glow?: boolean;
}) {
  return (
    <mesh position={p} rotation={[0, rotation, 0]} castShadow receiveShadow>
      <boxGeometry args={s} />
      <meshStandardMaterial
        color={color}
        roughness={0.85}
        emissive={glow ? color : "#000000"}
        emissiveIntensity={glow ? 1.5 : 0}
      />
    </mesh>
  );
}
function Tree({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  return (
    <group position={[x, 0.18, z]} scale={scale}>
      <Box p={[0, 0.5, 0]} s={[0.15, 1, 0.15]} color="#78553e" />
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 0.85 + i * 0.38, 0]} castShadow>
          <coneGeometry args={[0.65 - i * 0.12, 0.95, 5]} />
          <meshStandardMaterial
            color={["#385b58", "#477168", "#648575"][i]}
            flatShading
          />
        </mesh>
      ))}
    </group>
  );
}
function Lamp({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0.2, z]}>
      <Box p={[0, 0.5, 0]} s={[0.055, 1, 0.055]} color="#2a343e" />
      <Box p={[0, 1.04, 0]} s={[0.2, 0.28, 0.2]} color="#ffc978" glow />
      <mesh position={[0, 1.23, 0]}>
        <coneGeometry args={[0.18, 0.12, 4]} />
        <meshStandardMaterial color="#333b44" />
      </mesh>
      <pointLight
        position={[0, 1, 0]}
        color="#ffb35f"
        intensity={1.4}
        distance={2.4}
      />
    </group>
  );
}
function Marker({
  p,
  title,
  number,
  id,
}: {
  p: [number, number, number];
  title: string;
  number: string;
  id: Destination;
  onVisit: Props["onVisit"];
}) {
  const anchor = useRef<THREE.Group>(null);
  const { camera, size, gl } = useThree();
  useFrame(() => {
    const button = gl.domElement
      .closest(".canvas-shell")
      ?.querySelector<HTMLElement>(`[data-landmark="${id}"]`);
    if (!button || !anchor.current) return;
    const point = anchor.current
      .getWorldPosition(new THREE.Vector3())
      .project(camera);
    button.style.left = `${(point.x * 0.5 + 0.5) * size.width}px`;
    button.style.top = `${(-point.y * 0.5 + 0.5) * size.height}px`;
    button.style.visibility = "visible";
  });
  return <group ref={anchor} position={p} name={`${number} ${title}`} />;
}
function World({
  onVisit,
  mobile,
}: {
  onVisit: Props["onVisit"];
  mobile: boolean;
}) {
  return (
    <group rotation={[0, -0.12, 0]}>
      <mesh position={[0, -1.25, 0]} rotation={[0, 0.2, Math.PI]} castShadow>
        <coneGeometry args={[5.5, 3.2, 9, 2]} />
        <meshStandardMaterial color="#3b454c" flatShading />
      </mesh>
      <mesh position={[0, -0.2, 0]} receiveShadow>
        <cylinderGeometry args={[5.25, 5.5, 0.65, 9]} />
        <meshStandardMaterial color="#596b5c" flatShading />
      </mesh>
      <mesh position={[0, 0.14, 0]} receiveShadow>
        <cylinderGeometry args={[5.18, 5.2, 0.13, 9]} />
        <meshStandardMaterial color="#849079" flatShading />
      </mesh>
      {[
        [3, -1.3, 2],
        [-3, -1.1, 2],
        [1, -2, -2],
        [-1, -2.4, 1],
      ].map((p, i) => (
        <mesh
          key={i}
          position={p as [number, number, number]}
          rotation={[0.3, i, 0.4]}
        >
          <dodecahedronGeometry args={[0.65, 0]} />
          <meshStandardMaterial color="#56616b" flatShading />
        </mesh>
      ))}
      <Box
        p={[0, 0.225, 1.7]}
        s={[7.8, 0.045, 0.6]}
        color="#c3b49a"
        rotation={-0.2}
      />
      <Box
        p={[0.9, 0.23, -0.5]}
        s={[0.65, 0.045, 4.5]}
        color="#c3b49a"
        rotation={-0.45}
      />
      {/* Hand-built workshop, broad gable roof, lit windows and deck. */}
      <group position={[-1.25, 0.22, 0.35]}>
        <Box p={[0, 0.05, 0]} s={[3.2, 0.16, 2.8]} color="#685245" />
        <Box p={[0, 0.95, 0]} s={[2.65, 1.8, 1.85]} color="#b48663" />
        {Array.from({ length: 8 }, (_, i) => (
          <Box
            key={i}
            p={[0, 0.3 + i * 0.2, 0.936]}
            s={[2.68, 0.025, 0.03]}
            color="#81583f"
          />
        ))}
        <mesh position={[0, 2.06, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
          <boxGeometry args={[2.05, 2.05, 2.35]} />
          <meshStandardMaterial color="#354d59" />
        </mesh>
        <Box p={[0, 1.5, 0]} s={[2.7, 1.1, 1.86]} color="#b48663" />
        <Box
          p={[-0.78, 1.14, 0.95]}
          s={[0.65, 0.68, 0.05]}
          color="#ffc27a"
          glow
        />
        <Box
          p={[0.78, 1.14, 0.95]}
          s={[0.65, 0.68, 0.05]}
          color="#ffc27a"
          glow
        />
        {[-0.78, 0.78].map((x) => (
          <group key={x}>
            <Box p={[x, 1.14, 0.99]} s={[0.045, 0.74, 0.035]} color="#6b4a39" />
            <Box p={[x, 1.14, 0.99]} s={[0.69, 0.045, 0.035]} color="#6b4a39" />
          </group>
        ))}
        <Box p={[0, 0.65, 0.97]} s={[0.52, 1.23, 0.08]} color="#483c36" />
        <Box p={[0, 1, 0.999]} s={[0.34, 0.4, 0.03]} color="#ffc27a" glow />
        <Box p={[0.85, 2.6, -0.35]} s={[0.4, 1.25, 0.42]} color="#866b61" />
        <Box p={[0.85, 3.22, -0.35]} s={[0.52, 0.12, 0.54]} color="#b39a7c" />
        <Box p={[0, 0.1, 1.37]} s={[1.5, 0.18, 0.6]} color="#a48765" />
        <pointLight
          position={[0, 1.4, 1.5]}
          color="#ffb463"
          intensity={4}
          distance={4}
        />
        <Box p={[-1.65, 0.55, 0.8]} s={[0.55, 0.1, 0.5]} color="#a17b55" />
        <Box p={[-1.65, 0.29, 0.8]} s={[0.08, 0.52, 0.1]} color="#755742" />
      </group>
      {/* Observatory and its angled telescope. */}
      <group position={[-2.3, 0.2, -2.3]}>
        <mesh position={[0, 0.65, 0]} castShadow>
          <cylinderGeometry args={[0.8, 0.9, 1.3, 12]} />
          <meshStandardMaterial color="#d2c3a1" flatShading />
        </mesh>
        <mesh position={[0, 1.3, 0]} castShadow>
          <sphereGeometry
            args={[0.85, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2]}
          />
          <meshStandardMaterial
            color="#719e9b"
            flatShading
            metalness={0.3}
            roughness={0.5}
          />
        </mesh>
        <group position={[0.2, 1.95, 0.1]} rotation={[0.3, 0, -0.65]}>
          <mesh>
            <cylinderGeometry args={[0.14, 0.19, 1.05, 8]} />
            <meshStandardMaterial color="#d9cbb1" />
          </mesh>
          <mesh position={[0, 0.55, 0]}>
            <cylinderGeometry args={[0.2, 0.2, 0.1, 8]} />
            <meshStandardMaterial color="#324b5b" />
          </mesh>
        </group>
        <Box p={[0, 0.65, 0.84]} s={[0.25, 0.53, 0.02]} color="#ffc27a" glow />
      </group>
      {/* Campus, colonnade and a tiny clock tower. */}
      <group position={[2, 0.25, -1.9]}>
        <Box p={[0, 0.52, 0]} s={[2.05, 1.05, 1.4]} color="#ccc1a4" />
        <Box p={[0, 1.14, 0]} s={[2.3, 0.2, 1.65]} color="#587076" />
        {[-0.7, -0.23, 0.23, 0.7].map((x) => (
          <group key={x}>
            <Box
              p={[x, 0.65, 0.72]}
              s={[0.22, 0.45, 0.03]}
              color="#ffce84"
              glow
            />
            <Box p={[x, 0.5, 0.96]} s={[0.1, 1, 0.1]} color="#e5d3aa" />
          </group>
        ))}
        <Box p={[0, 0.06, 0.9]} s={[2.3, 0.12, 0.7]} color="#ad9b7c" />
        <Box p={[0.4, 1.65, -0.2]} s={[0.65, 1, 0.65]} color="#d6c8a9" />
        <mesh
          position={[0.4, 2.4, -0.2]}
          rotation={[0, Math.PI / 4, 0]}
          castShadow
        >
          <coneGeometry args={[0.58, 0.6, 4]} />
          <meshStandardMaterial color="#4c7077" />
        </mesh>
        <mesh position={[0.4, 1.88, 0.135]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.19, 0.19, 0.025, 16]} />
          <meshStandardMaterial
            color="#fff0c7"
            emissive="#ffcb77"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
      <group position={[2.7, 0.2, 2.2]} rotation={[0, -0.3, 0]}>
        <Box p={[0, 0.55, 0]} s={[0.12, 1.1, 0.12]} color="#57483c" />
        <Box p={[0, 1.12, 0]} s={[0.55, 0.4, 0.45]} color="#be7557" />
        <Box p={[0, 1.12, 0.235]} s={[0.37, 0.06, 0.02]} color="#403c3b" />
        <Box p={[0.3, 1.4, 0]} s={[0.035, 0.45, 0.05]} color="#c6ad85" />
        <Box p={[0.42, 1.57, 0]} s={[0.25, 0.14, 0.05]} color="#ebbb78" />
      </group>
      <group position={[0.5, 0.26, 3.6]} rotation={[0, -0.2, 0]}>
        {Array.from({ length: 7 }, (_, i) => (
          <Box
            key={i}
            p={[0, 0, i * 0.22]}
            s={[1.15, 0.13, 0.19]}
            color={i % 2 ? "#957657" : "#a98b66"}
          />
        ))}
        <Box p={[-0.52, 0.4, 1.25]} s={[0.1, 0.75, 0.1]} color="#665644" />
        <Box p={[0.52, 0.4, 1.25]} s={[0.1, 0.75, 0.1]} color="#665644" />
      </group>
      {[
        [-3.9, 0.1, 1.1],
        [-3.8, -1.6, 0.8],
        [-0.3, -3.7, 1],
        [3.7, -0.4, 1.2],
        [3.9, 1.1, 0.85],
        [1.9, 3.4, 0.65],
        [-2.9, 2.8, 0.7],
        [-0.8, -3.8, 0.7],
      ]
        .slice(0, mobile ? 5 : 8)
        .map(([x, z, s], i) => (
          <Tree key={i} x={x} z={z} scale={s} />
        ))}
      {[
        [-2.8, 1.5],
        [0.7, 1.9],
        [2.2, -0.6],
        [0.1, -2.3],
      ].map(([x, z], i) => (
        <Lamp key={i} x={x} z={z} />
      ))}
      {!mobile &&
        Array.from({ length: 18 }, (_, i) => (
          <mesh
            key={i}
            position={[Math.sin(i * 2.4) * 4.5, 0.3, Math.cos(i * 2.4) * 4.3]}
            rotation={[i, 0.3, i]}
            castShadow
          >
            <dodecahedronGeometry args={[0.13 + (i % 3) * 0.07, 0]} />
            <meshStandardMaterial color={i % 2 ? "#b2b298" : "#638074"} />
          </mesh>
        ))}
      <Marker
        p={[-1, 3.65, 1]}
        title="Workshop"
        number="01"
        id="work"
        onVisit={onVisit}
      />
      <Marker
        p={[-2.6, 2.9, -2.3]}
        title="About"
        number="02"
        id="about"
        onVisit={onVisit}
      />
      <Marker
        p={[2.4, 3, -1.7]}
        title="Campus"
        number="03"
        id="education"
        onVisit={onVisit}
      />
      <Marker
        p={[3, 1.9, 2.6]}
        title="Say hello"
        number="04"
        id="contact"
        onVisit={onVisit}
      />
    </group>
  );
}
function CameraRig({
  active,
  reduced,
  mobile,
}: {
  active: Destination;
  reduced: boolean;
  mobile: boolean;
}) {
  const { camera, invalidate } = useThree();
  const target = useRef(new THREE.Vector3());
  useEffect(() => {
    camera.position.set(12, 12, 17);
    invalidate();
  }, [camera, invalidate]);
  useFrame((_, dt) => {
    const focus: Record<Destination, [number, number, number]> = {
      home: [0, 0, 0],
      work: [-1, 0.5, 0.5],
      about: [-2, 1, -2],
      education: [2, 0.7, -2],
      contact: [2, 0.3, 2],
    };
    const desired = new THREE.Vector3(...focus[active]);
    target.current.lerp(desired, reduced ? 1 : Math.min(1, dt * 2));
    const offset = mobile
      ? new THREE.Vector3(12, 12, 17)
      : new THREE.Vector3(10, 10, 14);
    const end = desired
      .clone()
      .add(offset.multiplyScalar(active === "home" ? 1 : 0.84));
    camera.position.lerp(end, reduced ? 1 : Math.min(1, dt * 1.4));
    camera.lookAt(target.current);
    if (
      camera.position.distanceTo(end) > 0.005 ||
      target.current.distanceTo(desired) > 0.005
    )
      invalidate();
  });
  return null;
}
export default function IslandScene(props: Props) {
  const [mobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 760,
  );
  return (
    <div className="canvas-shell">
      <Canvas
        frameloop="demand"
        dpr={mobile ? 1 : [1, 1.5]}
        shadows={!mobile}
        camera={{ position: [12, 12, 17], fov: 36 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        onCreated={({ gl }) => {
          gl.domElement.setAttribute(
            "aria-label",
            "Floating island with a workshop, observatory, campus and mailbox",
          );
          gl.domElement.addEventListener("webglcontextlost", props.onError, {
            once: true,
          });
        }}
        fallback={
          <div className="scene-loading">
            3D is unavailable. Choose Simple view to explore.
          </div>
        }
      >
        <ambientLight intensity={1.6} color="#a6b9ce" />
        <hemisphereLight args={["#b5c5de", "#665344", 1.2]} />
        <directionalLight
          position={[-3, 9, 5]}
          intensity={3}
          color="#ffdaad"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-left={-8}
          shadow-camera-right={8}
          shadow-camera-top={8}
          shadow-camera-bottom={-8}
        />
        <directionalLight position={[5, 4, -5]} intensity={2} color="#779dc9" />
        <CameraRig
          active={props.active}
          reduced={props.reduced}
          mobile={mobile}
        />
        <World onVisit={props.onVisit} mobile={mobile} />
      </Canvas>
      {(
        [
          ["work", "01", "Workshop"],
          ["about", "02", "About"],
          ["education", "03", "Campus"],
          ["contact", "04", "Say hello"],
        ] as const
      ).map(([id, number, title]) => (
        <button
          key={id}
          data-landmark={id}
          className="landmark"
          onClick={() => props.onVisit(id)}
        >
          <span>{number}</span> {title} <b aria-hidden="true">↗</b>
        </button>
      ))}
    </div>
  );
}
