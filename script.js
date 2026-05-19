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
  },
  {
    date: "2023-03-01",
    era: "Visual Studio",
    title: "Visual Studio 2022でCopilot利用が本格化",
    body: "Microsoft Visual Studio Blogが、Visual Studio 2022内でGitHub Copilotがリアルタイムにコードや関数を提案する体験を紹介。Visual Studio 17.4以降を前提に、IntelliCodeとCopilotが並ぶAI支援として位置づけられました。",
    impact: "CopilotはVS Codeだけの印象から、Microsoftの主力IDEにも入る開発支援へ広がります。",
    sources: [
      ["GitHub Copilot in Visual Studio 2022", "https://devblogs.microsoft.com/visualstudio/github-copilot-in-visual-studio-2022/"]
    ]
  },
  {
    date: "2023-06-08",
    era: "IntelliSense",
    title: "IntelliSenseの選択がCopilot補完を誘導",
    body: "Visual Studio Blogは、IntelliSenseリストを開いたままCopilot予測を表示し、選択中のIntelliSense項目がCopilot補完の追加文脈になる更新を説明しました。",
    impact: "従来のIDE補完と生成AI補完を競合させるのではなく、同じ編集体験の中で合流させる方向が見えます。",
    sources: [
      ["IntelliSense steers Copilot completions", "https://devblogs.microsoft.com/visualstudio/github-copilot-visual-studio-intellisense/"]
    ]
  },
  {
    date: "2024-04-09",
    era: "VS Integration",
    title: "Visual Studio 17.10 Previewで新しい統合Copilot体験",
    body: "Visual Studio 17.10 Preview 3で、CopilotとCopilot Chatを1つのパッケージにまとめる新体験が紹介されました。補完、Inline Chat、Chat Window、コミットメッセージ、デバッグ、テスト生成などをIDE内に寄せています。",
    impact: "別拡張を足す体験から、IDEに最初から深く組み込まれたAI機能へ移行します。",
    sources: [
      ["New Copilot experience in Visual Studio", "https://devblogs.microsoft.com/visualstudio/introducing-the-new-copilot-experience-in-visual-studio/"]
    ]
  },
  {
    date: "2024-05-21",
    era: "VS GA",
    title: "Visual Studio 2022 17.10で単一Copilot拡張がGA",
    body: "Build 2024に合わせてVisual Studio 2022 17.10が一般提供。GitHub Copilotの補完とChatを統合した単一拡張が、Visual Studio Installerの推奨コンポーネントとして提供されました。",
    impact: "Copilotは後付けの補助ツールではなく、Visual Studioの標準的な開発面に近い位置へ移ります。",
    sources: [
      ["Visual Studio 17.10 and Copilot", "https://devblogs.microsoft.com/visualstudio/visual-studio-2022-17-10-now-available/"]
    ]
  },
  {
    date: "2025-01-23",
    era: "VS Free",
    title: "Visual StudioにもCopilot Freeの導線",
    body: "Visual Studio Blogは、GitHubアカウントだけで使えるCopilot FreeをVisual Studioで案内。月2,000補完、月50チャット、GPT-4oやClaude 3.5 Sonnetへのアクセスに触れつつ、Copilot Edits、@workspace、@vs、AIコミットメッセージ、エラー修正、ブレークポイント支援を整理しました。",
    impact: "無料枠は単なる導入施策ではなく、IDE内の複数Copilot機能を試す入口になります。",
    sources: [
      ["Free GitHub Copilot for Visual Studio", "https://devblogs.microsoft.com/visualstudio/announcing-a-free-github-copilot-for-visual-studio/"]
    ]
  },
  {
    date: "2025-02-20",
    era: "Tool calling",
    title: "Visual Studio CopilotでTool Calling",
    body: "Visual Studio Blogは、Copilotが質問に答えるために必要なコードやツールを自動的に探せるTool Callingを紹介。GPT-4oとClaude Sonnetで、手動で文脈を指定する負担を減らす方向が示されました。",
    impact: "Agent Mode以前から、Copilotが自分で文脈取得手段を選ぶための土台が作られていました。",
    sources: [
      ["Tool Calling in GitHub Copilot for Visual Studio", "https://devblogs.microsoft.com/visualstudio/function-calling-is-now-enabled-in-github-copilot/"]
    ]
  },
  {
    date: "2025-05-13",
    era: "VS Agent",
    title: "Visual Studio 17.14でAgent Modeがpublic preview",
    body: "Visual Studio 17.14でAgent Modeがpublic previewに。自然言語のタスクから、関連ファイルの特定、編集、コマンド提案、ビルド/テスト、MCPサーバー経由のツール呼び出しまでを反復する体験が示されました。",
    impact: "Copilot Editsの次の段階として、複数ステップの作業をIDE内で回すエージェントへ進化します。",
    sources: [
      ["Agent mode preview for Visual Studio", "https://devblogs.microsoft.com/visualstudio/agent-mode-has-arrived-in-preview-for-visual-studio/"]
    ]
  },
  {
    date: "2025-05-19",
    era: "Every IDE",
    title: "Agent Modeが主要IDEへ広がる",
    body: "Microsoft for Developersは、VS Codeでのロールアウト後、Visual Studio、GitHub Codespaces、JetBrains IDEs、Eclipse、XcodeでもAgent Modeを使えるようになったと説明しました。",
    impact: "Copilotのエージェント化は特定IDEの機能ではなく、開発環境横断の標準体験になり始めます。",
    sources: [
      ["Agent mode for every developer", "https://devblogs.microsoft.com/blog/agent-mode-for-every-developer"]
    ]
  },
  {
    date: "2025-05-19",
    era: ".NET Upgrade",
    title: ".NETアップグレードをCopilot Agent Modeで支援",
    body: "Visual Studio Blogは、GitHub Copilot app modernization - Upgrade for .NETのpublic previewを紹介。CopilotとAgent Modeを使い、.NETアプリのアップグレードパス判断と段階的な変更適用を支援します。",
    impact: "Copilotは新規実装だけでなく、既存資産の移行やモダナイズのような面倒な長期作業にも入り込みます。",
    sources: [
      ["Faster .NET Upgrades Powered by Copilot", "https://devblogs.microsoft.com/visualstudio/faster-net-upgrades-powered-by-github-copilot/"]
    ]
  },
  {
    date: "2025-06-17",
    era: "MCP GA",
    title: "Visual Studio Agent ModeがMCP対応でGA",
    body: "Visual StudioのJune updateでCopilot Agent Modeが一般提供。計画、編集、コマンド実行、build/lintエラーへの対応、自己修正に加え、MCPサーバーで外部ツールを拡張できることが強調されました。",
    impact: "エージェントはIDE内だけの閉じた機能ではなく、リポジトリ、CI/CD、監視、社内ツールへ接続する構造を得ます。",
    sources: [
      ["Agent mode GA with MCP support", "https://devblogs.microsoft.com/visualstudio/agent-mode-is-now-generally-available-with-mcp-support/"]
    ]
  },
  {
    date: "2025-07-31",
    era: "AI Edits",
    title: "Visual Studio CopilotのAI編集適用が改善",
    body: "Visual Studio Blogは、AI生成コードを既存ファイルへ壊さず差し込む難しさと、Side-by-side Mapperなどの改善を説明。Agent Modeが提案だけでなく実行へ進む基盤になったと位置づけています。",
    impact: "エージェントの価値はモデル回答だけでなく、既存コードへ正確に変更を適用する編集エンジンにも依存します。",
    sources: [
      ["Smarter AI Edits in Visual Studio Copilot", "https://devblogs.microsoft.com/visualstudio/smarter-ai-edits-in-visual-studio-copilot"]
    ]
  },
  {
    date: "2025-08-19",
    era: "MCP",
    title: "Visual StudioでMCPが一般提供",
    body: "Visual Studio Blogは、MCPサポートのGAを発表。.mcp.jsonによるローカル/リモートMCPサーバー接続、入力や認証、ツール管理のフローを整え、Agent Modeを外部スタックに接続しやすくしました。",
    impact: "Copilotの能力追加が拡張機能ごとの個別実装ではなく、標準プロトコルで外部ツールを接ぐ形へ向かいます。",
    sources: [
      ["MCP GA in Visual Studio", "https://devblogs.microsoft.com/visualstudio/mcp-is-now-generally-available-in-visual-studio/"]
    ]
  },
  {
    date: "2025-09-11",
    era: "Profiler Agent",
    title: "Copilot Profiler AgentがVisual Studio 2026 Insidersへ",
    body: "Visual Studio Blogは、CPU使用率、メモリ割り当て、実行時挙動を分析し、ボトルネック特定、BenchmarkDotNetベンチ生成、改善提案、前後比較まで行うCopilot Profiler Agentを紹介しました。",
    impact: "Copilotは一般的なコード編集から、診断・性能分析のような専門ツール連携型エージェントへ分化します。",
    sources: [
      ["Copilot Profiler Agent in Visual Studio", "https://devblogs.microsoft.com/visualstudio/copilot-profiler-agent-visual-studio/"]
    ]
  },
  {
    date: "2025-09-17",
    era: "MCP Context",
    title: "MCP Prompts / Resources / Sampling対応",
    body: "Visual Studio Blogは、MCPのPrompts、Resources、Sampling対応を紹介。外部サーバーがプロンプトやリソースを提供し、Copilotがエンジニアリングスタックの文脈をより構造的に扱えるようになります。",
    impact: "MCPは単なるツール呼び出しから、エージェントへ知識・手順・データを渡す文脈レイヤーへ広がります。",
    sources: [
      ["MCP prompts, resources, and sampling", "https://devblogs.microsoft.com/visualstudio/mcp-prompts-resources-sampling/"]
    ]
  },
  {
    date: "2025-12-01",
    era: "C++ Modernize",
    title: "C++向けCopilot機能がVisual Studio 2026 private preview",
    body: "Visual Studio Blogは、Visual Studio 2026のGitHub Copilot機能として、大規模C++リファクタ、C++ビルド性能改善、MSVC Build Toolsアップグレード支援を紹介しました。",
    impact: "Copilotは言語サーバーやIntelliSenseの精密な情報を使い、C++のような大規模・高制約コードでも実務タスクに踏み込みます。",
    sources: [
      ["C++ build performance and refactor with Copilot", "https://devblogs.microsoft.com/visualstudio/upgrade-msvc-improve-c-build-performance-and-refactor-c-code-with-github-copilot/"]
    ]
  },
  {
    date: "2026-02-04",
    era: "Roadmap",
    title: "Visual Studio AI Roadmap: 信頼性、Planning Agent、SDK統合",
    body: "Visual Studio BlogのFebruary roadmapでは、Agent ModeとCoding Agentsの進捗表示、失敗/リトライ、診断ログ、Agent Skills、Unified Sessions、Planning Agent、Copilot SDK/CLI連携、MCPガバナンス、巨大コンテキスト管理が挙げられました。",
    impact: "Copilotの進化は派手な新機能だけでなく、長時間作業の安定性、管理、文脈圧縮といった運用面へ移ります。",
    sources: [
      ["Roadmap for AI in Visual Studio", "https://devblogs.microsoft.com/visualstudio/roadmap-for-ai-in-visual-studio-february"]
    ]
  },
  {
    date: "2026-02-19",
    era: "Custom agents",
    title: "Visual StudioでBuilt-in / Build-Your-Own Agents",
    body: "Visual Studio Blogは、Debugger、Profiler、Testingなどのプリセットエージェントと、チーム固有のCustom Agentsを作る仕組みを紹介しました。",
    impact: "Copilotは1つの汎用助手ではなく、IDEのネイティブ機能に深く接続した専門エージェント群へ分かれます。",
    sources: [
      ["Custom Agents in Visual Studio", "https://devblogs.microsoft.com/visualstudio/custom-agents-in-visual-studio-built-in-and-build-your-own-agents/"]
    ]
  },
  {
    date: "2026-02-24",
    era: "VS 2026",
    title: "Visual Studio February Update: テスト生成とC++ Modernization",
    body: "Visual Studio 2026 Stable 18.3のFebruary updateで、@TestによるCopilotテスト生成、/generateInstructions、/savePrompt、WinForms Expert Agent、C++ App Modernization public previewなどが案内されました。",
    impact: "Copilotの体験が、テスト、プロンプト再利用、リポジトリ指示生成、Windowsデスクトップ保守、C++移行に細分化されます。",
    sources: [
      ["Visual Studio February Update", "https://devblogs.microsoft.com/visualstudio/visual-studio-february-update"]
    ]
  },
  {
    date: "2026-04-28",
    era: "Cloud agent",
    title: "Visual Studio April Update: Cloud Agent Integration",
    body: "Visual Studio Blogは、IDEからCloud agentセッションを開始し、リポジトリにIssueを作ってPull Requestで返す流れを紹介。Custom agentsのuser-level定義、C++ code editing toolsのGA、Debugger Agentも含まれます。",
    impact: "ローカルIDEのCopilotとGitHub上のクラウド実行エージェントが、同じ作業導線の中で接続されます。",
    sources: [
      ["Visual Studio April Update", "https://devblogs.microsoft.com/visualstudio/visual-studio-april-update-cloud-agent-integration/"]
    ]
  },
  {
    date: "2026-05-13",
    era: "Agent Skills",
    title: "Visual StudioでAgent Skills",
    body: "Visual Studio Blogは、Copilot agentsにチーム固有の手順を教えるAgent Skillsを紹介。`.github/skills/`、`.claude/skills/`、`.agents/skills/`やユーザープロファイル配下から自動検出され、タスクに応じて動的に読み込まれます。",
    impact: "常時適用のcustom instructionsと、タスク特化で発動するskillsを使い分け、チームの実務手順をエージェントへ渡せるようになります。",
    sources: [
      ["Agent Skills in Visual Studio", "https://devblogs.microsoft.com/visualstudio/agent-skills-in-visual-studio/"]
    ]
  }
];

const timeline = document.querySelector("#timelineItems");
const sourceGrid = document.querySelector("#sourceGrid");
const progressBar = document.querySelector("#progressBar");

function getSortedReleases() {
  return [...releases].sort((a, b) => a.date.localeCompare(b.date));
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
}

function renderTimeline() {
  timeline.innerHTML = getSortedReleases().map((item) => {
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
  getSortedReleases().forEach((item) => {
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
