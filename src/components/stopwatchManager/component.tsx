import { Button, Center, Heading, HStack, IconButton, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AddIcon, CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import { createEmptyMultiStopwatch, useMultiStopwatch, useStopwatchManager } from 'utils';
import { Link } from 'gatsby';

const StopwatchManager = () => {
  const [stopwatches, setStopwatches] = useStopwatchManager();
  const [editing, setEditing] = useState<boolean>(false);

  const addStopwatch = () => {
    const newId = Date.now().toString();
    const newMultiStopwatch = createEmptyMultiStopwatch(newId);

    localStorage.setItem(newId, JSON.stringify(newMultiStopwatch));

    setStopwatches([...stopwatches, newId]);
  };

  const removeStopwatch = (id: string) => () => {
    localStorage.removeItem(id);
    setStopwatches(stopwatches.filter(sw => sw !== id));
  };

  return (
    <VStack align={'flex-start'}>
      <Heading>Stopwatch Manager</Heading>

      {stopwatches.map(id =>
        editing ? (
          <EditMultiStopwatch id={id} remove={removeStopwatch(id)} />
        ) : (
          <MultiStopwatchLink id={id} />
        ),
      )}

      <Center>
        <HStack>
          <IconButton
            aria-label={'Edit MultiStopwatch'}
            onClick={() => setEditing(!editing)}
            icon={editing ? <CheckIcon /> : <EditIcon />}
          />
          <IconButton aria-label={'Add Stopwatch'} onClick={addStopwatch} icon={<AddIcon />} />
        </HStack>
      </Center>
    </VStack>
  );
};

const MultiStopwatchLink = ({ id }: { id: string }) => {
  const { multiStopwatch } = useMultiStopwatch(id);

  return (
    <Link to={`/stopwatch?id=${id}`}>
      <Button>{multiStopwatch.name}</Button>
    </Link>
  );
};

const EditMultiStopwatch = ({ id, remove }: { id: string; remove: () => void }) => {
  const { multiStopwatch, setName } = useMultiStopwatch(id);

  return (
    <HStack>
      <Input value={multiStopwatch.name} onChange={e => setName(e.target.value)} />
      <IconButton
        colorScheme={'red'}
        aria-label={'Remove Stopwatch'}
        onClick={remove}
        icon={<CloseIcon />}
      />
    </HStack>
  );
};

export { StopwatchManager };
