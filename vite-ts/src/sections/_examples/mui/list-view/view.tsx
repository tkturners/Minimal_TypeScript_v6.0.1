import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

export function ListView() {
  const [open, setOpen] = useState(true);

  const [checked, setChecked] = useState([0]);

  const [toggle, setToggle] = useState(['wifi']);

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleListItemClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
      setSelectedIndex(index);
    },
    []
  );

  const handleCheck = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleToggle = (value: string) => () => {
    const currentIndex = toggle.indexOf(value);
    const newChecked = [...toggle];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setToggle(newChecked);
  };

  const DEMO = [
    {
      name: 'Simple',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <Box sx={{ bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Iconify icon="solar:inbox-in-bold" width={24} />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Iconify icon="fluent:mail-24-filled" width={24} />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>

            <Divider />
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </ComponentBlock>
      ),
    },
    {
      name: 'Nested',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <List
            sx={{ bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <Iconify icon="iconamoon:send-fill" width={24} />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <Iconify icon="fluent:mail-24-filled" width={24} />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <Iconify icon="solar:inbox-in-bold" width={24} />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              <Iconify icon={open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'} />
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Iconify icon="ic:round-star-border" width={24} />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </ComponentBlock>
      ),
    },
    {
      name: 'Folder',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <List sx={{ bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Iconify icon="ic:baseline-image" width={24} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Iconify icon="ic:baseline-work" width={24} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Iconify icon="ic:round-beach-access" width={24} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </ComponentBlock>
      ),
    },
    {
      name: 'Selected',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <Box sx={{ bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <Iconify icon="solar:inbox-in-bold" width={24} />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <Iconify icon="fluent:mail-24-filled" width={24} />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText primary="Trash" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemText primary="Spam" />
              </ListItemButton>
            </List>
          </Box>
        </ComponentBlock>
      ),
    },
    {
      name: 'Controls',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <List sx={{ bgcolor: 'background.paper' }}>
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-label-${value}`;
              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <Iconify icon="solar:chat-round-dots-bold" width={24} />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton key={value} role={undefined} dense onClick={handleCheck(value)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ id: labelId, 'aria-labelledby': labelId }}
                      />
                    </ListItemIcon>

                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </ComponentBlock>
      ),
    },
    {
      name: 'Switch',
      component: (
        <ComponentBlock sx={{ flexDirection: 'column', alignItems: 'unset' }}>
          <List
            subheader={<ListSubheader>Settings</ListSubheader>}
            sx={{ bgcolor: 'background.paper' }}
          >
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Iconify icon="ic:baseline-wifi" width={24} />
                </ListItemIcon>
                <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    onChange={handleToggle('wifi')}
                    checked={toggle.indexOf('wifi') !== -1}
                    inputProps={{
                      id: 'switch-list-label-wifi',
                      'aria-labelledby': 'switch-list-label-wifi',
                    }}
                  />
                </ListItemSecondaryAction>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <Iconify icon="ic:baseline-bluetooth" width={24} />
                </ListItemIcon>
                <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    onChange={handleToggle('bluetooth')}
                    checked={toggle.indexOf('bluetooth') !== -1}
                    inputProps={{
                      id: 'switch-list-label-bluetooth',
                      'aria-labelledby': 'switch-list-label-bluetooth',
                    }}
                  />
                </ListItemSecondaryAction>
              </ListItemButton>
            </ListItem>
          </List>
        </ComponentBlock>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="List"
          links={[{ name: 'Components', href: paths.components }, { name: 'Lists' }]}
          moreLink={['https://mui.com/components/lists']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
