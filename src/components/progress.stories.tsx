import type { Meta, StoryObj } from "@storybook/react-vite"

import { Progress } from "./progress"

const meta = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본 (50%)",
  args: {
    value: 50,
  },
}

export const Empty: Story = {
  name: "0%",
  args: {
    value: 0,
  },
}

export const Half: Story = {
  name: "50%",
  args: {
    value: 50,
  },
}

export const Full: Story = {
  name: "100%",
  args: {
    value: 100,
  },
}

export const AllProgressValues: Story = {
  name: "진행률 변형",
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">0%</span>
        <Progress value={0} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">25%</span>
        <Progress value={25} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">50%</span>
        <Progress value={50} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">75%</span>
        <Progress value={75} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">100%</span>
        <Progress value={100} />
      </div>
    </div>
  ),
}

export const UseCaseRouteProgress: Story = {
  name: "사용 예: 운행 진행률",
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">1호차 운행 진행</span>
        <span className="text-sm text-muted-foreground">6/10 정류장</span>
      </div>
      <Progress value={60} />
      <p className="text-xs text-muted-foreground">
        다음 정류장: 행복아파트 정문
      </p>
    </div>
  ),
}
