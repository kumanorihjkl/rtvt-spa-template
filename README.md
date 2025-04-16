# スタイリッシュな React SPA テンプレート

このプロジェクトは、React、TypeScript、Vite、Tailwind CSSを使用して構築された、スタイリッシュなシングルページアプリケーション（SPA）テンプレートです。モダンなUI、レスポンシブデザイン、複数ページのナビゲーション、テーマ切り替え機能を備えています。

![スクリーンショット](https://placeholder-for-screenshot.com)

## 機能

- **完全フロントエンドのSPA**: React Routerを使用したクライアントサイドルーティング
- **モダンなUI**: Tailwind CSSによるスタイリッシュなデザイン
- **レスポンシブデザイン**: すべてのデバイスサイズに対応
- **テーマ切り替え**: 複数のカラーテーマから選択可能
- **多言語サポート**: 英語と日本語の切り替え
- **ハンバーガーメニュー**: スライドインするナビゲーションメニュー
- **スタイリッシュなフォーム**: ユーザー情報入力用の美しいフォーム
- **macOS対応**: Elastic Scrolling（みょーん）時の背景処理対応

## 技術スタック

- **React**: UIコンポーネントのための JavaScript ライブラリ
- **TypeScript**: 型安全な JavaScript
- **Vite**: 高速な開発環境とビルドツール
- **Tailwind CSS**: ユーティリティファーストの CSS フレームワーク
- **React Router**: SPAのためのルーティングライブラリ

## インストールと実行方法

### 前提条件

- Node.js (v14.0.0以上)
- npm (v6.0.0以上)

### インストール

1. リポジトリをクローンするか、ダウンロードします
```bash
git clone <repository-url>
cd <project-folder>
```

2. 依存関係をインストールします
```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

これにより、`http://localhost:5173/`で開発サーバーが起動します。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

## プロジェクト構造

```
/
├── public/              # 静的ファイル
│   └── vite.svg         # Viteのロゴ
├── src/                 # ソースコード
│   ├── assets/          # アセット（画像など）
│   │   └── react.svg    # Reactのロゴ
│   ├── layouts/         # レイアウトコンポーネント
│   │   └── MainLayout.tsx  # メインレイアウト（ヘッダー、ナビゲーション）
│   ├── pages/           # ページコンポーネント
│   │   ├── Home.tsx     # ホームページ（Hello World）
│   │   └── UserForm.tsx # ユーザー情報フォームページ
│   ├── App.tsx          # メインアプリケーションコンポーネント
│   ├── index.css        # グローバルスタイル
│   └── main.tsx         # アプリケーションのエントリーポイント
├── .gitignore           # Gitの除外ファイル設定
├── index.html           # HTMLテンプレート
├── package.json         # プロジェクト依存関係と設定
├── postcss.config.js    # PostCSS設定
├── tailwind.config.js   # Tailwind CSS設定
├── tsconfig.json        # TypeScript設定
└── vite.config.ts       # Vite設定
```

## 機能詳細

### ナビゲーション

- **ハンバーガーメニュー**: 画面左上のハンバーガーアイコンをクリックすると、サイドメニューが表示されます
- **ページ間移動**: サイドメニューから「Home」または「User Form」を選択して、ページ間を移動できます

### ホームページ

- **テーマ切り替え**: 「Change Theme」ボタンをクリックすると、背景のカラーテーマが変わります
- **言語切り替え**: 「Toggle Language」ボタンをクリックすると、「Hello World」と「こんにちは世界」が切り替わります
- **アニメーション**: Reactロゴがゆっくりと回転します

### ユーザーフォームページ

- **スタイリッシュなフォーム**: ユーザー情報を入力するための美しいフォーム
- **フォームバリデーション**: 必須フィールドの検証
- **レスポンシブデザイン**: モバイルからデスクトップまで対応
- **送信フィードバック**: フォーム送信後に成功メッセージを表示

## macOS対応

macOSのElastic Scrolling（みょーん）効果に対応するため、以下の対策を実装しています：

- ヘッダーと同じ背景色をhtml/body要素に適用
- スクロール時に白い背景が見えないようにスタイリング

## 開発ノート

### Tailwind CSSのカスタマイズ

`tailwind.config.js`ファイルでは、カスタムアニメーションを追加しています：

```js
/** @type {import('tailwindcss').Config} */
export default {
  // ...
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  // ...
}
```

### React Routerの設定

`App.tsx`ファイルでは、React Routerを使用してルーティングを設定しています：

```tsx
<Router>
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="form" element={<UserForm />} />
    </Route>
  </Routes>
</Router>
```

## カスタマイズ方法

### 新しいページの追加

1. `src/pages/`ディレクトリに新しいページコンポーネントを作成
2. `App.tsx`ファイルのRoutes内に新しいRouteを追加
3. `src/layouts/MainLayout.tsx`のナビゲーションメニューに新しいリンクを追加

### テーマの追加

`src/pages/Home.tsx`ファイルの`colors`配列に新しいグラデーションを追加します：

```tsx
const colors = [
  'bg-gradient-to-r from-purple-500 to-pink-500',
  'bg-gradient-to-r from-cyan-500 to-blue-500',
  // 新しいテーマをここに追加
];
```

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 謝辞

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
