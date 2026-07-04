# mts-x-following-list

[![CI](https://github.com/imartinstudio/mts-x-following-list/actions/workflows/ci.yml/badge.svg)](https://github.com/imartinstudio/mts-x-following-list/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/github/license/imartinstudio/mts-x-following-list)](LICENSE)
[![Release](https://img.shields.io/github/v/release/imartinstudio/mts-x-following-list)](https://github.com/imartinstudio/mts-x-following-list/releases)

**X 清道夫** — 独立的 Chrome MV3 扩展：在 X (Twitter) 关注列表页筛选、勾选并批量取消关注。

从内部 monorepo 拆分独立维护，零外部运行时依赖。许可证：[MIT](LICENSE)

## 功能

- 在 `x.com/<user>/following` 列表页挂载筛选工具栏
- 按互关状态等条件筛选用户单元格并显示勾选框
- 批量取消关注选中的用户（带确认与进度提示）

## 目录结构

```
src/
  dom/         关注列表解析、用户单元格勾选框、会话/页面识别
  ui/          筛选工具栏（原生 DOM）
  content/     content script 入口
  background/  MV3 service worker
tests/         smoke 测试
privacy/       隐私政策页面（随构建打包）
screenshots/   Chrome 商店截图素材
```

## 开发

```bash
pnpm install
pnpm typecheck     # tsc --noEmit（strict）
pnpm test          # vitest（jsdom）
pnpm build         # esbuild → dist/ + 商店 zip
pnpm test:smoke    # 入口 smoke 测试 + dist 产物校验
```

构建后在 Chrome `chrome://extensions` 中「加载已解压的扩展程序」选择 `dist/` 目录。`pnpm build` 还会生成商店上架用的 `mts-x-following-list-v*.zip`。

## 发布

维护者打 tag 后，GitHub Actions 会自动构建并发布扩展 zip（见 [CONTRIBUTING.md](CONTRIBUTING.md)）。商店文案与截图说明见 [STORE_LISTING.md](STORE_LISTING.md)。
