import { useEffect, useState } from "react";
import { attachImportHandler, attachRosterSearchHandler, init } from "../js/app.js";
import "../css/style.css";
import {
  BuyerProductPanel,
  BuyerRolePanel,
  CorruptionSabotagePanel,
  DevelopersPanel,
  EscalationPanel,
  FinalResultPanel,
  OwnerPanel,
  ProductOwnerPanel,
  ScrumMasterPanel,
  SetupPanel,
  StudentsPanel,
} from "./components/AppPanels.jsx";

const PANELS = {
  setup: SetupPanel,
  alunos: StudentsPanel,
  escalacao: EscalationPanel,
  sm: ScrumMasterPanel,
  owner: OwnerPanel,
  po: ProductOwnerPanel,
  dev: DevelopersPanel,
  buyerProf: BuyerRolePanel,
  buyerProduct: BuyerProductPanel,
  corrupsab: CorruptionSabotagePanel,
  result: FinalResultPanel,
};

function PanelContent() {
  const [version, setVersion] = useState(0);
  const [tab, setTab] = useState("setup");
  const Panel = PANELS[tab];

  useEffect(() => {
    const update = () => {
      setTab(document.querySelector(".tab.active")?.dataset.tab || "setup");
      setVersion(current => current + 1);
    };
    window.addEventListener("panel:update", update);
    init();
    return () => window.removeEventListener("panel:update", update);
  }, []);

  useEffect(() => {
    void version;
    attachRosterSearchHandler();
    attachImportHandler();
  }, [version, tab]);

  return <Panel />;
}

export default function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="topbar">
        <div>
          <h1>Painel de Avaliação — Simulação Scrum Competitiva</h1>
          <div className="sub" id="fileNameLbl">(nenhum arquivo carregado)</div>
        </div>
        <div className="topbar-actions">
          <div className="fontctrl">
            <span className="lbl">Fonte</span>
            <button id="fontMinus" title="Diminuir fonte">A−</button>
            <button id="fontReset" title="Restaurar fonte padrão">A</button>
            <button id="fontPlus" title="Aumentar fonte">A+</button>
            <span className="lbl" id="fontLbl">16px</span>
          </div>
          <input type="file" id="fileInput" accept="application/json,.json" style={{ display: "none" }} />
          <button className="btn btn-load" id="btnLoad">📂 Carregar dados (.json)</button>
          <button className="btn btn-save" id="btnSave">💾 Salvar dados (.json)</button>
          <button className="btn btn-reset" id="btnReset">Limpar tudo</button>
        </div>
      </div>
      <div className="tabs" id="tabsBar" />
      <div className="wrap">
        <div id="panelWrap">
          <PanelContent />
        </div>
        <div className="footer-note">Os dados ficam apenas nesta janela até você clicar em "Salvar dados (.json)". Salve com frequência, especialmente ao final de cada Sprint.</div>
      </div>
    </>
  );
}
