import { Handle, Position } from "react-flow-renderer";

export default function DefaultNode({ data }) {
  return (
    <>
      <Handle type="target" position={Position.Left} />
      {data.label}
      <Handle type="source" position={Position.Right} />
    </>
  );
}
