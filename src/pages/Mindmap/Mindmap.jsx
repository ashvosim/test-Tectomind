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
import { Input, Button } from "antd";

import FloatingEdge from "./FloatingEdge";
import FloatingConnectionLine from "./FloatingConnectionLine";
// import { createNodesAndEdges } from "./utils";

import "./styles.scss";
import MindMapCard from "./MindMapCard";
import DefaultNode from "./DefaultNode";

// const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges(5);
const getNodeId = () => `randomnode_${+new Date()}}`;

const initialNodes = [
  {
    id: "ewb-1",
    data: { label: <MindMapCard id={getNodeId()} title="Start!" /> },
    position: { x: 0, y: 0 },
    style: {
      width: "220px",
    },
  },
];

const edgeTypes = {
  buttonedge: FloatingEdge,
};
const nodeTypes = {
  default: DefaultNode,
};

const NodeAsHandleFlow = () => {
  const [input, setInput] = useState("");
  const [selectedNodeId, setSelectedNodeId] = useState("");

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = (params) =>
    setEdges((eds) =>
      addEdge(
        {
          ...params,
          type: "buttonedge",
          markerEnd: { type: MarkerType.Arrow },
        },
        eds
      )
    );

  const onAddNode = useCallback(() => {
    const id = getNodeId();
    const newNode = {
      id: id,
      data: {
        label: (
          <MindMapCard
            id={id}
            title={input}
            percent={Math.floor(Math.random() * 100)}
          />
        ),
      },
      position: {
        // x: Math.random() * window.innerWidth - 100,
        // y: Math.random() * window.innerHeight,
        x: window.innerWidth - 400,
        y: 0,
      },
      style: {
        width: "220px",
      },
    };
    if (input) {
      setNodes((nds) => nds.concat(newNode));
    }
  }, [input]);

  const onDeleteSelectedNode = useCallback(() => {
    if (selectedNodeId) {
      setNodes((p) => p.filter((node) => node.id !== selectedNodeId));
    }
  }, [selectedNodeId]);

  return (
    <div className="floatingedges">
      <div className="buttons-container">
        <Input.Search
          value={input}
          style={{ width: 200, marginRight: 10 }}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Node title"
          allowClear
          enterButton="Add node"
          onSearch={onAddNode}
        />
        <Button onClick={onDeleteSelectedNode}>Delete selected node</Button>
        {/* <Button onClick={onDeleteSelectedEdge}>Delete selected edge</Button> */}
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(e, node) => {
          setSelectedNodeId(node.id);
        }}
        onEdgeClick={(e, edge) => {
          setEdges((p) => p.filter((node) => node.id !== edge.id));
        }}
        onConnect={onConnect}
        fitView
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
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
