type Props = { slug: string };

export function CaseStudyVisual({ slug }: Props) {
  if (slug === "jarvis-os") {
    return (
      <div className="case-visual case-visual--jarvis" aria-label="JARVIS OS architecture visual">
        <div className="case-visual__meta"><span>LIVE SYSTEM MAP</span><span>VOICE / MEMORY / AGENTS / TOOLS</span></div>
        <div className="jarvis-system">
          <div className="jarvis-system__core"><small>ORCHESTRATOR</small><strong>J</strong><span>CONTEXT ACTIVE</span></div>
          {[
            ["VOICE", "12%", "22%"], ["MEMORY", "73%", "18%"], ["AGENTS", "75%", "68%"], ["TOOLS", "11%", "72%"],
          ].map(([label, left, top]) => (
            <div className="jarvis-system__node" style={{ left, top }} key={label}><i />{label}</div>
          ))}
          <svg viewBox="0 0 100 100" aria-hidden="true"><line x1="50" y1="50" x2="20" y2="28"/><line x1="50" y1="50" x2="80" y2="25"/><line x1="50" y1="50" x2="80" y2="75"/><line x1="50" y1="50" x2="19" y2="77"/></svg>
        </div>
      </div>
    );
  }

  if (slug === "weed-removal-robot") {
    return (
      <div className="case-visual case-visual--robot" aria-label="Weed Removal Robot perception and removal visual">
        <div className="case-visual__meta"><span>FIELD SYSTEM</span><span>PERCEPTION / SAFETY / REMOVAL</span></div>
        <div className="robot-field">
          <div className="robot-field__lane robot-field__lane--1" />
          <div className="robot-field__lane robot-field__lane--2" />
          <div className="robot-field__lane robot-field__lane--3" />
          <div className="robot-platform"><span>CAMERA</span><strong>AI</strong><small>REMOVAL</small></div>
          <div className="robot-zone robot-zone--safe">CROP SAFE</div>
          <div className="robot-zone robot-zone--target">WEED</div>
        </div>
      </div>
    );
  }

  if (slug === "freshfusion") {
    return (
      <div className="case-visual case-visual--fresh" aria-label="FreshFusion sensor fusion visual">
        <div className="case-visual__meta"><span>QUALITY PIPELINE</span><span>VISION + GAS + ENVIRONMENT</span></div>
        <div className="fresh-system">
          <div className="fresh-system__fruit">FRUIT</div>
          <div className="fresh-system__sensor fresh-system__sensor--vision">VISION</div>
          <div className="fresh-system__sensor fresh-system__sensor--gas">MQ135</div>
          <div className="fresh-system__sensor fresh-system__sensor--env">TEMP / RH</div>
          <div className="fresh-system__fusion"><small>SENSOR</small><strong>FUSION</strong></div>
          <div className="fresh-system__output">FRESH <span>/</span> OVERRIPE <span>/</span> SPOILED</div>
        </div>
      </div>
    );
  }

  return (
    <div className="case-visual case-visual--safety" aria-label="Smart Safety Wristband response visual">
      <div className="case-visual__meta"><span>CONNECTED RESPONSE</span><span>WEARABLE / SIGNAL / LOCATION / RESPONSE</span></div>
      <div className="safety-system">
        <div className="safety-system__band"><small>WEARABLE</small><strong>SOS</strong></div>
        <div className="safety-system__ring safety-system__ring--1" />
        <div className="safety-system__ring safety-system__ring--2" />
        <div className="safety-system__node safety-system__node--location">LOCATION</div>
        <div className="safety-system__node safety-system__node--response">RESPONSE</div>
      </div>
    </div>
  );
}
