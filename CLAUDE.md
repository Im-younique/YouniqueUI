# younique-ui — shadcn 기반 React UI 컴포넌트 라이브러리

## 프로젝트 개요
- shadcn/ui (base-nova 스타일) 기반 공통 UI 컴포넌트 라이브러리
- npm 배포 가능 (ESM + CJS + TypeScript 선언)
- Storybook으로 컴포넌트 미리보기

## 기술 스택
- React 19, TypeScript 5, @base-ui/react (프리미티브)
- Tailwind CSS v4 (oklch 색상 체계)
- CVA + clsx + tailwind-merge (스타일링)
- lucide-react (아이콘)
- tsup (빌드), Storybook 8 (미리보기)

## 핵심 스크립트
- `npm run dev` — Storybook 개발 서버 (localhost:6006)
- `npm run build` — 전체 빌드 (JS + CSS + theme)
- `npm run build-storybook` — 정적 Storybook
- `npm publish` — npm 배포

## 디렉토리 구조
```
src/
  index.ts              # barrel export (모든 컴포넌트 re-export)
  lib/utils.ts          # cn() 유틸리티
  hooks/use-mobile.ts   # useIsMobile 훅
  components/           # 컴포넌트 (flat file 구조)
    button.tsx
    button.stories.tsx
    card.tsx
    ...
  styles/
    globals.css          # 전체 테마 (Tailwind + CSS 변수)
    theme.css            # CSS 변수만 (고급 사용자용)
```

## 새 컴포넌트 추가 시 필수 규칙
**새 UI 컴포넌트를 만들 때는 반드시 `/add-component` 커맨드를 실행하여 진행한다.**
직접 파일을 생성하지 않고, 해당 커맨드의 워크플로우(설계→구현→Story→빌드검증→커밋→배포)를 따른다.

## 컴포넌트 작성 규칙

### 파일 위치
- 컴포넌트: `src/components/<name>.tsx`
- 스토리: `src/components/<name>.stories.tsx`
- 반드시 `src/index.ts`에 `export * from './components/<name>'` 추가

### import 패턴 (절대 경로 사용 금지)
- 유틸: `import { cn } from '../lib/utils'`
- 다른 컴포넌트: `import { Button } from './button'`
- 훅: `import { useIsMobile } from '../hooks/use-mobile'`
- `@/` 별칭은 Storybook에서만 동작하므로, 컴포넌트 소스에는 상대 경로만 사용

### 컴포넌트 컨벤션
- `"use client"` 디렉티브 유지 (Next.js 소비자 호환)
- @base-ui/react 프리미티브 위에 스타일 래핑
- CVA로 variant 정의, cn()으로 className 병합
- React.ComponentProps 또는 React.HTMLAttributes로 props 타입

### Story 컨벤션
- `import type { Meta, StoryObj } from "@storybook/react-vite"`
- 인터랙션 테스트: `import { expect, userEvent, within } from "@storybook/test"`
- 한국어 레이블 사용

### Git 워크플로우
- 컴포넌트 단위로 feature 브랜치 생성: `feat/<name>`
- 한국어 커밋 메시지, feat:/fix: 접두사
- push → `gh pr create` → 리뷰/확인 → `gh pr merge --squash --delete-branch`
- merge 후 `npm version patch && npm publish`

## 제외 항목
- `sonner.tsx` — next-themes 의존성 (Next.js 전용, 각 앱에서 직접 설치)

## 소비자 사용법
```tsx
// globals.css 또는 layout.tsx에서
import 'younique-ui/styles.css';

// 컴포넌트 사용
import { Button, Card, Input } from 'younique-ui';
```
