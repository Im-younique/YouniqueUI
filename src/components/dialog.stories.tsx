import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "@storybook/test"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./dialog"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"

const meta = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본 다이얼로그",
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button />}>다이얼로그 열기</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>알림</DialogTitle>
          <DialogDescription>
            이것은 기본 다이얼로그 예시입니다.
          </DialogDescription>
        </DialogHeader>
        <p>다이얼로그 본문 내용이 여기에 표시됩니다.</p>
      </DialogContent>
    </Dialog>
  ),
}

export const WithConfirmCancel: Story = {
  name: "확인/취소 버튼 포함",
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="destructive" />}>
        학원 삭제
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>학원 삭제 확인</DialogTitle>
          <DialogDescription>
            정말로 이 학원을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>취소</DialogClose>
          <Button variant="destructive">삭제</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithForm: Story = {
  name: "폼 포함 다이얼로그",
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button />}>노선 추가</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 노선 추가</DialogTitle>
          <DialogDescription>
            차량 운행 노선 정보를 입력해 주세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid gap-1.5">
            <Label htmlFor="route-name">노선명</Label>
            <Input id="route-name" placeholder="예: 강남 1호선" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="driver">담당 기사</Label>
            <Input id="driver" placeholder="기사 이름" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>취소</DialogClose>
          <Button>추가</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

// -- 인터랙션 테스트 --

export const OpenCloseInteraction: Story = {
  name: "열기/닫기 인터랙션 테스트",
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button />}>다이얼로그 열기</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>테스트 다이얼로그</DialogTitle>
          <DialogDescription>
            인터랙션 테스트를 위한 다이얼로그입니다.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>닫기</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // 다이얼로그 열기 버튼 클릭
    const openButton = canvas.getByRole("button", {
      name: "다이얼로그 열기",
    })
    await userEvent.click(openButton)

    // 다이얼로그가 열렸는지 확인
    const dialog = await within(document.body).findByRole("dialog")
    await expect(dialog).toBeVisible()

    // 닫기 버튼으로 닫기
    const closeButton = within(dialog).getByRole("button", { name: "닫기" })
    await userEvent.click(closeButton)
  },
}
