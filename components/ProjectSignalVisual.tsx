export function ProjectSignalVisual({ slug }: { slug: string }) {
  if (slug === "jarvis-os") {
    return (
      <div className="project-preview-graphic project-preview-graphic--jarvis">
        <span className="preview-chip">VOICE</span>
        <span className="preview-chip">MEMORY</span>
        <span className="preview-chip">AGENTS</span>
        <span className="preview-chip">TOOLS</span>
        <div className="preview-core">J</div>
        <i className="preview-link preview-link--a" />
        <i className="preview-link preview-link--b" />
        <i className="preview-link preview-link--c" />
      </div>
    );
  }

  if (slug === "weed-removal-robot") {
    return (
      <div className="project-preview-graphic project-preview-graphic--robot">
        <div className="field-row field-row--1" />
        <div className="field-row field-row--2" />
        <div className="field-row field-row--3" />
        <div className="robot-body"><span>CV</span></div>
        <i className="crop-safe crop-safe--1" />
        <i className="crop-safe crop-safe--2" />
        <i className="weed-target" />
      </div>
    );
  }

  if (slug === "freshfusion") {
    return (
      <div className="project-preview-graphic project-preview-graphic--fresh">
        <div className="fruit-scan">FRUIT</div>
        <span className="sensor-node sensor-node--gas">GAS</span>
        <span className="sensor-node sensor-node--env">TEMP</span>
        <span className="sensor-node sensor-node--vision">VISION</span>
        <div className="fusion-output">FUSION</div>
      </div>
    );
  }

  return (
    <div className="project-preview-graphic project-preview-graphic--safety">
      <div className="wristband-ring"><span>SOS</span></div>
      <i className="signal-ring signal-ring--1" />
      <i className="signal-ring signal-ring--2" />
      <i className="signal-ring signal-ring--3" />
      <span className="location-ping">LOCATION</span>
    </div>
  );
}
