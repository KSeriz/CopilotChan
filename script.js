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
    date: "2025-03-18",
    era: "Chat Preview",
    title: "GitHub上のCopilot Chatで即時プレビューとIssue作業",
    body: "Copilot Chat on GitHubのpublic previewとして、HTMLの即時プレビュー、生成ファイルの編集、Mermaid図の生成/プレビュー、Issueをサイドパネルで扱う機能が追加されました。",
    impact: "Chatは回答を返すだけでなく、GitHub上で小さな制作・確認・Issue作業をその場で進めるUIへ変わります。",
    sources: [
      ["Instant previews and issues in Copilot Chat", "https://github.blog/changelog/2025-03-17-instant-previews-flexible-editing-and-working-with-issues-in-copilot-chat-preview/"]
    ]
  },
  {
    date: "2025-04-02",
    era: "Mobile Chat",
    title: "GitHub MobileのCopilot Chatでマルチモデル選択",
    body: "GitHub MobileのCopilot Chatで、OpenAI o3-mini、Claude 3.5 Sonnet、Gemini 2.0などのモデル選択が使えるようになりました。",
    impact: "モデル選択はデスクトップの高度機能ではなく、モバイルでの相談体験にも入ります。",
    sources: [
      ["Multi-model selection on GitHub Mobile", "https://github.blog/changelog/2025-04-02-copilot-chat-on-github-mobile-now-supports-multi-model-selection/"]
    ]
  },
  {
    date: "2025-04-16",
    era: "Vision",
    title: "Copilot Chatの画像入力がClaude/Geminiにも拡大",
    body: "VS Code、Visual Studio、github.comのimmersive modeで、画像についてCopilot Chatに相談するVision機能がClaude Sonnet 3.5/3.7、Gemini 2.0 Flash/2.5 Pro、GPT-4oで使えるpublic previewになりました。",
    impact: "エラー画面、UIモック、構成図をコード相談の文脈として扱えるようになり、Chatの入力がテキスト中心から広がります。",
    sources: [
      ["Vision input with Claude and Gemini", "https://github.blog/changelog/2025-04-16-using-vision-input-in-copilot-chat-with-claude-and-gemini-is-now-in-public-preview"]
    ]
  },
  {
    date: "2025-06-04",
    era: "References",
    title: "@でファイル、Issue、PR、拡張機能をChatに添付",
    body: "Copilot Chatで`@`を入力して、ファイル、リポジトリ、Issue、Pull Request、拡張機能を参照として添付できるようになりました。",
    impact: "質問ごとに文脈を説明し直すのではなく、GitHub上の実体を直接Chatへ渡す流れが強くなります。",
    sources: [
      ["Attach references using @", "https://github.blog/changelog/2025-06-03-copilot-chat-now-supports-attaching-references-using-the-symbol"]
    ]
  },
  {
    date: "2025-06-25",
    era: "Context",
    title: "添付とCopilot Spacesの文脈容量が拡張",
    body: "Copilot Chatのpublic previewで、大きなテキストを添付へ変換、最大4枚の画像添付、外部リソース込みHTMLプレビュー、Copilot Spacesの文脈保持量2倍が追加されました。",
    impact: "Chatは短い質問応答から、プロジェクト情報や視覚資料を持ち込む作業空間へ近づきます。",
    sources: [
      ["Improved attachments and larger context", "https://github.blog/changelog/2025-06-25-improved-attachments-and-larger-context-in-copilot-chat-in-public-preview/"]
    ]
  },
  {
    date: "2025-07-09",
    era: "Chat GA",
    title: "GitHub上のCopilot Chat新機能群が一般提供",
    body: "GitHub上のCopilot Chatで、即時プレビュー、柔軟な編集、Issue管理、改善された添付、モデル選択、メッセージ編集、別モデルでの再生成、スレッド管理などが一般提供されました。",
    impact: "GitHub上のChatが、単発回答からファイル操作・プレビュー・Issue確認を含む作業画面に変わります。",
    sources: [
      ["New Copilot Chat features GA", "https://github.blog/changelog/2025-07-09-new-copilot-chat-features-now-generally-available-on-github"]
    ]
  },
  {
    date: "2025-07-31",
    era: "Repo Skills",
    title: "Copilot Chatがリポジトリ管理スキルを獲得",
    body: "github.comのCopilot Chatで、ファイル作成/更新/push、ブランチ作成、Pull Requestのマージ支援など、リポジトリワークフローをChat内で進める機能が追加されました。",
    impact: "Copilot Chatは相談窓口から、GitHub上の作業を実行に移す入口へ進化します。",
    sources: [
      ["Repository management skills in Copilot Chat", "https://github.blog/changelog/2025-07-31-copilot-chat-unlocks-new-repository-management-skills/"]
    ]
  },
  {
    date: "2025-09-15",
    era: "Auto Model",
    title: "VS CodeのCopilot ChatにAuto model selection",
    body: "VS CodeのCopilot Chatで、Copilotがモデルを選ぶAuto optionがpublic previewになりました。初期プレビューではGPT-5、GPT-5 mini、GPT-4.1、Sonnet 4、Sonnet 3.5などへルーティングします。",
    impact: "ユーザーが毎回モデル選択を考えるのではなく、可用性や将来的にはタスク文脈に応じた選択へ向かいます。",
    sources: [
      ["Auto model selection in VS Code", "https://github.blog/changelog/2025-09-14-auto-model-selection-for-copilot-in-vs-code-in-public-preview/"]
    ]
  },
  {
    date: "2025-11-11",
    era: "VS Auto",
    title: "Visual StudioのCopilotにもAuto model selection",
    body: "Visual StudioのCopilot ChatでAuto optionがpublic previewになり、GPT-5、GPT-5 mini、GPT-4.1、Sonnet 4.5、Haiku 4.5などからCopilotがモデルを選ぶようになりました。",
    impact: "Auto model selectionはVS CodeだけでなくVisual Studioにも広がり、モデル選択がUI横断の機能になります。",
    sources: [
      ["Auto model selection in Visual Studio", "https://github.blog/changelog/2025-11-11-auto-model-selection-for-copilot-in-visual-studio-in-public-preview/"]
    ]
  },
  {
    date: "2026-03-11",
    era: "Repo Explore",
    title: "WebのCopilot Chatでリポジトリファイル探索",
    body: "github.comのCopilot Chatで、ファイルを表示しながらリポジトリのファイルツリーを探索し、選択したファイルを一時参照としてChatに追加できるpublic previewが始まりました。",
    impact: "Web上のChatでも、コードベース構造を見ながら質問するIDE的な体験に近づきます。",
    sources: [
      ["Explore a repository using Copilot on the web", "https://github.blog/changelog/2026-03-11-explore-a-repository-using-copilot-on-the-web"]
    ]
  },
  {
    date: "2026-04-01",
    era: "Mobile Agent",
    title: "GitHub MobileのCopilotタブとセッションログ",
    body: "GitHub MobileでCopilotタブが刷新され、agent sessionsとchat historyを見やすくし、セッションログ閲覧、完了セッションからのPR作成、PRレビュー、実行中セッション停止がアプリ内で可能になりました。",
    impact: "Copilotのエージェント作業はデスク前だけでなく、モバイルから監視・レビュー・制御する対象になります。",
    sources: [
      ["GitHub Mobile Copilot tab and session logs", "https://github.blog/changelog/2026-04-01-github-mobile-stay-in-flow-with-a-refreshed-copilot-tab-and-native-session-logs"]
    ]
  },
  {
    date: "2026-04-23",
    era: "PR Chat",
    title: "Copilot ChatがPull Request理解/レビュー/要約を強化",
    body: "Copilot ChatがPull Requestのコメント、ファイル変更、コミット、レビューを文脈に含め、PRレビューや要約を構造化して返せるようになりました。",
    impact: "PRを見る、理解する、レビューするというGitHubの中心作業にCopilot Chatが直接入ります。",
    sources: [
      ["Copilot Chat improvements for pull requests", "https://github.blog/changelog/2026-04-23-copilot-chat-improvements-for-pull-requests"]
    ]
  },
  {
    date: "2026-05-18",
    era: "Contextual Chat",
    title: "GitHub WebのCopilot Chatが閲覧ページ文脈で開く",
    body: "GitHub WebでCopilotアイコンを押すと、github.com/copilotへ移動せず現在ページ上のパネルとしてChatが開くようになりました。IssueやPRなど閲覧中のGitHub surfaceが自動で文脈添付され、会話をagent sessionへ変えることもできます。",
    impact: "Copilot Chatは別ページの相談場所ではなく、GitHub上のどこでも開く文脈パネルになります。",
    sources: [
      ["Ask questions in context with Copilot on web", "https://github.blog/changelog/2026-05-18-ask-questions-in-context-with-copilot-on-web/"]
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
const quizCard = document.querySelector("#quizCard");
const quizProgress = document.querySelector("#quizProgress");
const quizScore = document.querySelector("#quizScore");
const quizNext = document.querySelector("#quizNext");
const quizRestart = document.querySelector("#quizRestart");
const quizResult = document.querySelector("#quizResult");

const quizPool = [
  {
    question: "2026年5月、GitHub WebのCopilot Chatは何が大きく変わった？",
    options: [
      "閲覧中のIssueやPRなどを文脈にしたパネルとして開くようになった",
      "VS Code専用の拡張機能になった",
      "GitHub Mobileから削除された",
      "コード補完だけに機能が絞られた"
    ],
    answer: 0,
    explanation: "2026年5月18日のChangelogで、Copilot Chat on webは現在見ているGitHub surfaceを文脈にしてパネルで開くGA機能になりました。"
  },
  {
    question: "Copilot ChatのPR向け改善で追加された能力として正しいものは？",
    options: [
      "PR理解、PRレビュー、PR要約",
      "npm packageの自動公開だけ",
      "GitHub Actionsの課金停止",
      "リポジトリの完全削除"
    ],
    answer: 0,
    explanation: "2026年4月23日のChangelogでは、コメント、ファイル変更、コミット、レビューを使ったPR理解、レビュー、要約が説明されています。"
  },
  {
    question: "2025年6月、Copilot Chatで`@`を使ってできるようになったことは？",
    options: [
      "ファイル、リポジトリ、Issue、PRなどを参照として添付する",
      "Xへ自動投稿する",
      "GitHubアカウント名を変更する",
      "ローカルPCの全ファイルを常時同期する"
    ],
    answer: 0,
    explanation: "`@`による参照添付は、実体のあるGitHub文脈をChatへ渡すためのアップデートです。"
  },
  {
    question: "2025年7月にGAになったGitHub上のCopilot Chat機能群に含まれるものは？",
    options: [
      "即時プレビュー、柔軟な編集、Issue管理、改善された添付、モデル選択",
      "GitHub Pagesの廃止",
      "Visual Studio Codeの有料化",
      "Pull Requestの禁止"
    ],
    answer: 0,
    explanation: "2025年7月9日のChangelogでは、previewだった複数のChat機能がGitHub上で一般提供になりました。"
  },
  {
    question: "Copilot ChatのVision input拡張で現実的になった使い方は？",
    options: [
      "エラー画面やUIモック、構成図を画像として渡して相談する",
      "画像を送ると必ずGitHub Actionsが停止する",
      "画像入力はGPT-4o以外で永久に使えない",
      "テキスト入力が完全に廃止される"
    ],
    answer: 0,
    explanation: "2025年4月のpublic previewで、ClaudeやGeminiにもVision inputが広がり、スクリーンショットや図を文脈にできます。"
  },
  {
    question: "Visual StudioのAgent Mode GAで重要だった外部連携のキーワードは？",
    options: [
      "MCP",
      "RSS",
      "FTP",
      "SMTP"
    ],
    answer: 0,
    explanation: "Visual Studio Agent ModeはMCPサーバーで外部ツールやサービスへ接続できる点が強調されました。"
  },
  {
    question: "GitHub Mobileの2026年4月アップデートで強化されたものは？",
    options: [
      "Copilotタブ、agent sessionログ、PR作成/レビュー、実行中セッション停止",
      "Issue機能の削除",
      "モバイルでのChat履歴非表示",
      "リポジトリ閲覧の廃止"
    ],
    answer: 0,
    explanation: "Mobileでもagentic workflowを追跡し、ログ閲覧やPR操作ができるようになりました。"
  },
  {
    question: "Auto model selectionの狙いとして最も近いものは？",
    options: [
      "Copilotが利用可能性や将来的なタスク文脈に応じてモデルを選ぶ",
      "ユーザーが必ず手動で全モデルを順番に試す",
      "モデル選択UIを完全に削除して透明性もなくす",
      "Chatを単一の古いモデルに固定する"
    ],
    answer: 0,
    explanation: "Auto model selectionは初期段階では可用性を重視し、応答に使われたモデルの透明性も残します。"
  },
  {
    question: "Agent Skillsの役割として正しいものは？",
    options: [
      "チーム固有の手順やワークフローを、必要なタスクで動的にCopilot agentへ渡す",
      "常に全回答を日本語に固定するだけ",
      "GitHubリポジトリを非公開にする設定",
      "画像生成専用の有料機能"
    ],
    answer: 0,
    explanation: "Agent Skillsはcustom instructionsと違い、タスクに応じて読み込まれる手順セットです。"
  },
  {
    question: "2025年7月末のリポジトリ管理スキルで、Copilot Chatができるようになったことは？",
    options: [
      "ファイル作成/更新/push、ブランチ作成、PRマージ支援",
      "GitHub全体の利用規約変更",
      "ユーザーのSNS投稿を自動収集",
      "すべてのIssueを強制クローズ"
    ],
    answer: 0,
    explanation: "Copilot ChatはGitHub上の会話からリポジトリ作業へ進める入口として強化されました。"
  },
  {
    question: "GitHub Copilotが最初に技術プレビューとして登場したのはいつ？",
    options: [
      "2021年6月",
      "2020年1月",
      "2023年12月",
      "2026年2月"
    ],
    answer: 0,
    explanation: "GitHub Copilotは2021年6月にtechnical previewとして発表されました。"
  },
  {
    question: "Copilot Xで強く打ち出された方向性は？",
    options: [
      "補完だけでなく、Chat、PR、Docs、CLIへ広げる",
      "GitHub Issuesを廃止する",
      "AI機能をVisual Studioから外す",
      "コード候補を完全に手入力へ戻す"
    ],
    answer: 0,
    explanation: "Copilot XはGPT-4時代の開発体験として、Chat、PR、Docs、CLIなどを提示しました。"
  },
  {
    question: "Copilot Workspaceが目指した体験に最も近いものは？",
    options: [
      "Issueや自然言語タスクから調査、計画、実装、PRへ進める",
      "画像編集だけに特化する",
      "GitHub Pagesだけを作る",
      "メール送信を自動化する"
    ],
    answer: 0,
    explanation: "Copilot Workspaceは、ideaからcodeまでをCopilot-nativeに進める開発環境として発表されました。"
  },
  {
    question: "Copilot Autofixが関わる領域は？",
    options: [
      "CodeQL code scanning alertsなどの脆弱性修正支援",
      "GitHubプロフィール画像の生成",
      "X投稿の自動いいね",
      "Markdown見出しの色変更だけ"
    ],
    answer: 0,
    explanation: "Copilot AutofixはCodeQL code scanning alertsなどの修正提案に関わるセキュリティ寄りのCopilot機能です。"
  },
  {
    question: "Copilot coding agentの特徴として近いものは？",
    options: [
      "Issueなどからタスクを委任し、作業してPRで戻す",
      "エディタの色テーマだけを変える",
      "GitHubアカウントを自動削除する",
      "Xのフォロワー数を増やす"
    ],
    answer: 0,
    explanation: "Copilot coding agentは、非同期にタスクを進め、Pull Requestとして戻す方向のエージェント機能です。"
  },
  {
    question: "Copilot CLIの一般提供で強調された使い方は？",
    options: [
      "ターミナル上で計画、編集、検証、複数エージェント、MCPなどを扱う",
      "GitHubをブラウザで開けなくする",
      "CSSだけを圧縮する",
      "画像ファイルをすべて削除する"
    ],
    answer: 0,
    explanation: "Copilot CLIはターミナルネイティブな開発エージェントとして、Plan modeやAutopilot、MCPなどが整理されました。"
  },
  {
    question: "Copilot SDK public previewの意味として近いものは？",
    options: [
      "Copilotのagentic capabilitiesを外部アプリやワークフローへ組み込める",
      "CopilotをWeb検索専用にする",
      "Visual Studioだけでしか使えなくする",
      "GitHubリポジトリをPDF化する"
    ],
    answer: 0,
    explanation: "Copilot SDKはNode.js/TypeScript、Python、Go、.NET、JavaなどからCopilot能力を組み込む方向の発表です。"
  },
  {
    question: "Visual StudioのTool Callingで狙われた改善は？",
    options: [
      "Copilotが必要なコードやツールを自分で探し、文脈取得を助ける",
      "コンパイラを完全に削除する",
      "プロジェクト名を毎回ランダムに変える",
      "Chatを日本語禁止にする"
    ],
    answer: 0,
    explanation: "Tool Callingは、Copilotが回答に必要な情報やツールを選びやすくするための更新でした。"
  },
  {
    question: "MCPがCopilot Agent Modeにとって重要な理由は？",
    options: [
      "外部ツール、社内システム、リポジトリ文脈などへ標準的につなげるため",
      "ブラウザのフォントを変えるため",
      "すべての回答を短くするため",
      "画像をJPEGだけにするため"
    ],
    answer: 0,
    explanation: "MCPはエージェントが外部ツールやリソースに接続する標準プロトコルとして扱われています。"
  },
  {
    question: "Copilot Profiler Agentが扱うテーマは？",
    options: [
      "CPU、メモリ、実行時挙動などの性能分析",
      "READMEの絵文字数",
      "SNS投稿時間の最適化",
      "GitHub Pagesの背景色だけ"
    ],
    answer: 0,
    explanation: "Profiler Agentはボトルネック特定、ベンチ生成、改善提案など、性能分析に踏み込むエージェントです。"
  },
  {
    question: "Copilot Freeの位置づけとして近いものは？",
    options: [
      "無料枠でCopilot補完やChatに触れる入口",
      "Enterprise専用の閉域機能",
      "GitHubアカウントなしでのみ使える機能",
      "CLIを永久に無効化する機能"
    ],
    answer: 0,
    explanation: "Copilot Freeは、GitHubアカウントでCopilotを試せる入口として発表されました。"
  }
];

const QUIZ_LENGTH = 10;
let quizIndex = 0;
let quizQuestions = pickQuizQuestions();
let quizAnswers = [];
let quizSelections = [];
let quizOptionOrders = buildQuizOptionOrders();
let quizLocked = false;

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

function getQuizRank(score) {
  if (score === QUIZ_LENGTH) {
    return {
      name: "Master",
      title: "Copilot Master",
      message: "補完、Chat、Agent、MCP、Skillsまで完全に追えている人です。"
    };
  }
  if (score >= 8) {
    return {
      name: "Expert",
      title: "Agent Mode Expert",
      message: "最新のCopilot進化をかなり正確に追えている人です。"
    };
  }
  if (score >= 6) {
    return {
      name: "Tracker",
      title: "Copilot Update Tracker",
      message: "ChatやAgentの主要アップデートをしっかり押さえています。"
    };
  }
  if (score >= 4) {
    return {
      name: "Explorer",
      title: "AI Dev Tools Explorer",
      message: "Copilotの流れは見えています。細かいリリースを追うと一気に伸びます。"
    };
  }
  return {
    name: "Newcomer",
    title: "Copilot Timeline Newcomer",
    message: "ここから年表を眺めると、Copilotの変化がかなり見えてきます。"
  };
}

function buildQuizOptionOrders() {
  const correctPositions = rotateArray([2, 0, 3, 1, 2, 1, 3, 0, 2, 1], Math.floor(Math.random() * QUIZ_LENGTH));

  return quizQuestions.map((item, questionIndex) => {
    const options = item.options.map((text, originalIndex) => ({ text, originalIndex }));
    const correct = options.find((option) => option.originalIndex === item.answer);
    const distractors = options.filter((option) => option.originalIndex !== item.answer);
    const targetPosition = correctPositions[questionIndex] % options.length;
    const ordered = [];
    let distractorIndex = 0;

    for (let index = 0; index < options.length; index += 1) {
      ordered.push(index === targetPosition ? correct : distractors[distractorIndex]);
      if (index !== targetPosition) distractorIndex += 1;
    }

    return ordered;
  });
}

function rotateArray(items, offset) {
  return items.map((_, index) => items[(index + offset) % items.length]);
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function pickQuizQuestions() {
  return shuffle(quizPool).slice(0, QUIZ_LENGTH);
}

function renderQuiz() {
  if (!quizCard) return;

  const item = quizQuestions[quizIndex];
  const optionOrder = quizOptionOrders[quizIndex];
  const score = quizAnswers.filter(Boolean).length;
  quizLocked = quizSelections[quizIndex] !== undefined;
  quizProgress.textContent = `Question ${quizIndex + 1} / ${quizQuestions.length}`;
  quizScore.textContent = `Score ${score}`;
  quizNext.textContent = quizIndex === quizQuestions.length - 1 ? "Results" : "Next";
  quizNext.disabled = !quizLocked;
  quizResult.hidden = true;

  const selected = quizSelections[quizIndex];
  const options = optionOrder.map((option, index) => {
    let state = "";
    if (selected !== undefined && option.originalIndex === item.answer) state = " is-correct";
    if (selected !== undefined && index === selected && option.originalIndex !== item.answer) state = " is-wrong";
    return `<button class="quiz-option${state}" type="button" data-index="${index}" ${selected !== undefined ? "disabled" : ""}>${option.text}</button>`;
  }).join("");

  quizCard.hidden = false;
  quizCard.innerHTML = `
    <h3>${item.question}</h3>
    <div class="quiz-options">${options}</div>
    ${selected !== undefined ? `<p class="quiz-explain"><strong>${selected === item.answer ? "Correct" : "Review"}</strong><br>${item.explanation}</p>` : ""}
  `;
}

function answerQuiz(index) {
  if (quizLocked) return;
  const item = quizQuestions[quizIndex];
  const selected = quizOptionOrders[quizIndex][index];
  quizSelections[quizIndex] = index;
  quizAnswers[quizIndex] = selected.originalIndex === item.answer;
  quizLocked = true;
  renderQuiz();
}

function showQuizResult() {
  const score = quizAnswers.filter(Boolean).length;
  const rank = getQuizRank(score);
  const pageUrl = "https://kseriz.github.io/CopilotChan/";
  const shareText = `Copilot進化クイズの結果: ${score}/${QUIZ_LENGTH} 正解\nランク: ${rank.name} - ${rank.title}\n${rank.message}\n\nCopilotの進化を追う年表サイトで挑戦`;
  const copyText = `${shareText}\n${pageUrl}\n#Copilot #GitHubCopilot`;
  const encodedText = encodeURIComponent(copyText);
  const webIntentParams = new URLSearchParams({
    text: shareText,
    url: pageUrl,
    hashtags: "Copilot,GitHubCopilot"
  });
  const shareUrl = `https://twitter.com/intent/tweet?${webIntentParams.toString()}`;
  const xFallbackUrl = `https://x.com/intent/tweet?${webIntentParams.toString()}`;
  const missed = quizQuestions.map((item, index) => (
    `<div>${quizAnswers[index] ? "OK" : "Review"}: ${item.question}</div>`
  )).join("");

  quizCard.hidden = true;
  quizNext.disabled = true;
  quizResult.hidden = false;
  quizProgress.textContent = "Completed";
  quizScore.textContent = `Score ${score}`;
  quizResult.innerHTML = `
    <div class="quiz-result-hero">
      <span class="quiz-rank-label">Your rank</span>
      <h3>${rank.name}</h3>
      <p class="quiz-rank-title">${rank.title}</p>
      <div class="quiz-score-ring">
        <strong>${score}</strong>
        <span>/ ${QUIZ_LENGTH}</span>
      </div>
      <p>${rank.message}</p>
    </div>
    <div class="quiz-share-panel">
      <p class="quiz-share-heading">Share your result</p>
      <div class="quiz-share-row">
        <button class="button" type="button" data-open-x="${shareUrl}">Xの投稿画面を開く</button>
        <a class="quiz-share quiz-share--ghost" href="${shareUrl}" target="_blank" rel="noreferrer">直接リンクで開く</a>
        <a class="quiz-share quiz-share--ghost" href="${xFallbackUrl}" target="_blank" rel="noreferrer">x.comで試す</a>
        <button class="button button--ghost" type="button" data-share-text="${encodedText}">端末の共有を使う</button>
      </div>
      <div class="quiz-native-x">
        <a class="twitter-share-button" href="${shareUrl}" data-size="large">Post</a>
      </div>
    </div>
    <label class="quiz-share-text">
      <span>Copy post text</span>
      <textarea id="quizShareText" readonly>${copyText}</textarea>
    </label>
    <div class="quiz-share-row">
      <button class="button button--ghost" type="button" data-copy-text="${encodedText}">Copy text</button>
    </div>
    <details class="quiz-breakdown">
      <summary>回答内訳を見る</summary>
      <div class="quiz-breakdown-list">${missed}</div>
    </details>
    <p class="quiz-copy-note" id="quizCopyNote" aria-live="polite"></p>
  `;

  window.twttr?.widgets?.load?.(quizResult);
}

function restartQuiz() {
  quizIndex = 0;
  quizQuestions = pickQuizQuestions();
  quizAnswers = [];
  quizSelections = [];
  quizOptionOrders = buildQuizOptionOrders();
  quizLocked = false;
  renderQuiz();
}

if (quizCard) {
  quizCard.addEventListener("click", (event) => {
    const button = event.target.closest(".quiz-option");
    if (!button) return;
    answerQuiz(Number(button.dataset.index));
  });

  quizNext.addEventListener("click", () => {
    if (!quizLocked) return;
    if (quizIndex === quizQuestions.length - 1) {
      showQuizResult();
      return;
    }
    quizIndex += 1;
    renderQuiz();
  });

  quizRestart.addEventListener("click", restartQuiz);

  quizResult.addEventListener("click", async (event) => {
    const openButton = event.target.closest("[data-open-x]");
    const shareButton = event.target.closest("[data-share-text]");
    const copyButton = event.target.closest("[data-copy-text]");
    const note = document.querySelector("#quizCopyNote");
    const textArea = document.querySelector("#quizShareText");
    if (openButton) {
      const popup = window.open(openButton.dataset.openX, "_blank", "noopener,noreferrer,width=720,height=640");
      if (!popup) {
        window.location.href = openButton.dataset.openX;
      }
      return;
    }

    const encoded = shareButton?.dataset.shareText || copyButton?.dataset.copyText;
    if (!encoded) return;

    const text = decodeURIComponent(encoded);
    if (shareButton && navigator.share) {
      try {
        await navigator.share({
          title: "Copilot Evolution Quiz",
          text,
          url: "https://kseriz.github.io/CopilotChan/"
        });
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      note.textContent = shareButton ? "共有が使えない環境なので投稿文をコピーしました。" : "投稿文をコピーしました。";
      textArea?.select();
    } catch {
      textArea?.select();
      note.textContent = "コピーできませんでした。投稿文欄を選択したので、手動でコピーしてください。";
    }
  });
}

renderTimeline();
renderSources();
observeCards();
renderQuiz();
updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
