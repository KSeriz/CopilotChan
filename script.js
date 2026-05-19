const releases = [
  {
    date: "2021-06-29",
    era: "Completion",
    title: "Technical Preview: AI pair programmerとして登場",
    body: "GitHubとOpenAIがGitHub Copilotの技術プレビューを発表。VS Code内でコメントや周辺コードから行・関数の候補を生成する、補完中心の体験から始まりました。",
    impact: "当時の主役は「入力中の開発者を先回りする」こと。Copilotという名前の意味も、まずはエディタ内の相棒でした。",
    sources: [
      ["Introducing GitHub Copilot", "https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/"]
    ]
  },
  {
    date: "2022-06-21",
    era: "GA",
    title: "Individual向けに一般提供",
    body: "技術プレビューを終え、個人開発者向けにGitHub Copilotが一般提供されました。サブスクリプション製品として広く使える段階に移ります。",
    impact: "研究デモや招待制プレビューではなく、日常の開発ツールとして配布され始めた転換点です。",
    sources: [
      ["Copilot available to individual developers", "https://github.blog/changelog/2022-06-21-github-copilot-is-now-available-to-individual-developers/"]
    ]
  },
  {
    date: "2023-02-14",
    era: "Business",
    title: "Copilot for Businessで組織利用へ",
    body: "GitHub Copilot for Businessが広く提供され、組織・企業での利用、ポリシー、管理の文脈が前面に出ます。",
    impact: "個人の生産性ツールから、組織導入とガバナンスを伴う開発基盤へ広がり始めました。",
    sources: [
      ["Copilot for Business is now available", "https://github.blog/2023-02-14-github-copilot-for-business-is-now-available/"]
    ]
  },
  {
    date: "2023-03-22",
    era: "Copilot X",
    title: "Copilot X: Chat、PR、Docs、CLIの構想",
    body: "GitHub Copilot Xとして、GPT-4時代の開発体験を提示。Chat、Pull Request支援、Docs、CLIなど、補完を超えるCopilot像が示されました。",
    impact: "「コード候補」から「開発ライフサイクル全体に入るAI」への方向づけが明確になります。",
    sources: [
      ["GitHub Copilot X", "https://github.blog/2023-03-22-github-copilot-x-the-ai-powered-developer-experience/"]
    ]
  },
  {
    date: "2023-12-29",
    era: "Chat",
    title: "Copilot Chatが一般提供",
    body: "Copilot ChatがVisual Studio CodeとVisual Studioで一般提供され、全Copilotプランに含まれる形になりました。",
    impact: "自然言語でコードを説明させ、修正し、テストを相談する体験が主流機能になります。",
    sources: [
      ["Copilot Chat generally available", "https://github.blog/news-insights/product-news/github-copilot-chat-now-generally-available-for-organizations-and-individuals/"]
    ]
  },
  {
    date: "2024-02-27",
    era: "Enterprise",
    title: "Copilot Enterpriseが一般提供",
    body: "GitHub Copilot Enterpriseが一般提供され、GitHub上の組織文脈、内部コード、ナレッジベースにより近い体験へ進みました。",
    impact: "大規模組織での導入を前提に、文脈理解と統制が製品の中心要件になります。",
    sources: [
      ["Copilot Enterprise GA", "https://github.blog/2024-02-27-github-copilot-enterprise-is-now-generally-available/"]
    ]
  },
  {
    date: "2024-04-29",
    era: "Workspace",
    title: "Copilot Workspace: ideaからcodeへ",
    body: "GitHub Copilot Workspaceが発表され、Issueや自然言語タスクを起点に、調査、計画、実装、検証、PR作成へ進むCopilot-nativeな開発環境が提示されました。",
    impact: "補完やChatの枠を超え、タスク単位で開発の流れを組み立てるUIが登場します。",
    sources: [
      ["GitHub Copilot Workspace", "https://github.blog/news-insights/product-news/github-copilot-workspace/"]
    ]
  },
  {
    date: "2024-09-18",
    era: "Security",
    title: "Copilot Autofixがpublic repoで無料利用可能に",
    body: "CodeQL code scanning alertsに対するCopilot Autofixが、すべてのpublic repositoriesで無料の一般提供となりました。",
    impact: "Copilotは新規コードを書くだけでなく、既存の脆弱性修正にも関与するようになります。",
    sources: [
      ["Copilot Autofix for CodeQL alerts", "https://github.blog/changelog/2024-09-18-now-available-for-free-on-all-public-repositories-copilot-autofix-for-codeql-code-scanning-alerts/"]
    ]
  },
  {
    date: "2024-12-18",
    era: "Access",
    title: "Copilot Freeが登場",
    body: "GitHub Copilot Freeが発表され、VS CodeとGitHub上で無料枠からCopilotを試せるようになりました。同日、GitHub上のCopilot Chatも全ユーザー向けに一般提供されています。",
    impact: "Copilotが有料の専門ツールから、GitHubアカウントで触れられる入口を持つ体験へ広がります。",
    sources: [
      ["Announcing GitHub Copilot Free", "https://github.blog/changelog/2024-12-18-announcing-github-copilot-free"],
      ["Copilot Chat on GitHub GA", "https://github.blog/changelog/2024-12-18-copilot-chat-on-github-is-now-generally-available-for-all-users"]
    ]
  },
  {
    date: "2025-02-06",
    era: "Agent mode",
    title: "Agent modeとNext Edit Suggestions",
    body: "GitHubはCopilot agent mode、Copilot Editsの一般提供、複数モデル対応などを発表。組織コードベースをまたぐ変更生成・リファクタリングの方向に踏み込みました。",
    impact: "Chatに答えさせるだけでなく、複数ファイルの変更を任せるエージェント型の体験が前に出ます。",
    sources: [
      ["Agent mode press release", "https://github.com/newsroom/press-releases/agent-mode"]
    ]
  },
  {
    date: "2025-05-19",
    era: "Coding agent",
    title: "非同期Coding agentがpublic previewに",
    body: "GitHub Copilot coding agentがpublic previewとして登場。GitHub IssuesやVS Codeからタスクを委任し、Actionsベースの環境で作業してPull Requestを作る流れが示されました。",
    impact: "Copilotは同じ画面で答える相手から、別環境で作業を進めてレビューに戻す共同作業者へ近づきます。",
    sources: [
      ["Coding agent press release", "https://github.com/newsroom/press-releases/coding-agent-for-github-copilot"],
      ["About Copilot coding agent", "https://docs.github.com/en/copilot/concepts/about-copilot-coding-agent"]
    ]
  },
  {
    date: "2025-09-25",
    era: "CLI",
    title: "Copilot CLIがpublic preview",
    body: "GitHub Copilot CLIがpublic previewになり、ターミナル上でコードベースとGitHub文脈を理解するエージェントとして使えるようになりました。",
    impact: "IDEだけでなく、開発者が長時間過ごすターミナルにもCopilotのエージェント機能が入ります。",
    sources: [
      ["Copilot CLI public preview", "https://github.blog/changelog/2025-09-25-github-copilot-cli-is-now-in-public-preview"]
    ]
  },
  {
    date: "2026-02-25",
    era: "CLI GA",
    title: "Copilot CLIが一般提供",
    body: "GitHub Copilot CLIがすべてのCopilot subscribers向けに一般提供。Plan mode、Autopilot、複数エージェント、MCP、plugins、skills、review/diff/undoなどが整理されました。",
    impact: "Copilotはターミナルネイティブな開発エージェントとして、計画、編集、検証、記憶まで担う製品面を持ちます。",
    sources: [
      ["Copilot CLI generally available", "https://github.blog/changelog/2026-02-25-github-copilot-cli-is-now-generally-available/"]
    ]
  },
  {
    date: "2026-02-26",
    era: "Agent HQ",
    title: "ClaudeとCodex agentsがCopilot上で利用可能に",
    body: "ClaudeとOpenAI CodexがCopilot Business / Proユーザーにも展開され、GitHub.com、GitHub Mobile、VS Codeで複数のcoding agentを扱う方向が強まりました。",
    impact: "Copilotは単一モデルの機能名ではなく、複数エージェントを管理するGitHub内の制御面へ進化します。",
    sources: [
      ["Claude and Codex agents", "https://github.blog/changelog/2026-02-26-claude-and-codex-now-available-for-copilot-business-pro-users/"]
    ]
  },
  {
    date: "2026-04-02",
    era: "SDK",
    title: "Copilot SDKがpublic preview",
    body: "Copilot SDKがpublic previewになり、Node.js/TypeScript、Python、Go、.NET、JavaからCopilotのagentic capabilitiesをアプリやワークフローへ組み込めるようになりました。",
    impact: "GitHub内の製品体験に閉じず、Copilotの実行基盤を外部アプリケーションへ埋め込める段階です。",
    sources: [
      ["Copilot SDK public preview", "https://github.blog/changelog/2026-04-02-copilot-sdk-in-public-preview"]
    ]
  },
  {
    date: "2026-04-13",
    era: "Remote",
    title: "CLI remote controlとData Residency",
    body: "Copilot CLIのremote sessionsがpublic previewとなり、WebやGitHub Mobileから実行中セッションを監視・操作可能に。同日、CopilotのUS/EU data residencyとFedRAMP-authorized modelsも発表されました。",
    impact: "ローカルCLI、Web、モバイルがつながり、企業向けにはデータ所在とコンプライアンスの要件も補強されます。",
    sources: [
      ["Remote control CLI sessions", "https://github.blog/changelog/2026-04-13-remote-control-cli-sessions-on-web-and-mobile-in-public-preview"],
      ["Copilot data residency", "https://github.blog/changelog/2026-04-13-copilot-data-residency-in-us-eu-and-fedramp-compliance-now-available/"]
    ]
  },
  {
    date: "2026-05-13",
    era: "JetBrains",
    title: "JetBrains IDEsにCopilot CLI agent",
    body: "JetBrains IDEs向けGitHub CopilotにCopilot CLI agentとunified sessions viewが入り、長時間実行タスクや複数セッションの状態をIDE内で追えるようになりました。",
    impact: "IDEの種類を問わず、エージェントセッションを委任・追跡する体験が標準化されていきます。",
    sources: [
      ["Copilot CLI agent for JetBrains", "https://github.blog/changelog/2026-05-13-introducing-copilot-cli-agent-and-unified-sessions-view-in-github-copilot-for-jetbrains-ides"]
    ]
  },
  {
    date: "2026-05-17",
    era: "Model base",
    title: "GPT-5.3-CodexがBusiness/Enterpriseのbase modelに",
    body: "GitHub Copilot BusinessとEnterpriseで、GPT-5.3-CodexがGPT-4.1を置き換えるbase modelになりました。GitHubは同モデルをCopilot向け初のLTS modelとも位置づけています。",
    impact: "最新のCopilotはUIやエージェントだけでなく、企業レビューに耐えるモデル安定性と利用ポリシーも製品価値の一部になっています。",
    sources: [
      ["GPT-5.3-Codex base model", "https://github.blog/changelog/2026-05-17-gpt-5-3-codex-is-now-the-base-model-for-copilot-business-and-enterprise"]
    ]
  }
];

