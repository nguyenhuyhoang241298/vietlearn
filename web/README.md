# web

Frontend của VietLearn: React 19 + TypeScript + Vite 8, TanStack Query, Zustand, Tailwind CSS 4, cấu trúc theo [Feature-Sliced Design](https://feature-sliced.design) v2.1.

## Chạy

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Scripts: `dev`, `build`, `typecheck`, `lint` (oxlint), `arch` (steiger, kiểm tra FSD), `test` (vitest), `format`.

## Cấu trúc

```
src/
├── app/      # providers (QueryClient, ErrorBoundary), router, styles
├── pages/    # mỗi trang tự chứa ui/, model/, api/ (pages first)
├── shared/   # api client, config (env Zod), lib, ui
└── main.tsx
```

Quy ước: alias `@/*` trỏ vào `src/*`; server state nằm trong TanStack Query, Zustand chỉ giữ client state (trong segment `model`); chỉ tách `features/`, `entities/`, `widgets/` khi code thực sự được dùng lại ở nhiều nơi.

shadcn/ui chưa được khởi tạo; khi cần chạy `pnpm dlx shadcn@latest init` và trỏ alias `ui` về `@/shared/ui`.
