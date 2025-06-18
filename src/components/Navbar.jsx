import * as React from 'react';
import { extendTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { useState } from 'react';
import Dashboard from './dashboard';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
  },
];

const demoTheme = extendTheme({
  // colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900, // Fixed overlapping breakpoint
      lg: 1200,
      xl: 1536,
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#1ac433", // Change this to your custom color
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#cc1860",
        },
      },
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#ff5722", // Selected background color
            fontWeight: "blod",
            borderRadius: "8px", // Optional rounded corners,
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#ff784e", // Hover color when selected
          },
        },
      },
    },
  }
});

function DynamicComponentLoad({ pathname }){
  console.log(pathname, "{ pathname }")
  if(pathname === '/dashboard') return <Dashboard/>
  else return(
    <h1>welcome to static page</h1>
  )
}

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);
  console.log(router, "routerrouterrouter")
  return router;
}

// const Skeleton = styled('div')(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));

export default function DashboardLayoutBasic(props) {
  // const { window } = props;

  const router = useDemoRouter('/dashboard');

  const [session, setSession] = useState({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  // Remove this const when copying and pasting into your project.
  // const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        logo: "",
        // logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: 'User Management',
        homeUrl: '/toolpad/core/introduction',
      }}
      // window={demoWindow}
    >
      <DashboardLayout sx={{ bgcolor: '#f1f5f9'}}>
        <PageContainer breadcrumbs={[]} className="bg-slate-100">
          {/* <Typography>hello world</Typography> */}
          <DynamicComponentLoad pathname = { router.pathname }> </DynamicComponentLoad>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}