import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContainerWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
};
