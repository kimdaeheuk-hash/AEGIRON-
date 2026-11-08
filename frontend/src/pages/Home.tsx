// Scaffolded from the Astryx `shell-side-nav` page template
// (`astryx template shell-side-nav --type page`), then filled with a
// project starter screen. Keep the AppShell / SideNav / Layout frame and
// replace the content as the project grows.

import {AppShell} from '@astryxdesign/core/AppShell';
import {Divider} from '@astryxdesign/core/Divider';
import {Layout, LayoutContent} from '@astryxdesign/core/Layout';
import {
  SideNav,
  SideNavHeading,
  SideNavItem,
  SideNavSection,
} from '@astryxdesign/core/SideNav';
import {NavIcon} from '@astryxdesign/core/NavIcon';
import {Icon} from '@astryxdesign/core/Icon';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/Stack';
import {
  BookOpenIcon,
  Cog6ToothIcon,
  CubeIcon,
  HomeIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import {PROJECT} from '../project';

const NEXT_STEPS = [
  {
    title: '화면 만들기',
    body: 'npx astryx build "<만들 화면>" 으로 시작할 템플릿과 블록을 고른다.',
  },
  {
    title: '컴포넌트 찾기',
    body: 'npx astryx search <검색어> 로 컴포넌트·문서·템플릿을 찾는다.',
  },
  {
    title: '테마 바꾸기',
    body: 'npx astryx theme list 로 테마를 보고 npx astryx theme add <이름> 으로 바꾼다.',
  },
];

export default function Home() {
  return (
    <AppShell
      contentPadding={0}
      sideNav={
        <SideNav
          collapsible
          resizable={{defaultWidth: 260, minWidth: 200, maxWidth: 400}}
          header={
            <SideNavHeading
              heading={PROJECT.name}
              icon={<NavIcon icon={<Icon icon={CubeIcon} size="sm" />} />}
              headingHref="#"
            />
          }
          footer={
            <SideNavSection title="Account" isHeaderHidden>
              <SideNavItem label="설정" icon={Cog6ToothIcon} href="#" />
            </SideNavSection>
          }>
          <SideNavSection title="Menu" isHeaderHidden>
            <SideNavItem label="홈" icon={HomeIcon} href="#" isSelected />
            <SideNavItem label="대시보드" icon={Squares2X2Icon} href="#" />
          </SideNavSection>
          <Divider />
          <SideNavSection title="Resources" isHeaderHidden>
            <SideNavItem label="문서" icon={BookOpenIcon} href="#" />
          </SideNavSection>
        </SideNav>
      }>
      <Layout
        height="fill"
        contentWidth={768}
        content={
          <LayoutContent padding={6}>
            <VStack gap={6}>
              <VStack gap={2}>
                <Heading level={1}>{PROJECT.name}</Heading>
                <Text type="large" color="secondary">
                  {PROJECT.description}
                </Text>
              </VStack>
              <VStack gap={3}>
                <Heading level={2}>다음 단계</Heading>
                {NEXT_STEPS.map(step => (
                  <Card key={step.title}>
                    <VStack gap={1}>
                      <Heading level={3}>{step.title}</Heading>
                      <Text type="supporting">{step.body}</Text>
                    </VStack>
                  </Card>
                ))}
              </VStack>
            </VStack>
          </LayoutContent>
        }
      />
    </AppShell>
  );
}
