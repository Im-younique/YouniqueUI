import type { Meta, StoryObj } from "@storybook/react-vite"

import { Textarea } from "./textarea"
import { Label } from "./label"

const meta = {
  title: "UI/Textarea",
  component: Textarea,
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
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본",
}

export const WithPlaceholder: Story = {
  name: "플레이스홀더",
  args: {
    placeholder: "내용을 입력하세요...",
  },
}

export const Disabled: Story = {
  name: "비활성화",
  args: {
    placeholder: "수정할 수 없습니다",
    disabled: true,
  },
}

export const WithLabel: Story = {
  name: "라벨 포함",
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="memo">메모</Label>
      <Textarea id="memo" placeholder="메모를 입력하세요..." />
    </div>
  ),
}

export const UseCaseNotice: Story = {
  name: "사용 예: 공지 작성",
  render: () => (
    <div className="flex w-80 flex-col gap-2">
      <Label htmlFor="notice">학부모 공지사항</Label>
      <Textarea
        id="notice"
        placeholder="학부모에게 전달할 공지사항을 작성하세요..."
        defaultValue="내일(3/13) 우천으로 인해 셔틀 운행 시간이 10분 지연될 예정입니다. 양해 부탁드립니다."
      />
      <p className="text-xs text-muted-foreground">
        작성한 공지는 전체 학부모에게 알림으로 전송됩니다.
      </p>
    </div>
  ),
}
