import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본 카드",
  args: {
    children: (
      <CardContent>
        <p>기본 카드 컴포넌트입니다.</p>
      </CardContent>
    ),
  },
}

export const WithHeaderAndContent: Story = {
  name: "헤더 + 콘텐츠",
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>학원 정보</CardTitle>
        <CardDescription>등록된 학원의 기본 정보입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>학원명: 타랑 영어학원</p>
        <p>주소: 서울시 강남구 역삼동 123-45</p>
        <p>연락처: 02-1234-5678</p>
      </CardContent>
    </Card>
  ),
}

export const WithHeaderContentFooter: Story = {
  name: "헤더 + 콘텐츠 + 푸터",
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>차량 운행 현황</CardTitle>
        <CardDescription>오늘의 차량 운행 요약 정보입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">운행 차량</span>
            <span className="font-medium">5대</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">탑승 학생</span>
            <span className="font-medium">42명</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">운행 완료</span>
            <span className="font-medium">3건</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          상세 보기
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const WithForm: Story = {
  name: "폼 포함 카드",
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>학원 등록</CardTitle>
        <CardDescription>새로운 학원 정보를 입력해 주세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="name">학원명</Label>
            <Input id="name" placeholder="학원명을 입력하세요" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="address">주소</Label>
            <Input id="address" placeholder="주소를 입력하세요" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="tel">연락처</Label>
            <Input id="tel" type="tel" placeholder="02-0000-0000" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">취소</Button>
        <Button>등록</Button>
      </CardFooter>
    </Card>
  ),
}

export const SmallSize: Story = {
  name: "작은 카드",
  render: () => (
    <Card size="sm">
      <CardHeader>
        <CardTitle>알림</CardTitle>
      </CardHeader>
      <CardContent>
        <p>3호차 운행이 완료되었습니다.</p>
      </CardContent>
    </Card>
  ),
}
