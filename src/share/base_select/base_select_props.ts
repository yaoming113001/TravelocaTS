import { IBaseInputProps } from "../base_input/base_input";
import { ISearchItem } from "../types/search_item";

export interface ISelectProps
  extends Omit<IBaseInputProps, "disable" | "isShowIcon" | "iconProps"> {
  title: string;
  data: ISearchItem[];
  onSelect: (option: string) => void;
}
