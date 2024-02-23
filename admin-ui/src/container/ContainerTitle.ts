import { Container as TContainer } from "../api/container/Container";

export const CONTAINER_TITLE_FIELD = "title";

export const ContainerTitle = (record: TContainer): string => {
  return record.title?.toString() || String(record.id);
};
