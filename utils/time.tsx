export const getDays = (start: string, end: string): string => {
  let date1 = new Date(start);
  let date2 = new Date(end);
  let Difference_In_Time = date2.getTime() - date1.getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  if (Difference_In_Days < 2) {
    return 'یک روزه';
  }
  return `${Difference_In_Days} روز`;
};

export const getDate = (date: string): string => {
  if (date) {
    return new Date(date).toLocaleDateString('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  return 'مشخص نشده';
};
