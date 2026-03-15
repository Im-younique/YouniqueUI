# 새 UI 컴포넌트 추가 (/add-component)

아래 단계를 순서대로 실행한다. 각 단계의 커맨드를 **자동 실행**한다.

## 입력
- $ARGUMENTS: 추가할 컴포넌트 이름과 설명 (예: "date-picker 날짜 선택", "data-table 정렬/필터 테이블")

## 단계 0: 브랜치 생성 (자동 실행)
컴포넌트 단위로 worktree 브랜치를 생성한다.
```bash
cd /Users/younique/Develop/younique-ui
git checkout main
git pull origin main
git checkout -b feat/<name>
```

## 단계 1: 설계
1. 기존 컴포넌트 패턴 확인 (src/components/ 내 유사 컴포넌트 참조)
2. @base-ui/react에 해당 프리미티브가 있는지 확인 (npm 문서 또는 node_modules 탐색)
3. 필요한 props, variants, 내부 의존성 정리

## 단계 2: 구현
1. `src/components/<name>.tsx` 생성
   - `"use client"` 디렉티브 포함
   - @base-ui/react 프리미티브 활용
   - CVA로 variant 정의
   - cn()으로 className 병합
   - import 경로는 반드시 **상대 경로** 사용 (`../lib/utils`, `./button`)
2. `src/index.ts`에 `export * from './components/<name>'` 추가

## 단계 3: Story 작성
1. `src/components/<name>.stories.tsx` 생성
   - `import type { Meta, StoryObj } from "@storybook/react-vite"`
   - Default, 주요 variant별 스토리, 실제 사용 예시 스토리 포함
   - 인터랙션 테스트가 의미있는 경우 play function 추가

## 단계 4: 빌드 검증 (자동 실행)
```bash
cd /Users/younique/Develop/younique-ui
npm run build
```
- 빌드 실패 시 에러를 수정하고 다시 실행
- `dist/index.d.ts`에 새 컴포넌트 타입이 export되는지 grep으로 확인:
```bash
grep "<name>" dist/index.d.ts
```

## 단계 5: Storybook 확인 (자동 실행)
```bash
cd /Users/younique/Develop/younique-ui
npx storybook dev -p 6006 --no-open &
sleep 5
curl -s http://localhost:6006/iframe.html | head -5
kill %1 2>/dev/null
```
- 에러가 있으면 수정 후 재확인

## 단계 6: 커밋 & 푸시 (자동 실행)
```bash
cd /Users/younique/Develop/younique-ui
git add -A
git commit -m "feat: <name> 컴포넌트 추가"
git push -u origin feat/<name>
```

## 단계 7: PR 생성 (자동 실행)
```bash
cd /Users/younique/Develop/younique-ui
gh pr create --title "feat: <name> 컴포넌트 추가" --body "$(cat <<'EOF'
## Summary
- <name> 컴포넌트 추가
- Story 작성 완료
- 빌드 검증 완료
EOF
)"
```

## 단계 8: PR Merge (사용자 확인 후)
- 머지 여부를 사용자에게 물어본다
- 승인 시:
```bash
cd /Users/younique/Develop/younique-ui
gh pr merge --squash --delete-branch
git checkout main
git pull origin main
```

## 단계 9: 배포 (사용자 확인 후, tag 기반 CI/CD)
- 배포 여부를 사용자에게 물어본다
- 승인 시 **로컬 검증 먼저 수행**:
```bash
cd /Users/younique/Develop/younique-ui
npm run build
grep "<name>" dist/index.d.ts
```
- 로컬 검증 통과 후 태그 생성 & 푸시 (CI가 자동 npm publish):
```bash
cd /Users/younique/Develop/younique-ui
npm version patch
git push origin main --tags
```
- 소비 프로젝트 업데이트가 필요하면 안내:
```bash
cd /Users/younique/Develop/workspace
pnpm --filter @tarang/academy-web add younique-ui@latest
pnpm --filter @tarang/admin-web add younique-ui@latest
```
