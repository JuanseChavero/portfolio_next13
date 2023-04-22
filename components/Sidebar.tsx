import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/modal';
import { useSidebar } from 'contexts/sidebarContext';
import { useRef } from 'react';
import { m } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/provider';
import { theme } from '@chakra-ui/theme';
import { NavItem, routes } from '@/components/Navbar';

const Path = (props: any) => (
  <m.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const SidebarButton = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      className="flex flex-col items-center justify-center w-full h-full"
    >
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
        className={
          isOpen ? 'fill-white stroke-white' : 'fill-primary stroke-primary'
        }
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        className="fill-primary stroke-primary"
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
        className={
          isOpen ? 'fill-white stroke-white' : 'fill-primary stroke-primary'
        }
      />
    </svg>
  );
};

export default function Sidebar() {
  const { isOpen, open, close } = useSidebar();
  const btnRef = useRef<any>();

  const onClickModal = () => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  /// Given that "Chakra UI" is using "Framer-motion" with "motion" imports,
  /// then the change from "motion" to "m" for trying to reduce the bundle
  /// size is possibly useless, becuase "motion" preloads all the animations
  /// according to the documentation.
  /// To check this, add the "strict" prop to "LazyMotion" in "customLayout.tsx".

  return (
    <ChakraProvider theme={theme}>
      <m.button
        ref={btnRef}
        onClick={onClickModal}
        aria-label="Sidebar toggler"
        className="w-12 h-12 p-2 border-2 rounded border-primary"
      >
        <SidebarButton isOpen={isOpen} />
      </m.button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={close}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={{ background: '#fb7e14' }}>
          <DrawerCloseButton
            style={{
              marginTop: 30,
              marginRight: 20,
              fontSize: 15,
            }}
          />
          <DrawerBody
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ul className="flex flex-col gap-4">
              {routes.map((route) => (
                <li key={route.title} onClick={close}>
                  <NavItem {...route} />
                </li>
              ))}
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </ChakraProvider>
  );
}
