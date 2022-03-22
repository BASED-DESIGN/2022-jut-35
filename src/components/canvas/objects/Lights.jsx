import React, { useRef } from "react"
import * as THREE from "three"
import { useHelper } from "@react-three/drei"

function UseHelpers({ refDirectionLight, refSpotLight }) {
  useHelper(refDirectionLight, THREE[`DirectionalLightHelper`]);
  useHelper(refSpotLight, THREE[`SpotLightHelper`]);
  return null;
}

const Lights = React.memo(
  ({
    isUseHelper = true,
    ambientLightColor = 0xffffff,
    ambientLightIntensity = 0.5,
    directionalLightColor = 0xffffff,
    directionalLightIntensity,
    directionalLightPosition,
    spotLightColor = 0xffffff,
    spotLightIntensity,
    spotLightPosition,
  }) => {
    const refDirectionLight = useRef();
    const refSpotLight = useRef();

    return (
      <group>
        {isUseHelper && (
          <UseHelpers
            refDirectionLight={refDirectionLight}
            refSpotLight={refSpotLight}
          />
        )}
        <ambientLight
          color={ambientLightColor}
          intensity={ambientLightIntensity}
        />
        <directionalLight
          ref={refDirectionLight}
          color={directionalLightColor}
          intensity={directionalLightIntensity}
          position={directionalLightPosition}
        />
        <spotLight
          ref={refSpotLight}
          color={spotLightColor}
          intensity={spotLightIntensity}
          position={spotLightPosition}
          // angle={Math.PI / 1.2}
        />
      </group>
    );
  }
);

Lights.propTypes = {};

export default Lights;