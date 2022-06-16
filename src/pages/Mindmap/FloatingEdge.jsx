// import { useCallback } from "react";
// import { useStore, getBezierPath } from "react-flow-renderer";

// import { getEdgeParams } from "./utils";

// function FloatingEdge({ id, source, target, markerEnd, style }) {
//   const sourceNode = useStore(
//     useCallback((store) => store.nodeInternals.get(source), [source])
//   );
//   const targetNode = useStore(
//     useCallback((store) => store.nodeInternals.get(target), [target])
//   );

//   if (!sourceNode || !targetNode) {
//     return null;
//   }

//   const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(
//     sourceNode,
//     targetNode
//   );

//   const d = getBezierPath({
//     sourceX: sx,
//     sourceY: sy,
//     sourcePosition: sourcePos,
//     targetPosition: targetPos,
//     targetX: tx,
//     targetY: ty,
//   });

//   return (
//     <g className="react-flow__connection">
//       <path
//         id={id}
//         className="react-flow__edge-path"
//         d={d}
//         markerEnd={markerEnd}
//         style={style}
//       />
//     </g>
//   );
// }

// export default FloatingEdge;
import React from "react";
import {
  getBezierPath,
  getEdgeCenter,
  getMarkerEnd,
} from "react-flow-renderer";

import "./styles.scss";

const foreignObjectSize = 40;

// const onEdgeClick = (evt, id) => {
//   evt.stopPropagation();
//   alert(`remove ${id}`);
// };

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
        requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <body>
          <button className="edgebutton">×</button>
        </body>
      </foreignObject>
    </>
  );
}
