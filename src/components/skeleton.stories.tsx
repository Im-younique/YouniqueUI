import type { Meta, StoryObj } from "@storybook/react-vite"

import { Skeleton } from "./skeleton"

const meta = {
  title: "UI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본",
  args: {
    className: "h-4 w-48",
  },
}

export const Circle: Story = {
  name: "원형",
  args: {
    className: "size-10 rounded-full",
  },
}

export const Rectangle: Story = {
  name: "직사각형",
  args: {
    className: "h-32 w-64 rounded-lg",
  },
}

export const Shapes: Story = {
  name: "다양한 형태",
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton className="size-10 rounded-full" />
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-8 w-20 rounded-lg" />
    </div>
  ),
}

export const UseCaseCardLoading: Story = {
  name: "사용 예: 카드 로딩",
  render: () => (
    <div className="flex flex-col gap-3 w-72 rounded-lg border p-4">
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex flex-col gap-1.5">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-4/5" />
      <Skeleton className="h-3 w-3/5" />
    </div>
  ),
}

export const UseCaseListLoading: Story = {
  name: "사용 예: 목록 로딩",
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-full" />
          <div className="flex flex-1 flex-col gap-1.5">
            <Skeleton className="h-3.5 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  ),
}
