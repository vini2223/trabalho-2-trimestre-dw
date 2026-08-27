import {
  renderAlunos,
  renderBuyerProf,
  renderBuyerProduct,
  renderCorrupSab,
  renderDev,
  renderEscalacao,
  renderOwner,
  renderPO,
  renderResult,
  renderSetup,
  renderSM,
} from "../../js/app.js";

function LegacyPanel({ render }) {
  return <div dangerouslySetInnerHTML={{ __html: render() }} />;
}

export function SetupPanel() { return <LegacyPanel render={renderSetup} />; }
export function StudentsPanel() { return <LegacyPanel render={renderAlunos} />; }
export function EscalationPanel() { return <LegacyPanel render={renderEscalacao} />; }
export function ScrumMasterPanel() { return <LegacyPanel render={renderSM} />; }
export function OwnerPanel() { return <LegacyPanel render={renderOwner} />; }
export function ProductOwnerPanel() { return <LegacyPanel render={renderPO} />; }
export function DevelopersPanel() { return <LegacyPanel render={renderDev} />; }
export function BuyerRolePanel() { return <LegacyPanel render={renderBuyerProf} />; }
export function BuyerProductPanel() { return <LegacyPanel render={renderBuyerProduct} />; }
export function CorruptionSabotagePanel() { return <LegacyPanel render={renderCorrupSab} />; }
export function FinalResultPanel() { return <LegacyPanel render={renderResult} />; }
