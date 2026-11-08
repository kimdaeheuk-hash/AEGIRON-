# frontend

Astryx 디자인 시스템으로 시작한 React 앱 (Vite + React 19 + TypeScript).

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 타입 검사 + 프로덕션 빌드
```

- 첫 화면: `src/pages/Home.tsx` — Astryx `shell-side-nav` 템플릿(사이드바 + 본문)에서 시작
- 프로젝트 이름·설명: `src/project.ts`
- 테마: `src/astryx-themes.ts` (`npx astryx theme add <이름>` 으로 생성·변경)
- 새 화면: `npx astryx build "<만들 화면>"` → 추천 템플릿을 `npx astryx template <이름> <경로>` 로 가져와 내용만 바꾼다
- AI 코딩 도구용 규칙: 저장소 루트의 `AGENTS.md` / `.claude/CLAUDE.md`