const timeline = document.querySelector("#timelineItems");
const sourceGrid = document.querySelector("#sourceGrid");
const progressBar = document.querySelector("#progressBar");

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}

function renderTimeline() {
  timeline.innerHTML = releases.map((item) => {
    const links = item.sources.map(([label, href]) => (
      `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`
    )).join("");

    return `
      <article class="release-card">
        <div class="release-card__meta">
          <span class="pill">${formatDate(item.date)}</span>
          <span class="pill pill--era">${item.era}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <div class="release-card__impact">
          <span>Why it mattered</span>
          <p>${item.impact}</p>
        </div>
        <div class="release-card__links">${links}</div>
      </article>
    `;
  }).join("");
}

function renderSources() {
  const seen = new Map();
  releases.forEach((item) => {
    item.sources.forEach(([label, href]) => {
      if (!seen.has(href)) seen.set(href, label);
    });
  });

  sourceGrid.innerHTML = Array.from(seen.entries()).map(([href, label]) => (
    `<a href="${href}" target="_blank" rel="noreferrer"><span>${label}</span><span>↗</span></a>`
  )).join("");
}

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
}

function observeCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  }, { threshold: 0.28 });

  document.querySelectorAll(".release-card").forEach((card) => observer.observe(card));
}

renderTimeline();
renderSources();
observeCards();
updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
