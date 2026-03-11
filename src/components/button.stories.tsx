import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, userEvent, within } from "@storybook/test"
import { Mail, Loader2, ChevronRight, Plus } from "lucide-react"

import { Button } from "./button"

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// -- Variant 스토리 --

export const Default: Story = {
  args: {
    children: "기본 버튼",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "보조 버튼",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "삭제",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "외곽선 버튼",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "고스트 버튼",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "링크 버튼",
  },
}

// -- Size 스토리 --

export const SizeSmall: Story = {
  name: "크기: Small",
  args: {
    size: "sm",
    children: "작은 버튼",
  },
}

export const SizeDefault: Story = {
  name: "크기: Default",
  args: {
    size: "default",
    children: "기본 크기",
  },
}

export const SizeLarge: Story = {
  name: "크기: Large",
  args: {
    size: "lg",
    children: "큰 버튼",
  },
}

export const SizeIcon: Story = {
  name: "크기: Icon",
  args: {
    size: "icon",
    children: <Plus className="size-4" />,
  },
}

// -- 상태 스토리 --

export const Disabled: Story = {
  name: "비활성화",
  args: {
    disabled: true,
    children: "비활성화 버튼",
  },
}

// -- 아이콘 포함 스토리 --

export const WithIconStart: Story = {
  name: "아이콘 (앞)",
  args: {
    children: (
      <>
        <Mail data-icon="inline-start" />
        이메일 보내기
      </>
    ),
  },
}

export const WithIconEnd: Story = {
  name: "아이콘 (뒤)",
  args: {
    variant: "outline",
    children: (
      <>
        다음 단계
        <ChevronRight data-icon="inline-end" />
      </>
    ),
  },
}

export const WithLoadingIcon: Story = {
  name: "로딩 상태",
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="animate-spin" />
        처리 중...
      </>
    ),
  },
}

// -- 인터랙션 테스트 --

export const ClickInteraction: Story = {
  name: "클릭 인터랙션 테스트",
  args: {
    children: "클릭하세요",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: "클릭하세요" })

    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalledTimes(1)

    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalledTimes(2)
  },
}

export const DisabledClickInteraction: Story = {
  name: "비활성화 클릭 테스트",
  args: {
    disabled: true,
    children: "비활성화 버튼",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: "비활성화 버튼" })

    await userEvent.click(button)
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}
