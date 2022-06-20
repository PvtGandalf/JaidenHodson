// ##########################################
// #        Import External Components      #
// ##########################################
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from '@emotion/styled/macro';

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
				<ambientLight intensity={1.25} />
				<ambientLight intensity={0.1} />
				<directionalLight intensity={0.4} />
				<Suspense fallback={null}>
					<Model position={[0, -0.95, 0]} />
				</Suspense>
				<OrbitControls enableZoom={false} minPolarAngle={modelAngle} maxPolarAngle={modelAngle}/>
		</Canvas>
  );
}