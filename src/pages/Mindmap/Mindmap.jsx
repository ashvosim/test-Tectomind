import React, { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "react-flow-renderer";
import { Button } from "antd";
import FloatingEdge from "./FloatingEdge";
import FloatingConnectionLine from "./FloatingConnectionLine";
import { createNodesAndEdges } from "./utils";

import "./styles.scss";

const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges(5);

const edgeTypes = {
  floating: FloatingEdge,
};

const NodeAsHandleFlow = () => {
  const [numOfNodes, setNumOfNodes] = useState(5);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) =>
    setEdges((eds) =>
      addEdge(
        { ...params, type: "floating", markerEnd: { type: MarkerType.Arrow } },
        eds
      )
    );

  const onAdd = useCallback(() => {
    const { nodes: newNodes, edges: newEdges } = createNodesAndEdges(
      numOfNodes + 1
    );
    setNodes(newNodes);
    setEdges(newEdges);
    if (numOfNodes < 9) {
      setNumOfNodes((p) => p + 1);
    } else {
      alert("max nodes count for demo is 10");
    }
  }, [numOfNodes]);

  const onDeleteSelectedNode = useCallback(() => {
    const { nodes: newNodes, edges: newEdges } = createNodesAndEdges(
      numOfNodes - 1
    );
    setNodes(newNodes);
    setEdges(newEdges);
    if (numOfNodes > 0) {
      setNumOfNodes((p) => p - 1);
    }
  }, [numOfNodes]);

  return (
    <div className="floatingedges">
      <div className="buttons-container">
        <Button type="primary" onClick={onAdd}>
          Add subtask
        </Button>
        <Button onClick={onDeleteSelectedNode}>Delete subtask</Button>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        edgeTypes={edgeTypes}
        connectionLineComponent={FloatingConnectionLine}
      >
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default NodeAsHandleFlow;
