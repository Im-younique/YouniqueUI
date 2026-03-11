import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, userEvent, within } from "@storybook/test"

import { Input } from "./input"
import { Label } from "./label"

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본",
  args: {
    type: "text",
    placeholder: "텍스트를 입력하세요",
  },
}

export const Disabled: Story = {
  name: "비활성화",
  args: {
    type: "text",
    placeholder: "입력 불가",
    disabled: true,
  },
}

export const WithPlaceholder: Story = {
  name: "플레이스홀더",
  args: {
    type: "email",
    placeholder: "academy@tarang.kr",
  },
}

export const FileInput: Story = {
  name: "파일 업로드",
  args: {
    type: "file",
  },
}

export const PasswordInput: Story = {
  name: "비밀번호",
  args: {
    type: "password",
    placeholder: "비밀번호를 입력하세요",
  },
}

export const WithLabel: Story = {
  name: "라벨 포함",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="academy-name">학원명</Label>
      <Input type="text" id="academy-name" placeholder="학원명을 입력하세요" />
    </div>
  ),
}

export const WithLabelAndDescription: Story = {
  name: "라벨 + 설명 포함",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="phone">연락처</Label>
      <Input type="tel" id="phone" placeholder="010-0000-0000" />
      <p className="text-sm text-muted-foreground">
        학원 대표 연락처를 입력해 주세요.
      </p>
    </div>
  ),
}

// -- 인터랙션 테스트 --

export const TypingInteraction: Story = {
  name: "입력 인터랙션 테스트",
  args: {
    placeholder: "학원명을 입력하세요",
    onChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText("학원명을 입력하세요")

    await userEvent.type(input, "타랑 학원")
    await expect(input).toHaveValue("타랑 학원")
    await expect(args.onChange).toHaveBeenCalled()
  },
}
