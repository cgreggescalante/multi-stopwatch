import { Center, IconButton, ListItem, UnorderedList, Text } from '@chakra-ui/react';
import React from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { createEmptyMultiStopwatch, useStopwatchManager } from 'utils';
import { Link } from 'gatsby';

const StopwatchManager = () => {
  const [stopwatches, setStopwatches] = useStopwatchManager();

  const addStopwatch = () => {
    const newId = Date.now().toString();
    const newMultiStopwatch = createEmptyMultiStopwatch(newId);

    localStorage.setItem(newId, JSON.stringify(newMultiStopwatch));

    setStopwatches([...stopwatches, newId]);
  };

  return (
    <div>
      <h1>Stopwatch Manager</h1>

      <UnorderedList>
        {stopwatches.map(id => (
          <ListItem key={id}>
            <MultiStopwatchLink id={id} />
          </ListItem>
        ))}
      </UnorderedList>

      <Center>
        <IconButton aria-label={'Add Stopwatch'} onClick={addStopwatch} icon={<AddIcon />} />
      </Center>
    </div>
  );
};

const MultiStopwatchLink = ({ id }: { id: string }) => {
  const json = localStorage.getItem(id);
  if (!json) return <Text>No MultiStopwatch Found</Text>;

  const stopwatch = JSON.parse(json);
  return <Link to={`/stopwatch?id=${id}`}>{stopwatch.name}</Link>;
};

export { StopwatchManager };
