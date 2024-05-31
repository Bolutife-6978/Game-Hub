import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";


const GenreSkeleton = () => {
  return (
    <List>
      <Skeleton height="20px" />
      <ListItem>
        <SkeletonText />
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
