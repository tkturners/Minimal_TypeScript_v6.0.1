'use client';

import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';

import { Editor } from 'src/components/editor';
import { Markdown } from 'src/components/markdown';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

const defaultValue = `

<h4>This is Heading 4</h4>
<code>This is code</code>

<pre><code class="language-javascript">for (var i=1; i &#x3C;= 20; i++) {
  if (i % 15 == 0)
    return "FizzBuzz"
  else if (i % 3 == 0)
    return "Fizz"
  else if (i % 5 == 0)
    return "Buzz"
  else
    return i
  }</code></pre>
`;

export function EditorView() {
  const [checked, setChecked] = useState(true);

  const [content, setContent] = useState(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Editor"
          links={[{ name: 'Components', href: paths.components }, { name: 'Editor' }]}
          moreLink={['https://tiptap.dev/docs/editor/introduction']}
        />
      </ComponentHero>

      <ComponentContainer
        maxWidth={false}
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }}
      >
        <Card
          sx={{
            p: 3,
            gap: 2,
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <FormControlLabel
            control={<Switch name="fullItem" checked={checked} onChange={handleChange} />}
            label="Full item"
            labelPlacement="start"
            sx={{ ml: 'auto' }}
          />
          <Editor
            fullItem={checked}
            value={content}
            onChange={(value) => setContent(value)}
            sx={{ maxHeight: 720 }}
          />
        </Card>

        <Stack
          spacing={1}
          sx={{
            p: 3,
            borderRadius: 2,
            overflowX: 'auto',
            bgcolor: 'background.neutral',
          }}
        >
          <Typography variant="h6">Preview</Typography>
          <Markdown children={content} />
        </Stack>
      </ComponentContainer>
    </>
  );
}
