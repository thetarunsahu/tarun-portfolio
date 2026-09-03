export type CaseStudy = {
  intent: string;
  focus: string[];
  flow: string[];
  current: string;
  next: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  "jarvis-os": {
    intent: "Explore a personal AI environment where conversation can become structured action without turning the interface into a pile of disconnected utilities.",
    focus: ["CONTEXT", "ORCHESTRATION", "SPECIALIZED AGENTS", "TOOLS", "MEMORY"],
    flow: ["YOU", "CONVERSATION", "CONTEXT", "ORCHESTRATOR", "AGENTS", "TOOLS", "COMPUTER"],
    current: "Alpha-stage system work. The architecture and capabilities are evolving, so this case study separates the product direction from what is already represented in the repository.",
    next: "Deepen continuity, tool execution, verification and the interface that makes long-running computer work understandable.",
  },
  "weed-removal-robot": {
    intent: "Investigate a crop-safe autonomous platform that can perceive weeds, navigate field structure and support selective mechanical removal rather than treating the field as an undifferentiated surface.",
    focus: ["PERCEPTION", "NAVIGATION", "CROP SAFETY", "REMOVAL", "FIELD FEEDBACK"],
    flow: ["FIELD", "CAMERA / SENSORS", "CROP–WEED SEPARATION", "PATH", "REMOVAL MODULE", "FEEDBACK"],
    current: "In-development robotics research. Visuals and architecture on this site should be read as system direction unless backed by a physical prototype or repository evidence.",
    next: "Validate detection, mechanical removal reliability, crop clearance, throughput and a prototype architecture that can be tested safely.",
  },
  freshfusion: {
    intent: "Combine visual evidence with simple environmental sensing so fruit-quality decisions are not based on a single signal.",
    focus: ["CAMERA", "MQ135", "TEMPERATURE", "HUMIDITY", "SENSOR FUSION"],
    flow: ["FRUIT", "VISUAL ANALYSIS", "GAS + ENVIRONMENT", "FUSION", "QUALITY MODEL", "FRESH / OVERRIPE / SPOILED"],
    current: "Prototype-stage system using a camera and low-cost sensing as the core demonstration path.",
    next: "Improve data quality, repeatability, calibration and model evaluation before treating any classification as production-grade.",
  },
  "smart-safety-wristband": {
    intent: "Treat a wearable safety device as one part of a connected response system rather than as an isolated panic button.",
    focus: ["WEARABLE", "EMERGENCY SIGNAL", "SENSORS", "LOCATION", "RESPONSE SOFTWARE"],
    flow: ["USER", "WEARABLE", "EMERGENCY EVENT", "LOCATION / CONTEXT", "COMMUNICATION", "RESPONSE"],
    current: "Prototype-stage connected-system concept. The portfolio intentionally avoids claiming reliability, coverage or emergency guarantees that have not been validated.",
    next: "Validate hardware behavior, communication reliability, power constraints and the response workflow under realistic failure conditions.",
  },
};
