// ##########################################
// #        Import External Components      #
// ##########################################
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Loader } from '@react-three/drei';

// ##########################################
// #        Import Local Components         #
// ##########################################
import Model from '../models/Model.js';

// ##########################################
// #       Component Specific Styling       #
// ##########################################

// ##########################################
// #            Player Component            #
// ##########################################
export default function Player(props) {
	
	const modelAngle = Math.PI / 2;
	
	return (
		<>
			<Canvas
				camera={{ position: [2, 0, 12.25], fov: 10 }}
				width={props.width}
				height={props.height}
				style={{
						backgroundColor: 'transparent',
						width: '100%',
						height: '100%',
				 }}
			>
				<Suspense fallback={null}>
					<ambientLight intensity={1.25} />
					<ambientLight intensity={0.1} />
					<directionalLight intensity={0.4} />
					<Model position={[0, -0.95, 0]} />
					<OrbitControls enableZoom={false} minPolarAngle={modelAngle} maxPolarAngle={modelAngle}/>
				</Suspense>
			</Canvas>
			<Loader />
		</>
  );
}