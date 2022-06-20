// ##########################################
// #        Import External Components      #
// ##########################################
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styled from '@emotion/styled/macro';

// ##########################################
// #        Import Local Components         #
// ##########################################


// ##########################################
// #       Component Specific Styling       #
// ##########################################
const CubeContainer = styled.div`
  
`;

// ##########################################
// #             Cube Component             #
// ##########################################
export default function Cube(props) {
	
	
	const mountRef = useRef(null);
	
	useEffect(() => {
		
		// Set Scene
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 25, props.width/props.height, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer( { alpha: true } );

		// Set size of canvas
    renderer.setSize( props.width, props.height );
    mountRef.current.appendChild( renderer.domElement );
		
		// Set object's mesh
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var cube = new THREE.Mesh( geometry, material );

		// Add object to the scene and adjust the camera position
    scene.add( cube );
    camera.position.z = 5;

		// Animate the object
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    }

		// Resize the canvas on window resize
    let onWindowResize = function () {
      camera.aspect = props.width / props.height;
      camera.updateProjectionMatrix();
      renderer.setSize( props.width, props.height );
    }

    window.addEventListener("resize", onWindowResize, false);

    animate();

    return () => mountRef.current.removeChild( renderer.domElement);
  }, []);
	
  return (
    <CubeContainer ref={mountRef} />
  );
}