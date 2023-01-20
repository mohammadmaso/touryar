import { Stack, Wrap, Text } from '@chakra-ui/react';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import { FiActivity } from 'react-icons/fi';
import { IoCloudyNight } from 'react-icons/io5';
import { TripActivitieType } from '../../graphql/generated/types';
import { ActivityCard } from '../cards/ActivityCard';

interface Props {
  activities: Maybe<
    {
      __typename?: 'TripActivitieTypeEdge' | undefined;
    } & {
      node?:
        | Maybe<
            {
              __typename?: 'TripActivitieType' | undefined;
            } & Pick<TripActivitieType, 'id' | 'title' | 'titleFa' | 'svg'>
          >
        | undefined;
    }
  >[];
}

const TravelogueActivities = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiActivity />
        <Text fontWeight="extrabold">فعالیت‌ها</Text>
      </Wrap>
      <Wrap>
        {props.activities?.map((item) => (
          <ActivityCard
            key={item?.node?.id as string}
            svg={item?.node?.svg as string}
            title={item?.node?.titleFa as string}
            id={item?.node?.id as string}
            size={2}
          />
        ))}
      </Wrap>
    </Stack>
  );
};

export default TravelogueActivities;
