import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "@storybook/test"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: "기본",
  render: () => (
    <Tabs defaultValue="tab1" className="w-80">
      <TabsList>
        <TabsTrigger value="tab1">탭 1</TabsTrigger>
        <TabsTrigger value="tab2">탭 2</TabsTrigger>
        <TabsTrigger value="tab3">탭 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="p-2 text-sm text-muted-foreground">첫 번째 탭 내용입니다.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="p-2 text-sm text-muted-foreground">두 번째 탭 내용입니다.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="p-2 text-sm text-muted-foreground">세 번째 탭 내용입니다.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const LineVariant: Story = {
  name: "라인 변형",
  render: () => (
    <Tabs defaultValue="info" className="w-80">
      <TabsList variant="line">
        <TabsTrigger value="info">기본 정보</TabsTrigger>
        <TabsTrigger value="route">노선 정보</TabsTrigger>
        <TabsTrigger value="history">운행 이력</TabsTrigger>
      </TabsList>
      <TabsContent value="info">
        <p className="p-2 text-sm text-muted-foreground">차량 기본 정보가 표시됩니다.</p>
      </TabsContent>
      <TabsContent value="route">
        <p className="p-2 text-sm text-muted-foreground">노선 정보가 표시됩니다.</p>
      </TabsContent>
      <TabsContent value="history">
        <p className="p-2 text-sm text-muted-foreground">운행 이력이 표시됩니다.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const UseCaseVehicleDetail: Story = {
  name: "사용 예: 차량 상세",
  render: () => (
    <Tabs defaultValue="students" className="w-96">
      <TabsList>
        <TabsTrigger value="students">탑승 학생</TabsTrigger>
        <TabsTrigger value="stops">정류장</TabsTrigger>
        <TabsTrigger value="schedule">운행 시간</TabsTrigger>
      </TabsList>
      <TabsContent value="students">
        <div className="flex flex-col gap-2 p-2">
          <p className="text-sm">김민준 - 탑승 완료</p>
          <p className="text-sm">이서연 - 대기중</p>
          <p className="text-sm">박지호 - 대기중</p>
        </div>
      </TabsContent>
      <TabsContent value="stops">
        <div className="flex flex-col gap-2 p-2">
          <p className="text-sm">1. 행복아파트 정문</p>
          <p className="text-sm">2. 중앙공원 앞</p>
          <p className="text-sm">3. 학원 도착</p>
        </div>
      </TabsContent>
      <TabsContent value="schedule">
        <div className="flex flex-col gap-2 p-2">
          <p className="text-sm">등원: 오전 8:00 출발</p>
          <p className="text-sm">하원: 오후 5:30 출발</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const TabSwitchInteraction: Story = {
  name: "탭 전환 인터랙션 테스트",
  render: () => (
    <Tabs defaultValue="first" className="w-80">
      <TabsList>
        <TabsTrigger value="first">첫 번째</TabsTrigger>
        <TabsTrigger value="second">두 번째</TabsTrigger>
      </TabsList>
      <TabsContent value="first">
        <p className="p-2 text-sm">첫 번째 탭 내용</p>
      </TabsContent>
      <TabsContent value="second">
        <p className="p-2 text-sm">두 번째 탭 내용</p>
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("첫 번째 탭 내용")).toBeVisible()

    const secondTab = canvas.getByRole("tab", { name: "두 번째" })
    await userEvent.click(secondTab)

    await expect(canvas.getByText("두 번째 탭 내용")).toBeVisible()
  },
}
