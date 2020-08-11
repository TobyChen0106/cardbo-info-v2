import dayjs from "dayjs";

// Format Date with dayjs, if not a valid date will return origin
export const dateFormat = (data) => {
  if (dayjs(data).isValid()) {
    return dayjs(data).format("YYYY/MM/DD");
  }
  return data;
};
