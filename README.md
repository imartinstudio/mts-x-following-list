# mts-x-following-list

独立的 Chrome MV3 扩展项目：在 X (Twitter) 关注列表页筛选、勾选并批量取消关注。

由 yt2x monorepo 中的 `x-following-extension` 模块迁移而来，零 monorepo 运行时依赖。

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
```

## 开发

```bash
pnpm install
pnpm typecheck     # tsc --noEmit（strict）
pnpm test          # vitest（jsdom）
pnpm build         # esbuild → dist/ + 商店 zip
pnpm test:smoke    # 入口 smoke 测试 + dist 产物校验
```

构建后在 Chrome `chrome://extensions` 中「加载已解压的扩展程序」选择 `dist/` 目录。
