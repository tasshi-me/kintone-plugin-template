# kintone-plugin-template

kintoneプラグインの開発テンプレート

## 概要

このテンプレートは、React + TypeScriptを使用してkintoneプラグインを開発するための基盤を提供します。モダンな開発環境とツールを備えており、すぐにプラグイン開発を開始できます。

## 特徴

- **React 19 + TypeScript**: 型安全な開発環境
- **Rsbuild**: 高速なビルドツール
- **エントリーポイント分離**: デスクトップ、モバイル、設定画面を個別に管理
- **コード品質管理**: ESLint + Prettierによる自動フォーマット
- **自動パッケージング**: kintone-plugin-packerによるプラグインパッケージの生成
- **自動アップロード**: kintone-plugin-uploaderによる開発環境への自動アップロード

## 必要要件

- Node.js (`.node-version`ファイルで指定されたバージョンを推奨)
- npm

## セットアップ

```bash
# 依存関係のインストール
npm install

# プライベートキーの生成（初回のみ）
# プラグインのパッケージングに必要です
npx @kintone/plugin-packer --ppk private.ppk --init
```

## 開発の流れ

### 1. プラグインの開発

```bash
# 開発サーバーの起動（ビルド + アップロード + 監視）
npm start
```

このコマンドは以下を実行します:
- ソースコードのビルド
- プラグインのパッケージング
- kintone環境への自動アップロード
- ファイル変更の監視と自動再ビルド

### 2. コードの編集

- `src/desktop/`: デスクトップ版のコード
- `src/mobile/`: モバイル版のコード
- `src/config/`: 設定画面のコード（React）
- `src/helpers/`: ヘルパー関数
- `src/types/`: 型定義

### 3. ビルド

```bash
# プロダクションビルド
npm run build

# JavaScriptのビルドのみ
npm run build:js

# プラグインパッケージの作成のみ
npm run build:package
```

ビルド成果物:
- `lib/`: ビルドされたJavaScript/CSSファイル
- `dist/plugin.zip`: kintoneにインストール可能なプラグインパッケージ

## コード品質

```bash
# リントチェック
npm run lint

# リントの自動修正
npm run fix
```

## プロジェクト構造

```
.
├── src/
│   ├── config/          # 設定画面（React）
│   │   ├── App.tsx      # メインコンポーネント
│   │   ├── index.tsx    # エントリーポイント
│   │   └── style.css    # スタイル
│   ├── desktop/         # デスクトップ版
│   │   ├── index.ts
│   │   └── style.css
│   ├── mobile/          # モバイル版
│   │   ├── index.ts
│   │   └── style.css
│   ├── helpers/         # ヘルパー関数
│   └── types/           # 型定義
├── public/
│   └── manifest.json    # プラグインマニフェスト
├── lib/                 # ビルド出力先
├── dist/                # プラグインパッケージ出力先
├── rsbuild.config.ts    # Rsbuild設定
└── tsconfig.json        # TypeScript設定
```

## 環境変数の設定

`npm start`や`npm run upload`を使用する場合は、以下の環境変数を設定してください:

```bash
# .envファイルを作成するか、環境変数を設定
KINTONE_BASE_URL=https://your-subdomain.cybozu.com
KINTONE_USERNAME=your-username
KINTONE_PASSWORD=your-password
```

詳細は[@kintone/plugin-uploader](https://github.com/kintone/js-sdk/tree/master/packages/plugin-uploader)のドキュメントを参照してください。

## カスタマイズ

### プラグイン情報の変更

`public/manifest.json`を編集して、プラグインの名前、説明、アイコンなどを変更してください。

### 機能の追加

1. 必要なファイル（`src/desktop/`, `src/mobile/`, `src/config/`）を編集
2. 必要に応じて`src/helpers/`にヘルパー関数を追加
3. `npm start`で変更を確認

## スクリプト一覧

| コマンド | 説明 |
|---------|------|
| `npm start` | 開発サーバー起動（ビルド + アップロード + 監視） |
| `npm run build` | プロダクションビルド |
| `npm run build:js` | JavaScriptのビルドのみ |
| `npm run build:package` | プラグインパッケージの作成のみ |
| `npm run lint` | リントチェック |
| `npm run fix` | リントの自動修正 |
| `npm run upload` | プラグインのアップロード |

## ライセンス

MIT

## 作者

tasshi <tasshi.me@gmail.com>

## 参考リンク

- [kintone developer network](https://developer.cybozu.io/hc/ja)
- [kintone JavaScript SDK](https://github.com/kintone/js-sdk)
- [Rsbuild](https://rsbuild.dev/)
- [React](https://react.dev/)
