import { IBaseInputProps } from "../base_input/base_input";

export interface IDateInputProps
  extends Omit<IBaseInputProps, "disable" | "isShowIcon" | "iconProps"> {
  maxDate?: Date;
  minDate?: Date;
  initialValue?: Date;
  title?: string;
  onDateChanged?: (date: string) => void;
}
